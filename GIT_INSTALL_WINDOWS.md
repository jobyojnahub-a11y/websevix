# 🪟 Windows पर Git Install करने की Complete Guide

## 📥 Step 1: Git Download करें

### Option A: Direct Download (Recommended)

1. Browser खोलें
2. इस link पर जाएं: **https://git-scm.com/download/win**
3. Page automatically detect करेगा कि आप Windows use कर रहे हैं
4. **Download** button पर click करें
5. Download start हो जाएगा (file name: `Git-2.x.x-64-bit.exe`)

### Option B: Alternative Link

अगर ऊपर वाला काम न करे:
- जाएं: https://github.com/git-for-windows/git/releases
- Latest version download करें (जैसे: `Git-2.43.0-64-bit.exe`)

---

## 🔧 Step 2: Git Install करें

1. Downloaded file पर **double-click** करें
   - Location: Usually `Downloads` folder में होगा
   - File name: `Git-2.x.x-64-bit.exe`

2. **Security Warning** आएगा:
   - **Run** या **Yes** पर click करें

3. **Installation Wizard** खुलेगा:
   - **Next** button पर click करें

4. **Select Components**:
   - Default options ठीक हैं
   - **Next** पर click करें

5. **Default Editor**:
   - **Use Visual Studio Code as Git's default editor** (अगर VS Code installed है)
   - या **Nano editor** select करें
   - **Next** पर click करें

6. **Adjusting PATH**:
   - **Git from the command line and also from 3rd-party software** select करें (Recommended)
   - **Next** पर click करें

7. **HTTPS Transport**:
   - **Use the OpenSSL library** select करें (Default)
   - **Next** पर click करें

8. **Line Ending Conversions**:
   - **Checkout Windows-style, commit Unix-style line endings** (Default)
   - **Next** पर click करें

9. **Terminal Emulator**:
   - **Use Windows' default console window** (Default)
   - **Next** पर click करें

10. **Default Behavior**:
    - **Default (fast-forward or merge)** (Default)
    - **Next** पर click करें

11. **Extra Options**:
    - Default options ठीक हैं
    - **Install** button पर click करें

12. **Installation Progress**:
    - Wait करें (2-5 minutes)
    - Progress bar देखें

13. **Installation Complete**:
    - ✅ **Launch Git Bash** checkbox **UNCHECK** करें (अगर चाहते हैं तो check रख सकते हैं)
    - **Finish** button पर click करें

---

## ✅ Step 3: Git Verify करें

### Option A: Command Prompt में

1. **Command Prompt** खोलें:
   - **Windows Key + R** press करें
   - Type करें: `cmd`
   - **Enter** press करें

2. यह command type करें:
```bash
git --version
```

3. **Enter** press करें

✅ **Success:** `git version 2.x.x` दिखना चाहिए

### Option B: PowerShell में

1. **PowerShell** खोलें:
   - **Windows Key + X** press करें
   - **Windows PowerShell** select करें

2. यह command type करें:
```bash
git --version
```

3. **Enter** press करें

✅ **Success:** Version number दिखना चाहिए

### Option C: Git Bash में

1. **Git Bash** खोलें:
   - **Start Menu** में search करें: `Git Bash`
   - Click करें

2. यह command type करें:
```bash
git --version
```

3. **Enter** press करें

✅ **Success:** Version number दिखना चाहिए

---

## 🔄 Step 4: Terminal Restart करें

**Important:** अगर Git install के बाद भी command नहीं चल रहा:

1. **Command Prompt/PowerShell को बंद करें**
2. **नया Command Prompt/PowerShell खोलें**
3. फिर से `git --version` try करें

---

## 🚀 Step 5: Git Configure करें (First Time Setup)

अब Git use करने से पहले अपना name और email set करें:

### Command Prompt या PowerShell में:

**Command 1: Name Set करें**
```bash
git config --global user.name "Your Name"
```

**Example:**
```bash
git config --global user.name "John Doe"
```

**Command 2: Email Set करें**
```bash
git config --global user.email "your-email@example.com"
```

**Example:**
```bash
git config --global user.email "john@example.com"
```

**Command 3: Verify करें**
```bash
git config --global --list
```

आपका name और email दिखना चाहिए

---

## ✅ Step 6: अब Git Commands Use करें

अब आप project folder में जाकर Git commands use कर सकते हैं:

```bash
cd C:\Users\lenovo\Downloads\MyProjects\websevix2
git init
git add .
git commit -m "Initial commit"
```

---

## 🐛 Troubleshooting

### Problem 1: Git Command Still Not Found

**Solution:**
1. Computer को **Restart** करें
2. या **Command Prompt/PowerShell** को बंद करके नया खोलें
3. या **System Restart** करें

### Problem 2: PATH Not Updated

**Manual Fix:**
1. **Start Menu** में search करें: `Environment Variables`
2. **Edit the system environment variables** select करें
3. **Environment Variables** button पर click करें
4. **System variables** में **Path** select करें
5. **Edit** पर click करें
6. **New** पर click करें
7. Add करें: `C:\Program Files\Git\cmd`
8. **OK** press करें
9. **Command Prompt Restart** करें

### Problem 3: Installation Failed

**Solution:**
1. **Antivirus** temporarily disable करें
2. **Run as Administrator** से install करें
3. या **Windows Defender** check करें

---

## 📝 Quick Checklist

- [ ] Git download हो गया
- [ ] Git install हो गया
- [ ] `git --version` command काम कर रहा है
- [ ] Git configured हो गया (name और email set)
- [ ] Project folder में `git init` command काम कर रहा है

---

## 🎯 Next Steps

Git install होने के बाद:

1. **STEP_BY_STEP_DEPLOY.md** file में **Part 1.3** follow करें
2. GitHub पर code upload करें
3. VPS पर deploy करें

---

**Note:** अगर किसी step में problem आए, तो error message share करें, मैं help करूंगा! 🚀
