const login = require('../index.js');

(async function() {
    const loginResult = await login()
    console.log('API key: ', loginResult.apiKey)
})();
