FROM node:16

WORKDIR /app

COPY . .

RUN npm install

ENV PORT=8080

EXPOSE 8080

CMD ["node", "."]