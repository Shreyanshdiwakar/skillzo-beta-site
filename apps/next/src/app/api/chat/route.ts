import { NextResponse } from 'next/server';

export interface ChatRequest {
  message: string;
  isWebSearch?: boolean;
}

export interface ChatResponse {
  message: string;
  model?: {
    name: string;
    description: string;
  };
}

export async function POST(request: Request): Promise<NextResponse<ChatResponse | { error: string }>> {
  try {
    const body = await request.json() as ChatRequest;
    const { message } = body;

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is configured
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key is not configured. Please add OPENAI_API_KEY to your environment variables.' },
        { status: 500 }
      );
    }

    // Call OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are a helpful AI career counselor and educational assistant for Skillzo. You help students with:
            - Career planning and guidance
            - College selection and applications
            - Academic support and study strategies
            - Personal development and growth
            - Skill development recommendations
            
            Be supportive, encouraging, and provide practical advice. Keep responses concise but helpful.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API error:', errorText);
      return NextResponse.json(
        { error: 'Failed to get response from AI service' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content || 'I apologize, but I could not generate a response right now.';

    return NextResponse.json({
      message: aiMessage,
      model: {
        name: 'GPT-3.5 Turbo',
        description: 'Fast and efficient AI assistant'
      }
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}