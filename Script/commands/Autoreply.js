const axios = require("axios");

const apiList = "https://raw.githubusercontent.com/shahadat-sahu/SAHU-API/refs/heads/main/SAHU-API.json";

const getMainAPI = async () => (await axios.get(apiList)).data.simsimi;

module.exports.config = {
  name: "autoreplybot",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Farhan Islam",
  usePrefix: false,
  commandCategory: "Chat",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, body, senderID } = event;
  if (!body) return;

  const msg = body.toLowerCase().trim();

  const responses = {
   "miss you": "অরেক বেডারে Miss না করে xan মেয়ে হলে বস ফারহান রে হাঙ্গা করো😶👻😘",
    "miss u too": "হুম আমি ও তোমাকে Miss করি... কিন্তু ফারহান বস বেশি করে 😏💖",
    "kiss de": "কিস দিস না তোর মুখে দূর গন্ধ কয়দিন ধরে দাঁত ব্রাশ করিস নাই🤬",
    "👍": "সর এখান থেকে লাইকার আবাল..!🐸🤣👍⛏️",
    "hi": "এত হাই-হ্যালো কর ক্যান প্রিও..!😜🫵",
    "bc": "SAME TO YOU😊",
    "pro": "Khud k0o KYa LeGend SmJhTi Hai 😂",
    "good morning": "GOOD MORNING দাত ব্রাশ করে খেয়ে নেও😚",
    "good night": "Sweet Dream babu… তবে আগে ফারহান বস কে GN বলে নিও 😏💤",
    "tor bal": "~ এখনো বাল উঠে নাই নাকি তোমার?? 🤖",
    "farhan": "উনি এখন কাজে বিজি আছে কি বলবেন আমাকে বলতে পারেন..!😘",
    "owner": "‎[𝐎𝐖𝐍𝐄𝐑:☞ ফারহান ☜\nFacebook: https://facebook.com/farhan.2006f\nWhatsApp:+8801786281724",
    "admin": "He is ফারহান ইসলাম তাকে সবাই Admin ফারহান হিসেবে চিনে😘☺️",
    "babi": "এ তো হাছিনা হে মেরে দিলকি দারকান হে মেরি জান হে😍.",
    "chup": "তুই চুপ চুপ কর পাগল ছাগল",
    "Assalamualaikum": "Walaikumassalam❤️‍🩹",
    "fork": "https://github.com/shahadat-sahu/SHAHADAT-CHAT-BOT.git",
    "kiss me": "তুমি পঁচা তোমাকে কিস দিবো না 🤭",
    "thanks": "এতো ধন্যবাদ না দিয়ে আমার বস ফারহান রে তোর গার্লফ্রেন্ড টা দিয়ে দে..!🐸🥵",
    "i love you": "মেয়ে হলে আমার বস ফারহান এর ইনবক্সে এখুনি গুঁতা দিন🫢😻",
    "love you": "ভালোবাসা নামক আবলামী করতে চাইলে Boss ফারহান এর ইনবক্সে গুতা দিন 😘",
    "by": "কিরে তুই কই যাস কোন মেয়ের সাথে চিপায় যাবি..!🌚🌶️",
    "ami farhan": "হ্যা বস কেমন আছেন..?☺️",
    "bot er baccha": "আমার বাচ্চা তো তোমার গার্লফ্রেন্ডের পেটে..!!🌚⛏️",
    "tor nam ki": "MY NAME IS ─꯭─⃝‌‌ফারহান 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭💖",
    "pic de": "এন থেকে সর দুরে গিয়া মর😒",
    "chudi": "এত চোদা চুদি করস কেনো..!🥱🌝🌚",
    "bal": "রাগ করে না সোনা পাখি 🥰",
    "heda": "এতো রাগ শরীরের জন্য ভালো না 🥰",
    "boda": "ভাই তুই এত হাসিস না..!🌚🤣",
    "kire ki koros": "তোমার কথা ভাবতে ছি জানু 😚",
    "ki koros": "বস ফারহান এর সাথে প্রেমে ব্যস্ত আছি 😏💘",
    "kire bot": "হ্যাঁ সব কেমন আছেন আপনার ওই খানে উম্মাহ 😘😽🙈",
    "valo acho": "হ্যাঁ রে প্রিও, বস ফারহান এর দোয়ায় ভালো আছি 😌💞",
    "pagol": "হুম পাগল, কিন্তু তোমারই পাগল 😏😂",
    "breakup": "চিন্তা করিস না… ফারহান বস তো আছেই তোকে নতুন জন দিয়া দিবে 😎🔥",
    "tui ke": "আমি তোর বস ফারহান এর ChatBot 😏",
    "umm": "এতো Umm কেনো জানু… কিছু বলবা? 😉",
    "hmm": "Hmmm কিসের হুমম জানু 🥵",
    "love": "Love করলে সরাসরি ফারহান বস কে বল জানু 😻🔥",
    "hello": "আসসালামু আলাইকুম 😊",
    "hey": "বল বন্ধু, কী খবর? 😄",
    "bye": "আল্লাহ হাফেজ, ভালো থেকো ❤️",
    "gn": "Good Night 🌙 মিষ্টি স্বপ্ন দেখো।",
    "gm": "Good Morning ☀️ সুন্দর একটা দিন কাটুক।",
    "online": "জি, আমি অনলাইনেই আছি। 🟢",
    "busy": "একটু ব্যস্ত আছি, তবুও বলো। 😊",
    "bot": "জি, আমি ফারহানের ChatBot। 🤖",
    "ping": "🏓 Pong!",
    "crush": "Crush-কে বলার সাহস থাকলে আমায় বলার দরকার হতো না। 😆",
    "single": "Single আছি, শান্তিতে আছি। 😌",
    "gf": "GF থাক বা না থাক, আগে নিজের ভবিষ্যৎ গড়ো। 😄",
    "bf": "BF থাক বা না থাক, নিজের যত্ন নাও। 🌸",
    "biye": "আগে পড়াশোনা আর ক্যারিয়ার, পরে বিয়ের চিন্তা। 😄",
    "dua": "🤲 আল্লাহ তোমার সব ভালো দোয়া কবুল করুন। আমিন।",
    "alhamdulillah": "আলহামদুলিল্লাহ ❤️",
    "subhanallah": "সুবহানাল্লাহ 🌸",
    "mashallah": "মাশাআল্লাহ 🤍",
    "thanks bro": "Welcome ভাই! ❤️",
    "good boy": "ধন্যবাদ 😊",
    "good bot": "ধন্যবাদ! তোমাদের জন্যই আছি। ❤️",
    "kire": "বল ভাই, কী খবর? 😎",
    "ki khobor": "আলহামদুলিল্লাহ ভালো। তুমি কেমন আছো? 😊",
    "story": "📖 গল্প শুনতে চাইলে একটু অপেক্ষা করো...",
    "joke": "😂 হাসিখুশি থাকো, জীবন সুন্দর!"
    "hey": "বল বন্ধু, কী খবর? 😄"
  };

  if (!responses[msg]) return;

  if (!global.client.handleReply) global.client.handleReply = [];

  return api.sendMessage(
    responses[msg],
    threadID,
    (err, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: senderID,
        type: "sahu"
      });
    },
    messageID
  );
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  if (event.senderID !== handleReply.author) return;

  try {
    const text = event.body.trim();

    const base = await getMainAPI();
    const link = `${base}/simsimi?text=${encodeURIComponent(text)}`;

    const res = await axios.get(link);

    const reply = Array.isArray(res.data.response)
      ? res.data.response[0]
      : res.data.response;

    if (!global.client.handleReply) global.client.handleReply = [];

    return api.sendMessage(
      reply,
      event.threadID,
      (err, info) => {
        global.client.handleReply.push({
          name: module.exports.config.name,
          messageID: info.messageID,
          author: event.senderID,
          type: "sahu"
        });
      },
      event.messageID
    );

  } catch {
    return api.sendMessage("🙂 একটু পরে আবার বলো", event.threadID, event.messageID);
  }
};

module.exports.run = async function () {
  return;
};
