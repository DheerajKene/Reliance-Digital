import { Link } from "react-router-dom";

function Pages(){
    return(
        <div>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Login'}>Login</Link>
            <Link to={'/Contact'}>Contact</Link>
            <Link to={'/Cart'}>Cart</Link>
        </div>
    )
}

export default Pages