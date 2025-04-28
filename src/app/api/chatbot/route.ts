import { NextRequest, NextResponse } from 'next/server';
import Together from 'together-ai';

export async function POST(req: NextRequest) {
  const { userMessage, chatHistory } = await req.json();

  const together = new Together({
    apiKey: process.env.TOGETHER_API_KEY, 
  });

  try {
    const response = await together.chat.completions.create({
      messages: [...chatHistory, { role: 'user', content: userMessage }],
      model: 'meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8',
    });

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error calling Together API', error);
    return new NextResponse('Error fetching chatbot response', { status: 500 });
  }
}
