const nanoexpress = require('..');

const app = nanoexpress();

app.get('/', async (req) => {
  return 'ip address is ' + req.getIP();
});

app.listen('127.0.0.1', 4000);
