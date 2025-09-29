FROM node:20 as base
COPY ./package.json ./package-lock.json ./

RUN npm i
COPY . .
RUN npm run build


FROM nginx as build
COPY --from=base ./dist /usr/share/nginx/html
EXPOSE 80
