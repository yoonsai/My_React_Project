import {Fragment,useEffect,useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";

function MagazineList(){
    const [startPage,setStartPage]=useState(0)
    const [endPage,setEndPage]=useState(0)
    const [totalpage,setTotalpage]=useState(0)
    const [curpage,setCurpage]=useState(1)
    const [title,setTitle]=useState("")
    const [magazineList,setMagazineList]=useState([])
    useEffect(()=>{
        axios.post('http://localhost/magazine/list_react',null,{
            params:{
                page:curpage,
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)
            setCurpage(response.data.curpage)
            setMagazineList(response.data.list)
        })
    },[curpage,title])
    // [{},{},{}....] for(Recipe vo:list)
    let html=magazineList.map((vo)=>
        <div className="col-12 col-sm-6 col-md-4">
            <div className="single-album-area">
                <Link to={"/magazine/detail/" + vo.no}>
                <div className="album-thumb">
                    <img src={'//'+vo.poster}/>
                </div>
                </Link>
                <div className="album-info">
                    <Link to={"/magazine/detail/" + vo.no} style={{"color": "black"}}>
                        <h5>{vo.title}</h5>
                    </Link>
                    <p>{vo.regdate}</p>
                </div>
            </div>
        </div>
    )
    const findHandler=()=>{
        setCurpage(1)
    }
    const changeHandler=(e)=>{
        setCurpage(1)
        setTitle(e.target.value)
    }
    // 페이지
    const pageChange=(page)=>{
        setCurpage(page)
    }
    const prevHandler=()=>{
        setCurpage(startPage-1)
    }
    const nextHandler=()=>{
        setCurpage(endPage+1)
    }
    let row=[]
    if(startPage>1)
    {
        row.push(<li style={{"margin-right":"0"}}><a style={{"padding":"9px 19px","color":"#8d319e"}} href={"#"} onClick={()=>prevHandler()}>&laquo;</a></li>)

    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(curpage===i)
        {
            row.push(<li style={{"margin-right":"0"}} className={"active"}><a style={{"padding":"9px 19px","backgroundColor": "#8d319e",
                "borderColor": "#8d319e"}} href={"#"} onClick={()=>pageChange(i)}>{i}</a></li> )
        }
        else
        {
            row.push(<li style={{"margin-right":"0"}}><a style={{"padding":"9px 19px","color":"#8d319e"}} href={"#"} onClick={()=>pageChange(i)}>{i}</a></li> )
        }

    }
    if(endPage<totalpage)
    {
        row.push(<li style={{"margin-right":"0"}}><a style={{"padding":"9px 19px","color":"#8d319e"}} href={"#"} onClick={()=>nextHandler()}>&raquo;</a></li>)
    }
    return (
        <Fragment>
            <section className="breadcumb-area bg-img bg-overlay"
                     style={{"backgroundImage": " url(../img/bg-img/breadcumb3.jpg)"}}>
                <div className="bradcumbContent">
                    <p>See what’s new</p>
                    <h2>MAGAZINE</h2>
                </div>
            </section>


                <div className="inputBox">
                    <div className="inb">
                        <input type={"text"} size={"20"} className={"searchBar"} placeholder={"검색어 입력"}
                               value={title}
                               onChange={changeHandler}
                        />
                        <input type={"button"} className={"searchButton"} value={"검색"}
                               onClick={findHandler}
                        />
                    </div>
                </div>


            <div className="oneMusic-buy-now-area mb-80">
                <div className="container">
                    <div className="row">
                        {html}
                    </div>
                </div>
            </div>

            <div className={"text-center"} style={{"margin-bottom": "40px"}}>
                <ul className={"pagination"}>
                    {row}
                </ul>
            </div>
        </Fragment>
    )
}

export default MagazineList