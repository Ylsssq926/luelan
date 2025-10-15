# Azure Glance 主站部署指南

## 第一步：检查服务器环境
1. 确认服务器已安装Nginx
2. 确认dist目录已上传到服务器
3. 确认服务器防火墙已开放80端口

## 第二步：配置Nginx

### 1. 备份现有配置
```bash
sudo cp /etc/nginx/nginx.conf /etc/nginx/nginx.conf.backup
```

### 2. 创建站点配置文件
```bash
sudo nano /etc/nginx/sites-available/azure-glance
```

将nginx.conf文件内容复制到配置文件中，修改以下关键参数：
- `server_name`: 改为您的域名或服务器IP
- `root`: 改为dist目录的实际路径（如：/home/user/azure-glance/dist）

### 3. 启用站点配置
```bash
sudo ln -s /etc/nginx/sites-available/azure-glance /etc/nginx/sites-enabled/
```

### 4. 测试Nginx配置
```bash
sudo nginx -t
```

### 5. 重启Nginx服务
```bash
sudo systemctl restart nginx
```

## 第三步：验证部署

### 1. 检查服务状态
```bash
sudo systemctl status nginx
```

### 2. 访问网站测试
在浏览器中访问您的服务器IP或域名，应该能看到Azure Glance主站。

### 3. 检查路由功能
测试网站内的页面跳转是否正常（如点击导航菜单）。

## 常见问题解决

### 问题1：403 Forbidden
**原因**: Nginx没有权限访问dist目录
**解决**: 
```bash
sudo chmod 755 /path/to/your/dist
sudo chown -R www-data:www-data /path/to/your/dist
```

### 问题2：路由刷新404
**原因**: Nginx没有正确配置单页应用路由
**解决**: 确保配置中有 `try_files $uri $uri/ /index.html;`

### 问题3：静态资源加载失败
**原因**: 路径配置错误
**解决**: 检查dist目录结构和Nginx root路径配置

## 后续维护

### 更新部署流程
1. 本地构建新版本：`npm run build`
2. 上传新的dist目录到服务器
3. 重启Nginx：`sudo systemctl restart nginx`

### 日志查看
```bash
# 查看Nginx错误日志
sudo tail -f /var/log/nginx/error.log

# 查看访问日志
sudo tail -f /var/log/nginx/access.log
```

## 安全建议
1. 定期更新Nginx和系统安全补丁
2. 配置SSL证书启用HTTPS
3. 设置适当的文件权限
4. 启用防火墙限制不必要的端口访问