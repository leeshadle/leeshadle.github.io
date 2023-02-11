# bhoc

run "bash start.sh" to start local python server

# To share with the world
Install Localtunnel globally (requires NodeJS) to make it accessible anywhere:

## npm install -g localtunnel
Start a webserver on some local port (eg http://localhost:8000) and use the command line interface to request a tunnel to your local server:

## lt --port 8005
You will receive a url, for example https://gqgh.localtunnel.me, that you can share with anyone for as long as your local instance of lt remains active. Any requests will be routed to your local service at the specified port.
