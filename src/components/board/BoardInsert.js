import {Fragment, useState,useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function BoardInsert(){
    const nav=useNavigate()
    const [name,setName]=useState('')
    const [subject,setSubject]=useState('')
    const [content,setContent]=useState('')
    const [pwd,setPwd]=useState('')
    // 태그를 제어 => focus , 비활성,활성화 => useRef
    const nameRef=useRef(null)
    const subjectRef=useRef(null)
    const contentRef=useRef(null)
    const pwdRef=useRef(null)
    const nameChange=(e)=>{
        setName(e.target.value)
    }
    const subjectChange=(e)=>{
        setSubject(e.target.value)
    }
    const contentChange=(e)=>{
        setContent(e.target.value)
    }
    const pwdChange=(e)=>{
        setPwd(e.target.value)
    }
    const insert=()=>{
        if(name.trim()==="")
        {
            nameRef.current.focus()
            return
        }
        if(subject.trim()==="")
        {
            subjectRef.current.focus()
            return
        }
        if(content.trim()==="")
        {
            contentRef.current.focus()
            return
        }
        if(pwd.trim()==="")
        {
            pwdRef.current.focus()
            return
        }
        axios.post('http://localhost/board/insert_react',null,{
            params:{
                name:name,
                subject:subject,
                content:content,
                pwd:pwd
            }
        }).then(response=>{
            if(response.data==="yes")
            {
                window.location.href="/board/list"
            }
            else
            {
                alert("게시판 추가에 실패하셨습니다")
            }
        })
    }
    return (
        <Fragment>
            <section className="breadcumb-area bg-img bg-overlay"
                     style={{"backgroundImage": "url(https://img.freepik.com/free-vector/multicolor-sticky-notes-collection_1232-4623.jpg?t=st=1710428046~exp=1710431646~hmac=edcdbcfde602780463f8248af18f32359b66edaf75950eed247113c4418ed585&w=1380)"}}>
                <div className="bradcumbContent">
                    <p>Board</p>
                    <h2>POST WRITE</h2>
                </div>
            </section>
            <div className={"row boardRow"}>
                <table className={"table"}>
                    <tbody>
                    <tr>
                        <td width={"15%"} className={"text-center"}>이름</td>
                        <td width={"85%"}>
                            <input type={"text"} size={"15"} className={"input-sm"}
                                   onChange={nameChange} value={name} ref={nameRef}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td width={"15%"} className={"text-center"}>제목</td>
                        <td width={"85%"}>
                            <input type={"text"} size={"50"} className={"input-sm"}
                                   onChange={subjectChange} value={subject} ref={subjectRef}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td width={"15%"} className={"text-center"}>내용</td>
                        <td width={"85%"}>
                            <textarea rows={"10"} cols={"52"} onChange={contentChange}
                                      ref={contentRef}>{content}</textarea>
                        </td>
                    </tr>
                    <tr>
                        <td width={"15%"} className={"text-center"}>비밀번호</td>
                        <td width={"85%"}>
                            <input type={"password"} size={"15"} className={"input-sm"}
                                   onChange={pwdChange} value={pwd} ref={pwdRef}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={"2"} className={"text-center"} style={{"paddingTop": "39px"}}>
                            <input type={"button"} className={"searchButton BtnSet"}
                                   value={"글쓰기"} onClick={insert}/>
                            <input type={"button"} className={"searchButton BtnSet"}
                                   value={"취소"}
                                   onClick={() => nav(-1)}
                            />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Fragment>

    )
}

export default BoardInsert