# Stage 1: Build the Vite app
FROM node:18 AS builder

WORKDIR /app

# Copy dependency files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the Vite project
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Remove default nginx index
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
