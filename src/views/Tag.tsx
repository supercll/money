import React from 'react'
import { useTags } from 'useTags';
import { useParams } from 'react-router-dom';


type Params = {
    id: string
}

const Tag: React.FC = () => {
    const { tags, findId } = useTags();
    let { id } = useParams<Params>();
    const tag = findId(parseInt(id));
    return (
        <div>{tag.name}</div>
    )
}

export default Tag;