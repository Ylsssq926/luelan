@echo off
echo ========================================
echo 构建主站生产版本
echo ========================================
echo.
cd server-portal
echo 正在构建...
npm run build
echo.
echo ========================================
echo 构建完成！
echo 构建产物位于: server-portal\dist
echo ========================================
pause
