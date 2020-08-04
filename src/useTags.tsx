import React, { useState } from 'react'

const useTags = () => {
    const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行', '教育', '娱乐']);
    return {
        tags,
        setTags
    }
}

export { useTags }