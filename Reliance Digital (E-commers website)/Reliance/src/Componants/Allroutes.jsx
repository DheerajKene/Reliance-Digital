import {Routes, Route} from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Contact from '../Pages/Contact/Contact'
import Cart from '../Pages/Cart/Cart'
import Home from '../Pages/Home'

function AllRoutes(){
    return (
        <div>
        <Routes>
            <Route path={'/Home'} element={<Home/>}/>
            <Route path={'/Login'} element={<Login/>}/>
            <Route path={'/Cart'} element={<Cart/>}/>
            <Route path={'/Contact'} element={<Contact/>}/>
      </Routes>
        </div>
    )
}

export default AllRoutes