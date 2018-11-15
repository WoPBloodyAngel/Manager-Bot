const Discord = require("discord.js");
const prefix = '!';
const version = "1.10B";
var client = new Discord.Client();


//Bots login token
client.login("Removed for Security", output);

//If an error is made during startup logs into console otherwise logs logged in
function output(error, token) {
  if (error) {
	console.log("There was an error: " + error);
	return;
  }else
	console.log("Logged in: " + token);
  } 

//Checks to see if the provided text matches the url regex.
function URLCheck(text) 
{
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    if(urlRegex.test(text))
    {
    	return true;
    }
    else
    {
    	return false;
    }
};

//Configures startup settings
client.on("ready", function() {
	console.log("bot stats: Online!");
	client.user.setGame('!help for a list of commands');
  });

//Triggered when a user edits their message.
client.on('messageUpdate', (oldmsg, newmsg) => {
	console.log("User edited their message.");
	//Currently not working. Please revise deleting an edited message.
  	/* if (newmsg.content.toUpperCase().match(/DISCORD.GG/i))
	{
		console.log(newmsg.author.name + " had their edited Discord Link removed - " + newmsg);
   		newmsg.delete().catch(O_o=>{}); 
   		newmsg.author.send("Your discord invite link was removed. \n If you think this was a mistake please contact an admin.");
	}
	*/
});

//Reads user messages and replys accordingly
client.on('message', message => {
		console.log("User sent a message.");

		//Prevents the bot from replying to itself.
		if (message.author.bot) return;

		//Checks to see if the discord link is an associated discord link if not deletes it.
		if (message.content.toUpperCase().match(/DISCORD.GG/i)) 
		{
			const allowedDiscords = ["DISCORD.GG/YZWYK5M", "DISCORD.GG/AQUAFPS"];
			var allow = false;

			for (var i = 0; i <= allowedDiscords.length - 1; i++) 
			{
				if(message.content.toUpperCase().match(allowedDiscords[i]))
				{		
					allow = true;
					break;
				}
			}

			if(allow == false)
			{
				console.log(message.author + " had their Discord Link removed - " + message);
   				message.delete().catch(O_o=>{}); 
   				message.author.send("Your discord invite link was removed. \n If you think this was a mistake please contact an admin.");
   			}
		}

		//Ignores message if it does not start with !
		if (message.content.indexOf(prefix) !== 0) return;

		//Commands
		if (message.content.indexOf(prefix) === 0 ) 
		{
			const args = message.content.slice(prefix.length).trim().split(/ +/g);
			const command = args.shift().toUpperCase();

			if (command === "TWITCH") 
			{
				message.reply("You can find Aquas stream here: https://www.twitch.tv/aquafpsgaming");
				console.log("a user has executed a twitch command!");
			}
			else if (command === "YOUTUBE") 
			{
				message.reply("You can find Aquas youtube here: https://www.youtube.com/user/macaws7");
				console.log("a user has executed a youtube command!");
			}
			else if (command === "WIPE") 
			{
				message.reply("Hello \n The Aquarium Wipes weekly every Thursday at the time of OXIDE update. \n Please refrain from bothering moderators about wipe times. It is out of their control.");
				console.log("a user has executed a wipe command!");
			}
			else if (command === "HELP")
			{
				message.reply("\n Here is a list of commands: \n !Help - Lists all bot commands. \n !Report - Aquarium report discord link. \n !Twitch - Link to Aquas twitch account. \n !Youtube - Link to Aquas youtube channel. \n !Twitter - Link to Aquas Twitter. \n !Server - Information about Aquas rust server. \n !Merch - Link to Aquas cool clothes. \n !Wipe - Information about The Aquarium wipes. \n !About - Information about the bot.");
				console.log("a user has executed a help command!");
			}
			else if (command === "ABOUT")
			{
				message.reply("\n Aqua Bot \n Version " + version + "\n Sponsored by CreatorsClub.net \n Type !changelog for recent changes.");
				console.log("a user has executed a about command!");
			}
			else if (command === "SERVER")
			{
				message.reply("[US] The Aquarium Vanilla 1.5x - connect 142.44.177.154:28015 \n Hosted by: https://rustops.com/")
				console.log("a user has executed a server command!");
			}
			else if (command === "MERCH")
			{
				message.reply(" Do you wanna wear cool clothes? \n Well you can get some from: https://teespring.com/stores/aquafps \n If you want.");
				console.log("a user has executed a merch command!");
			}
			else if (command === "REPORT")
			{
				message.reply("Reports for The Aquarium Server are done in https://discord.gg/yzwyk5M");
				console.log("a user has executed a report command!");
			}
			else if (command === "TWITTER")
			{
				message.reply("You Can find Aquas twitter here: https://twitter.com/aquafpsgaming.");
				console.log("a user has executed a twitter command!");
			}
			/*
			There are no known issues with this command but it is currently disabled after community request to allow links.
			else if (x === URLCheck(message))
			{
				if(!message.member.roles.some(r=>["Admins"].includes(r.name)) || !message.member.roles.some(r=>["Moderator"].includes(r.name)) || !message.member.roles.some(r=>["Youtuber"].includes(r.name)) || !message.member.roles.some(r=>["The Aquarium Admin"].includes(r.name)))
				{
					message.delete().catch(O_o=>{});
					message.author.sendMessage("We have removed your link to prevent spam. \n If you still wish to share your link please speak to an Admin or Moderator. \n If you did not send a link please report it to Josh King#4041 with the message you sent.");
					console.log("A users link was removed: " + message)
				}
			}
			*/
			else if(command === "CHANGELOG")
			{
				console.log("a user has executed a changelog command");
				message.channel.send({embed: {
			    color: 3447003,
			    fields: 
			    [
			    	{
			        	name: "Patch " + version,
			        	//Consider using a collection
			        	value: "+New Annouce command for admins\n+[WIP]Deletes spam about wipe time\n+Blocks non associated discord links"
			      	},
			    ],
			    timestamp: new Date(),
			    footer: 
			    {
			      icon_url: client.user.avatarURL,
			      text: "Aqua Bot Version 1.10 BETA"
			    }
			  }
			});
			}
			else if(command === "ANNOUNCE") 
			{
				if(!message.member.roles.some(r=>["Admins"].includes(r.name)))
				{
					return message.reply("Sorry, you don't have permissions to use this!");
				}
				else
				{
				    const sayMessage = args.join(" ");
				    message.delete().catch(O_o=>{}); 
				    message.channel.send(sayMessage);
				}
			}
	}
  });

//On bot disconnect reconnects to discord.
client.on('disconnect', function(msg, code) {
	if (code === 0) return console.error(msg);
	client.connect();
});
