# LiveSwitch Cloud Console Login
Simple login module that logs a user into the LiveSwitch Cloud console and provides an API key and user id back. Useful for getting application ids without having to force a copy/paste from the console manually.

# Sample Usage

Install the package
```bash
npm install @jvenema/liveswitch-cloud-console-login
```

Use the package
```js
const login = require('@jvenema/liveswitch-cloud-console-login');

(async function() {
    const loginResult = await login()
    console.log('API key: ', loginResult.apiKey)
})();
```


# Test

```bash
cd tests
npm install
node login-test.js
```


[![npm package](https://github.com/jvenema/liveswitch-cloud-console-login/actions/workflows/publish-to-npm.yaml/badge.svg)](https://github.com/jvenema/liveswitch-cloud-console-login/actions/workflows/publish-to-npm.yaml)
