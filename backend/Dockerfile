FROM node

WORKDIR /app

COPY package-lock.json package-lock.json
COPY package.json package.json
RUN npm install

EXPOSE 3000

COPY . .
ENTRYPOINT [ "node","server.js" ]