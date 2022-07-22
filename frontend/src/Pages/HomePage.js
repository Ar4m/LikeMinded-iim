import React, { useEffect } from 'react'
import { Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import { useHistory } from 'react-router-dom';

const HomePage = () => {

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    
    if (user) {
        history.push("/meet");
    }
  }, [history]);

  return (
    <Container maxW='xl' centerContent mb="5rem">
      
        <Text fontSize="4xl" fontFamily="Work sans" marginTop="12%" marginBottom="7%" color="white">
          LikeMinded
        </Text>
      
        <Tabs isFitted variant='enclosed' w="100%">
          <TabList>
            <Tab _selected={{ bg: '#00B6F1', boxShadow:"none" }} style={{color: 'white'}}>Login</Tab>
            <Tab _selected={{ bg: '#00B6F1', boxShadow:"none" }} style={{color: 'white'}}>Sign Up</Tab>
          </TabList>
          <TabPanels style={{ background: 'white', borderRadius: "0px 0px 10px 10px"}}>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      
    </Container>
  )
}

export default HomePage