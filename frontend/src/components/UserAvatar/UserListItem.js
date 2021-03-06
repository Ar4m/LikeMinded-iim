import { Avatar, Box, Button, Tag, TagLabel, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ChatState } from '../../Context/ChatProvider';

const UserListItem = ({ user, handleFunction }) => {

  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));
  const { setSelectedChat } = ChatState();
  const [chats, setChats] = useState([]);
  const history = useHistory();
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();

    let userHobbies = user.hobbies
    let hobbiesList = userHobbies.map((userHobbies) =>
        <Tag
        key={userHobbies}
        borderRadius='full'
        variant='subtle'
        background="#00B6F1"
        px="2" py="1"
        ml="1" mb="1"
        >
        <TagLabel>{userHobbies}</TagLabel>
        </Tag>
    );

    const accessChat = async (userId) => {
      console.log(userId);
  
      try {
        setLoadingChat(true);
        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${loggedInUser.token}`,
          },
        };
        const { data } = await axios.post(`/api/chat`, { userId }, config);
  
        if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
        setSelectedChat(data);
        setLoadingChat(false);
        history.push("/chats");
      } catch (error) {
        toast({
          title: "Error fetching the chat",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    };

  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="white"
      _hover={{
        background: "#EBEBEB"
      }}
      h="20rem"
      alignItems="center"
      justifyContent="center"
      color="black"
      m='20px'
      borderRadius="8px"
      d="flex"
      flexDirection="column"
    >
      <Box height="24%" width="100%" position="relative" top="0" display="flex" justifyContent="center">
        <Box height="60%" width="100%" background="#00B6F1" borderRadius="8px 8px 0 0" position="relative" top="0"></Box>
        <Avatar
          size="lg"
          height="85%"
          cursor="pointer"
          position="absolute"
          top="15%"
          name={user.name}
          src={user.pic}
        />
      </Box>
      <Box height="16%"
        d="flex"
        alignItems="center"
        px={4}
        >
        <Text>{user.name}</Text>
      </Box>
      <Box height="50%"
        overflowY="scroll"
        px={4}
      >
        {hobbiesList}
      </Box>
      <Button background="#00C926" _hover={{background: "#00BA23"}} height="10%" onClick={() => accessChat(user._id)} mx={4} mb={4}>
        <i className="far fa-comment" style={{ paddingRight: "8px" }}></i>
        Start chat
      </Button>
    </Box>
  )
}

export default UserListItem