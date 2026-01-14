# 长江大学报告厅展示网站

一个现代化的报告厅信息展示网站，采用React + TypeScript + Vite + Tailwind CSS技术栈开发。

## 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **路由管理**: React Router v6
- **状态管理**: Zustand
- **图标库**: Lucide React

## 功能特性

### 首页
- 展示报告厅的网格布局
- 现代化按钮设计，支持悬停效果
- 长江大学校徽展示

### 报告厅详情页
- 展示报告厅基本信息
- 开工时间、竣工时间、主要事宜

## 快速开始

### 安装依赖
```bash
npm install
```

### 开发环境
```bash
npm run dev
```

### 构建项目
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

##  项目结构

```
长江大学报告厅介绍网站/
├── public/                 # 静态资源
│   ├── images/            # 图片资源
│   │   ├── auditoriums/   # 报告厅图片
│   │   ├── campus/        # 校园图片
│   │   ├── icons/         # 图标
│   │   └── logo/          # 校徽Logo
│   └── favicon.svg        # 网站图标
├── src/                   # 源代码
│   ├── components/        # 组件
│   ├── hooks/            # 自定义Hooks
│   ├── lib/              # 工具函数
│   ├── pages/            # 页面组件
│   │   ├── Home.tsx      # 首页
│   │   └── AuditoriumDetail.tsx  # 详情页
│   ├── App.tsx           # 主应用
│   └── main.tsx          # 入口文件
├── vercel.json           # Vercel配置
└── package.json          # 项目配置
```

## 部署

本项目支持多种部署方式，包括GitHub Pages和Vercel。

### GitHub Pages部署（推荐）

#### 1. 安装依赖
```bash
npm install gh-pages --save-dev
```

#### 2. 配置GitHub仓库
- 在GitHub创建新仓库，命名为 `yangtzeu-auditoriums`
- 将代码推送到GitHub

#### 3. 部署到GitHub Pages
```bash
# 构建并部署
npm run deploy

# 或者手动构建后部署
npm run build
npm run deploy
```

#### 4. 启用GitHub Pages
- 进入GitHub仓库设置
- 找到 "Pages" 选项
- 选择部署源为 "Deploy from a branch"
- 选择 `gh-pages` 分支和 `/(root)` 目录
- 点击保存，等待部署完成

#### 5. 访问网站
部署完成后，您的网站将通过以下地址访问：
`https://[your-username].github.io/yangtzeu-auditoriums/`

## 开发说明

### 添加新的报告厅
在 `src/pages/Home.tsx` 中修改 `auditoriums` 数组：

```typescript
const auditoriums = [
  { id: 1, name: '东校区报告厅', building: '教学楼A栋' },
  // 添加新的报告厅...
];
```

### 修改样式
项目使用Tailwind CSS，直接在组件中修改className即可。

### 图片管理
- 报告厅图片：放在 `public/images/auditoriums/` 目录
- 校园图片：放在 `public/images/campus/` 目录
- 图标：放在 `public/images/icons/` 目录
- Logo：放在 `public/images/logo/` 目录

## 许可证

本项目为长江大学定制开发，仅供内部使用。

## 联系方式

如有问题或建议，请联系项目开发团队。

---

**长江大学报告厅展示网站** - 现代化的校园信息展示平台
