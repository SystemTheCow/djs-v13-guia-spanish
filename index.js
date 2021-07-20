const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
const client = new Client({
  partials: ["USER", "CHANNEL", "GUILD_MEMBER", "REACTION", "MESSAGE"],
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  allowedMentions: { parse: ['users'], repliedUser: true }
});


//<--------------------------------------Declaraciones----------------------------------------------------->
/*


PARA INSTALAR LA V13 USA npm i discord.js@dev HASTA QUE SALGA LA V13 FINAL


*/
client.on('ready', () => {
  console.log(`Iniciado como ${client.user.tag}!`);
});

client.on('messageCreate', message => { //El evento message ahora es messageCreate
  if (message.content === 'ping') {
	  
	  const boton = new Discord.MessageButton() // Creamos un botón
	  .setCustomId('ola')
	  .setLabel("XD")
	  .setStyle("PRIMARY")
	  
	  const componentes = new Discord.MessageActionRow() // Creamos un row de acciones
	  .addComponents(boton)

    message.channel.send({ content: 'k onda pa', reply: { messageReference: message.id }, allowedMentions: { repliedUser: false }, components: [componentes]})
  }
});

//<--------------------------------------------Handler------------------------------------------------------>
client.login("//Aqui tu token");
