FROM node:latest
WORKDIR /order-app/src
COPY package*.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
         then npm install; \
         else npm install --only=production; \
         fi
COPY . /order-app/src/
EXPOSE 8001
CMD ["npm","run","start:dev"]