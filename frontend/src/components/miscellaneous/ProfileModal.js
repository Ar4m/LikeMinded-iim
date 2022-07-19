import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tag, TagLabel, Text, useDisclosure, useToast } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import React, { useState } from 'react'
import { ChatState } from '../../Context/ChatProvider';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const ProfileModal = ({ user, children }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const loggedInUser = JSON.parse(localStorage.getItem("userInfo"));

  const { setSelectedChat } = ChatState();
  const [chats, setChats] = useState([]);
  const history = useHistory();
  const [loadingChat, setLoadingChat] = useState(false);
  const toast = useToast();

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

  let userHobbies = ["No hobbies added"]
  if(user.hobbies) { userHobbies = user.hobbies }
  let hobbiesList = userHobbies.map((userHobbies) =>
    <Tag
      key={userHobbies}
      borderRadius='full'
      variant='subtle'
      colorScheme='blue'
      px="2" py="1"
      ml="1" mt="1"
      fontSize="18px"
    >
    <TagLabel>{userHobbies}</TagLabel>
    </Tag>
  );

  return (
    <>
      {children ? (
        <span onClick={onOpen}>{children}</span>
      ) : (
        <IconButton d={{ base: "flex" }} icon={<ViewIcon/>} onClick={onOpen} />
      )}
      <Modal size="lg" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent maxH="80%" overflow="auto">
          <ModalHeader
            fontSize="35px"
            fontFamily="Work sans"
            d="flex"
            justifyContent="center"
          >
            {user.name}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            d="flex"
            flexDir="column"
            justifyContent="space-between"
          >
            <div 
              style={{ display:"flex", justifyContent:"center" }}
            >
              <Image
                borderRadius="full"
                boxSize="150px"
                src={user.pic}
                alt={user.name}
                height='auto'
              />
            </div>
            
            <Text
              fontSize={{ base: "20px", md: "26px" }}
              fontFamily="Work sans"
              mt="15px"
            >
              Email: {user.email}
            </Text>
            <Text
              fontSize={{ base: "20px", md: "26px" }}
              fontFamily="Work sans"
            >
              Hobbies: {hobbiesList}
            </Text>
          </ModalBody>
          <ModalFooter>
            { loggedInUser._id !== user._id && <Button onClick={() => accessChat(user._id)}>Start Chat</Button> }
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModal