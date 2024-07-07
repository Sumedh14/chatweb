const chatInput = document.querySelector('.text');
const sendChatBtn = document.querySelector('.send');

let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement('li');
    chatLi.classList.add('chat', className);
    let chatContact = className === "outgoing" ? `<p>${message}</p>` : ` <span className="material-symbols-outlined">${messsage}</span>`
    chatLi.innerHTML = chatContact;
    return chatLi;
}

const handleChat = () => {
    let userMessage = chatInput.value.trim();
    if (!userMessage) return;

    createChatLi(userMessage, "outgoing")
}

sendChatBtn.addEventListener('click', handleChat)