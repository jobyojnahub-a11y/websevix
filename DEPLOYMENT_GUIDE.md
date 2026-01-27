# 🚀 Contabo VPS Deployment Guide - Websevix

Complete guide to deploy Websevix on your Contabo VPS server.

## 📋 Prerequisites

- Contabo VPS with Ubuntu 20.04/22.04
- Domain name pointing to your VPS IP
- SSH access to your VPS
- Basic knowledge of Linux commands

## 🔧 Step 1: Server Setup

### 1.1 Connect to Your VPS

```bash
ssh root@your-vps-ip
# or
ssh root@your-domain.com
```

### 1.2 Update System

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.3 Install Node.js 18+ (Required for Next.js 14)

```bash
# Install Node.js 18.x
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version  # Should show v18.x or higher
npm --version
```

### 1.4 Install PM2 (Process Manager)

```bash
sudo npm install -g pm2
```

### 1.5 Install Nginx (Reverse Proxy)

```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 1.6 Install Certbot (SSL Certificates)

```bash
sudo apt install certbot python3-certbot-nginx -y
```

## 📦 Step 2: Prepare Your Application

### 2.1 Clone Your Repository (on your local machine)

If using Git:

```bash
# On your local machine
git init
git add .
git commit -m "Initial commit"
git remote add origin your-repo-url
git push -u origin main
```

### 2.2 Transfer Files to VPS

**Option A: Using Git (Recommended)**

```bash
# On VPS
cd /var/www
sudo git clone your-repo-url websevix
cd websevix
sudo chown -R $USER:$USER /var/www/websevix
```

**Option B: Using SCP (from local machine)**

```bash
# From your local machine
scp -r . root@your-vps-ip:/var/www/websevix
```

**Option C: Using SFTP (FileZilla/WinSCP)**

Upload all files to `/var/www/websevix` on your VPS.

## 🔨 Step 3: Build and Configure Application

### 3.1 Install Dependencies

```bash
cd /var/www/websevix
npm install
```

### 3.2 Create Production Build

```bash
npm run build
```

### 3.3 Create PM2 Ecosystem File

Create `ecosystem.config.js` in project root:

```bash
nano ecosystem.config.js
```

Add this content:

```javascript
module.exports = {
  apps: [{
    name: 'websevix',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/websevix',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

### 3.4 Start Application with PM2

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # Follow the instructions shown
```

## 🌐 Step 4: Configure Nginx

### 4.1 Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/websevix
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # Redirect HTTP to HTTPS (after SSL setup)
    # Uncomment after SSL is configured
    # return 301 https://$server_name$request_uri;

    # For now, proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4.2 Enable Site

```bash
sudo ln -s /etc/nginx/sites-available/websevix /etc/nginx/sites-enabled/
sudo nginx -t  # Test configuration
sudo systemctl reload nginx
```

## 🔒 Step 5: Setup SSL Certificate (Let's Encrypt)

### 5.1 Get SSL Certificate

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Follow the prompts:
- Enter your email
- Agree to terms
- Choose whether to redirect HTTP to HTTPS (recommended: Yes)

### 5.2 Auto-Renewal Setup

Certbot automatically sets up auto-renewal, but verify:

```bash
sudo certbot renew --dry-run
```

## 🔄 Step 6: Environment Variables (if needed)

If your app needs environment variables:

```bash
cd /var/www/websevix
nano .env.local
```

Add your variables:
```
NODE_ENV=production
# Add other variables here
```

Then restart PM2:
```bash
pm2 restart websevix
```

## 📊 Step 7: Monitoring and Maintenance

### 7.1 PM2 Commands

```bash
pm2 status              # Check app status
pm2 logs websevix       # View logs
pm2 restart websevix     # Restart app
pm2 stop websevix       # Stop app
pm2 monit               # Monitor resources
```

### 7.2 Check Nginx Status

```bash
sudo systemctl status nginx
sudo nginx -t  # Test configuration
```

### 7.3 View Logs

```bash
# Application logs
pm2 logs websevix

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## 🔄 Step 8: Updating Your Application

### 8.1 Update Process

```bash
cd /var/www/websevix

# Pull latest changes (if using Git)
git pull origin main

# Or upload new files via SCP/SFTP

# Install new dependencies (if any)
npm install

# Rebuild
npm run build

# Restart PM2
pm2 restart websevix
```

## 🛡️ Step 9: Security Hardening

### 9.1 Firewall Setup (UFW)

```bash
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### 9.2 Fail2Ban (Optional but Recommended)

```bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

## 📝 Step 10: Domain DNS Configuration

Make sure your domain DNS is configured:

```
Type    Name    Value           TTL
A       @       your-vps-ip     3600
A       www     your-vps-ip     3600
```

## ✅ Verification Checklist

- [ ] Node.js installed (v18+)
- [ ] Application builds successfully
- [ ] PM2 running application
- [ ] Nginx configured and running
- [ ] SSL certificate installed
- [ ] Domain pointing to VPS
- [ ] Firewall configured
- [ ] Application accessible via domain

## 🐛 Troubleshooting

### Application Not Starting

```bash
# Check PM2 logs
pm2 logs websevix

# Check if port 3000 is in use
sudo netstat -tulpn | grep 3000

# Restart PM2
pm2 restart websevix
```

### Nginx 502 Bad Gateway

```bash
# Check if Next.js is running
pm2 status

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Restart both
pm2 restart websevix
sudo systemctl restart nginx
```

### SSL Certificate Issues

```bash
# Renew certificate manually
sudo certbot renew

# Check certificate status
sudo certbot certificates
```

### Permission Issues

```bash
# Fix ownership
sudo chown -R $USER:$USER /var/www/websevix

# Fix permissions
chmod -R 755 /var/www/websevix
```

## 📊 Performance Optimization

### Enable Gzip Compression in Nginx

Edit `/etc/nginx/nginx.conf`:

```nginx
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;
```

Then reload:
```bash
sudo systemctl reload nginx
```

### PM2 Cluster Mode (for better performance)

Edit `ecosystem.config.js`:

```javascript
module.exports = {
  apps: [{
    name: 'websevix',
    script: 'npm',
    args: 'start',
    instances: 'max',  // Use all CPU cores
    exec_mode: 'cluster',
    // ... rest of config
  }]
}
```

## 🎯 Quick Reference Commands

```bash
# Start application
pm2 start ecosystem.config.js

# Stop application
pm2 stop websevix

# Restart application
pm2 restart websevix

# View logs
pm2 logs websevix

# Check status
pm2 status

# Reload Nginx
sudo systemctl reload nginx

# Test Nginx config
sudo nginx -t

# Renew SSL
sudo certbot renew
```

## 📞 Support

If you face any issues:
1. Check PM2 logs: `pm2 logs websevix`
2. Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
3. Verify domain DNS settings
4. Check firewall rules

---

**Note**: Replace `your-domain.com` and `your-vps-ip` with your actual domain and VPS IP address throughout this guide.

Happy Deploying! 🚀
