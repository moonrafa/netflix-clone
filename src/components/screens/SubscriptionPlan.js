import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { loadStripe } from '@stripe/stripe-js'
import db from '../../firebase'
import './SubscriptionPlan.css'

function SubscriptionPlan() {
  const [products, setProducts] = useState([])
  const [subscription, setSubscription] = useState(null)
  const user = useSelector(selectUser)

  useEffect(() => {
    db.collection('products')
      .where('active', '==', true)
      .get()
      .then(querySnapshot => {
        const products = {}
        querySnapshot.forEach(async productDoc => {
          products[productDoc.id] = productDoc.data()
          const priceSnap = await productDoc.ref.collection('prices').get()
          priceSnap.docs.forEach(price => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data()
            }
          })
        })
        setProducts(products)
      })
  }, [])
  useEffect(() => {
    db.collection('customers')
      .doc(user.uid)
      .collection('subscriptions')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(async subscription => {
          setSubscription({
            role: subscription.data().role,
            current_period_end: subscription.data().current_period_end.seconds,
            current_period_start:
              subscription.data().current_period_start.seconds
          })
        })
      })
  }, [user.uid])

  const loadCheckout = async priceId => {
    const docRef = await db
      .collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin
      })
    docRef.onSnapshot(async snap => {
      const { error, sessionId } = snap.data()
      if (error) {
        alert(`An error occured:${error.message}`)
      }
      if (sessionId) {
        const stripe = await loadStripe(
          'pk_test_51LsUdmE1U5lIFblfCyEdgg73YrkhW8pLY9ZJbeuFITdBORCnF5h3haKGcm3DeNPRORhJsYEozp43miOJtSfEGElC00CE5yRipt'
        )
        stripe.redirectToCheckout({ sessionId })
      }
    })
  }
  return (
    <div className="subscriptionPlan">
      {subscription && (
        <p>
          {' '}
          Renewal date:{' '}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {Object.entries(products).map(product => {
        const isCurrentPackage = product[1].name
          ?.toLowerCase()
          .includes(subscription?.role)
        return (
          <div
            className={`${
              isCurrentPackage && 'subscriptionPlan__plan--disabled'
            } subscriptionPlan__plan`}
            key={product[0]}
          >
            <div className="subscriptionPlan__info">
              <h5>{product[1].name}</h5>
              <h6> {product[1].description}</h6>
            </div>
            <button
              onClick={() =>
                !isCurrentPackage && loadCheckout(product[1]?.prices?.priceId)
              }
            >
              {isCurrentPackage ? 'Current Plan' : 'Subscribe'}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default SubscriptionPlan
