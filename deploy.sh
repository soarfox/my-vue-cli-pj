#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# 部署到 https://soarfox.github.io
# 已將下方master改成main
# git push -f git@github.com:soarfox/soarfox.github.io.git main

# 部署到 https://soarfox.github.io/my-vue-cli-pj2
# 已將下方master改成main, 替換成自己的帳號與repository網址, 記得要把預設的<>符號都拿掉
# git push -f git@github.com:soarfox/my-vue-cli-pj2.git main:gh-pages
# 上方那句無效, 故改用Wendy同學筆記裡的方式, 如下方那一行, 且儲存本檔案後, 請務必要找任意一個.vue檔案並更動其內容後儲存, 並且在VScode左側寫上commit註解及進行提交後, (在Windows作業系統下)請打開資料夾視窗, 請對本專案資料夾按下右鍵, 選擇以"git Bash here"方式打開bash視窗, 輸入這個指令sh deploy.sh後, 即可成功看到github上有gh-pages分支了, 請記得一定要做前述更動任意一個.vue檔案的動作, 這樣子使用指令sh deploy.sh後才會看到gh-pages分支
git push -f https://github.com/soarfox/my-vue-cli-pj2.git main:gh-pages

cd -