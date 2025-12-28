import TelegramBot from "node-telegram-bot-api";

const token = process.env.BOT_TOKEN;
if (!token) {
  console.error("BOT_TOKEN belum diisi!");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  bot.sendMessage(msg.chat.id, "Bot aktif ✅");
});

console.log("Bot Telegram berjalan...");
