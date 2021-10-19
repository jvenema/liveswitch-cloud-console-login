const login = require('../modules/liveswitch-cloud-console-login/login');

(async function() {
    const loginResult = await login()
    console.log('API key: ', loginResult.apiKey)
})();
