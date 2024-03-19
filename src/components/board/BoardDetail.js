import {Fragment,useState,useEffect} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


/*
       Fragment : 임시 루트를 만들때
       <>
       </>
       useState : 변수 => state(계속 변경되는 데이터가 있는 경우에 설정
       props : 고정된 데이터 => 태그의 속성값을 값을 전송
       => 함수 매개변수로 받는다
       useEffect : mounted (window.onload)
       ,[])
       ,[변수명]) => 변수가 변경시마다 호출
       useParams : URL을 이용해서 데이터 전송 => getParameter()
       useRef : 태그를 제어
       useNavigate : 브라우저 이동 제어
       useMemo / useContext / useReducer ==> Redux (Front의 MVC)
       사용자 정의 Hooks
       금융권 / 증권 / next.js nust.js nest.js ..... TypeScript
       SI / SM   솔루션 / SM / 영업  Framework => 사원 추천
       =======   ============================
       자바웹개발    /    SW개발
       자바웹개발(Front-End)

       hooks=> 함수기반에서만 사용이 가능

       ***function App()
       ***const App=()=>{}
       const App=function(){}
       => 다른 JS에서 사용시 반드시 export를 설정한다

 */
function BoardDetail(){
    const {no}=useParams()
    const [detail,setDetail]=useState({})
    /*
        => List => [{},{},{}...]  useState([])
        => VO => {}   useState({})
        => 정수 => useState(0)
        => useState(true)
        => 문자열 useState('')
     */
    useEffect(()=>{
        axios.get('http://localhost/board/detail_react',{
            params:{
                no:no
            }
        }).then(response=>{
            setDetail(response.data)
        })
    },[])
    return (
        <Fragment>
            <section className="breadcumb-area bg-img bg-overlay"
                     style={{"backgroundImage": "url(https://img.freepik.com/free-vector/multicolor-sticky-notes-collection_1232-4623.jpg?t=st=1710428046~exp=1710431646~hmac=edcdbcfde602780463f8248af18f32359b66edaf75950eed247113c4418ed585&w=1380"}}>
                <div className="bradcumbContent">
                    <p>Board</p>
                    <h2>POST DETAIL</h2>
                </div>
            </section>
            <div className={"row boardRow"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td className={"text-center success thColor"} width={"20%"}>번호</td>
                        <td className={"text-center"} width={"30%"}>{detail.no}</td>
                        <td className={"text-center success thColor"} width={"20%"}>작성일</td>
                        <td className={"text-center"} width={"30%"}>{detail.regdate}</td>
                    </tr>
                    <tr>
                        <td className={"text-center success thColor"} width={"20%"}>이름</td>
                        <td className={"text-center"} width={"30%"}>{detail.name}</td>
                        <td className={"text-center success thColor"} width={"20%"}>조회수</td>
                        <td className={"text-center"} width={"30%"}>{detail.hit}</td>
                    </tr>
                    <tr>
                        <td className={"text-center success thColor"} width={"20%"}>제목</td>
                        <td colSpan={"3"}>{detail.subject}</td>
                    </tr>
                    <tr>
                        <td className={"text-left"} height={"200"} colSpan={"4"} valign={"top"}>
                            <pre style={{
                                "whiteSpace": "pre-wrap",
                                "backgroundColor": "white",
                                "border": "none"
                            }}>{detail.content}</pre>
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-right"} colSpan={"4"}>
                            <Link to={"/board/update/" + no}
                            ><button className={"BottomButton"}>수정</button></Link>
                            <Link to={"/board/delete/" + no}
                            ><button className={"BottomButton"}>삭제</button></Link>
                            <Link to={"/board/list"}
                            ><button className={"BottomButton"}>목록</button></Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>

    )
}

export default BoardDetail