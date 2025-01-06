/// <reference types="bun-types" />

import { remark } from "remark"
import html from "remark-html"

async function getMarkdownContent(filePath: string): Promise<string> {
  // Server-side only
  if (typeof window !== 'undefined') {
    throw new Error('getMarkdownContent can only be called server-side')
  }

  try {
    // Dynamic imports for server-side only modules
    const { readFile } = await import('fs/promises')
    const { join } = await import('path')
    
    const fullPath = join(process.cwd(), 'public', 'licenses', filePath)
    const fileContents = await readFile(fullPath, 'utf-8')
    const processedContent = await remark()
      .use(html)
      .process(fileContents)
    
    return processedContent.toString()
  } catch (error) {
    console.error(`Error reading markdown file: ${filePath}`, error)
    return ""
  }
}

export async function getLicenseContent(code: string): Promise<string> {
  // Parse the license code to determine which files to load
  const [_, weights, model, data, type, variant] = code.match(/AILA-(\d)(\d)(\d)-([CBF]|B)(-1)?/) || []
  
  if (!weights || !model || !data || !type) {
    return ""
  }

  const parts: string[] = []
  
  // Special case for AILA-999-C
  if (code === "AILA-999-C") {
    return getMarkdownContent("AILA-999-C.md")
  }

  // Add content for each component
  parts.push(`weights/${weights}.md`)
  parts.push(`model/${model}.md`)
  parts.push(`data/${data}.md`)
  
  // Add variant content if applicable
  if (type === "C" && variant) {
    parts.push("AILA-xxx-C-1.md")
  }

  // Add B license content if applicable
  if (type === "B") {
    parts.push("AILA-xxx-B.md")
  }

  // Load and combine all parts
  const contents = await Promise.all(parts.map(getMarkdownContent))
  return contents.join("\n\n")
} 