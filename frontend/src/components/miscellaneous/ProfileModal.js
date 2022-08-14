import { Avatar, Badge, Box, Button, FormControl, FormLabel, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tag, TagLabel, Text, useDisclosure, useToast } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import React, { useState } from 'react'
import { ChatState } from '../../Context/ChatProvider';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Autocomplete } from 'chakra-ui-simple-autocomplete';

const ProfileModal = ({ user, children }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));

  const { setSelectedChat } = ChatState();
  const [chats, setChats] = useState([]);
  const history = useHistory();
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();
  const [editable, setEditable] = useState(false);

  const [name, setName] = useState(user?.name);
  //const [email, setEmail] = useState();
  //const [password, setPassword] = useState();
  //const [confirmpassword, setConfirmpassword] = useState();
  const [pic, setPic] = useState(user?.pic);
  const [loading, setLoading] = useState(false)

  const [result, setResult] = useState([]);
  const options = [];

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

  const editButton = async () => {
    setEditable(!editable)
    let currentHobbies = []
    user.hobbies.forEach(hobby => {
      currentHobbies.push( { value:hobby, label:hobby } )
    });
    setResult(currentHobbies)    
  }

  const postDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(pics);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "likeminded");
      fetch("https://api.cloudinary.com/v1_1/likeminded/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(data.url.toString());
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast({
        title: "Please Select an Image!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
  };

  const submitEdit = async () => {
    setLoading(true);
    let hobbies = result.map(x => x.value)
    if (!name) {
      toast({
        title: "Please enter a name",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    
    console.log(name, pic, hobbies);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.put(
        "/api/user",
        { 
          id: user._id, 
          name: name,
          pic: pic,
          hobbies: hobbies,
          token: user.token
        },
        config
      );
      console.log(data);
      toast({
        title: "Edit Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/meet");
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

  let userHobbies = ["No hobbies added"]
  if(user?.hobbies) { userHobbies = user.hobbies }
  let hobbiesList = userHobbies.slice(0).reverse().map((userHobbies) =>
    <Tag
      key={userHobbies}
      borderRadius='full'
      variant='subtle'
      //colorScheme='blue'
      background='#00B6F1'
      color='white'
      px="2" py="1"
      ml="1" mt="1"
      fontSize="17px"
    >
    <TagLabel>{userHobbies}</TagLabel>
    </Tag>
  );

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} borderRadius="50px" icon={<i className="fas fa-user"></i>} onClick={onOpen} /> //<i className="fas fa-info"></i>
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent maxH="80%" overflow="auto">
          <ModalCloseButton />

          { editable === false ? 
          //----------------------------------------Standard Profile----------------------------------------
            <ModalBody
            d="flex"
            flexDir="column"
            justifyContent="space-between"
            >
              <Box 
                d="flex"
                flexDir="column"
                alignItems="center"
              >
                <ModalHeader
                  fontSize="30px"
                  fontFamily="Work sans"
                  maxWidth="100%"
                  maxHeight="6em"
                  overflow="auto"
                >
                  {user?.name}
                </ModalHeader>
                <Avatar
                  borderRadius="full"
                  //boxSize="130px"
                  //height='auto'
                  size='2xl'
                  src={user?.pic}
                  name={user?.name}
                />
              </Box>
              { loggedInUser._id === user?._id &&
                <Text
                  fontSize={{ base: "18px", md: "20px" }}
                  fontFamily="Work sans"
                  mt="15px"
                >
                  Email: {user?.email}
                </Text>
              }
              
              <Text
                fontSize={{ base: "18px", md: "20px" }}
                fontFamily="Work sans"
                mt="20px"
                d="flex"
              >
                <span style={{marginTop: "2px"}}>Hobbies: </span>
                <span>{hobbiesList}</span>
              </Text>
            </ModalBody>
            : 
            //----------------------------------------Editable Profile----------------------------------------
            <ModalBody
              d="flex"
              flexDir="column"
              justifyContent="space-between"
            >
              <Box 
                d="flex"
                flexDir="column"
                alignItems="center"
              >
                <ModalHeader>
                  <FormControl 
                    id="first-name"
                    d="flex"
                    flexDir="row"
                    alignItems="center"
                  >
                    <FormLabel m={[0, 2]} fontSize="18px">Name</FormLabel>
                    <Input
                      fontSize="18px"
                      placeholder="Enter Your Name"
                      defaultValue={user.name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormControl>
                </ModalHeader>
                <Avatar
                  borderRadius="full"
                  size='2xl'
                  src={pic}
                  name={user.name}
                />
                <Input
                  type="file"
                  mt="2px"
                  p={1.5}
                  accept="image/*"
                  onChange={(e) => postDetails(e.target.files[0])}
                />
              </Box>
              <FormControl id="hobbies" py="15px">
                <FormLabel fontSize="18px">Hobbies and Interests</FormLabel>
                <Box maxW="lg">
                  <Autocomplete
                    options={options}
                    result={result}
                    setResult={(options) => {
                      setResult(options);
                    }}
                    placeholder="Enter a Hobby"
                    renderBadge={(option) => (
                      <Badge
                        borderRadius="full"
                        px="3" py="2"
                        background="#00B6F1"
                        color="white"
                        mx={1} my={1}
                        cursor="pointer"
                        key={option.value}
                        >
                        {option.label}
                        <CloseIcon ml={2} w={2} h={2} mb="4px" />
                      </Badge>
                    )}
                    createtext="Add Hobby"
                  />
                </Box>
              </FormControl>
            </ModalBody>

          }
          
          <ModalFooter>
            { loggedInUser._id !== user?._id ? 
              <Button border="2px solid" borderColor="#00B6F1" color="#00B6F1" backgroundColor="white" onClick={() => accessChat(user._id)}>
                <i className="far fa-comment" style={{ paddingRight: "8px" }}></i>
                Start Chat
              </Button> : 
              <Box>
                { editable === true && <Button bg="red" color="white" colorScheme="red" _focus={{outline: 'none'}} onClick={() => submitEdit() } isLoading={loading}>Save</Button> }
                { user.email !== "guest@example.com" && <Button ml="2" onClick={() => editButton() }> { editable === false ? "Edit" : "See Profile" }</Button> }
              </Box>
            }
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModal