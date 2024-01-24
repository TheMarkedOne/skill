FROM node:alpine

WORKDIR /app

COPY package*.json ./

COPY . .
RUN npm install

RUN chmod +x ./node_modules/.bin/vite

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]






