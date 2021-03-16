import consumer from "./consumer";

const initChatroomCable = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;

    consumer.subscriptions.create({ channel: "ChatroomChannel", id: id }, {
      received(updates) {
        messagesContainer.insertAdjacentHTML('beforeend', updates);
      },
    });
  }
}

export { initChatroomCable };