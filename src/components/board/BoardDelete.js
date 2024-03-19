import {useState, useRef, Fragment} from "react";
import axios from "axios";
import {useParams, useNavigate, Link} from "react-router-dom";


function BoardDelete(){
    const {no} = useParams()
    const nav=useNavigate()
    const [pwd,setPwd]=useState('')
    const pwdRef=useRef(null)
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const boarddel=()=>{
        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }
        axios.post('http://localhost/board/delete_react',null,{
            params:{
                pwd:pwd,
                no:no
            }
        }).then(response=>{
            if(response.data==='yes')
            {
                window.location.href="/board/list"
            }
            else
            {
                alert("비밀번호가 틀립니다")
                setPwd('')
                pwdRef.current.focus()
            }
        })
    }
    return (
        <Fragment>
            <section className="breadcumb-area bg-img bg-overlay"
                     style={{"backgroundImage": "url(https://img.freepik.com/free-vector/multicolor-sticky-notes-collection_1232-4623.jpg?t=st=1710428046~exp=1710431646~hmac=edcdbcfde602780463f8248af18f32359b66edaf75950eed247113c4418ed585&w=1380)"}}>
                <div className="bradcumbContent">
                    <p>Board</p>
                    <h2>PASSWORD</h2>
                </div>
            </section>
            <div className={"row row1 boardRow"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td style={{"text-align": "center"}}>
                            비밀번호 입력 : <input type={"password"} className={"input-sm"}
                                        onChange={pwdChange}
                                        ref={pwdRef} value={pwd}
                        />
                        </td>
                    </tr>

                    <tr>
                        <td className={"text-center"} style={{"paddingTop":"30px"}}>
                            <input type={"button"} value={"삭제"}
                                   className={"BottomButton"} onClick={boarddel}/>
                            <button className={"BottomButton"}
                                    onClick={() => nav(-1)}
                            >취소
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default BoardDelete