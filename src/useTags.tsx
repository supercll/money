import React, { useState } from 'react'
import createId from 'lib/createId';

const defaultTags = [
    { id: createId(), name: '衣' },
    { id: createId(), name: '食' },
    { id: createId(), name: '住' },
    { id: createId(), name: '行' },
    { id: createId(), name: '学习' },
    { id: createId(), name: '娱乐' },
]

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
    return {
        tags,
        setTags
    }
}

export { useTags }