FROM node:15-alpine as build
# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json .
COPY yarn.lock .

RUN yarn install --frozen-lockfile --production

COPY . .

# Get tsc using npx and specify the used tsconfig.json
RUN npx tsc --project tsconfig.json

# Remove dev-dependencies
RUN npm prune --production

# Only use the required buildsteps
FROM node:15-alpine

COPY --from=build /app /
EXPOSE 8001
CMD [ "node", "dist/app.js" ]