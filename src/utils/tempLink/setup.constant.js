// @params {object} setups - Object containing all the setups for the apps
// @params {string} setups[app] - Name of the app
// @params {object} setups[app][platform] - Object containing the app details for the platform
// @params {string} setups[app][platform][appName] - Name of the app
// @params {string} setups[app][platform][appId] - App ID for the platform
// @params {string} setups[app][platform][storeUrl] - App store URL for the platform
// @params {boolean} setups[app][platform][androidDisabled] - Whether to disable the app for Android
// @params {boolean} setups[app][platform][fallback] - Whether to use fallback
// @params {boolean} setups[app][platform][fallbackToWeb] - Whether to use fallback to web
// @params {number} setups[app][platform][delay] - Delay in milliseconds before redirecting to the app store
// @params {number} setups[app][platform][delta] - Delta in milliseconds before redirecting to the app store

export  const setups ={
    "twitter": {
      iOS: {
        appName: 'Twitter',
        appId: 'id333903271', // Example Twitter app ID for iOS
        storeUrl: 'https://apps.apple.com/us/app/twitter/id333903271', // Example Twitter app store URL for iOS
      },
      android: {
        appId: 'com.twitter.android', // Example Twitter app ID for Android
        storeUrl: 'market://details?id=com.twitter.android', // Example Twitter Play Store URL for Android
      },
      androidDisabled: false,
      fallback: true,
      fallbackToWeb: false,
      delay: 1000,
      delta: 500,
    },
  
    "slack": {
      iOS: {
        appName: 'Slack',
        appId: 'id618783545', // Example Slack app ID for iOS
        storeUrl: 'https://apps.apple.com/us/app/slack/id618783545', // Example Slack app store URL for iOS
      },
      android: {
        appId: 'com.Slack', // Example Slack app ID for Android
        storeUrl: 'market://details?id=com.Slack', // Example Slack Play Store URL for Android
      },
      androidDisabled: false,
      fallback: true,
      fallbackToWeb: false,
      delay: 1000,
      delta: 500,
    },
  
    "youtube": {
      iOS: {
        appName: 'YouTube',
        appId: '544007664', // Example YouTube app ID for iOS
        storeUrl: 'https://apps.apple.com/us/app/youtube-watch-listen-stream/id544007664', // Example YouTube app store URL for iOS
      },
      android: {
        appId: 'com.google.android.youtube', // Example YouTube app ID for Android
        storeUrl: 'market://details?id=com.google.android.youtube', // Example YouTube Play Store URL for Android
      },
      androidDisabled: false,
      fallback: true,
      fallbackToWeb: false,
      delay: 1000,
      delta: 500,
    },
  
    "discord": {
      iOS: {
        appName: 'Discord',
        appId: '985746746', // Example Discord app ID for iOS
        storeUrl: 'https://apps.apple.com/us/app/discord-talk-chat-hang-out/id985746746', // Example Discord app store URL for iOS
      },
      android: {
        appId: 'com.discord', // Example Discord app ID for Android
        storeUrl: 'market://details?id=com.discord', // Example Discord Play Store URL for Android
      },
      androidDisabled: false,
      fallback: true,
      fallbackToWeb: false,
      delay: 1000,
      delta: 500,
    },
  
    "instagram": {
      iOS: {
        appName: 'Instagram',
        appId: 'id389801252', // Example Instagram app ID for iOS
        storeUrl: 'https://apps.apple.com/us/app/instagram/id389801252', // Example Instagram app store URL for iOS
      },
      android: {
        appId: 'com.instagram.android', // Example Instagram app ID for Android
        storeUrl: 'market://details?id=com.instagram.android', // Example Instagram Play Store URL for Android
      },
      androidDisabled: false,
      fallback: true,
      fallbackToWeb: false,
      delay: 1000,
      delta: 500,
    },
  
    "linkedin": {
      iOS: {
        appName: 'LinkedIn',
        appId: '288429040', // Example LinkedIn app ID for iOS
        storeUrl: 'https://apps.apple.com/us/app/linkedin/id288429040', // Example LinkedIn app store URL for iOS
      },
      android: {
        appId: 'com.linkedin.android', // Example LinkedIn app ID for Android
        storeUrl: 'market://details?id=com.linkedin.android', // Example LinkedIn Play Store URL for Android
      },
      androidDisabled: false,
      fallback: true,
      fallbackToWeb: false,
      delay: 1000,
      delta: 500,
    },
  
    "snapchat": {
      iOS: {
        appName: 'Snapchat',
        appId: '447188370', // Example Snapchat app ID for iOS
        storeUrl: 'https://apps.apple.com/us/app/snapchat/id447188370', // Example Snapchat app store URL for iOS
      },
      android: {
        appId: 'com.snapchat.android', // Example Snapchat app ID for Android
        storeUrl: 'market://details?id=com.snapchat.android', // Example Snapchat Play Store URL for Android
      },
      androidDisabled: false,
      fallback: true,
      fallbackToWeb: false,
      delay: 1000,
      delta: 500,
    },
  };
  