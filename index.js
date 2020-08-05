"use strict";

const Telegraf = require("telegraf");
const config = require("./config.json");
const status = require("./src/status");

const bot = new Telegraf(config.token);

bot.start((ctx) => ctx.reply("Hello world"));

bot.command("status", async (ctx) => {
  try {
    const response = await status();

    if (response.status == 200) {
      await ctx.reply(`Google service: ✅`);
    } else {
      await ctx.reply(`Google service: ❌`);
    }
  } catch (error) {
    console.error(error);
  }
});

bot.launch();
