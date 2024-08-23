# FROM node:18-alpine
# WORKDIR /app
# COPY package*.json .
# RUN npm ci
# COPY . .
# EXPOSE 3000
# CMD ["npm","start"]


# Dockerfile for frontend
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the application code
COPY . .

# Build the application
RUN npm run build

# Install Nginx and copy the build output
FROM nginx:latest

# Copy the built frontend assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80
