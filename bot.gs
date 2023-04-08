function doPost(e) {
  var update = JSON.parse(e.postData.contents);
  var chat_id = update.message.chat.id;
  var text = update.message.text;
  var response = generateResponse(text);
  sendMessage(chat_id, response);
}

function generateResponse(text) {
  // Add your ChatGPT code here to generate a response based on the user's message
  return "This is a generated response.";
}

function sendMessage(chat_id, text) {
  var payload = {
    method: "post",
    payload: {
      chat_id: String(chat_id),
      text: text,
    },
  };
  UrlFetchApp.fetch("https://api.telegram.org/bot5868226933:AAFy1q82S2xe2SK6yfkG2HmGytk1NlCRLlg/sendMessage", payload);
}
