import { Box, Button, Image, Input, Spinner, useToast } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ChatLoading from './ChatLoading';
import UserListItem from './UserAvatar/UserListItem';
import ProfileModal from './miscellaneous/ProfileModal';
import bandeau from '../images/bandeau.png';
import { useHistory } from 'react-router-dom';

const UsersList = () => {

  const user = JSON.parse(localStorage.getItem("userInfo"));

  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  let [displayList, setDisplayList] = useState(false);

  const toast = useToast();
  const history = useHistory();

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

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <Box d="flex" justifyContent="center" w="100%">
      <Box w={{ base: "96%", md: "80%" }}>
        <Image src={bandeau} margin="auto" cursor="pointer" onClick={() => history.push("/welcome")} />
        <Box w={{ base: "92%", md: "42%" }} mx="auto" d="flex" justifyContent="center" alignItems="center" h="7vh" pb={2} mt="20px">
          <Input
           placeholder="Search by name/hobby"
           bg="white"
           mr={1}
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           onKeyDown={handleKeyPress}
          />
          <Button onClick={handleSearch} background="#00B6F1" color="white" _focus={{outline: 'none'}} _hover={{background:"white", color:"#00B6F1"}}>
            <i className="fas fa-search"></i>
          </Button>
          <Button onClick={() => setDisplayList(!displayList)} background="#00C926" color="white" ml="2em" _focus={{outline: 'none'}} _hover={{background:"white", color:"#00C926"}}>
            { displayList === false ?
              <i className="fas fa-list-ul"></i>
              : 
              <i className="fas fa-th"></i>
            }
          </Button>
        </Box>
        <Box d="flex" flexWrap="wrap" justifyContent="center" paddingBottom="2em" mx="auto" w={{ base: displayList === true && "100%", md: displayList === true && "50%" }}>
          {loading ? <ChatLoading /> : 
            (
              searchResult?.map((user) => (
                <Box w={ displayList === true && "100%" } key={user._id}>
                  <ProfileModal user={user} key={user._id}>
                    <UserListItem
                      key={user._id}
                      user={user}
                      displayList={displayList}
                    />
                  </ProfileModal>
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

export default UsersList