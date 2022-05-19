# Configure and build the front-end. Use a more modern, LTS node version.
FROM node:16 as front-end
WORKDIR /tmp/donatemask
COPY . .
RUN npm install && npm run build

# Production currently runs on node v13.14.0
FROM node:13.14.0 as prod

# Copy the built front-end into /home/donatemask/public
WORKDIR /home/donatemask/donatemask.ca
COPY --from=front-end /tmp/donatemask/build/ ./public/
COPY --from=front-end /tmp/donatemask/server/ ./server/
COPY --from=front-end /tmp/donatemask/package* ./

# # Setup and run the server
RUN cd ./server && npm install
CMD ["node", "./server/app.js"]
