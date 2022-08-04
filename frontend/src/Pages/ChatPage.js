import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import ChatBox from "../components/ChatBox";
import AppHeader from "../components/miscellaneous/AppHeader";
import MyChats from "../components/MyChats";
//import { ChatState } from "../Context/ChatProvider"

const ChatPage = () => {

  const history = useHistory();

  //const { user } = ChatState();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const [fetchAgain, setFetchAgain] = useState(false);

  if (!user) {
    history.push("/");
  }

  return (
    <div style={{ width: "100%" }}>
      {user && <AppHeader currentPage="chats"/>}
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  )
}

export default ChatPage