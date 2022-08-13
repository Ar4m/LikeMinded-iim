import { Box } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import AppHeader from '../components/miscellaneous/AppHeader';
import GroupsList from '../components/GroupsList';
//import { ChatState } from '../Context/ChatProvider';

const GroupsPage = () => {

  const history = useHistory();

  //const { user } = ChatState();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if (!user) {
    history.push("/");
  }
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <AppHeader currentPage="groups"/>}
      <Box d="flex" justifyContent="center" w="100%" h="93vh" p="10px" overflowY="scroll">
        {user && <GroupsList fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
      </Box>
    </div>
  )
}

export default GroupsPage