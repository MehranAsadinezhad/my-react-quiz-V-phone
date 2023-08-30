import React from 'react'

export default function Progress({ questionsNum, index }) {
    const maxWid = questionsNum * 30;
    const newIndex = index * 30;
    const wid = (newIndex / maxWid) * 450;
    return (
        <>
            <div className="relative pt-1 hidden md:block">
                <div style={{ width: maxWid }} className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-sky-300`}>
                    <div style={{ width: wid }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-sky-600`}></div>
                </div>
            </div>
        </>
    )
}
