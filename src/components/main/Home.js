import {Fragment, useEffect, useState} from "react";
import WOW from 'wowjs';
import axios from "axios";
import {Link} from "react-router-dom";
function Home(){
    const [magazine,setMagazine]=useState([])
    const [music,setMusic]=useState([])
    const [music2,setMusic2]=useState([])
    useEffect(() => {
        axios.get('http://localhost/magazine/main_react').then(response=>{
            setMagazine(response.data)
        })
    }, []);
    useEffect(() => {
        axios.get('http://localhost/music/main_react').then(response=>{
            setMusic(response.data)
        })
    }, []);
    useEffect(() => {
        axios.get('http://localhost/music/main2_react').then(response=>{
            setMusic2(response.data)
        })
    }, []);
    console.log(music2)
    const html=magazine.map((vo) =>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
            <div className="single-album-area wow fadeInUp" data-wow-delay="100ms">
                <div className="album-thumb">
                    <img src={"//"+vo.poster} alt=""/>
                </div>
                <div className="album-info">
                    <a>
                        <h5 style={{"overflow": "hidden","text-overflow": "ellipsis","white-space": "nowrap"}}>{vo.title}</h5>
                    </a>
                    <p>{vo.regdate}</p>
                </div>
            </div>
        </div>
    )
    const mHtml=music.map((vo) =>
        <div className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
             data-wow-delay="100ms">
            <div className="first-part d-flex align-items-center">
                <div className="thumbnail">
                    <img src={"//"+vo.poster} alt=""/>
                </div>
                <div className="content-">
                    <h6>{vo.singer}</h6>
                    <p>{vo.album}</p>
                </div>
            </div>
        </div>
    )
    const sHtml=music2.map((vo) =>
        <div className="single-artists d-flex align-items-center wow fadeInUp" data-wow-delay="100ms">
            <div className="thumbnail">
                <img src={"//"+vo.poster} alt=""/>
            </div>
            <div className="content-">
                <p>{vo.singer}</p>
            </div>
        </div>
    )
    return (
        <Fragment>
            {/*##### Hero Area Start #####*/}
            <section className="hero-area">
                <div className="hero-slides owl-carousel">
                    {/*Single Hero Slide*/}
                    <div className="single-hero-slide d-flex align-items-center justify-content-center">
                        {/*Slide Img */}
                        <div className="slide-img bg-img"
                             style={{"backgroundImage": "url(../img/bg-img/IU2.jpeg)"}}></div>
                        {/* Slide Content */}
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero-slides-content text-center">
                                        <h6 data-animation="fadeInUp" data-delay="100ms">Latest album</h6>
                                        <h2 data-animation="fadeInUp" data-delay="300ms">Beyond
                                            Time <span>Beyond Time</span></h2>
                                        {/*<a data-animation="fadeInUp" data-delay="500ms" href="#"*/}
                                        {/*   className="btn oneMusic-btn mt-50" style={{"padding": "12px"}}>Discover <i*/}
                                        {/*    className="fa fa-angle-double-right"></i></a>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Hero Slide */}
                    <div className="single-hero-slide d-flex align-items-center justify-content-center">
                        {/* Slide Img */}
                        <div className="slide-img bg-img" style={{"backgroundImage": "url(img/bg-img/sunmi2.png)"}}></div>
                        {/* Slide Content */}
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="hero-slides-content text-center">
                                        <h6 data-animation="fadeInUp" data-delay="100ms">Latest album</h6>
                                        <h2 data-animation="fadeInUp" data-delay="300ms">Trendy Music <span>Colorlib Music</span></h2>
                                        {/*<a data-animation="fadeInUp" data-delay="500ms" href="#" className="btn oneMusic-btn mt-50" */}
                                        {/*   style={{"padding":"12px"}}>Discover <i className="fa fa-angle-double-right"></i></a>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="oneMusic-buy-now-area has-fluid section-padding-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading style-2">
                                <p>See what’s new</p>
                                <h2>BEST HIT MAGAZINE</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        {html}
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="load-more-btn text-center wow fadeInUp" data-wow-delay="300ms">
                                <Link to={"/magazine/list"} className="btn oneMusic-btn" style={{"padding":"12px"}}>Load More <i className="fa fa-angle-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="featured-artist-area section-padding-100 bg-img bg-overlay bg-fixed" style={{"backgroundImage": "url(https://i.ytimg.com/vi/mFbILexYSQg/maxresdefault.jpg)"}}>
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-12 col-md-5 col-lg-4">
                            <div className="featured-artist-thumb">
                                <img src="https://image.bugsm.co.kr/album/images/500/40955/4095501.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8">
                            <div className="featured-artist-content">
                                {/* Section Heading */}
                                <div className="section-heading white text-left mb-30">
                                    <p>See what’s new</p>
                                    <h2>아이유(IU)' 미니 6집 [The Winning]</h2>
                                </div>
                                <p>삼십 대 첫 앨범이다.
                                    결론과 디테일들은 판이하지만 기운만큼은 스물세 살 때의 그것이다. <br/>
                                    그때 욕심내던 것들과는 전혀 다른 욕심들에 피가 도는 어른이 됐으나 이러나저러나 ‘욕심쟁이’라는 본질은 그대로다. <br/>
                                    골똘하던 물음표들을 지우고 그 자리에 느낌표를 그렸다. 삼십 대 들어 새로이 쓸 욕심 리스트의 첫 번째 칸은 ‘승리’로 채웠다. <br/>
                                    이제는 내가 원하는 것이 뭔지 헷갈리지 않는다. 간만에 나는 이런 내가 다시 또 재밌다.</p>
                                <div className="song-play-area">
                                    <div className="song-name">
                                        <p>02. 홀씨</p>
                                    </div>
                                    <audio preload="auto" controls>
                                        <source src="audio/Holssi.mp3"/>
                                    </audio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ##### Featured Artist Area End ##### */}

            {/* ##### Miscellaneous Area Start ##### */}
            <section className="miscellaneous-area section-padding-100-0">
                <div className="container">
                    <div className="row">

                        {/* ***** New Hits Songs ***** */}
                        <div className="col-12 col-lg-6">
                            <div className="new-hits-area mb-100" style={{"height":"891px"}}>
                                <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                                    <p>See what’s new</p>
                                    <h2>New Hits</h2>
                                </div>
                                {mHtml}
                            </div>
                        </div>

                        {/****** Popular Artists ******/}
                        <div className="col-12 col-lg-6">
                            <div className="popular-artists-area mb-100">
                                <div className="section-heading text-left mb-50 wow fadeInUp" data-wow-delay="50ms">
                                    <p>See what’s new</p>
                                    <h2>Popular Artist</h2>
                                </div>
                                {sHtml}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home