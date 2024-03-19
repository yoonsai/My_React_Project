import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from "./components/main/Header.js";
import Footer from "./components/main/Footer.js";
import Home from "./components/main/Home.js";
import MagazineDetail from "./components/magazine/MagazineDetail.js";
import MagazineList from "./components/magazine/MagazineList.js";
import Chart from "./components/music/Chart.js";
import BoardList from "./components/board/BoardList.js";
import BoardDetail from "./components/board/BoardDetail.js";
import BoardUpdate from "./components/board/BoardUpdate.js";
import BoardInsert from "./components/board/BoardInsert.js";
import BoardDelete from "./components/board/BoardDelete.js";
import {useEffect} from "react";
import WOW from 'wowjs';
function App() {
    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();
        wow.sync();
        const scriptFiles = [
            "/js/jquery/jquery-2.2.4.min.js",
            "/js/bootstrap/popper.min.js",
            "/js/bootstrap/bootstrap.min.js",
            "/js/plugins/plugins.js",
            "/js/active.js"
        ];

        scriptFiles.forEach(scriptFile => {
            const scriptId = scriptFile.replace(/[^\w\s]/gi, ''); // 특수 문자를 제거하여 유효한 ID 생성
            if (!document.getElementById(scriptId)) {
                const scriptElement = document.createElement("script");
                scriptElement.id = scriptId;
                scriptElement.src = scriptFile;
                scriptElement.async = true;

                scriptElement.onload = () => {
                    console.log(`${scriptFile} loaded successfully.`);
                    // 추가적인 처리 가능
                };

                scriptElement.onerror = () => {
                    console.log(`Error loading ${scriptFile}.`);
                };

                document.body.appendChild(scriptElement);
            }
        });
    }, []);
  return (
        <>
            <Header/>
            <Routes>
                <Route exact path={"/"} element={<Home/>}/>
                <Route exact path={"/magazine/list"} element={<MagazineList/>}/>
                <Route exact path={"/magazine/detail/:no"} element={<MagazineDetail/>}/>
                <Route exact path={"/music/chart"} element={<Chart/>}/>
                <Route path={"/board/list"} element={<BoardList/>}/>
                <Route path={"/board/insert"} element={<BoardInsert/>}/>
                <Route path={"/board/detail/:no"} element={<BoardDetail/>}/>
                <Route path={"/board/update/:no"} element={<BoardUpdate/>}/>
                <Route path={"/board/delete/:no"} element={<BoardDelete/>}/>
            </Routes>
            <Footer/>
        </>
  );
}

export default App;
