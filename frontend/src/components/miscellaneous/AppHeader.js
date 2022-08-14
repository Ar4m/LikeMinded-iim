import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Image } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { getSender } from '../../config/ChatLogics';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import logoDesktop from '../../images/LogoBlue_LikeMinded.png';
import logoMobile from '../../images/logoMobile.png';

const AppHeader = ({ currentPage }) => {

  const { notification, setNotification, setSelectedChat } = ChatState();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");

    history.push("/");
  };

  const redirectChats = () => {
    history.push("/chats");
  };

  const redirectMeet = () => {
    history.push("/meet");
  };

  const redirectGroups = () => {
    history.push("/groups");
  };

  return (
    <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="3px"
      >
        <Box>
          <Box display={{ base: "none", md: "contents" }} onClick={redirectMeet} cursor="pointer">
            <Image ml="15px" height="30px" src={logoDesktop} />
          </Box>
          <Box display={{ base: "none", md: "none" }} onClick={redirectMeet} cursor="pointer">
            <Image height="40px" src={logoMobile}/>
          </Box>
        </Box>
        <Box
          d="flex"
          justifyContent="space-between"
          alignItems="center"
          minW={{ base: "52%", lg: "40%" }}
        >
          <Button variant="ghost" onClick={redirectChats} 
            _hover={{bg:"#00B6F1", color:"white"}} 
            bg={currentPage==="chats" && "#00B6F1"} 
            color={currentPage==="chats" && "white"}
            _focus={{outline: 'none'}}
          >
            <i className="far fa-comment"></i>
            <Box display={{ base: "none", md: "contents" }}>
              <p style={{ paddingLeft: "8px" }}>
                Chats
              </p>
            </Box>
          </Button>
          <Button variant="ghost" onClick={redirectGroups} 
            _hover={{bg:"#00B6F1", color:"white"}} 
            bg={currentPage==="groups" && "#00B6F1"} 
            color={currentPage==="groups" && "white"}
            _focus={{outline: 'none'}}
          >
            <i className="fas fa-users"></i>
            <Box display={{ base: "none", md: "contents" }}>
              <p style={{ paddingLeft: "8px" }}>
                Groups
              </p>
            </Box>
          </Button>
          <Button variant="ghost" onClick={redirectMeet} 
            _hover={{bg:"#00B6F1", color:"white"}} 
            bg={currentPage==="meet" && "#00B6F1"} 
            color={currentPage==="meet" && "white"}
            _focus={{outline: 'none'}}
          >
            <i className="fas fa-address-card"></i> {/* fas fa-user-friends */}
            <Box display={{ base: "none", md: "contents" }}>
              <p style={{ paddingLeft: "8px" }}>
                Users
              </p>
            </Box>
          </Button> 
        </Box>
        <Box>
          <Menu>
            <MenuButton p={1}>
              {notification.length>0 && <span style={{ backgroundColor: "red", color:"white", padding: "1px 6px", borderRadius: "50%", fontWeight: "bold" }}>{notification.length}</span>}
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>

            <MenuList pl={2} maxH="30em" overflow="auto">
                {!notification.length && "No New Messages"}
                {notification.map((notif) => (
                  <MenuItem
                    key={notif._id}
                    onClick={() => {
                      setSelectedChat(notif.chat);
                      setNotification(notification.filter((n) => n !== notif));
                      redirectChats();
                    }}
                  >
                    {notif.chat.isGroupChat
                      ? `New Message in ${notif.chat.chatName}`
                      : `New Message from ${getSender(user, notif.chat.users)}`}
                  </MenuItem>
                ))}
            </MenuList>
          </Menu>
          
          <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.pic}
              />
            </MenuButton>
            <MenuList>
                <ProfileModal user={user}>
                    <MenuItem>Profile</MenuItem>
                </ProfileModal>
                <MenuDivider />
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
  )
}

export default AppHeader