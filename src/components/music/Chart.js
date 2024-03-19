import {Fragment,useState,useEffect,useCallback,useContext} from "react";
import axios from "axios";
/*
      function App1(a){
         return (
           => JSX => HTML (XML)
         )
      }
      App1(A())  => map(function(){}) => map(()=>{})
      .click(function(){})
      function A()
      {
      }
      export default App1
      == 함수 (변수형)
      == 장점 => 매개변수로 전송 , 속성으로 전송
      export const App1=()=>{
         return (
         )
      }
      const App1=function(){
         return (
         )
      }
 */
function Chart(){
    // 변수 설정 => 멤버변수 => useState
    const [music,setMusic]=useState([])
    const [ss,setSs]=useState('')
    useEffect(()=>{
        axios.get('http://localhost/music/list')
            .then(response=>{
                setMusic(response.data)
            })
    },[]) // mounted()
    const handlerUseInput=useCallback((ss)=>{
        setSs(ss)
    },[ss])
    // [{},{}....] => for(Music music:list)
    /*
          musicList.forEach((music)=>{
             return (
                => HTML
             )
          })
     */
    return (
        <Fragment>
            <section className="breadcumb-area bg-img bg-overlay"
                     style={{"backgroundImage": "url(https://img.freepik.com/free-photo/people-festival_1160-736.jpg?t=st=1710428902~exp=1710432502~hmac=e55aebf9851ad9162a7dddc677ea7e23a12d45297393288ef3a663cc744c6d9b&w=2000)"}}>
                <div className="bradcumbContent">
                    <p>Music Chart</p>
                    <h2>Top 200</h2>
                </div>
            </section>
            <div className={"container"} style={{"marginTop":"100px","marginBottom":"150px"}}>
                <div className={"row"}>
                    <SearchBar ss={ss} onUserInput={handlerUseInput}/>
                </div>
                <div className={"row"} style={{"height": "2700px","overflowY": "scroll"}}>
                    <MusicTable music={music} ss={ss}/>
                </div>
            </div>
        </Fragment>

    )
}
function MusicTable(props){
    let row=[]
    props.music.map((m)=>{
        if(m.title.indexOf(props.ss)===-1)
        {
            return
        }
        row.push(<MusicRow music={m}/>)
    })
    return(
        <table className={"table"}>
            <thead>
            <tr>
                <th className={"text-center"}>순위</th>
                <th className={"text-center"}></th>
                <th className={"text-center"}></th>
                <th className={"text-center"}>곡명</th>
                <th className={"text-center"}>가수명</th>
                <th className={"text-center"}>앨범</th>
                <th className={"text-center"}>좋아요수</th>
            </tr>
            </thead>
            <tbody>
            {row}
            </tbody>
        </table>
    )
}
function MusicRow(props){
    return (
        <tr>
            <td className={"text-center"}>{props.music.no}</td>
            <td className={"text-center"}>
                {
                    props.music.state === "상승" &&
                    <span style={{"color": "red"}}>▲{props.music.idcrement}</span>
                }
                {
                    props.music.state === "하강" &&
                    <span style={{"color": "blue"}}>▼{props.music.idcrement}</span>
                }
                {
                    props.music.state === "유지" &&
                    <span style={{"color": "gray"}}>-</span>
                }
            </td>
            <td className={"text-center"}>
                <img src={"//" + props.music.poster} style={{"width": "100px"}}/>
            </td>
            <td>{props.music.title}</td>
            <td>{props.music.singer}</td>
            <td>{props.music.album}</td>
            <td><span style={{"color": "red"}}>♥</span>{props.music.heart}</td>
        </tr>
    )
}

function SearchBar(props) {
    const onChange=(e)=>{
        props.onUserInput(e.target.value)
    }
    return (
        <table className={"table"}>
            <tr style={{"textAlign":"right"}}>
                <td style={{"borderTop":"0","text-align": "right"}}>
                    <input type={"text"} size={"30"} placeholder={"검색어 입력"} style={{"height":"32px"}}
                           value={props.ss}
                           onChange={onChange}
                    />
                </td>
            </tr>
        </table>
    )
}

export default Chart