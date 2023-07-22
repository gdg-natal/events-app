FROM node:20-alpine as base

WORKDIR /app
EXPOSE 3000
RUN npm install -g pnpm
ENTRYPOINT pnpm install --frozen-lockfile && pnpm dev

FROM base AS build
COPY app /app
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
RUN pnpm lint
RUN CI=true pnpm test
RUN pnpm build
