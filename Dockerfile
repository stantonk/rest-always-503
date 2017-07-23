FROM node:7.9.0

RUN mkdir -p /app
ADD ./always_503.js /app/always_503.js

EXPOSE 8888

CMD ["node", "/app/always_503.js"]
