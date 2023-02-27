FROM node:latest
WORKDIR /product-app/src
COPY package*.json .
ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
         then npm install; \
         else npm install --only=production; \
         fi
COPY . /product-app/src/
EXPOSE 8000
CMD ["npm","run","start:dev"]