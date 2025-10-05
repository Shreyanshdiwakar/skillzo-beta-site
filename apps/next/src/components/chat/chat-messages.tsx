"use client"

import { useEffect, useRef } from "react"
import { Bot, User, MessageCircle } from "lucide-react"
import type { Message } from "./chat-interface"

// Component to format message content with basic markdown-like formatting
function FormattedMessage({ content }: { content: string }) {
  // Simple formatting function to handle basic markdown
  const formatText = (text: string) => {
    // Handle bold text **text**
    let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    
    // Handle bullet points
    formatted = formatted.replace(/^• (.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
    formatted = formatted.replace(/^- (.*$)/gim, '<li class="ml-4 list-disc">$1</li>')
    
    // Handle line breaks
    formatted = formatted.replace(/\n\n/g, '</p><p class="mt-4">')
    formatted = formatted.replace(/\n/g, '<br/>')
    
    // Wrap in paragraph if it doesn't already have paragraph tags
    if (!formatted.includes('<p>') && !formatted.includes('<li>')) {
      formatted = `<p>${formatted}</p>`
    } else if (formatted.includes('<li>')) {
      // Wrap lists in ul tags
      formatted = formatted.replace(/(<li.*?<\/li>)/g, '<ul class="space-y-1">$1</ul>')
    }
    
    return formatted
  }

  return (
    <div 
      className="formatted-message"
      dangerouslySetInnerHTML={{ __html: formatText(content) }}
    />
  )
}

interface ChatMessagesProps {
  messages: Message[]
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (messagesEndRef.current && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight
    }
  }, [messages])

  if (messages.length === 0) {
    return (
      <div className="flex h-full items-center justify-center px-4">
        <div className="max-w-2xl text-center space-y-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <MessageCircle className="h-8 w-8 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">How can I help you today?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm here to support you with career planning, college decisions, academic questions, or anything else on
              your mind.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={scrollContainerRef} className="h-full overflow-y-auto scroll-smooth">
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-8 pb-32 sm:px-6">
        {messages.map((message) => (
          <div key={message.id} className="group flex gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
              {message.role === "assistant" ? (
                <Bot className="h-4 w-4 text-foreground" />
              ) : (
                <User className="h-4 w-4 text-foreground" />
              )}
            </div>

            <div className="flex-1 space-y-2 pt-1">
              <div className="text-[15px] leading-relaxed text-foreground prose prose-sm max-w-none dark:prose-invert prose-headings:text-foreground prose-strong:text-foreground prose-p:text-foreground prose-li:text-foreground">
                <FormattedMessage content={message.content} />
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}