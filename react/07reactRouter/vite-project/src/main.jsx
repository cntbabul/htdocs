import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Home from './components/Home/home.jsx'

const router = createBrowserRouter(
  createrRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path= '' element={<Home/>}/> 
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
       )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
