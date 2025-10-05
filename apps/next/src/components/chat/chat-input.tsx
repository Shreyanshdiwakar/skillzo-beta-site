"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import type { Topic } from "./chat-interface"

interface ChatInputProps {
  onSendMessage: (message: string) => void
  disabled?: boolean
  topics: Topic[]
  onTopicSelect: (topic: Topic) => void
  showSuggestions?: boolean
}

export function ChatInput({ onSendMessage, disabled, topics, onTopicSelect, showSuggestions }: ChatInputProps) {
  const [message, setMessage] = useState("")
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim() && !disabled) {
      onSendMessage(message.trim())
      setMessage("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [message])

  return (
    <div className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
        {showSuggestions && (
          <div className="mb-3 flex flex-wrap gap-2">
            {topics.map((topic) => {
              const Icon = topic.icon
              return (
                <button
                  key={topic.id}
                  onClick={() => onTopicSelect(topic)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {topic.title}
                </button>
              )
            })}
          </div>
        )}

        <form onSubmit={handleSubmit} className="relative">
          <Textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message Student Support..."
            disabled={disabled}
            className="min-h-[56px] max-h-[200px] resize-none rounded-xl border-border bg-background pr-12 text-[15px] text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring"
            rows={1}
          />
          <Button
            type="submit"
            size="icon"
            disabled={!message.trim() || disabled}
            className="absolute bottom-2 right-2 h-8 w-8 rounded-lg"
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </div>
    </div>
  )
}