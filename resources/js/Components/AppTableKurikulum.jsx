import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from "remark-gfm";

function Td({ children, tdClassName, colSpanlength, rowSpanlength }) {
    return <td className={`${tdClassName} py-3 px-6`} colSpan={colSpanlength} rowSpan={rowSpanlength}> {children}</td>
}

function AppTableKurikulum(content) {

    const data = content.content;
    // const lastTdContent = Array(Object.keys(content[0]).slice(1).length).fill(0)

    // content.map((json) => {
    //     Object.values(json).slice(1).map((value, index) => lastTdContent[index] += parseInt(value))
    // })

    return (
        <div className='overflow-x-auto'>
            <table className='w-full text-[14px]'>
                <thead className='bg-lighttertiary text-white text-center font-semibold'>
                    <tr>
                        <Td rowSpanlength={2} colSpanlength={1}>Mata Pelajaran</Td>
                        <Td colSpanlength={2}>Total Jam Pelajaran</Td>
                        <Td rowSpanlength={2} colSpanlength={1}>Total JP Per Tahun</Td>
                    </tr>
                    <tr className='border-y-2'>
                        <Td>Alokasi Intrakurikuler Per Tahun</Td>
                        <Td>Alokasi Projek Penguatan Profil Pelajar Pancasila Per Tahun</Td>
                    </tr>
                </thead>
                <tbody>
                    {data && Object.entries(data).map(([key, value], index) => {
                        return Object.entries(data).length != index + 1 ?
                            (
                                <>
                                    <tr className='border-b border-gray-200'>
                                        <Td tdClassName={' bg-gray-100'} colSpanlength={4}>{key}</Td>
                                    </tr>
                                    {value.map((dataPerRow, index) => (
                                        <tr key={index} className='border-b border-gray-200'>
                                            <Td tdClassName="text-left">
                                                <ReactMarkdown children={dataPerRow.mata_pelajaran} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                            <Td tdClassName={'text-center'}>
                                                <ReactMarkdown children={dataPerRow.alokasi_intra} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                            <Td tdClassName={'text-center'}>
                                                <ReactMarkdown children={dataPerRow.alokasi_projek} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                            <Td tdClassName={'text-center'}>
                                                <ReactMarkdown children={dataPerRow.total_jp_per_tahun} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                        </tr>
                                    ))}
                                </>
                            )
                            :
                            (
                                <>
                                    <tr className='border-b border-gray-200'>
                                        <Td tdClassName={'bg-gray-100'} colSpanlength={4}>{key}</Td>
                                    </tr>
                                    {value.slice(0, -3).map((dataPerRow, index) => (
                                        <tr key={index} className='border-b border-gray-200'>
                                            <Td tdClassName="text-left">
                                                <ReactMarkdown children={dataPerRow.mata_pelajaran} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                            <Td tdClassName={'text-center'}>
                                                <ReactMarkdown children={dataPerRow.alokasi_intra} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                            <Td tdClassName={'text-center'}>
                                                <ReactMarkdown children={dataPerRow.alokasi_projek} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                            <Td tdClassName={'text-center'}>
                                                <ReactMarkdown children={dataPerRow.total_jp_per_tahun} remarkPlugins={[remarkGfm]} />
                                            </Td>                                        
                                        </tr>
                                    ))}
                                    {value.slice(-3).map((dataPerRow, index) => (
                                        <tr key={index} className='border-b text-white font-semibold  border-blue-50 bg-lighttertiary rounded'>
                                            <Td tdClassName="text-left">
                                                <ReactMarkdown children={dataPerRow.mata_pelajaran} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                            <Td tdClassName={'text-center'}>
                                                <ReactMarkdown children={dataPerRow.alokasi_intra} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                            <Td tdClassName={'text-center'}>
                                                <ReactMarkdown children={dataPerRow.alokasi_projek} remarkPlugins={[remarkGfm]} />
                                            </Td>
                                            <Td tdClassName={'text-center'}>
                                                <ReactMarkdown children={dataPerRow.total_jp_per_tahun} remarkPlugins={[remarkGfm]} />
                                            </Td>                                        </tr>
                                    ))}
                                </>
                            )
                    })}
                    {/* <tr className='text-center bg-lighttertiary text-white font-semibold'>
                        <Td tdClassName = {"text-left"}>Total</Td>
                        {lastTdContent.map((value,index) => <Td key={index}>{value}</Td>)}
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default AppTableKurikulum