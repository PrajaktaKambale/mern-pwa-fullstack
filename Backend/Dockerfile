FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 4001
CMD ["npm","start"]


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
