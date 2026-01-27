#!/bin/bash

# Websevix Deployment Script for Contabo VPS
# Usage: ./deploy.sh

set -e

echo "🚀 Starting Websevix Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if running as root or with sudo
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Please run as root or with sudo${NC}"
    exit 1
fi

# Navigate to project directory
cd /var/www/websevix || {
    echo -e "${RED}Directory /var/www/websevix not found!${NC}"
    echo "Please create it first: mkdir -p /var/www/websevix"
    exit 1
}

echo -e "${GREEN}📦 Installing dependencies...${NC}"
npm install

echo -e "${GREEN}🔨 Building application...${NC}"
npm run build

echo -e "${GREEN}🔄 Restarting PM2...${NC}"
pm2 restart websevix || pm2 start ecosystem.config.js

echo -e "${GREEN}✅ Deployment complete!${NC}"
echo -e "${YELLOW}Check status with: pm2 status${NC}"
echo -e "${YELLOW}View logs with: pm2 logs websevix${NC}"
