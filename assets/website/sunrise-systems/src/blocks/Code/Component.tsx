import React from 'react'

import { Code } from './Component.client'

export type CodeBlockProps = {
  code: string
  language?: string
  backgroundColor?: 'white' | 'offwhite' | null
  blockType: 'code'
}

type Props = CodeBlockProps & {
  className?: string
}

export const CodeBlock: React.FC<Props> = ({ className, code, language, backgroundColor = 'white' }) => {
  const bgClass = backgroundColor === 'offwhite' ? 'bg-offwhite' : 'bg-white'
  
  return (
    <div className={`${bgClass} py-16`}>
      <div className="container">
    <div className={[className, 'not-prose'].filter(Boolean).join(' ')}>
      <Code code={code} language={language} />
    </div>
      </div>
    </div>
  )
}
