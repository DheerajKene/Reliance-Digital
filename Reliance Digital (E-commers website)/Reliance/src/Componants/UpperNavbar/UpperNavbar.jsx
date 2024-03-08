import './UpperNavbar.css'


function UpperNavbar(){
    return (
        <div id='mainDiv'>

            <div id='LogoDiv'>
                <img  id='LogoImg' src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" />
            </div>

            <div id="SearchDiv">
                <input id='SearchBar' placeholder='    Find your favourite products' type="text" />
                <div>
                    <i class="fa-duotone fa-magnifying-glass">hh</i>
                
                </div>
            </div>

            <div id="SideBarDiv">
                <div>
                    <a className='UpperMenuAnchor' href="">Find a Store</a>
                    <p>|</p>
                    <a className='UpperMenuAnchor' href="">Buying guides</a>
                    <p>|</p>
                    <a className='UpperMenuAnchor' href="">Contact us</a>
                </div>

                <div>
                    <a className='UpperMenuAnchor' href="">Select your pin code</a>
                    <p>|</p>
                    <a className='UpperMenuAnchor' href="">Cart</a>
                    <p>|</p>
                    <a className='UpperMenuAnchor' href="./Login">Login</a>
                </div>
            </div>
        </div>
    )
  }
export default UpperNavbar