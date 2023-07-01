FROM node:12.22.9-alpine
WORKDIR /app
COPY package*.json /app/
RUN npm install -y
COPY . /app/
EXPOSE 8080
CMD ["node", "app"]