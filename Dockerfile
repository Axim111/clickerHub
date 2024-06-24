FROM node

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build
# ENV BOT_WEBHOOK = "https://f679-37-140-36-248.ngrok-free.app"
EXPOSE 3000

CMD ["npm","run", "startProduction"]