# ---- Build stage ----
FROM node:20-alpine AS builder

WORKDIR /app

# Pakete installieren (npm standard). Wenn du yarn/pnpm nutzt, siehe Hinweise unten.
COPY package*.json ./
RUN npm ci

# Quellcode rein und bauen
COPY . .
# Baue das Projekt (passt für Vite und CRA, beide nutzen `build`)
RUN npm run build

RUN npm run start
