/**
 * Utility functions to convert markdown text to Payload's Lexical editor format
 */

export function textToLexical(text: string) {
  if (!text) return null

  const paragraphs = text.split('\n\n').filter(p => p.trim())
  
  return {
    root: {
      type: 'root',
      children: paragraphs.map(paragraph => ({
        type: 'paragraph',
        children: [
          {
            type: 'text',
            text: paragraph.trim(),
          },
        ],
      })),
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

export function listToLexical(items: string[]) {
  if (!items || items.length === 0) return null

  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'list',
          listType: 'bullet',
          start: 1,
          tag: 'ul',
          children: items.map(item => ({
            type: 'listitem',
            children: [
              {
                type: 'text',
                text: item,
              },
            ],
            value: 1,
          })),
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

export function simpleTextBlock(text: string) {
  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              text,
            },
          ],
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

