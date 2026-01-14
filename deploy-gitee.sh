#!/bin/bash

# Gitee Pages 部署脚本
# 用于手动部署到 Gitee Pages

echo "开始构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "构建失败，请检查错误信息"
    exit 1
fi

echo "创建部署分支..."
git checkout -B gh-pages

echo "复制构建文件..."
cp -r dist/* .
cp dist/.* . 2>/dev/null || true

echo "添加 CNAME 文件..."
echo "yangtzeu-auditoriums" > CNAME

echo "提交更改..."
git add .
git commit -m "Deploy to Gitee Pages - $(date)"

echo "推送到远程仓库..."
git push origin gh-pages --force

echo "部署完成！请访问：https://[您的用户名].gitee.io/yangtzeu-auditoriums"

echo "切换回主分支..."
git checkout main