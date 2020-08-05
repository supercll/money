import { useState, useEffect } from "react"
import useUpdate from "./useUpdate";

export type RecordItem = {
    tagIds: number[];
    note: string;
    category: "+" | "-";
    amount: string;
    createdAt: string
}

type newRecordItem = Omit<RecordItem, "createdAt">

const defaultRecords: RecordItem[] = [
    {
        tagIds: [1, 2, 3],
        note: '',
        category: "+",
        amount: '10',
        createdAt: "2020-08-05T06:54:15.167Z"
    },
    {
        tagIds: [1, 2, 3],
        note: '',
        category: "+",
        amount: '10',
        createdAt: "2020-08-02T06:54:15.167Z"
    },

    {
        tagIds: [1, 2, 3],
        note: '',
        category: "+",
        amount: '10',
        createdAt: "2020-07-05T06:54:15.167Z"
    },
]

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>(defaultRecords)

    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem("records") || '[]'))
    }, [])

    const addRecord = (newRecord: newRecordItem) => {
        if (parseFloat(newRecord.amount) <= 0) return "请输入大于0的金额";
        if (newRecord.tagIds.length < 1) return "请先选则标签";
        const record = { ...newRecord, createdAt: (new Date()).toISOString() }
        setRecords([...records, record])
        return true;
    };

    useUpdate(() => {
        window.localStorage.setItem("records", JSON.stringify(records));
    }, [records])
    return {
        records,
        addRecord,
    }
}