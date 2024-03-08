import DropdownToggle from "../../Componants/DropdownToggle/DropdownToggle"
import UpperNavbar from "../../Componants/UpperNavbar/UpperNavbar"
import { useState } from "react"
import './Login.css'
import { useReducer } from "react"
import { AuthContextProvider } from "../../Componants/AuthContextProvider"






function Login(){

const[state, setState] = useState();




function handlechange(e){
    return setState(e.target.value);
}

console.log(state);


function handleClick(){
    return setState(e.target.value);
    if(state.length == 10){
        IsLoggedIn()
    }
    
    


    
}
    return (
    <div>
        <UpperNavbar/>
        <DropdownToggle/>

        <div id="Main_Login_div">
            <div id="Login-Img">
                <img src="https://www.reliancedigital.in/akamai/images/web/LoginWebBanner.jpeg" alt="" />
            </div>
            <div id="Login_Credentials">
                <h3>Login / Register</h3>
                <hr />

                <input 
                type="text" 
                placeholder="Enter mobile number"
                onChange={handlechange}
                />

                <button 
                id="Proceed"
                onClick={handleClick}>PROCEED
                    
                </button>
            </div>
        </div>


{/* -----------------Footer Section------------------- */}
        <div id="Main_Footer_div">
            <div className="Sub_Footer_div">
                <h4>PRODUCT CATEGORIES</h4>
                <h4><a href="">Smartphones</a></h4>
                <h4><a href="">Laptops</a></h4>
                <h4><a href="">DSLR Cameras</a></h4>
                <h4><a href="">Televisions</a></h4>
                <h4><a href="">Air Conditioners</a></h4>
                <h4><a href="">Refrigerators</a></h4>
                <h4><a href="">Kitchen Appliances</a></h4>
                <h4><a href="">Accessories</a></h4>
                <h4><a href="">Persoanl care & Grooming</a></h4>
               
                <h3>FALLOW US</h3>
            </div>
            <div className="Sub_Footer_div">
                <h4>SITE INFO</h4>
                <h4><a href="">About Reliance Digital</a></h4>
                <h4><a href="">resQ Service</a></h4>
                <h4><a href="">Site Map</a></h4>
                <h4><a href="">Gift Cards</a></h4>
                <h4><a href="">Corporate Enquires</a></h4>
                <h4><a href="">Contact Us</a></h4>
                <br /><br /><br />
                <h3>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
                
            </div>
            <div className="Sub_Footer_div">
                <h4>RESORCE CENTER</h4>
                <h4><a href="">Product Reviews</a></h4>
                <h4><a href="">Buying Guides</a></h4>
                <h4><a href="">How Tos</a></h4>
                <h4><a href="">Featured Stories</a></h4>
                <h4><a href="">Events & Happenings</a></h4>
                <h4><a href="">Nearest Store</a></h4>
            </div>
            <div className="Sub_Footer_div">
                <h4>POLOCIES</h4>
                <h4><a href="">Terms of use</a></h4>
                <h4><a href="">FAQs</a></h4>
                <h4><a href="">Cancellation & Return Policy</a></h4>
                <h4><a href="">Pricing & Payments Policy</a></h4>
                <h4><a href="">Shipping & Delivery Policy</a></h4>
                <h4><a href="">Privacy Policy</a></h4>
                <h4><a href="">E-waste Recycling Policy</a></h4>
                <h4><a href="">EMI & additional cashback T&C</a></h4>
                <h4><a href="">RelianceOne Loyality Program T&C</a></h4>
                <h4><a href="">Caution Notice</a></h4>
                
            </div>
        </div>
        <div id="Footer_Bottom">
            <br />
            <h3>Discliamer</h3>
            <p>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, 
                these are provided as is, without warranty of any kind.</p>

            <hr />
            <p> © 2024 Reliance Digital. All Rights Reserved.</p>    
        </div>
        <div></div>
    </div>
        )
}

export default Login