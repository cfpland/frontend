#!/usr/bin/env bash

git config --global user.email "autodeployer@pcto.co"
git config --global user.name "autodeployer"
git clone https://karllhughes:$GITHUB_API_KEY@github.com/portable-cto/cfpland-frontend
cd cfpland-frontend
npm install
npm run deploy
