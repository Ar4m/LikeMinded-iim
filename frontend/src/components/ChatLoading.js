import { Box, Skeleton } from '@chakra-ui/react'
import React from 'react'

const ChatLoading = () => {
  return (
    <Box d="flex" flexWrap="wrap" justifyContent="center">
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
        <Skeleton h="18em" w="16em" m='18px' borderRadius="8px"/>
    </Box>
  )
}

export default ChatLoading