# For the frontend service
FROM node:18-alpine

# Install bash
RUN apk add --no-cache bash

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . ./

EXPOSE 5173

CMD ["npm", "run", "dev"]





# # Dockerfile for backend
# FROM node:18-alpine

# # Set working directory
# WORKDIR /app

# # Install dependencies
# COPY package.json package-lock.json ./
# RUN npm install

# # Copy the application code
# COPY . .

# # Expose the port the app runs on
# EXPOSE 4001

# # Start the application
# CMD ["npm", "start"]
