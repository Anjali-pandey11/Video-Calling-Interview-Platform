
import { useUser } from '@clerk/clerk-react'
import HomePage from './pages/HomePage';
import {Routes, Route, Navigate} from "react-router"
import ProblemsPage from './pages/ProblemsPage';
import {Toaster} from "react-hot-toast";
import DashboardPage from './pages/DashboardPage';

function App() {
 
  const {isSignedIn, isLoaded} = useUser();

  // this will get rid of the flickering effect
  if(!isLoaded) return null;

  return (
   <>
   {/* <h1 className="text-3xl font-bold underline">Welcome to the app</h1> */}
   <Routes>
     
     <Route path="/" element={!isSignedIn ? <HomePage/> : <Navigate to={"/dashboard"} /> }/>
     <Route path="/dashboard" element={isSignedIn ? <DashboardPage/> : <Navigate to={"/"} /> }/>
     <Route path="/problems" element = {isSignedIn ?<ProblemsPage/>: <Navigate to = {"/"} />}/>
   </Routes>

   <Toaster toastOptions={{duration:3000}}/>
     
     
   </>
  )
}

export default App;