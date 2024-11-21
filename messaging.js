// messaging.js
document.addEventListener('DOMContentLoaded', function() {
    const messageInput = document.querySelector('.message-input input');
    const sendMessageButton = document.querySelector('.message-input button');
    const messagesContainer = document.querySelector('.messages');

    // Function to send a message
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            // Create a new message element
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'sent');
            messageElement.innerHTML = `
                <p>${messageText}</p>
                <span class="timestamp">${new Date().toLocaleTimeString()}</span>
            `;
            
            messagesContainer.appendChild(messageElement);

            messagesContainer.scrollTop = messagesContainer.scrollHeight;

            messageInput.value = "";

        }
    }

    sendMessageButton.addEventListener('click', sendMessage);

    messageInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
