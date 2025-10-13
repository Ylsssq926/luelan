@echo off
echo ========================================
echo 推送项目到GitHub
echo ========================================
echo.
echo 正在忽略子模块问题...
git restore "archives/veloai-legacy/VeloAI 旧项目200+错误"
echo.
echo 正在添加所有更改...
git add .
echo.
echo 正在提交...
git commit -m "完整的主站项目 - 可直接部署"
echo.
echo 正在推送到GitHub...
git push -u origin main --force
echo.
echo ========================================
echo 完成！
echo ========================================
pause
