# 🚀 Changes को Live करने की Guide

## Step 1: Local Machine पर - GitHub पर Push करें

### 1.1: सभी changes add करें
```bash
git add .
```

### 1.2: Commit करें
```bash
git commit -m "Update: Dark theme, service-based model, contact form added"
```

### 1.3: GitHub पर push करें
```bash
git push origin main
```

---

## Step 2: VPS पर SSH करें

### 2.1: VPS से connect करें
```bash
ssh root@161.97.121.55
```
या agar aapne user setup kiya hai:
```bash
ssh your-username@161.97.121.55
```

---

## Step 3: VPS पर - Code Update करें

### 3.1: Project directory में जाएं
```bash
cd /var/www/websevix/websevix
```

### 3.2: Latest code pull करें
```bash
git pull origin main
```

### 3.3: Dependencies check करें (agar koi naya package add hua ho)
```bash
npm install
```

### 3.4: Build करें
```bash
npm run build
```

### 3.5: PM2 restart करें
```bash
pm2 restart websevix
```

### 3.6: Status check करें
```bash
pm2 status
pm2 logs websevix --lines 50
```

---

## Step 4: Browser में Test करें

1. Browser खोलें
2. जाएं: **https://websevix.com**
3. Dark theme और नए changes check करें!

---

## ✅ Quick Commands (Future Updates के लिए)

Jab bhi changes karne ho, ye commands run karein:

**Local Machine:**
```bash
git add .
git commit -m "Your update message"
git push origin main
```

**VPS पर:**
```bash
cd /var/www/websevix/websevix
git pull origin main
npm install
npm run build
pm2 restart websevix
```

---

## 🐛 अगर कोई Problem हो:

### Build Error:
```bash
# Logs check करें
pm2 logs websevix

# Clean build करें
rm -rf .next
npm run build
pm2 restart websevix
```

### PM2 Not Running:
```bash
pm2 status
pm2 restart websevix
pm2 save
```

### Nginx Error:
```bash
sudo nginx -t
sudo systemctl reload nginx
```
