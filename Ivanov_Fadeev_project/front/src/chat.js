var hidden = false;

function hideChat() {
    var chat = document.querySelector(".live-chat")

    console.log(chat.style);

    if (hidden) {
        chat.style = '';
    } else {
        chat.style = `
            height: 0px;
            overflow: hidden;
            width: 0px;`
    }

    hidden = !hidden;
}