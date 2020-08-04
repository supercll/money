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
    const findId = (id: number) => tags.filter(tag => tag.id === id)[0];
    const findTagIndex = (id: number) => {
        let res = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                res = 1;
                break;
            }
        }
        return res;
    }
    const updateTag = (id: number, obj: { name: string }) => {
        const index = findTagIndex(id);
        // 深拷贝tags
        const tagsClone = JSON.parse(JSON.stringify(tags))
        // 把克隆后的数据修改
        tagsClone.splice(index, 1, { id: id, name: obj.name })
        setTags(tagsClone);
    }
    return {
        tags,
        setTags,
        findId,
        findTagIndex,
        updateTag
    }
}

export { useTags }