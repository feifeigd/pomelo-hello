@echo off

::call npm-install.bat

pushd game-server
start pomelo start
popd

pushd web-server
start node app.js
popd
