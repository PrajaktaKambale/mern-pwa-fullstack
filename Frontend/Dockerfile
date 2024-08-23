FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 5173
CMD ["npm","start"]


# # Stage 1: Build the frontend
# FROM node:18-alpine AS build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# # Stage 2: Serve the frontend
# FROM nginx:latest
# COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf


