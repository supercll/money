import { useState, useEffect } from "react"
import useUpdate from "./useUpdate";

export type RecordItem = {
    tagIds: number[];
    note: string;
    category: "+" | "-";
    amount: string;
    createdAt: string
}

const defualtRecords = [
    {
        tagIds: [7, 8, 9],
        note: '',
        category: "+",
        amount: '10',
        createdAt: "2020-08-05T06:54:15.167Z"
    },
    {
        tagIds: [7, 8],
        note: '',
        category: "-",
        amount: '10',
        createdAt: "2020-08-02T06:54:15.167Z"
    },

    {
        tagIds: [8, 9, 10, 11, 12],
        note: '',
        category: "+",
        amount: '10',
        createdAt: "2020-07-05T06:54:15.167Z"
    },
    {
        tagIds: [7, 9],
        note: '',
        category: "-",
        amount: '10',
        createdAt: "2020-06-05T06:54:15.167Z"
    },
    {
        tagIds: [7, 9],
        note: '',
        category: "+",
        amount: '10',
        createdAt: "2020-06-05T06:54:15.167Z"
    },
    {
        tagIds: [7, 9],
        note: '',
        category: "-",
        amount: '10',
        createdAt: "2020-05-05T06:54:15.167Z"
    },
]

type newRecordItem = Omit<RecordItem, "createdAt">

export const useRecords = () => {
    const [records, setRecords] = useState<RecordItem[]>([])

    useEffect(() => {
        let localRecords = JSON.parse(window.localStorage.getItem("records") || '[]');

        if (localRecords.length === 0) {
            localRecords = defualtRecords;
        }
        setRecords(localRecords);
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
    }, records)
    return {
        records,
        addRecord,
    }
}