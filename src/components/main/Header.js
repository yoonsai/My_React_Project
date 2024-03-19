import {Fragment, useEffect} from "react";
import {Link} from "react-router-dom";
import WOW from 'wowjs';

function Header(){
   return(
       <Fragment>
           {/*<div className="preloader d-flex align-items-center justify-content-center">
               <div className="lds-ellipsis">
                   <div></div>
                   <div></div>
                   <div></div>
                   <div></div>
               </div>
           </div>*/}

           <header className="header-area">
               <div className="oneMusic-main-menu">

                   {/* Menu */}
                   <nav className="classNamey-navbar justify-content-between" id="oneMusicNav">

                       {/* Nav brand */}
                       <Link to="/" className="nav-brand"><img src="http://localhost:3000/img/core-img/logo.png"
                                                                       style={{"margin-left": "30px"}}/></Link>

                       {/* Menu */}
                       <div className="classNamey-menu">
                           <ul>
                               <li><Link to="/" style={{"color": "white"}}>Home</Link></li>
                               <li><Link style={{"color": "white"}} to={"/magazine/list"}>Magazine</Link></li>
                               <li><Link to="/music/chart" style={{"color": "white"}}>Chart</Link></li>
                               <li><Link to="/board/list" style={{"color": "white"}}>Board</Link></li>
                               {/*<li><a href="blog.html" style={{"color": "white"}}>News</a></li>*/}
                               {/*<li><a href="contact.html" style={{"color": "white"}}>Contact</a></li>*/}
                           </ul>
                       </div>
                   </nav>


               </div>
           </header>
       </Fragment>
   )
}

export default Header