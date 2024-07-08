FROM node:18.16.0-alpine3.17
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json .
RUN npm install
RUN npm install pm2 -g
COPY app.js processes.json .
EXPOSE 3000
CMD ["pm2-runtime", "app.js"]