FROM node:alpine as blog-build

WORKDIR /app

COPY ./package.json .
RUN npm install
COPY . .

RUN npm run build

FROM nginx:alpine
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=blog-build /app/build /usr/share/nginx/html 