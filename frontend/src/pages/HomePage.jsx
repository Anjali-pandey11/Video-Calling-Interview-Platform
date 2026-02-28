import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import toast from 'react-hot-toast'

const HomePage = () => {
  return (
    <div>
      
      <button onClick={() => toast.success("This is a success")}
      className = "btn btn-secondary">Click me</button>

      <SignedOut>
        <SignInButton mode = "modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <UserButton/>

    </div>
  )
}

export default HomePage
