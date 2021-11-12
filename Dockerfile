FROM node:alpine

WORKDIR /usr/src/fyp/

COPY . .

RUN npm install

EXPOSE 8000

CMD ["node", "index.js"]
