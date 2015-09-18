Package.describe({
  name: 'teranas:gw2api',
  summary: 'A simple Guild Wars 2 API wrapper',
  version: '1.0.1-beta',
  git: 'https://github.com/Teranas/gw2api'
});

Package.onUse(function(api) {
  api.use('underscore@1.0.3', ['client', 'server']);
  api.export('GW2API');
  api.addFiles("GW2API.js", ['client', 'server']);
});