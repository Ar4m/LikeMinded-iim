import { Box, Button, Divider, Stack, Text, useToast } from '@chakra-ui/react';
import { AddIcon } from "@chakra-ui/icons";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import { getSender } from '../config/ChatLogics';
import { ChatState } from '../Context/ChatProvider';
import ChatLoading from './ChatLoading';
import GroupChatModal from './miscellaneous/GroupChatModal';

const MyChats = ({ fetchAgain, setFetchAgain }) => {

  const [loggedUser, setLoggedUser] = useState();
  const [chats, setChats] = useState([]);
  const { selectedChat, setSelectedChat } = ChatState();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const toast = useToast();

  const getSender = (loggedUser, users) => {
    return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
  };

  const fetchChats = async () => {
    // console.log(user._id);
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get("/api/chat", config);
      //console.log(data)
      setChats(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the chats",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("userInfo")));
    fetchChats();
  }, [fetchAgain]);

  return (
    <Box
      d={{ base: selectedChat ? "none" : "flex", md: "flex" }}
      flexDir="column"
      alignItems="center"
      p={3}
      bg="white"
      w={{ base: "100%", md: "31%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      <Box
        pb={3}
        px={3}
        fontSize={{ base: "28px", md: "30px" }}
        fontFamily="Work sans"
        d="flex"
        w="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        My Chats
        <GroupChatModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}>
          <Button
            d="flex"
            fontSize={{ base: "17px", md: "10px", lg: "17px" }}
            rightIcon={<AddIcon />}
            borderRadius="50px"
          >
            New Group Chat
          </Button>
        </GroupChatModal>
      </Box>
      <Box
        d="flex"
        flexDir="column"
        bg="white"
        w="100%"
        h="100%"
        borderRadius="lg"
        overflowY="hidden"
      >
        {chats ? (
          <Stack overflowY="scroll">
            <Divider />
            {chats.map((chat) => (
              <Box mt="0 !important" key={chat._id}>
                <Box
                  onClick={() => setSelectedChat(chat)}
                  cursor="pointer"
                  mt="0 !important"
                  borderRadius="8px"
                  bg={selectedChat?._id === chat._id ? "#00B6F1" : "white"}
                  color={selectedChat?._id === chat._id ? "white" : "black"}
                  p={4}
                  key={chat._id}
                  _hover={{ bg: "#EBEBEB", color: "black" }}
                >
                  <Text>
                    {!chat.isGroupChat
                      ? getSender(loggedUser, chat.users)
                      : chat.chatName}
                  </Text>
                </Box>
                <Divider />
              </Box>
            ))}
            
          </Stack>
        ) : (
          <ChatLoading />
        )}
      </Box>
    </Box>
  )
}

export default MyChats