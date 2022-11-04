import { Link } from "react-router-dom";
import logo from "../starter-code/assets/shared/logo.svg"
import menu from "../starter-code/assets/shared/icon-hamburger.svg";

export default function Header() {
  const handleClick = () => {
    const navbar = document.querySelector(".navbar")
    const listItems = document.querySelectorAll(".list-name")
   
    listItems.forEach((item) => {
        item.addEventListener("click", () => navbar.classList.remove("open"))
    })
    navbar.classList.toggle('open')

    listItems.forEach(item => {
      item.addEventListener("click", () => 
       listItems.classList.remove('active')
      )
      listItems.classList.add('active')
    })
    
  }
    return (
      <>
          <header className="header flex items-center justify-between 
          w-full p-4 lg:flex-row">
            <div>
               <Link to="/">
                 <img src={logo} alt="Space Tourism" title="Space Tourism"/>
               </Link>
            </div>

            <nav className="navbar">
              <ul>
                <li className="list-name">
                  <Link to='/' className="lg:text-white lg:flex lg:items-center">
                    <span className="mr-2 lg:font-bold">00</span>Home
                  </Link>
                </li>
                <li className="list-name">
                  <Link to="/destination" className="lg:text-white lg:flex lg:items-center" >
                    <span className="mr-2 lg:font-bold " >01</span>Destination
                  </Link>
                </li>
                <li className="list-name">
                  <Link to="/crew"  className="lg:text-white lg:flex lg:items-center">
                    <span className="mr-2 lg:font-bold " >02</span>Crew
                  </Link>
                </li>
                <li className="list-name">
                  <Link to="/technology"  className="lg:text-white lg:flex lg:items-center ">
                    <span className="mr-2 lg:font-bold">03</span>Technology
                  </Link>
                </li>
              </ul>
            </nav>

            <div className= "lg:hidden">
              <button onClick={handleClick}>
                <img src={menu} alt="" />
              </button>
            </div>
          </header>
        </>
    )
}