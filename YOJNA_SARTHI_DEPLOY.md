# 🚀 Yojna Sarthi - New Site Deployment Guide

## 📁 Local Machine Setup

### Step 1: Local Machine pe Naya Folder Banao

**Windows PowerShell/CMD mein:**

```bash
# Project root mein jao
cd C:\Users\lenovo\Downloads\MyProjects

# Naya folder banao
mkdir yojnasarthi

# Folder mein jao
cd yojnasarthi
```

---

## 🖥️ VPS Setup - Yojna Sarthi

### Step 1: VPS pe SSH karo

```bash
ssh root@161.97.121.55
```

### Step 2: Naya Directory Structure Banao

```bash
# Main directory banao
sudo mkdir -p /var/www/yojnasarthi

# Ownership set karo
sudo chown -R $USER:$USER /var/www/yojnasarthi

# Folder mein jao
cd /var/www/yojnasarthi
```

### Step 3: Git Repository Clone/Setup

**Option A: Agar GitHub pe repo hai:**
```bash
cd /var/www/yojnasarthi
git clone https://github.com/YOUR_USERNAME/yojnasarthi.git .
```

**Option B: Manual files upload:**
```bash
# Folder ready hai, ab files upload karo (SCP/SFTP se)
```

### Step 4: Node.js Dependencies Install

```bash
cd /var/www/yojnasarthi
npm install
```

### Step 5: Build Application

```bash
npm run build
```

### Step 6: PM2 Setup

**ecosystem.config.js file banao:**
```bash
nano /var/www/yojnasarthi/ecosystem.config.js
```

**Content:**
```javascript
module.exports = {
  apps: [{
    name: 'yojnasarthi',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/yojnasarthi',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true
  }]
}
```

**PM2 Start:**
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Step 7: Nginx Configuration

**Nginx config file banao:**
```bash
sudo nano /etc/nginx/sites-available/yojnasarthi
```

**Content (yojnasarthi.com ke liye):**
```nginx
server {
    listen 80;
    server_name yojnasarthi.com www.yojnasarthi.com;

    location / {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    location /_next/static {
        proxy_pass http://localhost:3001;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, immutable";
    }
}
```

**Enable Site:**
```bash
sudo ln -s /etc/nginx/sites-available/yojnasarthi /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 8: SSL Certificate Setup

```bash
sudo certbot --nginx -d yojnasarthi.com -d www.yojnasarthi.com
```

### Step 9: Firewall (agar zarurat ho)

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

---

## 📋 Quick Commands Summary

### Local Machine:
```bash
cd C:\Users\lenovo\Downloads\MyProjects
mkdir yojnasarthi
cd yojnasarthi
# Yahan apna code paste karo
```

### VPS pe:
```bash
# Directory banao
sudo mkdir -p /var/www/yojnasarthi
sudo chown -R $USER:$USER /var/www/yojnasarthi
cd /var/www/yojnasarthi

# Code upload/Clone
# (Git se ya SCP se)

# Setup
npm install
npm run build

# PM2
pm2 start ecosystem.config.js
pm2 save

# Nginx
sudo nano /etc/nginx/sites-available/yojnasarthi
# (Config paste karo)
sudo ln -s /etc/nginx/sites-available/yojnasarthi /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# SSL
sudo certbot --nginx -d yojnasarthi.com -d www.yojnasarthi.com
```

---

## 🔄 Future Updates

**Local Machine:**
```bash
cd C:\Users\lenovo\Downloads\MyProjects\yojnasarthi
git add .
git commit -m "Update message"
git push origin main
```

**VPS pe:**
```bash
cd /var/www/yojnasarthi
git pull origin main
npm install
npm run build
pm2 restart yojnasarthi
```

---

## ⚠️ Important Notes

1. **Port 3001** use kiya hai (websevix 3000 pe hai)
2. **Domain DNS** pehle se VPS IP ko point karna chahiye
3. **PM2 name** different hai: `yojnasarthi`
4. **Nginx config** separate file hai

---

## 🐛 Troubleshooting

### PM2 Status Check:
```bash
pm2 status
pm2 logs yojnasarthi
```

### Nginx Check:
```bash
sudo nginx -t
sudo systemctl status nginx
```

### Port Check:
```bash
sudo netstat -tulpn | grep 3001
```
