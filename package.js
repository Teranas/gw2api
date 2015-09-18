Package.describe({
  name: 'teranas:gw2api',
  summary: 'A simple Guild Wars 2 API wrapper',
  version: '1.0.0',
  git: ''
});

Package.onUse(function(api) {
  api.export('GW2API');
  api.addFiles("GW2API.js", 'server');
});