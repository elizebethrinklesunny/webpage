import React from 'react' 
import{BrowserRouter,Routes,Route}from 'react-router-dom'
import Dashboard from '../views/Dashboard'






function Router() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Dashboard />} />
    
   

    
  
    </Routes>
    </BrowserRouter>
  )
}

export default Router