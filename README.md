# Slack standup

![](https://i.imgur.com/9BxhLnq.gif)

## Overview
A simple standup bot that runs on a daily cron schedule to ping the channel

## Install
```
docker pull shaunw321/slack-standup:latest
```

## Flags

##### `CHANNEL` - slack channel to post to

##### `SLACK_TOKEN` - slack token for your workspace

##### `TIME` - _(optional)_ - hour of the day in Central Time (CT)

## Use
```
docker run -it --name standup \
    -e CHANNEL="<channel>" \
    -e SLACK_TOKEN="<token>" \
    -e TIME=12
    shaunw321/slack-standup:latest
```