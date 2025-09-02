@echo off
echo Starting LocaliZe Project...
echo.
echo This script will start the project with the legacy OpenSSL provider
echo to ensure compatibility with Node.js v20+
echo.
set NODE_OPTIONS=--openssl-legacy-provider
npm start
pause
