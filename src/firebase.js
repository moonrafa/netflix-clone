import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD9HCheK5Z9y9PDhTMGhjEyhrzqoLm8A0A',
  authDomain: 'netflix-clone-moonrafa.firebaseapp.com',
  projectId: 'netflix-clone-moonrafa',
  storageBucket: 'netflix-clone-moonrafa.appspot.com',
  messagingSenderId: '950328069614',
  appId: '1:950328069614:web:3ce1076e65360c6b5d92ff'
}
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()

export { auth }
export default db
