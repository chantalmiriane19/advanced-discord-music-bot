# Music API Setup Guide

This guide will help you set up API credentials for Spotify and SoundCloud to enhance your Discord Music Bot's functionality.

## Why Configure API Credentials?

While the bot can work without API credentials, configuring them provides several benefits:

- **Better Rate Limits**: Avoid rate limiting issues when multiple users request songs
- **Improved Reliability**: Direct API access provides more stable connections
- **Enhanced Features**: Access to additional metadata and features from music platforms
- **Faster Response Times**: Direct API calls are often faster than web scraping

## Spotify API Setup

### Step 1: Create a Spotify Developer Account

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account (or create one if you don't have it)
3. Accept the Terms of Service if prompted

### Step 2: Create a New App

1. Click on **"Create an App"** button
2. Fill in the required information:
   - **App Name**: Choose a name (e.g., "Discord Music Bot")
   - **App Description**: Brief description (e.g., "Music bot for Discord server")
   - **Redirect URI**: You can leave this empty or use `http://localhost`
3. Check the boxes to agree to Spotify's Terms of Service and Design Guidelines
4. Click **"Create"**

### Step 3: Get Your Credentials

1. In your app dashboard, you'll see:
   - **Client ID**: Copy this value
   - **Client Secret**: Click "Show Client Secret" and copy this value
2. Keep these credentials secure and never share them publicly

### Step 4: Add to Your Bot Configuration

Open your `.env` file and add:

```env
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
```

## SoundCloud API Setup

### Step 1: Register Your Application

1. Go to [SoundCloud Developers](https://developers.soundcloud.com/)
2. Sign in with your SoundCloud account
3. Navigate to "Your Apps" or "Register a new app"

### Step 2: Create a New App

1. Fill in the application details:
   - **App Name**: Choose a name for your application
   - **Description**: Brief description of your bot
2. Submit the application form

### Step 3: Get Your Client ID

1. Once approved, you'll receive a **Client ID**
2. Copy this Client ID

### Step 4: Add to Your Bot Configuration

Open your `.env` file and add:

```env
SOUNDCLOUD_CLIENT_ID=your_soundcloud_client_id_here
```

## Deezer

**Good News!** The Deezer plugin doesn't require API credentials. It works out of the box without any additional configuration.

## Testing Your Configuration

After adding the API credentials to your `.env` file:

1. Restart your bot
2. Try playing a song from Spotify: `/play spotify:track:...` or `/play [Spotify URL]`
3. Try playing a song from SoundCloud: `/play [SoundCloud URL]`

If configured correctly, the bot should be able to:
- Resolve Spotify track/playlist/album URLs
- Resolve SoundCloud track/playlist URLs
- Provide better metadata and information about tracks

## Troubleshooting

### "Invalid Client" Error
- Double-check your Client ID and Client Secret
- Make sure there are no extra spaces in the `.env` file
- Ensure the credentials are for the correct platform

### Rate Limiting Issues
- Make sure you're using your own API credentials and not sharing them
- Check your Spotify/SoundCloud developer dashboard for usage limits

### Bot Not Playing Music from Specific Platform
- Verify the API credentials are correctly set in `.env`
- Restart the bot after adding/changing credentials
- Check the bot logs for specific error messages

## Security Best Practices

1. **Never commit your `.env` file to version control**
   - The repository includes `.env` in `.gitignore` by default
   
2. **Keep your credentials secure**
   - Don't share them in Discord channels or public forums
   - Don't include them in screenshots

3. **Regenerate compromised credentials**
   - If you accidentally expose your credentials, regenerate them immediately from the respective developer dashboards

4. **Use environment variables**
   - The bot uses environment variables to keep credentials separate from code
   - This is a security best practice

## Additional Resources

- [Spotify Web API Documentation](https://developer.spotify.com/documentation/web-api)
- [SoundCloud API Documentation](https://developers.soundcloud.com/docs/api/guide)
- [DisTube Documentation](https://distube.js.org/)

## Need Help?

If you encounter issues:
1. Check the bot's console logs for error messages
2. Review this guide to ensure all steps were followed correctly
3. Check the [GitHub Issues](https://github.com/QTechDevelopment/advanced-discord-music-bot/issues) page
4. Create a new issue if your problem isn't already addressed
