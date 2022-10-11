FROM hub.bitkinetic.com/public/node:14.15.2-alpine
LABEL MAINTAINER="lihua <lihuaio.com@gmail.com>"
ENV TZ "Asia/Shanghai"
ENV TERM xterm
# ENV NODE_ENV production
ENV HOST '0.0.0.0'
RUN echo 'https://mirrors.aliyun.com/alpine/v3.8/main/' > /etc/apk/repositories && \
    echo 'https://mirrors.aliyun.com/alpine/v3.8/community/' >> /etc/apk/repositories \
    && apk update && apk add --no-cache tzdata \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone
COPY . /app/
WORKDIR /app
RUN yarn install \
    && yarn run build
EXPOSE 3000
CMD [ "yarn","run","start" ]