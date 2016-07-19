# final assessment

Application searches Spotify artists database.

It uses Autodesk's 3-legged authentication, so due to application definition proper endpoint is required as a callback when server runs on localhost.

For MS Windows add line:

127.0.0.1 www.fa.com

to the file C:\Windows\System32\drivers\etc\hosts

For the same reason server must run on port 8000.

Application uses public APIs:

https://developer.api.autodesk.com

https://api.spotify.com


After cloning the repository, run:

npm install

bower install

node index.js



