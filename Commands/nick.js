const Soviet = require('discord.js');
exports.run = async(client, message, args) => {

if(!['rolid','rolid2','rolid3'].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu Kullanamazsın')
let user = message.mentions.users.first() || client.users.cache.get(args.join(' '))
let isim = args[1]
let yaş = args[2]
let tag = "tag"

if(!user) return message.channel.send('Bir Kullanıcı Etiketleyin')
if(!isim) return message.channel.send('Bir İsim Girin')
if(!yaş) return message.channel.send('Bir Yaş Girin')

user.setNickname(`${tag} ${isim} | ${yaş}`)




const sov = new Soviet.MessageEmbed()
.setColor("RANDOM")
.setTitle('İsim Değiştirme Başarılı')
.setDescription(`${user}'ın Kullanıcı Adı Başarıyla Değiştirildi => Yeni Adı ${tag} ${isim} | ${yaş}`)
.setFooter(`Kullanıcı Adını Değişen Yetkili => ${message.author.username}`)
message.channel.send(sov)

const sovi = new Soviet.MessageEmbed()
.setColor("RANDOM")
.setAuthor('İsim Değişikliği Yapıldı')
.setDescription(`
${user}'ın Kullanıcı Adı Değiştirildi
Değiştiren => ${message.author.username}`)
.setFooter('Değiştirme Zamanı')
.setTimestamp()
client.channels.cache.get("kanalid").send(sovi)

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases:['isim'],
    permlevel: 0
};

exports.help = {
    name: "nick"
}
