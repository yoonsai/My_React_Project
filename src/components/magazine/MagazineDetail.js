import {Fragment,useState,useEffect} from "react";
import {useParams,useNavigate,useNavigation} from "react-router-dom";
import {AllGetData} from "../../actions/AllGetData.js";
import axios from "axios";

function MagazineDetail(){
    // const [magazineDetail,setMagazineDetail]=useState({})
    // const [magazine,setMagazine]=useState({})
    const {no}=useParams()
    const nav=useNavigate()
    const {isLoading,isError,error,data}=AllGetData('http://localhost/magazine/detail_react',{no:no},'magazine_detail',no)
    if(isLoading) return <h3 className={"text-center"}>Loading</h3>
    if(isError) return <h3 className={"text-center"}>{error.message}</h3>
    /*useEffect(() => {
        axios.get('http://localhost/magazine/detail_react',{
            params:{
                no:no
            }
        }).then(response=>{
            setMagazineDetail(response.data.mdvo)
            setMagazine(response.data.vo)
        })
    });*/
    return(
        <Fragment>
            <section className="breadcumb-area bg-img bg-overlay"
                     style={{"backgroundImage": "url(http://localhost:3000/img/bg-img/breadcumb3.jpg)"}}>
                <div className="bradcumbContent">
                    <p>See what’s new</p>
                    <h2>MAGAZINE DETAIL</h2>
                </div>
            </section>
            <div className="blog-area section-padding-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-12">

                            <div className="single-blog-post mb-100 wow fadeInUp" data-wow-delay="100ms">

                                <div className="blog-post-thumb mt-30">
                                    <a href="#"><img style={{"width": "100%"}} src={"//" + data.data.mdvo.poster}
                                                     alt=""/></a>

                                    {/*<div className="post-date">*/}
                                    {/*    <span>15</span>*/}
                                    {/*    <span>June ‘18</span>*/}
                                    {/*</div>*/}
                                </div>

                                <div className="blog-content">
                                    <a className="post-title">{data.data.mdvo.title}</a>

                                    <div className="post-meta d-flex mb-30">
                                        <p className="post-author">{data.data.vo.regdate}</p>
                                        {/*<p className="tags">in<a href="#"> Events</a></p>*/}
                                        {/*<p className="tags"><a href="#">2 Comments</a></p>*/}
                                    </div>
                                    <p>{data.data.mdvo.content}</p>
                                </div>
                                <div style={{"text-align": "right",
                                    "margin-top": "16px"}}>
                                    <button className={"BottomButton"} onClick={() => nav(-1)}>목록</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
</Fragment>
)
}

export default MagazineDetail