import { Avatar, AvatarGroup, Box, Button, Image, Input, Spinner, Text, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ChatLoading from './ChatLoading';
//import bandeau from '../images/bandeau.png';
import sortIcon from '../images/sort-icon-white.png'
import { useHistory } from 'react-router-dom';
import { ChatState } from '../Context/ChatProvider';
import { AddIcon } from '@chakra-ui/icons';
import GroupChatModal from './miscellaneous/GroupChatModal';

const GroupsList = ({ fetchAgain, setFetchAgain }) => {

  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { selectedChat, setSelectedChat } = ChatState();

  const toast = useToast();
  const history = useHistory();

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch()
    }
  }

  const handleSearch = async () => {

    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${loggedInUser.token}`,
        },
      };

      const { data } = await axios.get(`/api/chat/groups?search=${search}`, config);

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

  const sortSearch = async () => {
    setSearchResult(searchResult.slice(0).reverse())
    //console.log(searchResult)
  }

  useEffect(() => {
    handleSearch();
  }, []);

  const handleJoinGroup = async (chat1) => {
    if (chat1.users.find((u) => u._id === loggedInUser._id)) {
      toast({
        title: "Already in group!",
        status: "info",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setSelectedChat(chat1);
      history.push("/chats");
      return;
    }

    try {
      setLoading(true);
      const config = {
        headers: {
          Authorization: `Bearer ${loggedInUser.token}`,
        },
      };
      const { data } = await axios.put(
        `/api/chat/groupadd`,
        {
          chatId: chat1._id,
          userId: loggedInUser._id,
        },
        config
      );

      setSelectedChat(data);
      setFetchAgain(!fetchAgain);
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <Box d="flex" justifyContent="center" w="100%">
      <Box w={{ base: "96%", md: "80%" }}>
        <Box w={{ base: "100%", md: "44%" }} m="auto" d="flex" justifyContent="space-between" mt="10px">
            <Text fontSize="2xl" fontWeight="semibold" color="white">Public Groups</Text>
            <GroupChatModal fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}>
                <Button
                    d="flex"
                    fontSize="15px"
                    background="#00B6F1" color="white" _focus={{outline: 'none'}} _hover={{background:"white", color:"#00B6F1"}}
                    rightIcon={<AddIcon />}
                >
                    New Group Chat
                </Button>
            </GroupChatModal>
        </Box>
        <Box w={{ base: "100%", lg: "44%" }} mx="auto" d="flex" justifyContent="center" alignItems="center" pt={2} pb={2} mt="10px" mb="8px">
          <Input
           placeholder="Search by name"
           bg="white"
           mr={1}
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           onKeyDown={handleKeyPress}
          />
          <Button onClick={handleSearch} background="#00B6F1" color="white" _focus={{outline: 'none'}} _hover={{background:"white", color:"#00B6F1"}}>
            <i className="fas fa-search"></i>
          </Button>
          <Button onClick={() => sortSearch()} background="#A0AEC0" ml="1.5em" _focus={{outline: 'none'}} _hover={{background:"#CBD5E0", color:"#A0AEC0"}}>
            <Image src={sortIcon} maxW="none" />
          </Button>
        </Box>
        <Box d="flex" flexWrap="wrap" justifyContent="center" paddingBottom="5em" mx="auto" w={{ base: "100%", md: "100%" }}>
          {loading ? <ChatLoading /> : 
            (
              searchResult?.map((group) => (
                <Box
                    /*cursor="pointer"
                    _hover={{
                        background: "#EBEBEB"
                    }}*/
                    key={group._id}
                    bg="white"
                    h="18em"
                    w="16em"
                    alignItems="center"
                    justifyContent="center"
                    color="black"
                    m='18px'
                    borderRadius="8px"
                    d="flex"
                    flexDirection="column"
                >
                    <Box height="16%" width="100%" background="#00B6F1" borderRadius="8px 8px 0 0"></Box>
                    <Box height="25%"
                        maxWidth="100%"
                        d="flex"
                        alignItems="end"
                        px={3}
                    >
                        <Text fontWeight="semibold" maxWidth="100%" maxHeight="100%" overflow="auto">{group.chatName}</Text>
                    </Box>
                    <Box 
                        height="45%"
                        width="100%"
                        d="flex"
                        justifyContent="center"
                    >
                        <AvatarGroup size='md' max={3}>
                            { group.users.map((user) => (
                                <Avatar key={user._id} name={user.name} src={user.pic}/>
                            ))}
                        </AvatarGroup>
                    </Box>
                    <Button height="14%" border="2px solid" borderColor="#00B6F1" color="#00B6F1" backgroundColor="white" mx={3} mb={5} mt={2}
                        onClick={() => handleJoinGroup(group)}>
                        <i className="far fa-comment" style={{ paddingRight: "8px" }}></i>
                        Join Group
                    </Button>
                    </Box>
              ))
            )
          }
          {loadingChat && <Spinner ml="auto" d="flex" />}
        </Box>
      </Box>
    </Box>
  );
};

export default GroupsList