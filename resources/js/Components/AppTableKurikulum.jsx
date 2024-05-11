import React from 'react'

function Td({ children, tdClassName ,colSpanlength, rowSpanLength }) {
    return <td className={`${tdClassName} py-3 px-6`} colSpan={colSpanlength} rowSpan={rowSpanLength}> {children}</td>
}

function AppTableKurikulum({ content =
    [
        {
            "mata_pelajaran": "Software Engineering",
            "sem1": "2",
            "sem2": "4",
            "sem3": "1",
            "sem4": "3",
            "sem5": "1",
            "sem6": "2",
            "sem7": "3",
            "sem8": "5",
            "jumlah": "24",
            "total_jam": "134"
        },
        {
            "mata_pelajaran": "Software Engineering",
            "sem1": "2",
            "sem2": "4",
            "sem3": "1",
            "sem4": "3",
            "sem5": "1",
            "sem6": "2",
            "sem7": "3",
            "sem8": "5",
            "jumlah": "24",
            "total_jam": "134"
        },
        {
            "mata_pelajaran": "Software Engineering",
            "sem1": 2,
            "sem2": "4",
            "sem3": "1",
            "sem4": "3",
            "sem5": "1",
            "sem6": "2",
            "sem7": "3",
            "sem8": "5",
            "jumlah": "24",
            "total_jam": "134"
        },
        {
            "mata_pelajaran": "Software Engineering",
            "sem1": "2",
            "sem2": "4",
            "sem3": "1",
            "sem4": "3",
            "sem5": "1",
            "sem6": "2",
            "sem7": "3",
            "sem8": "5",
            "jumlah": "24",
            "total_jam": "134"
        }
    ] 
}) {

    const lastTdContent = Array(Object.keys(content[0]).slice(1).length).fill(0)

    content.map((json) => {
        Object.values(json).slice(1).map((value, index) => lastTdContent[index] += parseInt(value))
    })

    console.log(lastTdContent)

    return (
        <div className='overflow-x-auto'>
            <table className='w-full text-[14px]'>
                <thead className='bg-lighttertiary text-white text-center font-semibold'>
                    <tr>
                        <Td colSpanlength={1} rowSpanLength={3}>Mata Pelajaran</Td>
                        <Td colSpanlength={8}>Jumlah Jam Per Minggu</Td>
                        <Td rowSpanLength={3}>Jumlah</Td>
                        <Td rowSpanLength={3}>Total Jam</Td>
                    </tr>
                    <tr className='border-y-2'>
                        <Td colSpanlength={2}>Kelas X</Td>
                        <Td colSpanlength={2}>Kelas XI</Td>
                        <Td colSpanlength={2}>Kelas XII</Td>
                        <Td colSpanlength={2}>Kelas XIII</Td>
                    </tr>
                    <tr>
                        <Td>I</Td>
                        <Td>II</Td>
                        <Td>III</Td>
                        <Td>IV</Td>
                        <Td>V</Td>
                        <Td>VI</Td>
                        <Td>VII</Td>
                        <Td>VIII</Td>
                    </tr>
                </thead>
                <tbody>
                    {content.map((value, index) => (
                        <tr className='border-b-2 text-center' key={index}>
                            <Td tdClassName={"text-left"}>{value.mata_pelajaran}</Td>
                            <Td>{value.sem1}</Td>
                            <Td>{value.sem2}</Td>
                            <Td>{value.sem3}</Td>
                            <Td>{value.sem4}</Td>
                            <Td>{value.sem5}</Td>
                            <Td>{value.sem6}</Td>
                            <Td>{value.sem7}</Td>
                            <Td>{value.sem8}</Td>
                            <Td>{value.jumlah}</Td>
                            <Td>{value.total_jam}</Td>
                        </tr>
                    ))}
                    <tr className='text-center bg-lighttertiary text-white font-semibold'>
                        <Td tdClassName = {"text-left"}>Total</Td>
                        {lastTdContent.map((value,index) => <Td key={index}>{value}</Td>)}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default AppTableKurikulum