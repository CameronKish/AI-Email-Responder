# AI-Email-Responder
A simple application to automatically write email responses using OpenAI's ChatGPT (including GUI on local host server). To use, simply type this code into your terminal: python -m http.server. Don't forget to include your OpenAI API Key in the index.js file. 

After doing that, you will be able to have ChatGPT write responses to emails with different tones including business professional, harsh, and poetic. 


#### Example use case showing 1) email input, 2) additional user context, 3) AI generated email response:

**1) Email Input:** 

"Dear Residents, 
Please review the "Cold Weather Tips" below to prepare for the upcoming winter freeze! 
Keep garage doors closed if there are water supply lines in the garage. Open kitchen and bathroom cabinet doors to allow warmer air to circulate around the plumbing. When the weather is very cold outside, let the cold water drip from the faucet served by exposed pipes. Running water through the pipe--even at a trickle—helps prevent pipes from freezing. Keep the thermostat set to the same temperature both during the day and at night. By suspending the use of lower nighttime temperatures, you may incur a higher heating bill, but you can prevent a much more costly repair job if pipes freeze and burst. If you will be going away during cold weather, leave the heat on in your home, set to a temperature no lower than 35° F."

**2) Context:** "I believe the sender accidentally put 35 degrees but it should be much higher."

**3) AI Response:**

Dear [Sender],

Thank you for sharing the "Cold Weather Tips." While the advice is comprehensive, there appears to be a potential error in suggesting a minimum temperature of 35°F when away. For optimal pipe protection, it is advisable to maintain a higher setting, typically above 55°F. This adjustment aligns with industry recommendations and minimizes the risk of frozen pipes. Your attention to this detail will enhance the effectiveness of our winter preparedness efforts.

Best regards,
[Your Name]
