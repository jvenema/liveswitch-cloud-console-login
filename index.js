const login = async function(clientId) {
  clientId = clientId || 'Ink6J3cK05PMTl9mPaeydKaY8z1koNDe';
  return new Promise(resolve => {
    const express = require('express')
    const app = express()

    app.get('/', (req, res) => {
      
      res.send(`
      <html>
      <head>
      <style>
      body {
        font-family: sans-serif;
        font-size: 18px;
        text-align: center;
        margin-top: 15%;
        color: white;
        background-color: #222;
      }
      </style>
      </head>
      <body>
      LiveSwitch login successful! You may now close this window.
      </body>
      </html>`)

      process.stdout.write("success!");
      console.log("");// newline
      resolve(req.query)
      server.close()
    })

    let server = app.listen(0, () => {
      const open = require('open');
      open('https://auth.frozenmountain.com/authorize?client_id=' + clientId + '&response_type=code&redirect_uri=https%3A%2F%2Fapi.liveswitch.io%2Fauth0%2Fcallback&scope=openid%20email%20profile%20user_metadata%20app_metadata&state=%7B%20%22redirectUri%22%20%3A%20%22http%3A%2F%2F' + 'localhost:' + server.address().port + '%2F%23%2F%22%20%7D&path=%2F&auth0Client=')
      process.stdout.write('Waiting for authentication to complete, please log in to the LiveSwitch console using the browser window that just opened...')
    })
  })
};
module.exports = login
