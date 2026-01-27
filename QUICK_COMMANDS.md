# ⚡ Quick Commands Reference - Copy Paste Ready

## 🔐 VPS Connect करना
```bash
ssh root@YOUR_VPS_IP
```

## 📦 Basic Setup (एक बार)
```bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
sudo apt install nginx certbot python3-certbot-nginx -y
```

## 📥 Code Download करना
```bash
sudo mkdir -p /var/www/websevix
cd /var/www/websevix
git clone https://github.com/YOUR_USERNAME/websevix.git .
sudo chown -R $USER:$USER /var/www/websevix
```

## 🔨 Build करना
```bash
cd /var/www/websevix
npm install
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## 🌐 Nginx Setup
```bash
sudo nano /etc/nginx/sites-available/websevix
# (Content paste करें - nginx-websevix.conf देखें)
sudo ln -s /etc/nginx/sites-available/websevix /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔒 SSL Setup
```bash
sudo certbot --nginx -d websevix.com -d www.websevix.com
```

## 🛡️ Firewall
```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## 🔄 Update करना
```bash
cd /var/www/websevix
git pull origin main
npm install
npm run build
pm2 restart websevix
```

## ✅ Check करना
```bash
pm2 status
sudo systemctl status nginx
pm2 logs websevix
```
