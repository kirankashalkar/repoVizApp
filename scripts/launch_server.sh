#!/bin/bash

# Kill app if already running
kill `ps -ef | grep 'node app.js' | grep -v grep | awk '{print $2}'` 2> /dev/null
kill `ps -ef | grep 'redis-server' | grep -v grep | awk '{print $2}'` 2> /dev/null

# Generate CSS from SCSS
echo "Running bundle to generate CSS from SCSS..."
sass public/stylesheets/app.scss:public/stylesheets/app.css
echo "Running bundle to generate CSS from SCSS...done"

# Run the app
echo "Running node app.js"
node app.js
