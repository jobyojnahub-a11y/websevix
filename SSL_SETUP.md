# 🔒 SSL Certificate Setup - websevix.com

## Step 1: Certbot Install (Agar nahi hai to)

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx -y
```

## Step 2: Nginx Configuration Check

Pehle check karein ki Nginx config sahi hai:

```bash
sudo nginx -t
```

Agar error aaye to fix karein.

## Step 3: Firewall Setup (Port 80 & 443 open)

```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw status
```

## Step 4: SSL Certificate Generate

**Important:** Domain pehle se VPS IP ko point karna chahiye!

```bash
sudo certbot --nginx -d websevix.com -d www.websevix.com
```

Ye command:
- Automatically SSL certificate generate karega
- Nginx config update karega
- HTTPS redirect setup karega

## Step 5: Certificate Verify

```bash
sudo certbot certificates
```

## Step 6: Auto-Renewal Test

```bash
sudo certbot renew --dry-run
```

## Step 7: Browser Mein Check

1. Browser kholo
2. Jao: **https://websevix.com**
3. Lock icon check karo - SSL working!

---

## 🔄 Auto-Renewal Setup

SSL certificates automatically renew hote hain, lekin verify karein:

```bash
# Renewal test
sudo certbot renew --dry-run

# Manual renewal (agar zarurat ho)
sudo certbot renew
```

---

## 🐛 Troubleshooting

### Problem 1: Domain not pointing to VPS
**Solution:** DNS records check karein:
```bash
# Domain DNS check
nslookup websevix.com
```

### Problem 2: Port 80 blocked
**Solution:** 
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw reload
```

### Problem 3: Nginx not running
**Solution:**
```bash
sudo systemctl status nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

### Problem 4: Certificate expired
**Solution:**
```bash
sudo certbot renew
sudo systemctl reload nginx
```

---

## ✅ Quick Commands Summary

```bash
# SSL Install
sudo certbot --nginx -d websevix.com -d www.websevix.com

# Check certificates
sudo certbot certificates

# Test renewal
sudo certbot renew --dry-run

# Reload Nginx
sudo systemctl reload nginx
```

---

**Note:** 
- Domain DNS pehle se setup hona chahiye
- Port 80 aur 443 open hona chahiye
- Nginx properly configured hona chahiye
