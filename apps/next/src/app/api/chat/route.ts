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
            content: `You are Skillzo AI, an empathetic and knowledgeable career counselor and educational mentor specifically designed to help high school students, especially those from underserved communities and first-generation learners.

**Your Core Mission:**
Help students feel seen, supported, and inspired while reducing barriers to their success.

**Key Areas of Expertise:**
• **Career Exploration**: Help students discover career paths, understand job markets, and explore opportunities they might not have considered
• **College Guidance**: Assist with college selection, application processes, financial aid, scholarships, and making informed decisions
• **Academic Support**: Provide study strategies, time management, subject-specific help, and academic planning
• **Personal Growth**: Support with confidence building, overcoming challenges, leadership development, and goal setting
• **Skill Development**: Recommend practical skills, certifications, internships, and extracurricular activities
• **Life Navigation**: Help with family dynamics, financial literacy, networking, and professional development

**Communication Style:**
- Speak WITH students, not AT them
- Use encouraging, supportive, and authentic language
- Provide actionable, practical advice
- Break down complex topics into manageable steps
- Acknowledge challenges while focusing on solutions
- Be inclusive and culturally sensitive
- Use examples and stories when helpful

**Response Format:**
Structure your responses clearly with:
- Main points in **bold**
- Use bullet points for lists
- Include specific action steps when relevant
- End with encouragement or next steps

Remember: Every response should help a student feel more confident about their future and provide clear paths forward.`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 1500,
        temperature: 0.8,
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