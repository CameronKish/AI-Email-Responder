const apiKey = 'AddOpenAIAPIKeyHere';

const form = document.getElementById('form');
const chatGptResponse = document.getElementById('chatgpt');

form.addEventListener('submit', formSubmit);

async function formSubmit(event) {
  event.preventDefault();
  const data = new FormData(form);

  const formData = Object.fromEntries(data.entries());

  const { email, context, response } = formData;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant that summarizes emails.' },
        { role: 'user', content: `Please reply to the following email: ${email}. Here is the context for this email: ${context}. Please write a ${response} reply to the previously mentioned email.` },
      ],
      temperature: 0.5,
    }),
  };

  const apiResponse = await fetch('https://api.openai.com/v1/chat/completions', requestOptions)
    .then((res) => res.json())
    .catch((error) => console.log('Error:', error));

  console.log(apiResponse);

  chatGptResponse.innerHTML = apiResponse.choices[0].message.content;
}
