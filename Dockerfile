FROM node

COPY . /app

WORKDIR /app

RUN npm install

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "run", "dev"]