FROM mhart/alpine-node:10

WORKDIR /app/slackbot

COPY package*.json /app/slackbot/
RUN npm install --production

COPY . /app/slackbot/
RUN apk update \
    && apk add tzdata \
    && cp /usr/share/zoneinfo/America/Chicago /etc/localtime \
    && echo "America/Chicago" > /etc/timezone \
    && date

CMD node /app/slackbot/index.js