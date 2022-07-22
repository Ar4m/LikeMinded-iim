import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, Image } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { getSender } from '../../config/ChatLogics';
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import logoDesktop from '../../images/LogoBlue_LikeMinded.png';
import logoMobile from '../../images/logoMobile.png';

const AppHeader = () => {

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

  const redirectWelcome = () => {
    history.push("/welcome");
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
        <Box display={{ base: "none", md: "contents" }} onClick={redirectWelcome} cursor="pointer">
          <Image ml="15px" height="30px" src={logoDesktop} />
        </Box>
        <Box display={{ base: "contents", md: "none" }} onClick={redirectWelcome} cursor="pointer">
          <Image height="40px" src={logoMobile}/>
        </Box>
        <Box
            d="flex"
            justifyContent="space-between"
            alignItems="center"
            minW="25%"
        >
            <Button variant="ghost" onClick={redirectChats}>
                <i className="far fa-comment" style={{ paddingRight: "8px" }}></i>
                <Text display={{ base: "none", md: "contents" }}>Chats</Text>
            </Button>
            <Button variant="ghost" onClick={redirectMeet}>
                <i className="fas fa-users" style={{ paddingRight: "8px" }}></i>
                <Text display={{ base: "none", md: "contents" }}>Users</Text>
            </Button> 
        </Box>
        <div>
          <Menu>
            <MenuButton p={1}>
              {notification.length>0 && <span style={{ backgroundColor: "red", color:"white", padding: "1px 6px", borderRadius: "50%", fontWeight: "bold" }}>{notification.length}</span>}
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>

            <MenuList pl={2}>
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
        </div>
      </Box>
  )
}

export default AppHeader