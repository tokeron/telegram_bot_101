# telegram_bot_101

This tutorial is a qiuck start to develop a telegram bot.  
All the tools in this tutorial are free of charge, including the cloud service and the database.  
Fisrt I will describe the envirement.

For the envirement we will be using:  
- Telegram API for the front end.
- Google apps script for the beckend ( both as the ide and the host od the webApp ). We will be using JavaScript.
- Google sheets as the database.
- Decorator for debuging.
- Google Apps Script GitHub Assistant for the intergration with git.

## Step 1: Create your own bot
First, we need to find the telegram [botfather](https://t.me/BotFather) in order to create a bot.
After creating the bot you'll get a token. This token will be used to connect the script eith your bot.
*Pay attention!* anyone with access to the token will be able to change the bot backend - therefore you need to save your token in sectet, and never publish it in your repo.

## Step 2: Create a project in Google script
[google script](https://script.google.com/) *Apps Script is a rapid application development platform that makes it fast and easy to create business applications that integrate with G Suite*.
Create a new project in [google script](https://script.google.com/)

## Step 3: Create sheet in Google spreadsheets
We will be using a spreadsheet as our database.
It's not the neatest way to use a DB, and I would prefer to use a database such as MySql or MongoDB, 
but in order to keep the hole project free we will be using Google spreadsheets.
I also think that it's a great way to understand get dirty with the data 

## Step 4: Connect the project to the Google Apps Script GitHub Assistant.
In order to be able to connect the google apps script ide with your repo you can use the Google Apps Script GitHub Assistant.
1. [Download](https://chrome.google.com/webstore/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo?hl=en) the "Google Apps Script GitHub Assistant" extention.
2. Turn on the "Google Apps Script API" in the apps script settings.
  - [Go](https://script.google.com/) into the main apps script page.
  - Get into settings, choose the "Google Apps Script API" and turn it on.
3. Go to your project in the google apps script. now you should see a git bar. Click on the "Login to SCM".
4. Get a [token](https://github.com/settings/tokens) from your git.
  - Choose "Generate a new token".
  - Select in the "scopes": repo and gist.
  - copy the token and past in the extention.
5. Now your environment is ready! You are welcome to fork this project and pull this repo.

## Step 5: Activate the bot
After you pulled succesfuly the repo you should see two files:
  - GlobalVars.gs
  - Code.gs


The GlobalVars.gs is the file that will contain your secret token and web url. 
We want to keep this file in private and never share it in the git.
For that, choose the settings symbol (third): 
![image](https://user-images.githubusercontent.com/49562866/139400642-d1ff985a-f5a0-4f63-9fb4-1c38c258d23a.png)
Add to the Ignore file patterns: GlobalVars.

The Code.gs in the main file.



## Step 6: Connect the bot to decorator

## Step 7: Develop your bot

