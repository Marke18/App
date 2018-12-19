# build stage
FROM node:9.11.1-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#RUN echo "PRIMA DI BUILD"
#RUN ls -l /app
RUN npm run build
#RUN echo "DOPO BUILD"
#RUN ls -l /app/dist

# production stage
FROM nginx:1.13.12-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
