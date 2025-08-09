const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,

  // Shimming Node core modules that are missing in Expo/React Native
  url: require.resolve('react-native-url-polyfill'),
  events: require.resolve('events/'),
  stream: require.resolve('stream-browserify'),
  http: require.resolve('stream-http'),
  https: require.resolve('https-browserify'),

  eventsource: require.resolve('./emptyShim.js'),
};


module.exports = withNativeWind(config, { input: './global.css' });