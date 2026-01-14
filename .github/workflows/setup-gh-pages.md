# GitHub Pages 设置指南

## 自动部署设置步骤

### 1. 启用 GitHub Pages

1. 进入 GitHub 仓库设置页面
2. 找到 **"Pages"** 选项
3. 在 **"Source"** 部分选择 **"GitHub Actions"**
4. 保存设置

### 2. 权限配置

如果仍然遇到权限问题，请检查以下设置：

#### 方法一：使用 GitHub Pages 官方部署（推荐）
- 使用我们创建的 `deploy-pages.yml` 工作流
- 确保仓库设置中启用了 GitHub Actions 的写入权限

#### 方法二：手动启用 Actions 权限
1. 进入仓库的 **Settings** → **Actions** → **General**
2. 在 **"Workflow permissions"** 部分
3. 选择 **"Read and write permissions"**
4. 勾选 **"Allow GitHub Actions to create and approve pull requests"**
5. 保存设置

### 3. 验证部署

推送代码到 main 分支后：
1. 进入 **Actions** 标签页
2. 查看部署工作流状态
3. 部署成功后，访问：`https://[用户名].github.io/yangtzeu-auditoriums/`

## 手动部署备用方案

如果自动部署仍然有问题，可以使用手动部署：

```bash
# 构建项目
npm run build

# 部署到 GitHub Pages
npm run deploy
```

## 常见问题

### 403 权限错误
- 确保仓库设置中启用了 GitHub Actions 写入权限
- 检查是否正确设置了 GitHub Pages 源为 "GitHub Actions"

### 空白页面
- 确认使用了 HashRouter（已修复）
- 检查构建文件路径是否正确（已修复）

### 图片不显示
- 确认图片路径使用了绝对路径（已修复）
- 检查图片文件是否正确上传到仓库