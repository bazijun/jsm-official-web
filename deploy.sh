#!/bin/bash

echo "请输入提交信息"
read commit_input

git add .
git commit -m "$commit_input"
git push
s deploy -y --use-local
