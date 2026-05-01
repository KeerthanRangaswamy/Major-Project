FROM node:20-alpine

WORKDIR /app

COPY package*.json vite.config.js jsconfig.json eslint.config.js index.html components.json ./

RUN npm ci

COPY src ./src
COPY public ./public

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
