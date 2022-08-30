import React from 'react'
import "../styles/Navbar.css"
import logo1 from "../data/data.json"  



const searchicon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>

const Navbar = () => {
  return (
    <>
    <div className='nav'>
      <div className="logo">
        <a href="/" >
          <img id='logoImage' src={logo1.logo} alt="Not" />
        </a>
      
      </div>
      <div>


           <a  className="navlinks" href="/#miphones">Mi Phones</a>
           <a   className="navlinks"  href="/#redmiphones">Redmi Phones</a>
           <a   className="navlinks" href="/#tv">TV</a>
           <a   className="navlinks" href="/#laptops">Laptops</a>
           <a   className="navlinks" href="/#lifestyle">Fitness & Lifestyle</a>
           <a  className="navlinks" href="/#home">Home</a>
           <a   className="navlinks" href="/#audio">Radio</a>
           <a   className="navlinks" href="/#accessories">Accessories</a>
      </div>


      <div className='searchBox'>
        <input type="text" name='search' placeholder='search here'/>
        {searchicon}
      </div>
      




    </div>

    </>
  )
}

export default Navbar
