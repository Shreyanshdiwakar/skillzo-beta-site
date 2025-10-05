"use client"

import { Button } from "@/components/ui/button"
import { Plus, MessageCircle } from "lucide-react"
import type { Topic } from "./chat-interface"

interface ChatHeaderProps {
  selectedTopic: Topic | null
  onNewChat: () => void
}

export function ChatHeader({ selectedTopic, onNewChat }: ChatHeaderProps) {
  return (
    <header className="border-b border-border/50 bg-background">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <MessageCircle className="h-5 w-5 text-foreground" />
          <h1 className="text-sm font-medium text-foreground">Skillzo AI Assistant</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onNewChat} className="h-8 text-xs hover:bg-muted">
            <Plus className="h-3.5 w-3.5 mr-1.5" />
            New chat
          </Button>
        </div>
      </div>
    </header>
  )
}