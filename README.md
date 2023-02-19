# DiscordBot MyChatGPT

discord bot

## Install

```
git clone https://github.com/LinZap/discordbot-mychatgpt.git
cd discordbot-mychatgpt
npm install
```

## Conifg

add `.env` file 

```
TOKEN=""
CLIENT_ID=""
OPENAI_API_KEY=""
```

## Launch

```
node reg.js
node index.js
```


### Add to Server

Edit `{ClientID}` and copy this url and paste to browser 

```
https://discord.com/api/oauth2/authorize?client_id={ClientID}&permissions=2147485696&scope=bot%20applications.commands
```

# LICENSE 

MIT