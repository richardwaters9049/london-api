FROM node:20 AS build

WORKDIR /app

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:$PATH"

# Copy package files first (for better caching)
COPY ./frontend/package.json .
COPY ./frontend/bun.lockb .

# Install dependencies
RUN bun install

# Copy the entire frontend directory
COPY ./frontend .

# Build the app
RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "start"]