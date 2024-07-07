import { useState } from "react"
import { notification4, robotsvg, send, } from "../assets";

const Chatwindow = () => {

    const [text, setText] = useState('');
    const [chatText, setchatText] = useState('')

    const onChangeText = (e) => {
        let changeText = e.target.value;
        setText(changeText);
      
    }

    const sendText = (e) => {
        e.preventDefault();
        setchatText(text);
        setTimeout(() => textRender(chatText), 1000);
        setText("");
        displayText();
    }

    const displayText = () => {
        let getText = localStorage.getItem('text');
    }

    const textRender = (chatText) => {
        let textObj;
        let textElement = localStorage.getItem('text');
        if (textElement == null) {
            textObj = [];
        } else {
            textObj = JSON.parse(textElement);
        }
        textObj.push(chatText);
        localStorage.setItem('text', JSON.stringify(textObj))
    }

    return (
        <div className="chatbot relative z-1 p-0.5 rounded-2xl sm:h-[40rem] lg:h-[30rem]">
            <div className="h-[1.4rem] text-center  bg-n-11 text-color-1 rounded-t-[0.9rem]">
                Webchat
            </div>
            <ul className="chatbox sm:h-[20rem] lg:h-[25rem]">
                <li className="chat incoming text-color-1">
                    <span className="robosvg"><img src={ robotsvg } alt="robotsvg" /></span>
                    <p>Hi There &#128075; How can I help you today?</p>
                </li>
                <ChatComponent chatText={ chatText } />
            </ul>
            <div className="chat-input w-auto flex justify-between">
                <textarea value={ text } onChange={ onChangeText } placeholder="Enter a message..." className="text flex-1 w-64 mr-2 rounded-bl-2xl rounded-tr-2xl"></textarea>
                <span id="send-btn" className="send mr-2" onClick={ sendText } ><img className="w-7" src={ send } /></span>
            </div>
        </div>
    )
}

const ChatComponent = ({ chatText }) => {
    return (
        <>{
            chatText ?
                <li className="chat outgoing  text-color-1">
                    <p className="mr-2">{ chatText }</p>
                    <span className="mr-2"><img className="rounded-full" src={ notification4 } alt="" /></span>
                </li>
                :
                <li className="chat incoming text-color-1">
                    <span className="w-6 h-6 border-2
                            border-n-12 rounded-full overflow-hidden"><img src={ robotsvg } alt="robotsvg" /></span>
                    <p>Hi There &#128075; How can I help you today?</p>
                </li>

        }
        </>
    )
}

export default Chatwindow
