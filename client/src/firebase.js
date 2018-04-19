import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: 'AIzaSyAsy6CsTX2qOkQx8CWpQgRbYu1nCrTsL3Q',
  authDomain: 'gameboy-99751.firebaseapp.com',
  databaseURL: 'https://gameboy-99751.firebaseio.com',
  projectId: 'gameboy-99751',
  storageBucket: '',
  messagingSenderId: '241220251293'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
