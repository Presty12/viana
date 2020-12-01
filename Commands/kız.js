const Soviet = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!['kayıtyapanrolidsi', '2.kayıtçı', '3.'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanabilmek için <@&YetkiliRolİD> ||<@&YetkiliRolİD2> || <@&YetkiliRolİD3> Rol(ler)ine Sahıp Olmalısınız')
   let user = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   let isim = args[1]
   let yaş = args[2]
   let tag = "tag"
   let kayıtlırole = ""
   let kayıtlırole2 = ""
   let kayıtsızrole = ""
  // let kayıtsızrole2 = ""

if(!user) return message.channel.send("Bir Kullanıcı Etiketleyin")
if(!isim) return message.channel.send("Bir İsim Girin")
if(!yaş) return message.channel.send("Bir Yaş Girin")

let a = message.guild.member(user)

a.setNickname(`${tag} ${isim} | ${yaş}`)
a.roles.add(kayıtlırole)
a.roles.add(kayıtlırole2)
a.roles.remove(kayıtsızrole)
//a.roles.remove(kayıtsızrole2)

db.add(`kayıtSayi.${message.author.id}`, 1)
db.add(`kadinUye.${message.author.id}`, 1)
let kadın = db.get(`kadinUye.${message.author.id}`);
let kayıtlar = db.fetch(`kayıtSayi.${message.author.id}`);


const soviet = new Soviet.MessageEmbed()
.setTitle("**★ Kız Kayıt İşlemi Başarılı ★**")
.setColor("RANDOM")
.setDescription(`
${client.kayıtemoji}**${a.user} Adlı Kullanıcının Kayıt İşlemi Başarılı**
${client.kayıtemoji}**Verilen ve Alınan Rol(ler) Sırasıyla :** <@&${kayıtlırole}>  <@&${kayıtlırole2}> || <@&${kayıtsızrole}>
${client.kayıtemoji}**Kayıt Eden Yetkili** ${message.author}
${client.kayıtemoji}**Yetkilinin Toplam Kayıt Sayısı :** \`${kayıtlar}\`
${client.kayıtemoji}**Yetkilinin Toplam Kız Kayıt Sayısı :** \`${kadın}\``)
.setFooter('Kayıt Zamanı')
.setTimestamp()
message.channel.send(soviet)

const soviet2 = new Soviet.MessageEmbed()
.setTitle(`**${message.author} Adlı Yetkili Bir Kişiyi Kız Olarak Kayıt Etti**`)
.setDescription(`**Yetkilinin Toplam Kayıt Sayısı \`${kayıtlar}\` Olarak Düzenlendi & Yetkilinin Toplam Kız Kayıt Sayısı \`${kadın}\` Olarak Düzenlendi**`)
.setColor('RANDOM')
.setTimestamp()
client.channels.cache.get("kanalid").send(soviet2)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:['k'],
    permlevel: 0
};

exports.help = {
    name: "kadın",
    description: "Kız",
    usage: "k"
}
