FROM node:20-alpine as base

WORKDIR /app
EXPOSE 3000
ENTRYPOINT yarn install --frozen-lockfile && yarn dev

FROM base AS build
COPY app /app
RUN yarn install --frozen-lockfile
RUN yarn lint
RUN CI=true yarn test
RUN yarn build
