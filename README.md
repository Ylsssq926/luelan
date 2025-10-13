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