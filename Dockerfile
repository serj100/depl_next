FROM node

WORKDIR /app

COPY package.json /app

RUN npm install

RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "start"]