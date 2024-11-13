
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import './App.css'
import { auth } from './firebase'
import { useState } from 'react'

function App() {

    const [user, setuser] = useState(null)

  const provider = new GoogleAuthProvider()

  const googleSinein = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setuser(result.user)
      })
    .catch(erroor => console.log('error', erroor))
  }
  


  const removeUser = () => {
    signOut(auth)
      .then(() => {
        console.log("sing out done");
        setuser(null)
      
      })
    .catch(error => console.log("Error", error)
    )
  }

  return (
    <>
      <h1>Semple Log in sestem</h1>
      <div>

        {
          user ?
            <div>
              <div>
                <h3>{user.displayName}</h3>
                <p>Dear {user.displayName} your log in succesfull</p>
              </div>
              <button onClick={removeUser}> log Out</button>
            </div>  
           :
            <button onClick={googleSinein}> log IN</button>
          
        }

      </div>
      
    </>
  )
}

export default App
