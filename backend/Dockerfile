FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache dumb-init

COPY package*.json tsconfig.json ./

RUN npm ci

COPY src ./src

RUN mkdir -p ./src/uploads

EXPOSE 4000

ENTRYPOINT ["dumb-init", "--"]

CMD ["npx", "nodemon", "--watch", "src", "--ext", "ts,json", "--exec", "ts-node", "src/app.ts"]
