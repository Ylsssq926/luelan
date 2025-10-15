# 服务器导航与项目索引

本仓库用于统一管理与导航你的所有项目。主站 server-portal 保持在根目录，其余应用统一归档在 apps/ 下，历史内容在 archives/。

## 目录结构
- server-portal：主站（自我介绍与服务器导航主页）
- apps/：独立应用与游戏项目
- archives/：旧版本与打包归档（如 packages/）
- docs/：说明文档
- assets/、scripts/、tmp：资源、脚本与临时目录

## 应用索引（apps/）
- ai-navigation
- ai-novel
- game-2048maomao
- game-ai-love
- game-diablo
- game-jinyong
- game-wzmx
- game-yxdt
- idea
- sapphire
- swiftpass
- veloai

你可以在终端进入某个应用目录后执行常用命令：
- Node 项目：npm ci 或 npm i；npm run dev；npm run build
- Vite 项目：npm run dev 启动开发服务器；npm run build 生成构建产物
- Next 项目（ai-navigation 等）：npm run dev；部署前请检查 next.config.ts 与环境变量

## 历史归档
- archives/packages：打包与大文件归档（如 zip）
- archives/veloai-legacy：VeloAI 旧项目归档

## 后续建议
- 如遇 node_modules 权限或锁定问题，建议在目标路径重装依赖（npm ci），而不是移动依赖目录。
- 如需新增分组或进一步标准化为 Monorepo（packages/ 抽公共库），可在稳定后再执行。
>>>>>>> 27b257b6f3835cea7eeb703594664643f5ab89f2
=======
# Azure Glance - 个人主站

展示AI工具链能力、产品经理技能和项目作品的专业个人主站。

## 🎯 项目状态

✅ **已完成并可部署**

- 所有功能已实现
- TypeScript编译通过
- 生产构建成功
- 响应式设计完成

## 🚀 快速开始

### 本地开发

双击运行 `启动开发服务器.bat` 或执行：

```bash
cd server-portal
npm install
npm run dev
```

访问 http://localhost:5173

### 生产构建

双击运行 `构建生产版本.bat` 或执行：

```bash
cd server-portal
npm run build
```

### 推送到GitHub

双击运行 `推送到GitHub.bat` 或执行：

```bash
git add .
git commit -m "更新内容"
git push origin main
```

## 📁 项目结构

```
server-portal/          # 主站项目
├── src/
│   ├── components/    # React组件
│   │   ├── Navbar.tsx      # 导航栏
│   │   ├── Hero.tsx        # 首页英雄区
│   │   ├── Projects.tsx    # 项目展示
│   │   ├── About.tsx       # 个人介绍
│   │   ├── TechStack.tsx   # 技术栈
│   │   └── Footer.tsx      # 页脚
│   ├── App.tsx        # 主应用
│   └── main.tsx       # 入口
├── public/            # 静态资源
└── dist/              # 构建产物（部署用）

apps/                  # 其他应用项目
docs/                  # 文档
```

## ✨ 核心功能

### 1. 首页（Hero）
- 动态打字效果展示多个身份
- 平滑滚动导航
- 快速访问卡片

### 2. 项目展示（Projects）
- 项目卡片展示（带图片）
- 状态筛选（运行中/维护中/已停止）
- 项目统计数据
- AI专业认证展示

### 3. 关于我（About）
- 个人信息卡片
- 专业技能（6项）
- 工作经验时间线
- 项目理念和学习资源

### 4. 技术栈（TechStack）
- 5个技术分类
- 30+技术展示
- 技术优势说明

### 5. 响应式设计
- 桌面端优化
- 平板适配
- 移动端友好

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite 5
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **部署**: Vercel/Netlify

## 📝 自定义内容

### 更新项目数据

编辑 `server-portal/src/components/Projects.tsx`：

```typescript
const projects = [
  {
    title: '项目名称',
    description: '项目描述',
    tags: ['React', 'Node.js'],
    status: 'running',
    link: 'https://...',
    image: 'https://...'
  }
]
```

### 更新个人信息

编辑 `server-portal/src/components/About.tsx`

### 更新技术栈

编辑 `server-portal/src/components/TechStack.tsx`

## 🌐 部署

### Vercel（推荐）

1. 访问 [vercel.com](https://vercel.com)
2. 导入GitHub仓库
3. 设置：
   - Build Command: `cd server-portal && npm run build`
   - Output Directory: `server-portal/dist`
4. 点击部署

### Netlify

1. 访问 [netlify.com](https://netlify.com)
2. 导入GitHub仓库
3. 设置：
   - Build Command: `cd server-portal && npm run build`
   - Publish Directory: `server-portal/dist`
4. 点击部署

### GitHub Pages

```bash
cd server-portal
npm run build
# 将 dist 目录内容推送到 gh-pages 分支
```

## 📋 待办事项

- [ ] 替换占位图片为实际项目截图
- [ ] 更新项目链接为真实URL
- [ ] 添加更多项目
- [ ] 更新联系邮箱
- [ ] 添加Google Analytics
- [ ] 添加SEO优化
- [ ] 添加博客功能（可选）

## 📄 文档

- [项目完成说明](./项目完成说明.md)
- [部署指南](./server-portal/DEPLOYMENT.md)

## 🤝 贡献

这是个人项目，暂不接受外部贡献。

## 📧 联系方式

- GitHub: [@Ylsssq926](https://github.com/Ylsssq926)
- Email: contact@example.com

## 📜 许可证

MIT License

---

**Made with ❤️ by Azure Glance**
=======
# 服务器导航与项目索引

本仓库用于统一管理与导航你的所有项目。主站 server-portal 保持在根目录，其余应用统一归档在 apps/ 下，历史内容在 archives/。

## 目录结构
- server-portal：主站（自我介绍与服务器导航主页）
- apps/：独立应用与游戏项目
- archives/：旧版本与打包归档（如 packages/）
- docs/：说明文档
- assets/、scripts/、tmp：资源、脚本与临时目录

## 应用索引（apps/）
- ai-navigation
- ai-novel
- game-2048maomao
- game-ai-love
- game-diablo
- game-jinyong
- game-wzmx
- game-yxdt
- idea
- sapphire
- swiftpass
- veloai

你可以在终端进入某个应用目录后执行常用命令：
- Node 项目：npm ci 或 npm i；npm run dev；npm run build
- Vite 项目：npm run dev 启动开发服务器；npm run build 生成构建产物
- Next 项目（ai-navigation 等）：npm run dev；部署前请检查 next.config.ts 与环境变量

## 历史归档
- archives/packages：打包与大文件归档（如 zip）
- archives/veloai-legacy：VeloAI 旧项目归档

## 后续建议
- 如遇 node_modules 权限或锁定问题，建议在目标路径重装依赖（npm ci），而不是移动依赖目录。
- 如需新增分组或进一步标准化为 Monorepo（packages/ 抽公共库），可在稳定后再执行。
>>>>>>> 27b257b6f3835cea7eeb703594664643f5ab89f2
