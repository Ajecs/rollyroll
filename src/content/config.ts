import { defineCollection, z } from 'astro:content'
// z -> zod schema validator

const rolls = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    flavour: z.string(),
    description: z.string(),
    image: z.string().url(),
    imageLocal: z.string(),
    buy: z.object({
      argentina: z.string().url(),
      usa: z.string().url()
    })
  })
})

export const collections = { rolls }
