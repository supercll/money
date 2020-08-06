import { useState, useEffect } from 'react'
import createId from 'lib/createId';
import useUpdate from 'hooks/useUpdate';

const useTags = () => {
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    const findId = (id: number) => tags.filter(tag => tag.id === id)[0];
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem("tags") || "[]");
        if (localTags.length === 0) {
            localTags = [
                { id: createId(), name: '衣' },
                { id: createId(), name: '食' },
                { id: createId(), name: '住' },
                { id: createId(), name: '行' },
                { id: createId(), name: '学习' },
                { id: createId(), name: '娱乐' },
            ]
        }
        setTags(localTags);
    }, [])

    useUpdate(() => {
        window.localStorage.setItem("tags", JSON.stringify(tags))
    }, [tags])

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
        setTags(tags.map(tag => {
            if (tag.id === id) {
                return { id, name: obj.name };
            } else {
                return tag;
            }
        }))
        /* // 获取要改变的tag的下标
        const index = findTagIndex(id);
        // 深拷贝tags
        const tagsClone = JSON.parse(JSON.stringify(tags))
        // 把克隆后的数据修改
        tagsClone.splice(index, 1, { id: id, name: obj.name })
        setTags(tagsClone); */
    }
    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id))
    }
    const AddTag = () => {
        const tagName = window.prompt("新标签的名字为：")
        if (tagName != null && tagName?.trim() !== "") {
            setTags([...tags, { id: createId(), name: tagName }]);
        }
    }

    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : ""
    }
    return {
        tags,
        setTags,
        findId,
        findTagIndex,
        updateTag,
        deleteTag,
        AddTag,
        getName
    }
}

export { useTags }