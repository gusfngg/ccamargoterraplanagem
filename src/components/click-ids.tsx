'use client'

import { useEffect } from 'react'
import { captureClickIds } from '@/lib/attribution'

// Fica no layout porque o gclid chega em qualquer página (a /obras, por exemplo), não só na home.
export function ClickIds() {
  useEffect(captureClickIds, [])
  return null
}
