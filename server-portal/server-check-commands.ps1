# 腾讯云服务器检查命令（在服务器上执行）

# 1. 检查当前目录和文件
Write-Host "=== 检查当前目录 ==="
Get-Location
Write-Host "`n=== 检查根目录文件 ==="
Get-ChildItem /

# 2. 检查Nginx配置
Write-Host "`n=== 检查Nginx配置文件 ==="
if (Test-Path "C:\nginx\conf\nginx.conf") {
    Get-Content "C:\nginx\conf\nginx.conf"
} else {
    Write-Host "Nginx配置文件不存在"
}

# 3. 检查站点配置
Write-Host "`n=== 检查站点配置 ==="
if (Test-Path "C:\nginx\conf\sites-enabled\*") {
    Get-ChildItem "C:\nginx\conf\sites-enabled\" | ForEach-Object {
        Write-Host "配置文件: $_"
        Get-Content $_.FullName
    }
}

# 4. 检查Nginx服务状态
Write-Host "`n=== 检查Nginx服务状态 ==="
Get-Service nginx -ErrorAction SilentlyContinue

# 5. 检查端口监听
Write-Host "`n=== 检查端口监听 ==="
netstat -an | Select-String ":80 "