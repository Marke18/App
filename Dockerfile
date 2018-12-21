 #dev stage
 FROM node:latest as dev-stage
 EXPOSE 8080
 WORKDIR /bindmount
 COPY package-lock.json package.json ./
 RUN npm install --no-progress --ignore-optional

 CMD npm run start:dev     # webpack-dev-server --host 0.0.0.0 --hot
# build stage
FROM dev-stage as build-stage
# RUN echo "PRIMA DI BUILD"
# RUN ls -l /app
RUN npm run build
# RUN echo "DOPO BUILD"
# RUN ls -l /app/dist

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
