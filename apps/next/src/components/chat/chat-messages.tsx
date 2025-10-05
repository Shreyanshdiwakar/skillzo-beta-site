"use client"

import { useEffect, useRef } from "react"
import { Bot, User, MessageCircle } from "lucide-react"
import type { Message } from "./chat-interface"

interface ChatMessagesProps {
  messages: Message[]
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
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
    <div className="h-full overflow-y-auto">
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
              <div className="text-[15px] leading-relaxed text-foreground prose prose-sm max-w-none dark:prose-invert">
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  )
}