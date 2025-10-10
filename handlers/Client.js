const {
  Client,
  Collection,
  GatewayIntentBits,
  Partials,
  User,
  EmbedBuilder,
  Options,
} = require("discord.js");
const fs = require("fs");
const Distube = require("distube").default;
const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");
const { DeezerPlugin } = require("@distube/deezer");
const { filters, options } = require("../settings/config");
const { YtDlpPlugin } = require("@distube/yt-dlp");

class JUGNU extends Client {
  constructor() {
    super({
      partials: [
        Partials.Channel,
        Partials.GuildMember,
        Partials.Message,
        Partials.User,
      ],
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
      ],
      shards: "auto",
      failIfNotExists: false,
      allowedMentions: {
        parse: ["everyone", "roles", "users"],
        users: [],
        roles: [],
        repliedUser: false,
      },
    });

    this.events = new Collection();
    this.cooldowns = new Collection();
    this.mcommands = new Collection();
    this.commands = new Collection();
    this.aliases = new Collection();
    this.shuffleData = new Collection();
    this.mcategories = fs.readdirSync("./Commands/Message");
    this.scategories = fs.readdirSync("./Commands/Slash");
    this.temp = new Collection();
    this.config = require("../settings/config");
    
    // Initialize plugins with API credentials if available
    const plugins = [];
    
    // Spotify Plugin with API credentials
    const spotifyOptions = {
      emitEventsAfterFetching: true,
      parallel: true,
    };
    if (this.config.apiKeys.spotify.clientId && this.config.apiKeys.spotify.clientSecret) {
      spotifyOptions.api = {
        clientId: this.config.apiKeys.spotify.clientId,
        clientSecret: this.config.apiKeys.spotify.clientSecret,
      };
    }
    plugins.push(new SpotifyPlugin(spotifyOptions));
    
    // SoundCloud Plugin with API credentials
    const soundcloudOptions = {};
    if (this.config.apiKeys.soundcloud.clientId) {
      soundcloudOptions.clientId = this.config.apiKeys.soundcloud.clientId;
    }
    plugins.push(new SoundCloudPlugin(soundcloudOptions));
    
    // Deezer Plugin (no API credentials required)
    plugins.push(new DeezerPlugin());
    
    // YtDlp Plugin
    plugins.push(new YtDlpPlugin({
      update: false,
    }));
    
    this.distube = new Distube(this, {
      leaveOnEmpty: false,
      leaveOnFinish: false,
      leaveOnStop: true,
      plugins: plugins,
      emitNewSongOnly: false,
      savePreviousSongs: true,
      searchSongs: 0,
      customFilters: filters,
      ytdlOptions: {
        highWaterMark: 1024 * 1024 * 64,
        quality: "highestaudio",
        format: "audioonly",
        liveBuffer: 60000,
        dlChunkSize: 1024 * 1024 * 4,
      },
    });
  }

  start(token) {
    ["handler", "DistubeEvents", "utils"].forEach((handler) => {
      require(`./${handler}`)(this);
    });
    this.login(token);
  }
  /**
   *
   * @param {User} user
   * @returns
   */
  getFooter(user) {
    let obj = {
      text: `Requested By ${user.username}`,
      iconURL: user.displayAvatarURL(),
    };
    if (options.embedFooter) {
      return obj;
    } else {
      return {
        text: " ",
        iconURL: " ",
      };
    }
  }

  embed(interaction, data) {
    let user = interaction.user ? interaction.user : interaction.author;
    if (interaction.deferred) {
      interaction
        .followUp({
          embeds: [
            new EmbedBuilder()
              .setColor(this.config.embed.color)
              .setDescription(`>>> ${data.substring(0, 3000)}`)
              .setFooter(this.getFooter(user)),
          ],
        })
        .catch((e) => {});
    } else {
      interaction
        .reply({
          embeds: [
            new EmbedBuilder()
              .setColor(this.config.embed.color)
              .setDescription(`>>> ${data.substring(0, 3000)}`)
              .setFooter(this.getFooter(user)),
          ],
        })
        .catch((e) => {});
    }
  }
}

module.exports = JUGNU;
