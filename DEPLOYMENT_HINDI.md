# 🚀 Contabo VPS पर Websevix Deploy करने की Complete Guide

## 📋 जरूरी चीजें (Prerequisites)

- Contabo VPS (Ubuntu 20.04/22.04)
- Domain name जो आपके VPS IP को point करे
- VPS पर SSH access
- Basic Linux commands की जानकारी

## 🔧 Step 1: Server Setup

### 1.1 VPS से Connect करें

```bash
ssh root@your-vps-ip
# या
ssh root@your-domain.com
```

### 1.2 System Update करें

```bash
sudo apt update && sudo apt upgrade -y
```

### 1.3 Node.js 18+ Install करें (Next.js 14 के लिए जरूरी)

```bash
# Node.js 18.x install करें
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify करें
node --version  # v18.x या उससे ऊपर दिखना चाहिए
npm --version
```

### 1.4 PM2 Install करें (Process Manager)

```bash
sudo npm install -g pm2
```

### 1.5 Nginx Install करें (Reverse Proxy)

```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

### 1.6 Certbot Install करें (SSL Certificates के लिए)

```bash
sudo apt install certbot python3-certbot-nginx -y
```

## 📦 Step 2: Application तैयार करें

### 2.1 Files VPS पर Transfer करें

**Option A: Git के साथ (Recommended)**

```bash
# VPS पर
cd /var/www
sudo git clone your-repo-url websevix
cd websevix
sudo chown -R $USER:$USER /var/www/websevix
```

**Option B: SCP के साथ (Local machine से)**

```bash
# अपने local machine से
scp -r . root@your-vps-ip:/var/www/websevix
```

**Option C: SFTP के साथ (FileZilla/WinSCP)**

सभी files को `/var/www/websevix` में upload करें।

## 🔨 Step 3: Application Build और Configure करें

### 3.1 Dependencies Install करें

```bash
cd /var/www/websevix
npm install
```

### 3.2 Production Build बनाएं

```bash
npm run build
```

### 3.3 PM2 Ecosystem File बनाएं

`ecosystem.config.js` file project root में बनाएं (पहले से बनी है)।

### 3.4 PM2 के साथ Application Start करें

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # दिखाए गए instructions follow करें
```

## 🌐 Step 4: Nginx Configure करें

### 4.1 Nginx Configuration बनाएं

```bash
sudo nano /etc/nginx/sites-available/websevix
```

यह configuration add करें:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    # SSL setup के बाद HTTP को HTTPS पर redirect करने के लिए
    # SSL configure होने के बाद uncomment करें
    # return 301 https://$server_name$request_uri;

    # अभी के लिए Next.js को proxy करें
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

### 4.2 Site Enable करें

```bash
sudo ln -s /etc/nginx/sites-available/websevix /etc/nginx/sites-enabled/
sudo nginx -t  # Configuration test करें
sudo systemctl reload nginx
```

## 🔒 Step 5: SSL Certificate Setup (Let's Encrypt)

### 5.1 SSL Certificate लें

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Prompts follow करें:
- Email enter करें
- Terms agree करें
- HTTP को HTTPS पर redirect करना है या नहीं (recommended: Yes)

### 5.2 Auto-Renewal Setup

Certbot automatically auto-renewal setup करता है, लेकिन verify करें:

```bash
sudo certbot renew --dry-run
```

## 🔄 Step 6: Environment Variables (अगर जरूरी हो)

अगर app को environment variables चाहिए:

```bash
cd /var/www/websevix
nano .env.local
```

Variables add करें:
```
NODE_ENV=production
# यहाँ और variables add करें
```

फिर PM2 restart करें:
```bash
pm2 restart websevix
```

## 📊 Step 7: Monitoring और Maintenance

### 7.1 PM2 Commands

```bash
pm2 status              # App status check करें
pm2 logs websevix       # Logs देखें
pm2 restart websevix     # App restart करें
pm2 stop websevix       # App stop करें
pm2 monit               # Resources monitor करें
```

### 7.2 Nginx Status Check करें

```bash
sudo systemctl status nginx
sudo nginx -t  # Configuration test करें
```

### 7.3 Logs देखें

```bash
# Application logs
pm2 logs websevix

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## 🔄 Step 8: Application Update करना

### 8.1 Update Process

```bash
cd /var/www/websevix

# Latest changes pull करें (अगर Git use कर रहे हैं)
git pull origin main

# या नई files SCP/SFTP से upload करें

# नई dependencies install करें (अगर कोई हों)
npm install

# Rebuild करें
npm run build

# PM2 restart करें
pm2 restart websevix
```

**या deploy script use करें:**

```bash
chmod +x deploy.sh
./deploy.sh
```

## 🛡️ Step 9: Security Hardening

### 9.1 Firewall Setup (UFW)

```bash
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### 9.2 Fail2Ban (Optional लेकिन Recommended)

```bash
sudo apt install fail2ban -y
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

## 📝 Step 10: Domain DNS Configuration

अपने domain के DNS को configure करें:

```
Type    Name    Value           TTL
A       @       your-vps-ip     3600
A       www     your-vps-ip     3600
```

## ✅ Verification Checklist

- [ ] Node.js installed (v18+)
- [ ] Application successfully build हो रहा है
- [ ] PM2 application run कर रहा है
- [ ] Nginx configured और running है
- [ ] SSL certificate installed है
- [ ] Domain VPS को point कर रहा है
- [ ] Firewall configured है
- [ ] Application domain के through accessible है

## 🐛 Troubleshooting (समस्याओं का समाधान)

### Application Start नहीं हो रहा

```bash
# PM2 logs check करें
pm2 logs websevix

# Port 3000 use में है या नहीं check करें
sudo netstat -tulpn | grep 3000

# PM2 restart करें
pm2 restart websevix
```

### Nginx 502 Bad Gateway

```bash
# Next.js running है या नहीं check करें
pm2 status

# Nginx error logs check करें
sudo tail -f /var/log/nginx/error.log

# दोनों restart करें
pm2 restart websevix
sudo systemctl restart nginx
```

### SSL Certificate Issues

```bash
# Certificate manually renew करें
sudo certbot renew

# Certificate status check करें
sudo certbot certificates
```

### Permission Issues

```bash
# Ownership fix करें
sudo chown -R $USER:$USER /var/www/websevix

# Permissions fix करें
chmod -R 755 /var/www/websevix
```

## 🎯 Quick Reference Commands

```bash
# Application start करें
pm2 start ecosystem.config.js

# Application stop करें
pm2 stop websevix

# Application restart करें
pm2 restart websevix

# Logs देखें
pm2 logs websevix

# Status check करें
pm2 status

# Nginx reload करें
sudo systemctl reload nginx

# Nginx config test करें
sudo nginx -t

# SSL renew करें
sudo certbot renew
```

## 📞 Support

अगर कोई problem आए:
1. PM2 logs check करें: `pm2 logs websevix`
2. Nginx logs check करें: `sudo tail -f /var/log/nginx/error.log`
3. Domain DNS settings verify करें
4. Firewall rules check करें

---

**Note**: इस guide में `your-domain.com` और `your-vps-ip` को अपने actual domain और VPS IP address से replace करें।

Happy Deploying! 🚀
