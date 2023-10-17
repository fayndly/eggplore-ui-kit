#!/bin/bash
source .env

set -e

npm run build

cd dist

mv index.html 404.html

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:fayndly/VITE_REPO_NAME.git master:gh-pages

cd -