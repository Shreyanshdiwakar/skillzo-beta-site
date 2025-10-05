"use client"

import type React from "react"

import { useState } from "react"
import { ChatHeader } from "./chat-header"
import { ChatMessages } from "./chat-messages"
import { ChatInput } from "./chat-input"
import { Target, GraduationCap, BookOpen, Sprout, Lightbulb, MessageCircle } from "lucide-react"

export type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

export type Topic = {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export const topics: Topic[] = [
  {
    id: "career",
    title: "Career Planning",
    description: "Explore career paths and professional goals",
    icon: Target,
  },
  {
    id: "college",
    title: "College Decisions",
    description: "Navigate college choices and applications",
    icon: GraduationCap,
  },
  {
    id: "academic",
    title: "Academic Support",
    description: "Get help with study strategies and coursework",
    icon: BookOpen,
  },
  {
    id: "personal",
    title: "Personal Growth",
    description: "Discuss personal challenges and wellbeing",
    icon: Sprout,
  },
  {
    id: "skills",
    title: "Skill Development",
    description: "Learn about building valuable skills",
    icon: Lightbulb,
  },
  {
    id: "general",
    title: "General Chat",
    description: "Open conversation about anything",
    icon: MessageCircle,
  },
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    try {
      // Call your actual API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          isWebSearch: false
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.message || "I'm sorry, I couldn't process your request right now.",
        timestamp: new Date(),
      }
      
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error sending message:', error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later.",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    }
  }

  const handleTopicSelect = (topic: Topic) => {
    setSelectedTopic(topic)

    // Only add a message if chat is empty
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content: `I'm here to help you with ${topic.title.toLowerCase()}. What would you like to discuss?`,
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }

  const handleNewChat = () => {
    setMessages([])
    setSelectedTopic(null)
  }

  return (
    <div className="flex h-full flex-col bg-background">
      <ChatHeader selectedTopic={selectedTopic} onNewChat={handleNewChat} />

      <div className="flex-1 overflow-hidden">
        <ChatMessages messages={messages} />
      </div>

      <ChatInput
        onSendMessage={handleSendMessage}
        disabled={messages.length > 0 && messages[messages.length - 1].role === "user"}
        topics={topics}
        onTopicSelect={handleTopicSelect}
        showSuggestions={messages.length === 0}
      />
    </div>
  )
}