import {Fragment} from "react";
function Footer(){
    return(
        <Fragment>
            <footer className="footer-area">
                <div className="container">
                    <div className="row d-flex flex-wrap align-items-center">
                        <div className="col-12 col-md-6">
                            <a href="#">
                                <img src="img/core-img/logo.png" alt=""/>
                            </a>
                            <p className="copywrite-text">
                                Copyright &copy;
                                <script>document.write(new Date().getFullYear());</script>
                                    All rights reserved | 윤새영

                            </p>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="footer-nav">
                                <ul>
                                    {/*<li><a href="#">Home</a></li>*/}
                                    {/*<li><a href="#">Albums</a></li>*/}
                                    {/*<li><a href="#">Events</a></li>*/}
                                    {/*<li><a href="#">News</a></li>*/}
                                    <li><a>2024 React Project</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer