FROM node:20-alpine

WORKDIR /app

# Nur package.json + lock zuerst kopieren, damit Layer gecached werden
COPY package*.json ./

RUN npm install

# App Code kopieren
COPY . .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["npm", "start"]
