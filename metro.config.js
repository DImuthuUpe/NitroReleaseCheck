const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
const nitroRoot = path.resolve(__dirname, 'nitro');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
    watchFolders: [nitroRoot]
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
