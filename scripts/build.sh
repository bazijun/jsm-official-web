#!/usr/bin/env bash

cd ./code
echo === install ===
npm install
echo === 开始构建 ===
npm run build
echo === 启动！ ===
npm run start
