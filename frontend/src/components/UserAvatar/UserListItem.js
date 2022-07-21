import { Avatar, Box, Tag, TagLabel, Text } from '@chakra-ui/react'
import React from 'react'

const UserListItem = ({ user, handleFunction }) => {

    let userHobbies = user.hobbies
    let hobbiesList = userHobbies.reverse().map((userHobbies) =>
        <Tag
        key={userHobbies}
        borderRadius='full'
        variant='subtle'
        background="#00B6F1"
        border='solid 1px white'
        px="2" py="1"
        ml="1" mb="1"
        >
        <TagLabel>{userHobbies}</TagLabel>
        </Tag>
    );

  return (
    <Box
      onClick={handleFunction}
      cursor="pointer"
      bg="white"
      _hover={{
        background: "#00B6F1",
        color: "white",
      }}
      w="100%"
      d="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
    >
      <Avatar
        mr={2}
        size="md"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box mr={3} minW="25%">
        <Text>{user.name}</Text>
        {/* <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text> */}
      </Box>
      <Box minW="30%">
        {hobbiesList}
      </Box>
    </Box>
  )
}

export default UserListItem