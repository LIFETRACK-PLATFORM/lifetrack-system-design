import { describe, expect, it } from "vitest"

import { cn } from "./utils"

describe("cn", () => {
  it("merges class names", () => {
    expect(cn("lt:px-2", "lt:py-1")).toBe("lt:px-2 lt:py-1")
  })

  it("deduplicates conflicting tailwind utilities with lt prefix", () => {
    expect(cn("lt:px-2", "lt:px-4")).toBe("lt:px-4")
  })

  it("handles conditional classes", () => {
    expect(cn("lt:text-text-1", false && "lt:hidden", "lt:font-medium")).toBe(
      "lt:text-text-1 lt:font-medium"
    )
  })
})
