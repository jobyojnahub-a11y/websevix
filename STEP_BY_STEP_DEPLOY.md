# 🎯 Complete Step-by-Step Deployment Guide - websevix.com

## 📋 Prerequisites Checklist
- [ ] GitHub account (अगर नहीं है तो बनाना होगा)
- [ ] Contabo VPS access
- [ ] Domain: websevix.com (DNS access)

---

## 🚀 PART 1: GitHub पर Code Upload करना

### Step 1.1: GitHub Account बनाएं (अगर नहीं है)

1. Browser खोलें
2. जाएं: https://github.com
3. **Sign up** button पर click करें
4. Email, password, username enter करें
5. **Create account** पर click करें
6. Email verify करें (email check करें)

### Step 1.2: New Repository बनाएं

1. GitHub पर login करें
2. Top right corner में **+** icon पर click करें
3. **New repository** select करें
4. Repository name: `websevix` (या कोई भी नाम)
5. **Public** या **Private** select करें
6. **Initialize this repository with a README** - ❌ UNCHECK करें
7. **Create repository** button पर click करें

### Step 1.3: Local Machine पर Git Setup करें

**Windows पर:**

1. **Git Bash** खोलें (अगर installed है)
   - या **Command Prompt** खोलें
   - या **PowerShell** खोलें

2. Project folder में जाएं:
```bash
cd C:\Users\lenovo\Downloads\MyProjects\websevix2
```

3. Git initialize करें:
```bash
git init
```

4. सभी files add करें:
```bash
git add .
```

5. First commit करें:
```bash
git commit -m "Initial commit - Websevix website"
```

6. GitHub repository को add करें (अपना username और repo name use करें):
```bash
git remote add origin https://github.com/YOUR_USERNAME/websevix.git
```

7. Code push करें:
```bash
git branch -M main
git push -u origin main
```

**Note:** अगर पहली बार push कर रहे हैं, तो GitHub username और password मांगेगा।

---

## 🖥️ PART 2: Google Cloud Shell Setup (या Local Terminal)

### Option A: Google Cloud Shell Use करना

1. Browser में जाएं: https://shell.cloud.google.com
2. **Start Cloud Shell** button पर click करें
3. Terminal खुलने का wait करें (1-2 minutes)
4. Terminal ready होने पर continue करें

### Option B: Local Terminal Use करना

1. Windows पर **Command Prompt** या **PowerShell** खोलें
2. या **Git Bash** use करें

---

## 🔐 PART 3: VPS से Connect करना

### Step 3.1: VPS IP और Credentials

आपके पास होना चाहिए:
- VPS IP address (जैसे: 123.45.67.89)
- Username (usually `root`)
- Password या SSH key

### Step 3.2: SSH से Connect करें

Terminal में यह command type करें (अपना IP replace करें):

```bash
ssh root@YOUR_VPS_IP
```

**Example:**
```bash
ssh root@123.45.67.89
```

3. Enter press करें
4. अगर पहली बार connect कर रहे हैं, तो **yes** type करें
5. Password enter करें (type करते समय दिखेगा नहीं, normal है)
6. Enter press करें

✅ Success: अब आप VPS पर connected हैं!

---

## 📦 PART 4: VPS पर Basic Setup

### Step 4.1: System Update करें

Terminal में यह command type करें:

```bash
sudo apt update && sudo apt upgrade -y
```

Enter press करें और wait करें (5-10 minutes लग सकते हैं)

### Step 4.2: Node.js Install करें

