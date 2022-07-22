import React, { useEffect } from 'react'
import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
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
    <Container maxW='xl' centerContent>
      
        <Text fontSize="4xl" fontFamily="Work sans" marginTop="15%" marginBottom="7%" color="white" onClick={() => history.push("/welcome")} cursor='pointer'>
          LikeMinded
        </Text>
      
      
        <Tabs isFitted variant='enclosed' w="100%">
          <TabList mb="1em">
            <Tab _selected={{ color: 'white', bg: '#00B6F1' }} style={{color: 'white'}}>Login</Tab>
            <Tab _selected={{ color: 'white', bg: '#00B6F1' }} style={{color: 'white'}}>Sign Up</Tab>
          </TabList>
          <TabPanels style={{ background: 'white', marginTop: '-16px', borderRadius: "0px 0px 10px 10px"}}>
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