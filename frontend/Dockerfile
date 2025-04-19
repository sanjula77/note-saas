# Stage 1: Build the Vite app
FROM node:18 AS builder

WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm ci

# Copy the rest of your frontend code
COPY . .

# Build the Vite project
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine

# Remove default nginx index
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: custom nginx config (only if needed)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose the default nginx port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
