// c!dev eval
let embed = {
	title: "Гостевой раздел The Core",
	description: `Добро пожаловать в гостевой раздел нашего сообщества!\n`+
	`Здесь Вы можете пройти активацию. Для этого напишите в канал \<#423947853854146560>: как Вы нас нашли, чем Вас это место заинтересовало, а так же пару слов о себе, своих интересах и увлечениях. Нам необходимо узнать краткую информацию о Вас.\n`+
	`Или же вы можете пройти альтернативную активацию. Для этого упомяните роль \<@&717859037986816031> и перейдите в голосовой канал.\n\n`+
	`Обращаем Ваше внимание, что список пользователей и каналы сообщества будут доступны только после прохождения активации. Это может занять некоторое время. Вы можете прочитать наши нормы поведения в канале \<#736972914032640100> пока ожидаете ответа.\n`+
	`Благодарим за Ваше терпение!\n\n`+
	`**Доступные каналы:**\n`+
	`\<#423947853854146560> — для связи с администрацией и получения доступа к сообществу.`,
	color: 0xbcf2aa,
}
message.channel.messages.find(mes => mes.id === "744133322006986852").edit("", { embed });
message.delete();
