import { useEffect, useState } from 'react'
import parse from 'html-react-parser'

function UseHtmlParser (stringHTML) {
  const [parsedHtml, setParsedHtml] = useState(null)

  useEffect(() => {
    if (stringHTML) {
      const parsed = parse(stringHTML)
      setParsedHtml(parsed)
    }
  }, [stringHTML])

  return parsedHtml
}

export default UseHtmlParser
