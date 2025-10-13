# 部署指南

## 项目完成状态

✅ 项目已完全构建完成
✅ 所有TypeScript错误已修复
✅ 生产构建成功（dist目录）
✅ 所有组件正常工作

## 本地开发

```bash
cd server-portal
npm install
npm run dev
```

访问 http://localhost:5173

## 生产构建

```bash
cd server-portal
npm run build
```

构建产物在 `dist` 目录

## 部署到GitHub

由于网络问题，请手动执行以下命令：

```bash
# 1. 确保在项目根目录
cd "C:\Personal\Azure Glance"

# 2. 忽略子模块问题
git restore "archives/veloai-legacy/VeloAI 旧项目200+错误"

# 3. 添加所有更改
git add .

# 4. 提交
git commit -m "完整的主站项目 - 可直接部署"

# 5. 推送到GitHub（需要网络连接）
git push -u origin main --force
```

## 部署到Vercel/Netlify

### Vercel
1. 导入GitHub仓库
2. 设置构建命令：`cd server-portal && npm run build`
3. 设置输出目录：`server-portal/dist`
4. 部署

### Netlify
1. 导入GitHub仓库
2. 设置构建命令：`cd server-portal && npm run build`
3. 设置发布目录：`server-portal/dist`
4. 部署

## 环境要求

- Node.js 16+
- npm 7+

## 项目特性

- ✅ 响应式设计
- ✅ 现代化UI（Tailwind CSS）
- ✅ 项目展示（带状态筛选）
- ✅ AI认证展示
- ✅ 技术栈展示（分类切换）
- ✅ 个人介绍
- ✅ 平滑滚动导航
- ✅ 动态打字效果
- ✅ 图片错误处理
- ✅ TypeScript类型安全

## 自定义内容

修改以下文件来更新内容：

- `src/components/Projects.tsx` - 项目和证书数据
- `src/components/About.tsx` - 个人信息和经历
- `src/components/TechStack.tsx` - 技术栈数据
- `src/components/Hero.tsx` - 首页标题和描述

## 注意事项

1. 图片使用了Unsplash占位图，建议替换为实际项目图片
2. 邮箱和链接需要更新为真实地址
3. 项目链接目前是示例链接，需要更新为实际URL
