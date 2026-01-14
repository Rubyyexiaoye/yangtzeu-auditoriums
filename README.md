# 长江大学报告厅展示网站

一个现代化的报告厅信息展示网站，采用React + TypeScript + Vite + Tailwind CSS技术栈开发。

## 🌟 项目特色

- **现代化设计**: 采用蓝白色调，符合大学官方色彩
- **响应式布局**: 完美适配桌面端、平板和移动设备
- **流畅交互**: 丰富的悬停效果和过渡动画
- **简洁界面**: 信息层次清晰，用户体验友好

## 🚀 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式框架**: Tailwind CSS
- **路由管理**: React Router v6
- **状态管理**: Zustand
- **图标库**: Lucide React

## 📋 功能特性

### 首页
- 展示12个报告厅的网格布局
- 现代化按钮设计，支持悬停效果
- 长江大学校徽展示

### 报告厅详情页
- 展示报告厅基本信息
- 开工时间、竣工时间、主要事宜
- 双语展示（中文/英文）

## 🎯 快速开始

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

## 📁 项目结构

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

## 🚀 部署

本项目已配置Vercel部署，支持一键部署到云端。

### Vercel部署步骤
1. 将代码推送到GitHub
2. 访问 [Vercel](https://vercel.com)
3. 导入GitHub仓库
4. 自动部署

## 📸 截图展示

*首页展示*
- 现代化按钮设计
- 响应式网格布局
- 优雅的渐变背景

*详情页展示*
- 清晰的信息层次
- 双语内容展示
- 精美的视觉设计

## 🔧 开发说明

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

## 📄 许可证

本项目为长江大学定制开发，仅供内部使用。

## 👥 联系方式

如有问题或建议，请联系项目开发团队。

---

**长江大学报告厅展示网站** - 现代化的校园信息展示平台