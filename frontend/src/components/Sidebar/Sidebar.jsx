import { Suspense, lazy } from "react";
import "./Sidebar.css";
import { useEffect } from "react";
import { useChat } from "../../context/ChatContext";

import ChatsBox from "./ChatsBox/ChatsBox";
import OptionsBar from "./OptionsBar/OptionsBar";
// const ChatsBox = lazy(() => import("./ChatsBox/ChatsBox"));
// const OptionsBar = lazy(() => import("./OptionsBar/OptionsBar"));


function Sidebar() {
    const {chats,setChats} = useChat();
    
    async function getChats() {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        const response = await fetch("http://localhost:8080/chats", {
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: { Authorization: `Bearer ${userInfo.token}` },
            redirect: "follow",
            referrerPolicy: "no-referrer"
        });
        const result = await response.json()
        setChats(result);
    }

    useEffect(()=>{
        getChats();
    },[])

    return (
        <div className="sidebar-container">
            <div className="left-panel-head">
                {/* <Suspense fallback={<p>Loading...</p>}> */}
                    <OptionsBar />
                {/* </Suspense> */}
            </div>
            <div className="left-panel-box">
                {/* <Suspense fallback={<p>Chats are loading...</p>}> */}
                    <ChatsBox />
                {/* </Suspense> */}
            </div>
        </div>
    )
}

export default Sidebar;