"use client"

import * as React from "react"

import { FieldError } from "@/components/atoms/field-error"
import { FieldHint } from "@/components/atoms/field-hint"
import { Label } from "@/components/atoms/label"
import { cn } from "@/lib/utils"

function FormField({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form-field"
      className={cn("lt:flex lt:flex-col lt:gap-1", className)}
      {...props}
    />
  )
}

function FormFieldLabel({ className, ...props }: React.ComponentProps<typeof Label>) {
  return (
    <Label className={cn("lt:text-xs lt:font-semibold lt:text-text-3", className)} {...props} />
  )
}

function FormFieldControl({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="form-field-control" className={className} {...props} />
}

type FormFieldItemProps = {
  label: string
  htmlFor?: string
  hint?: string
  error?: string
  className?: string
  children: React.ReactElement<{
    id?: string
    "aria-invalid"?: boolean
    "aria-describedby"?: string
  }>
}

function FormFieldItem({ label, htmlFor, hint, error, className, children }: FormFieldItemProps) {
  const generatedId = React.useId()
  const fieldId = htmlFor ?? children.props.id ?? generatedId
  const errorId = error ? `${fieldId}-error` : undefined
  const hintId = hint && !error ? `${fieldId}-hint` : undefined
  const describedBy = errorId ?? hintId

  const control = React.cloneElement(children, {
    id: fieldId,
    "aria-invalid": error ? true : children.props["aria-invalid"],
    "aria-describedby": describedBy ?? children.props["aria-describedby"],
  })

  return (
    <FormField className={className}>
      <FormFieldLabel htmlFor={fieldId}>{label}</FormFieldLabel>
      <FormFieldControl>{control}</FormFieldControl>
      {error ? (
        <FieldError id={errorId}>{error}</FieldError>
      ) : hint ? (
        <FieldHint id={hintId}>{hint}</FieldHint>
      ) : null}
    </FormField>
  )
}

export { FormField, FormFieldControl, FormFieldItem, FormFieldLabel }
