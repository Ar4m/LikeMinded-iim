import { Button, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tag, TagLabel, Text, useDisclosure, Box } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';
import React from 'react'

const ProfileModal = ({ user, children }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  let userHobbies = user.hobbies
    let hobbiesList = userHobbies.map((userHobbies) =>
        <Tag
        borderRadius='full'
        variant='subtle'
        colorScheme='blue'
        px="2" py="1"
        ml="1" mb="1"
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
        <ModalContent h="410px">
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
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              borderRadius="full"
              boxSize="150px"
              src={user.pic}
              alt={user.name}
              height='auto'
            />
            <Text
              fontSize={{ base: "20px", md: "26px" }}
              fontFamily="Work sans"
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
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ProfileModal