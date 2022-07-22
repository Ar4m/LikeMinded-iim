import { Box, Button, Container, Grid, GridItem, Image, Input, Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import ChatLoading from './ChatLoading';
import UserListItem from './UserAvatar/UserListItem';
import { useHistory } from 'react-router-dom';
import ProfileModal from './miscellaneous/ProfileModal';
import bandeau from '../images/bandeau.png';

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

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch()
    }
  }

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
    <Box d="flex" justifyContent="center">
      <Box w={{ base: "95%", md: "80%" }} >
        <Image src={bandeau} margin="auto"/>
        <Box maxW="50%" mx="auto" d="flex" justifyContent="center" alignItems="center" h="7vh" pb={2} mt="20px">
          <Input
           placeholder="Search by name/hobby"
           bg="white"
           mr={1}
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           onKeyDown={handleKeyPress}
          />
        
          <Button onClick={handleSearch} background="#00B6F1" color="white"><i className="fas fa-search" style={{ color: "white" }}></i></Button>
        </Box>
        <Box d="flex" justifyContent="center">
          <Grid maxW="100%" templateColumns='repeat(4, 1fr)'>
            {loading ? <ChatLoading /> : 
            (
              searchResult?.map((user) => (
                <GridItem>
                  <ProfileModal user={user} key={user._id}>
                    <UserListItem
                      key={user._id}
                      user={user}
                    />
                  </ProfileModal>
                </GridItem>
              ))
            )
          }
          {loadingChat && <Spinner ml="auto" d="flex" />}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default UsersList