**Command 1:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
```

Enter press करें, wait करें

**Command 2:**
```bash
sudo apt-get install -y nodejs
```

Enter press करें, wait करें

**Command 3: Verify करें:**
```bash
node --version
```

Output में `v18.x.x` दिखना चाहिए

**Command 4:**
```bash
npm --version
```

Version number दिखना चाहिए

### Step 4.3: PM2 Install करें

```bash
sudo npm install -g pm2
```

Enter press करें, wait करें

### Step 4.4: Nginx Install करें

**Command 1:**
```bash
sudo apt install nginx -y
```

Enter press करें, wait करें

**Command 2:**
```bash
sudo systemctl start nginx
```

Enter press करें

**Command 3:**
```bash
sudo systemctl enable nginx
```

Enter press करें

### Step 4.5: Certbot Install करें (SSL के लिए)

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Enter press करें, wait करें

---

## 📥 PART 5: GitHub से Code Download करना

### Step 5.1: Project Directory बनाएं

```bash
sudo mkdir -p /var/www/websevix
```

Enter press करें

### Step 5.2: Directory में जाएं

```bash
cd /var/www/websevix
```

Enter press करें

### Step 5.3: GitHub से Clone करें

**अपना GitHub repository URL use करें:**

```bash
git clone https://github.com/YOUR_USERNAME/websevix.git .
```

**Example:**
```bash
git clone https://github.com/yourusername/websevix.git .
```

Enter press करें, wait करें

**Note:** अगर private repository है, तो username/password मांगेगा

### Step 5.4: Ownership Fix करें

```bash
sudo chown -R $USER:$USER /var/www/websevix
```

Enter press करें

### Step 5.5: Directory Verify करें

```bash
ls -la
```

Enter press करें

Files दिखनी चाहिए (package.json, app folder, etc.)

---

## 🔨 PART 6: Application Build करना

### Step 6.1: Dependencies Install करें

```bash
cd /var/www/websevix
```

Enter press करें (अगर पहले से नहीं हैं)

```bash
npm install
```

Enter press करें और **wait करें** (5-10 minutes लग सकते हैं)

### Step 6.2: Production Build बनाएं

```bash
npm run build
```

Enter press करें और **wait करें** (2-5 minutes)

✅ Success message दिखना चाहिए: "Compiled successfully"

### Step 6.3: PM2 के साथ Start करें

```bash
pm2 start ecosystem.config.js
```

Enter press करें

**Verify करें:**
```bash
pm2 status
```

Enter press करें

Status में `online` दिखना चाहिए

**Save करें:**
```bash
pm2 save
```

Enter press करें

**Startup enable करें:**
```bash
pm2 startup
```

Enter press करें

**Important:** Output में एक command दिखेगा, उसे copy करके run करें (जैसे: `sudo env PATH=...`)

---

## 🌐 PART 7: Nginx Configuration

### Step 7.1: Configuration File बनाएं

```bash
sudo nano /etc/nginx/sites-available/websevix
```

Enter press करें

### Step 7.2: Configuration Paste करें

Nano editor में यह content paste करें:

```nginx
server {
    listen 80;
    server_name websevix.com www.websevix.com;

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
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, immutable";
    }
}
```

### Step 7.3: File Save करें

1. **Ctrl + O** press करें (Save)
2. **Enter** press करें (confirm)
3. **Ctrl + X** press करें (Exit)

### Step 7.4: Site Enable करें

```bash
sudo ln -s /etc/nginx/sites-available/websevix /etc/nginx/sites-enabled/
```

Enter press करें

### Step 7.5: Configuration Test करें

```bash
sudo nginx -t
```

Enter press करें

✅ Success message: "syntax is ok" और "test is successful"

### Step 7.6: Nginx Reload करें

```bash
sudo systemctl reload nginx
```

Enter press करें

---

## 🔒 PART 8: SSL Certificate Setup (HTTPS)

### Step 8.1: Domain DNS Check करें

**Important:** पहले यह verify करें कि:
- `websevix.com` का A record आपके VPS IP को point कर रहा है
- `www.websevix.com` का A record भी VPS IP को point कर रहा है

DNS check करने के लिए:
```bash
nslookup websevix.com
```

Enter press करें

VPS IP address दिखना चाहिए

### Step 8.2: SSL Certificate लें

```bash
sudo certbot --nginx -d websevix.com -d www.websevix.com
```

Enter press करें

### Step 8.3: Certbot Prompts

1. **Email address enter करें** (renewal notifications के लिए)
   - Email type करें
   - Enter press करें

2. **Terms of Service**
   - **A** type करें (Agree)
   - Enter press करें

3. **Email sharing** (optional)
   - **N** type करें (No)
   - Enter press करें

4. **HTTP to HTTPS redirect**
   - **2** type करें (Redirect)
   - Enter press करें

✅ Success: SSL certificate installed!

### Step 8.4: Auto-Renewal Test करें

```bash
sudo certbot renew --dry-run
```

Enter press करें

✅ Success message दिखना चाहिए

---

## 🛡️ PART 9: Firewall Setup

### Step 9.1: UFW Enable करें

```bash
sudo ufw allow 22/tcp
```

Enter press करें

```bash
sudo ufw allow 80/tcp
```

Enter press करें

```bash
sudo ufw allow 443/tcp
```

Enter press करें

```bash
sudo ufw enable
```

Enter press करें

**Confirm करें:**
- **y** type करें
- Enter press करें

### Step 9.2: Firewall Status Check करें

```bash
sudo ufw status
```

Enter press करें

Ports 22, 80, 443 allow दिखने चाहिए

---

## ✅ PART 10: Final Verification

### Step 10.1: PM2 Status Check करें

```bash
pm2 status
```

Enter press करें

`websevix` status `online` होना चाहिए

### Step 10.2: Nginx Status Check करें

```bash
sudo systemctl status nginx
```

Enter press करें

**Active: active (running)** दिखना चाहिए

Exit करने के लिए: **q** press करें

### Step 10.3: Application Logs Check करें

```bash
pm2 logs websevix --lines 20
```

Enter press करें

Errors नहीं दिखने चाहिए

Exit करने के लिए: **Ctrl + C** press करें

### Step 10.4: Browser में Test करें

1. Browser खोलें
2. जाएं: **https://websevix.com**
3. Website load होना चाहिए! 🎉

---

## 🔄 PART 11: Future Updates के लिए

### जब भी Code Update करना हो:

**Step 1:** Local machine पर changes करें

**Step 2:** GitHub पर push करें:
```bash
git add .
git commit -m "Update description"
git push origin main
```

**Step 3:** VPS पर update करें:

```bash
cd /var/www/websevix
git pull origin main
npm install
npm run build
pm2 restart websevix
```

या automated script use करें:
```bash
cd /var/www/websevix
chmod +x deploy.sh
./deploy.sh
```

---

## 🐛 Troubleshooting (समस्याओं का समाधान)

### Problem 1: Application Start नहीं हो रहा

**Check करें:**
```bash
pm2 logs websevix
```

**Restart करें:**
```bash
pm2 restart websevix
```

### Problem 2: Nginx 502 Error

**Check करें:**
```bash
pm2 status
sudo systemctl status nginx
```

**Restart करें:**
```bash
pm2 restart websevix
sudo systemctl restart nginx
```

### Problem 3: SSL Certificate Error

**Check करें:**
```bash
sudo certbot certificates
```

**Renew करें:**
```bash
sudo certbot renew
```

### Problem 4: Port Already in Use

**Check करें:**
```bash
sudo netstat -tulpn | grep 3000
```

**Kill process:**
```bash
sudo kill -9 PROCESS_ID
```

### Problem 5: Permission Denied

**Fix करें:**
```bash
sudo chown -R $USER:$USER /var/www/websevix
chmod -R 755 /var/www/websevix
```

---

## 📞 Quick Commands Reference

```bash
# PM2 Commands
pm2 status              # Status check
pm2 logs websevix       # Logs देखें
pm2 restart websevix    # Restart
pm2 stop websevix       # Stop
pm2 monit               # Monitor

# Nginx Commands
sudo systemctl status nginx    # Status
sudo systemctl restart nginx   # Restart
sudo nginx -t                  # Test config
sudo systemctl reload nginx    # Reload

# Application Commands
cd /var/www/websevix           # Go to project
npm install                     # Install deps
npm run build                  # Build
pm2 restart websevix           # Restart app

# SSL Commands
sudo certbot renew             # Renew certificate
sudo certbot certificates      # List certificates
```

---

## ✅ Final Checklist

- [ ] GitHub पर code upload हो गया
- [ ] VPS से connect हो गया
- [ ] Node.js install हो गया
- [ ] PM2 install हो गया
- [ ] Nginx install हो गया
- [ ] Code VPS पर download हो गया
- [ ] Application build हो गया
- [ ] PM2 application start हो गया
- [ ] Nginx configured हो गया
- [ ] SSL certificate install हो गया
- [ ] Firewall configured हो गया
- [ ] Website https://websevix.com पर accessible है

---

## 🎉 Success!

अगर सब कुछ ठीक से हुआ है, तो आपका website **https://websevix.com** पर live होगा!

**Congratulations! 🚀**

---

**Note:** अगर किसी step में problem आए, तो error message copy करके देखें और troubleshooting section check करें।
