import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generate } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.messages);

  const [liveMessage, setLiveMessage] = useState('');
 
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({
          name: generate(),
          message: "Welcome to Namaste React",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
    <div className="border border-black w-full h-[350px] px-4 py-2 bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
      {chatMessage.map((c, index) => (
        <ChatMessage key={index} name={c.name} message={c.message} />
      ))}
    </div>
     <form onSubmit={(e) => {e.preventDefault(); dispatch(addMessages({name:"Ajeet", message:liveMessage})); setLiveMessage('')}} className="w-full border border-black py-2 px-2 flex">
         <input type="text" className="px-2 border border-gray-600  mr-2" value={liveMessage} onChange={(e) =>{setLiveMessage(e.target.value)}} />
         <button className="bg-green-600 text-black text-xs px-2 ">Send</button>
     </form>
    </>
    
  );
};

export default LiveChat;
