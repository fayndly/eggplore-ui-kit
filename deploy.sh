set -e

npm run build

cd dist

mv index.html 404.html

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:fayndly/eggplore-ui-kit.git master:gh-pages

cd -