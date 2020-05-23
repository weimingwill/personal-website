#!/bin/bash
npm run generate
mkdir -p ./public/src
mkdir -p ./public/src/assets
cp -r ./src/assets/images ./public/src/assets/
cp 404.html ./public/