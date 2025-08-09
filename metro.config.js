const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,

  // Polyfill these node core modules with your installed npm packages
  url: require.resolve('react-native-url-polyfill'),
  events: require.resolve('events/'),
  http: require.resolve('stream-http'),
  https: require.resolve('https-browserify'),
  stream: require.resolve('stream-browserify'),
  util: require.resolve('util'), 

  // Your eventsource shim to avoid bundling the node one which breaks rn
  eventsource: require.resolve('./emptyShim.js'),
};

module.exports = withNativeWind(config, { input: './global.css' });
