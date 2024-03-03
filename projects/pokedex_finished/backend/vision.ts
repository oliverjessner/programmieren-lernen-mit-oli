import OpenAI from 'openai';

const openai = new OpenAI();

export default async function vision(base64_image: string): Promise<string> {
    const response = await openai.chat.completions.create({
        model: 'gpt-4-vision-preview',
        messages: [
            {
                role: 'user',
                content: [
                    { type: 'text', text: 'Which pokemon do you see? Give me only the name!' },
                    {
                        type: 'image_url',
                        image_url: {
                            url: base64_image,
                        },
                    },
                ],
            },
        ],
        max_tokens: 300,
    });

    return response.choices[0].message.content?.toLocaleLowerCase() || '';
}
