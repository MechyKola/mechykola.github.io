FROM node:12

WORKDIR /home/mykola/Code/Web/Portfolio/portfolio

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]