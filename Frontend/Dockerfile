# FROM node:18-alpine
# WORKDIR /app
# COPY package*.json .
# RUN npm ci
# COPY . .
# EXPOSE 5173
# CMD ["npm","start"]


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


# Dockerfile for Frontend
FROM node:18-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy all source files
COPY . ./

# Build the application
RUN npm run build

# Install a lightweight HTTP server to serve the static files
RUN npm install -g serve

# Expose the correct port
EXPOSE 5173

# Serve the application on the specified port
CMD ["serve", "-s", "dist", "-l", "5173"]

