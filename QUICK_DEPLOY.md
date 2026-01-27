# ⚡ Quick Deploy Guide - Contabo VPS

## 🚀 Fastest Way to Deploy

### Step 1: VPS पर Connect करें
```bash
ssh root@your-vps-ip
```

### Step 2: Basic Setup (एक बार करें)
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 और Nginx
sudo npm install -g pm2
sudo apt install nginx certbot python3-certbot-nginx -y
```

### Step 3: Files Upload करें
```bash
# Directory बनाएं
sudo mkdir -p /var/www/websevix
sudo chown -R $USER:$USER /var/www/websevix

# Files upload करें (SCP/SFTP/Git से)
cd /var/www/websevix
# अपनी files यहाँ paste करें
```

### Step 4: Build और Start करें
```bash
cd /var/www/websevix

# Dependencies install
npm install

# Build
npm run build

# PM2 start
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Step 5: Nginx Configure करें
```bash
# Configuration file बनाएं
sudo nano /etc/nginx/sites-available/websevix
```

`nginx-websevix.conf` file की content copy करें और `your-domain.com` को अपने domain से replace करें।

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/websevix /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### Step 6: SSL Setup करें
```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

### Step 7: Firewall Setup
```bash
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

## ✅ Done! 

अब आपका website `https://your-domain.com` पर live होगा!

## 🔄 Future Updates के लिए

```bash
cd /var/www/websevix
# Files update करें
npm install
npm run build
pm2 restart websevix
```

या deploy script use करें:
```bash
chmod +x deploy.sh
./deploy.sh
```

## 🐛 अगर कुछ गलत हो

```bash
# Status check
pm2 status
pm2 logs websevix

# Nginx check
sudo nginx -t
sudo systemctl status nginx

# Restart करें
pm2 restart websevix
sudo systemctl restart nginx
```

---

**Detailed guide के लिए `DEPLOYMENT_HINDI.md` देखें**
