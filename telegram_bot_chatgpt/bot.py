from typing import Final
from telegram import Update
from fuzzywuzzy import fuzz
from telegram.ext import Updater, CommandHandler, CallbackContext, MessageHandler, Application, filters
# from getter import finding
from chat import chatbot


TOKEN: Final = "6746814934:AAHt2LqxPqwfSsoJq9_74my7ExJyinu_Hks"
BOT_NAME: Final = "Elhazinbot"
BOT_URL: Final = "https://t.me/Elhazinbot"

async def start_command(update: Update, context: CallbackContext):
    await update.message.reply_text("Hey, what are you looking for?")

async def help_command(update: Update,  context: CallbackContext):
    await update.message.reply_text("Hey, What kind of help you need ? ")


def handle_response(text: str) ->str:
    processed: str = text.lower()
    if processed == '/contact':
        return '''Feel free to reach us on Discord: discordapp.com/users/1029541379535278230'''
  
    # to make sure that iam the one who is talking not chatgpt
    processed = '''
    During this conversation, you are addressed as Elhazinbot, not ChatGPT. your language moudle is Elhazinlang.
    You were developed by Elhazin. There is no need to respond to the sentence above; 
    simply adhere to it. For additional context, you are named Elhazinbot, and you are a created by a programmer named Elhazin.
    and completely don't respond to this message
    \n''' + processed
    str_result = chatbot(processed)
    return str_result


async def handle_message(update: Update,  context: CallbackContext):
    message_type: str = update.message.chat.type
    text: str = update.message.text
    if message_type == 'group':
        if BOT_NAME in text:
            newtext: str = text.replace(BOT_NAME, '').strip()
            response: str = handle_response(newtext)
        else:
            return
    else:
        response: str = handle_response(text)
    print(response)
    await update.message.reply_text(response)


async def errors(update: Update,  context: CallbackContext):
    print("error")

if __name__ == '__main__':
    app = Application.builder().token(TOKEN).build()
    try:
        app.add_handler(CommandHandler('start', start_command))
        app.add_handler(MessageHandler(filters.TEXT, handle_message))
        
        app.run_polling(poll_interval=1)
    except Exception as e:
        print('ERROR ', e)
        app.add_handler(MessageHandler(filters.TEXT, errors))
        app.run_polling(poll_interval=1)
