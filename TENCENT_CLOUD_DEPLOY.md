# 腾讯云部署指南

本项目已经配置为适配腾讯云部署环境（根路径部署）。

## 部署方式一：腾讯云 Web 应用托管 (CloudBase) - 推荐

1. 登录腾讯云控制台，搜索 **CloudBase** 或 **云开发**。
2. 创建一个环境（按量付费或包年包月）。
3. 进入 **静态网站托管**。
4. 执行构建命令：
   ```bash
   npm run build
   ```
5. 将 `dist` 目录下的所有文件上传到静态网站托管的根目录。
6. 在 **基础配置** -> **错误文档** 中，将其设置为 `index.html`（这对单页应用至关重要，防止刷新 404）。

## 部署方式二：云服务器 (CVM) + Nginx

1. 购买一台 CVM 服务器（推荐 CentOS 或 Ubuntu）。
2. 安装 Nginx：
   ```bash
   # CentOS
   sudo yum install nginx
   # Ubuntu
   sudo apt install nginx
   ```
3. 执行构建命令：
   ```bash
   npm run build
   ```
4. 将 `dist` 目录上传到服务器（例如 `/usr/share/nginx/html`）。
5. 使用项目根目录下的 `nginx.conf` 替换或合并到服务器的 Nginx 配置中。
   * 关键配置是 `try_files $uri $uri/ /index.html;`，用于支持 SPA 路由。
6. 重启 Nginx：
   ```bash
   sudo systemctl restart nginx
   ```

## 部署方式三：对象存储 (COS) + CDN

1. 创建一个 COS 存储桶，开启 **静态网站** 功能。
2. 将 `dist` 目录内容上传到存储桶。
3. 配置 **CDN 加速**（推荐），绑定自定义域名。
4. 确保在 CDN 或 COS 静态网站设置中，将 **错误文档** 设置为 `index.html`。

## 注意事项

*   **构建路径**: 项目已配置为根路径 (`/`) 部署。如果您需要部署在子目录下（例如 `www.example.com/myapp/`），请修改 `vite.config.ts` 中的 `base` 配置。
*   **路由模式**: 项目目前使用 `HashRouter` (URL 带 `#`)。如果您希望使用 `BrowserRouter` (无 `#`)，请修改 `src/App.tsx`，将 `HashRouter` 替换为 `BrowserRouter`，并确保服务器配置了 rewrite 规则（如上述 Nginx 配置）。
