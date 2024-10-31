FROM node:alpine AS builder 
WORKDIR /app 
COPY package*.json ./
RUN npx install
COPY . .
RUN npx run build

# Stage 2: Production image
FROM node:alpine
WORKDIR /app
RUN addgroup --gid 1000 -S app && adduser --uid 1000 -S app -G app

# Set permissions for app user for the WORKDIR    
RUN chown -R app:app App/
# Switch to the created user
USER app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js

#set enviroment veriable
ENV NODE_ENV=production
ENV PORT=3000
ENV API_TOKEN=""


# Expose the application port
EXPOSE 3000
# Health check to confirm the app is responsive
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:3000/health || exit 1

# Run the application
CMD ["npm", "run", "start"]