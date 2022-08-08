import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { allUsersRoute, host } from "./APIRoutes";
import Contacts from "./Contacts";
import { io } from "socket.io-client";
import Welcome from "./Welcome";
import ChatContainer from "./ChatContainer";

const Chat = () => {
    const socket = useRef();
    const [contacts, setContacts] = useState([]);
    const [currentChat, setCurrentChat] = useState(undefined);
    const [currentUser, setCurrentUser] = useState(undefined);


    useEffect(() => {
        if (currentUser) {
            socket.current = io(host);
            socket.current.emit("add-user", currentUser._id);
        }
    }, [currentUser])

    useEffect(() => {
        const asyncFetchData = async () => {
            if (currentUser) {
                if (currentUser.isAvatarImageSet) {
                    const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
                    setContacts(data.data);
                } else {
                }
            }
        }
        asyncFetchData();
    }, [currentUser])

    const handleChatChange = (chat) => {
        setCurrentChat(chat);
    };

    return (
        <>

            <Container>
                <div className="container">
                    <Contacts contacts={contacts} changeChat={handleChatChange} />
                    {currentChat === undefined ? (
                        <Welcome />
                    ) : (
                        <ChatContainer currentChat={currentChat} socket={socket} />
                    )}
                </div>
            </Container>
        </>
    );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;

export default Chat;