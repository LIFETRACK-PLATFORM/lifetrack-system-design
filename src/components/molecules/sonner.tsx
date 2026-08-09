"use client"

import * as React from "react"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ theme = "system", richColors = true, ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={theme}
      richColors={richColors}
      className="lt:toaster lt:group"
      icons={{
        success: <CircleCheckIcon className="lt:size-4" />,
        info: <InfoIcon className="lt:size-4" />,
        warning: <TriangleAlertIcon className="lt:size-4" />,
        error: <OctagonXIcon className="lt:size-4" />,
        loading: <Loader2Icon className="lt:size-4 lt:animate-spin" />,
      }}
      style={
        {
          "--normal-bg": "var(--lt-surface-1)",
          "--normal-text": "var(--lt-text-1)",
          "--normal-border": "var(--lt-border)",
          "--success-bg": "var(--lt-surface-1)",
          "--success-text": "var(--lt-success)",
          "--success-border": "var(--lt-success)",
          "--error-bg": "var(--lt-surface-1)",
          "--error-text": "var(--lt-error)",
          "--error-border": "var(--lt-error)",
          "--warning-bg": "var(--lt-surface-1)",
          "--warning-text": "var(--lt-warning)",
          "--warning-border": "var(--lt-warning)",
          "--info-bg": "var(--lt-surface-1)",
          "--info-text": "var(--lt-primary)",
          "--info-border": "var(--lt-primary)",
          "--border-radius": "var(--lt-radius)",
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
