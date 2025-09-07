# 🎶 Advance Discord Music Bot

![Node.js](https://img.shields.io/badge/Node.js-LTS-green?logo=node.js)
![Discord.js](https://img.shields.io/badge/discord.js-v14-blue?logo=discord)
![License](https://img.shields.io/badge/License-MIT-yellow?logo=open-source-initiative)
![Stars](https://img.shields.io/github/stars/yourusername/advance-discord-music-bot?style=social)

An **Advanced Music Bot for Discord** with commands, buttons, 24/7 system, auto-resume, and support for more than 700 websites.

---

## 🚀 Installation | How to Use

### 1️⃣ Install Node.js
Download the latest **LTS** version of [NodeJS](https://nodejs.org/en/).

---

### 2️⃣ Download this repository
Clone the repo or download the `.zip`:
```bash
git clone https://github.com/CookyDevJS/advance-discord-music-bot.git
cd advance-discord-music-bot
```

### 3️⃣ Fill in everything in **`settings/config.js`**

### Modify - **config.js**

```javascript
{
  TOKEN: "BOT_TOKEN",
  PREFIX: "BOT_PREFIX",
  mongodb : "MONGO_URL"
}
```

### Modify - **.env**

**Rename `.env.example` to `.env.` and configure it**

```env
TOKEN=
MONGO_URL=
PREFIX=
GUILD_ID=
```

### 4️⃣ Now Let's Update Node Version. copy and paste in shell:
```bash
npm i --save-dev node@latest && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```

### 5️⃣ Install dependencies:

```bash
``npm install``
```


### 6️⃣ Now we need to install to additional packages **.** <br/>

1.  `npm install @discordjs/opus` - for better audio quality **.** <br/>
2.  `npm install zlib-sync@latest` - for WebSocket data compression and inflation **.** <br/>
3.  `npm install erlpack@latest` - for significantly faster WebSocket **.** <br/>

### 7️⃣ Start the bot with:
```
node index.js
```

## 🎧 Music Bot Features

- 🎵 Easy to use
- 🎶 Supports YouTube, Spotify, SoundCloud and 700+ websites
- ⚡ Supports Slash Commands and prefix commands
- 🔊 24/7 in voice channel
- ⏯️ Auto-resume system
- 📌 Music request channel
- 🎚️ Advanced audio filters
- 🎛️ DJ system
- 🖥️ Works on hosts and VPS
- ⚙️ Built with discord.js v14


## License

[MIT](https://choosealicense.com/licenses/mit/)

# Thanks For Using Music bot Please Give a Star and please give me credit
