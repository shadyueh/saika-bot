FROM node:12.7.0-alpine

WORKDIR /bot
COPY . .
RUN ["npm", "install"]

ENV BOT_TOKEN="1337544006:AAHy-Jb_OETDtU-ZwJhHxM3Ngs_5DasuKMs"

ENTRYPOINT ["npm", "start"]