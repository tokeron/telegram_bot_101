/**
 * This is a basic bot.
 */


/**
 * Execution of requestes of users (Main function)
 * @param {class} JSON
 */
function doPost(e){
  var contents = JSON.parse(e.postData.contents);
  var dataBaseEx = SpreadsheetApp.openByUrl(dataBase);
  
  //internal keyboard command - different from regular text
  if (contents.callback_query){
    handleCallback(contents);
  }
  //external massage command - same as regular text
  else if (contents.message){
    handleMessage(contents);
  }
}

/**
 * Handle internal command.
 * Internal keyboard command - different from regular text
 */
function handleCallback(contents){
  var id = contents.callback_query.from.id;
  var data = contents.callback_query.data;
  var name = contents.callback_query.from.first_name;
  
  sendText(id, "Hello!");
}

/**
 * Handle regular massage
 */
function handleMessage(contents){
  var id = contents.message.from.id;
  var name = contents.message.from.first_name;
  var text = contents.message.text;
  
  sendText(id, "Hello!");
}

/**
 * Run every time webAppUrl is changed to connect the bot with this new webAppUrl
 * Set webhook for the bot.
 * prints the results to the logger.
 */
 function setWebhook() {
  var response =  UrlFetchApp.fetch(url + "/setWebhook?url=" + webAppUrl);
  Logger.log(response.getContentText());
}


/**
 * Set webhook for the bot.
 * prints the results to the logger.
 */
 function deleteWebhook() {
  var response =  UrlFetchApp.fetch(url + "/deleteWebhook");
  Logger.log(response.getContentText());
}


/**
 * Sends text with optional internal keyboard.
 * @param {(String|Number)} chatId Identifier of the chat to send the text to.
 * @param {String} text The text to send.
 * @param {TelegramInlineKeyboard} keyboard The inline keyboard to send.
 * @return {TelegramMessage} the sent message.
 */
function sendText(chatId, text, keyboard) {
  var data = {
    method: "post",
    payload: {
      method: "sendMessage",
      chat_id: String(chatId),
      text: text,
      parse_mode: "HTML",
      reply_markup: JSON.stringify({
        "inline_keyboard": keyboard,
      })
    }
  };
  return JSON.parse(UrlFetchApp.fetch('https://api.telegram.org/bot' + token + '/', data).getContentText()).result;
}

