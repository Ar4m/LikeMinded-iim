import { Box, Button, Input, Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import ChatLoading from './ChatLoading';
import UserListItem from './UserAvatar/UserListItem';
import { useHistory } from 'react-router-dom';

const UsersList = () => {

  const { setSelectedChat } = ChatState();
  const [chats, setChats] = useState([]);
  const user = JSON.parse(localStorage.getItem("userInfo"));

  const history = useHistory();

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const toast = useToast();

  const handleSearch = async () => {
    /*if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }*/

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };

      const { data } = await axios.get(`/api/user?search=${search}`, config);

      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const accessChat = async (userId) => {
    console.log(userId);

    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
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

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Box w={{ base: "95%", md: "36%" }}>
      <Box maxW="75%" mx="auto" d="flex" justifyContent="space-between" alignItems="center" h="7vh" pb={2}>
        <i className="fas fa-search" style={{ padding: "8px" }}></i>
        <Input
          placeholder="Search by name/email/hobby"
          bg="white"
          mr={2}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
          <Button onClick={handleSearch}>Search</Button>
      </Box>
      {loading ? <ChatLoading /> : 
        (
          searchResult?.map((user) => (
            <UserListItem
              key={user._id}
              user={user}
              handleFunction={() => accessChat(user._id)}
            />
          ))
        )
      }
      {loadingChat && <Spinner ml="auto" d="flex" />}
    </Box>
  );
};

export default UsersList