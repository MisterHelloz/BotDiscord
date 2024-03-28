const { Client, GatewayIntentBits, Partials } = require('discord.js');
const dotenv = require('dotenv')
dotenv.config(); 
const client = new Client({
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
    partials: [Partials.Channel],
  });
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  client.on('messageCreate', (message) => {
    console.log(message);
    if (message.content === 'สวัสดีครับ'){
        message.channel.send('ดีค้าบน้องๆนี่พี่ปิงเองสุดหล่อสุดฮ๊อตที่สุดในภาคคอมเเละรวยดั้วขิงเเค่นี้พอ');
    }
    if (message.content === 'ครีม'){
       message.channel.send('เด็กคนนี้นิสัยไม่ดี');
    }
    if (message.content === 'ปิง') {
        message.channel.send('ว่าไงจ๊ะนี่ปิงเองจ้า!');
    } 
    if (message.content === 'คิดว่าตัวเองเป็นไง') {
        message.channel.send('โครตหล่อ');
    }
    if (message.content === 'ปิงเเชร์ไฟล์หน่อย') {
        message.channel.send('เปิดเเอร์ดรอปหน่อยน้อง! พอดีพี่มีเเต่เเอร์ดรอปอะดิ เเอนดรอยด์ก็เปิด4shareเอานะ');
    }
    if (message.content === 'ปิงซึมไมวะ') {
      message.channel.send('เขาทิ้งผมดิ');
    }
    if (message.content === 'ปิง'){
      message.channel.send('...');
    }
    if (message.content === 'น๊อตหล่อจัง'){
      message.channel.send('จริงค้าบเพื่อนน๊อต');
  }
    if (message.content === 'sssss'){
      message.channel.send('ไม่รู้');
    }
  });
client.login(process.env.Token)
