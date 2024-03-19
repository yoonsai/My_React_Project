import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";


function BoardList(){
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    const [boardList,setBoardList]=useState([])
    useEffect(() => {
        axios.get('http://localhost/board/list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            setBoardList(response.data.list)
            setCurpage(response.data.curpage)
            setTotalpage(response.data.totalpage)
        })
    }, [curpage]);
    // 출력
    let html=boardList.map((vo)=>
        <tr>
            <td className={"text-center"} width={"10%"}>{vo.no}</td>
            <td width={"45%"}>
                <Link to={"/board/detail/"+vo.no} style={{"textDecorationLine": "none","color":"black","fontWeight": "400",
                    "fontFamily": "pretendard",
                    "fontSize": "15px"}}>{vo.subject}</Link>
            </td>
            <td className={"text-center"} width={"15%"}>{vo.name}</td>
            <td className={"text-center"} width={"20%"}>{vo.regdate.substring(0,vo.regdate.indexOf(" "))}</td>
            <td className={"text-center"} width={"10%"}>{vo.hit}</td>
        </tr>
    )
    return (
        <Fragment>
            <section className="breadcumb-area bg-img bg-overlay"
                     style={{"backgroundImage": "url(https://img.freepik.com/free-vector/multicolor-sticky-notes-collection_1232-4623.jpg?t=st=1710428046~exp=1710431646~hmac=edcdbcfde602780463f8248af18f32359b66edaf75950eed247113c4418ed585&w=1380)"}}>
                <div className="bradcumbContent">
                    <p>Post List</p>
                    <h2>Music Board</h2>
                </div>
            </section>
            <div className={"row boardRow"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td style={{"borderTop":"0"}}>
                            <Link to={"/board/insert"}><button className={"searchButton BtnSet"}>새글</button></Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={"table"}>
                    <thead>
                    <tr className={"success"}>
                        <th className={"text-center thColor"} width={"10%"}>번호</th>
                        <th className={"text-center thColor"} width={"45%"}>제목</th>
                        <th className={"text-center thColor"} width={"15%"}>이름</th>
                        <th className={"text-center thColor"} width={"20%"}>작성일</th>
                        <th className={"text-center thColor"} width={"10%"}>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {html}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan={"5"} className={"text-center"} style={{"paddingTop":"64px"}}>
                            <input type={"button"} className={"searchButton BtnSet"} value={"이전"}/>
                            &nbsp;&nbsp;{curpage} page / {totalpage} pages
                            <input type={"button"} className={"searchButton BtnSet"} value={"다음"}/>
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </Fragment>

    )
}

export default BoardList