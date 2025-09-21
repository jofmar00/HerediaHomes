# Build step
FROM node:24-alpine as build

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
RUN npm install

COPY . /app
RUN npm run build --production

# Servir web
FROM nginx:alpine
COPY --from=build /app/dist/Herediahomes/browser /usr/share/nginx/html

EXPOSE 80
