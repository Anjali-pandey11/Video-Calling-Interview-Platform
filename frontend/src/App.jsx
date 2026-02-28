
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, UserButton, useUser } from '@clerk/clerk-react'
import HomePage from './pages/HomePage';
import {Routes, Route, Navigate} from "react-router"
import ProblemsPage from './pages/ProblemsPage';
import {Toaster} from "react-hot-toast";

function App() {
 
  const {isSignnedIn} = useUser();

  return (
   <>
   <h1 className="text-3xl font-bold underline">Welcome to the app</h1>
   <Routes>
     
     <Route path="/" element={<HomePage/>}/>
     <Route path="/problems" element = { isSignnedIn ?<ProblemsPage/>: <Navigate to = {"/"} />}/>
   </Routes>

   <Toaster toastOptions={{duration:3000}}/>
     
     
   </>
  )
}

export default App;