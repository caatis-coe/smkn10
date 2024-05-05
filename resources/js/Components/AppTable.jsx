import React from 'react'

function AppTable({ contents = [["Content", "ID"], ["Data 1", 101], ["Data 2", 102], ["Data 3", 103], ["Data 4", 104]] }) {
    

    return (
        <div className='overflow-x-auto'>
            <table className='w-full text-[14px]'>
                <thead className='bg-lighttertiary text-white'>
                    <tr className='font-semibold'>
                        <td className="py-3 px-6">No</td>
                        {contents[0].map((item, index) => (
                            <td key={index} className="py-3 px-6">{item}</td>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {contents.slice(1) && contents.slice(1).map((content, index) => (
                        <tr key={index} className='border-b-[1px] border-grey font-light'>
                            <td className="py-3 px-6">{index + 1}</td>
                            {content.map((item, index) => (
                                <td key={index} className="py-3 px-6">{item}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AppTable