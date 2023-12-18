import React from "react";
import { Avatar, Grid, GridItem } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import "./Header.css";
import { useChat } from "../../context/ChatContext";
import { changePopupImage, togglePopup } from "../../Features/popupImageSlice";

function Header() {
    const darkTheme = useSelector((state) => state.darkMode);
    const { selectedChat } = useChat();
    const dispatch=useDispatch();

    function getChatName(){
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if(userInfo.user._id == selectedChat.users[0]._id) return selectedChat.users[1].name;
        else return selectedChat.users[0].name;
    }

    function getPicturePath(){
        const userInfo = JSON.parse(localStorage.getItem("user"));
        if(userInfo.user._id == selectedChat.users[0]._id) return selectedChat.users[1].picture;
        else return selectedChat.users[0].picture;
    }

    const triggerModal = (e) => {
        const url=e.target.src;
        dispatch(togglePopup());
        dispatch(changePopupImage(url));
    }

    return (
        <div className={"header" + (darkTheme ? " dark-theme-font" : "")}>
            <Grid className="name-and-avatar" templateColumns="1fr 10fr 1fr" gap="0.5rem">
                <GridItem
                    justifySelf="left"
                    alignSelf="center"
                    className="avatar"
                >
                    <Avatar src={selectedChat.isGroup ? selectedChat.picturePath : getPicturePath()} onClick={triggerModal} name={selectedChat.isGroup ? selectedChat.name : getChatName()} />
                </GridItem>
                <GridItem
                    fontSize="1.2rem"
                    paddingLeft=".75rem"
                    className="chatName"
                >
                    <span>{selectedChat.isGroup ? selectedChat.name : getChatName()}</span>
                </GridItem>
                <GridItem
                    justifySelf="right"
                    alignSelf="center"
                    className="chat-options"
                >
                    {selectedChat.isGroup ? <EditIcon className="headingIcon" boxSize={25} /> : null }
                </GridItem>
            </Grid>
            <hr />
        </div>
    )
}

export default Header;