import ContentTitle from '@/Components/ContentTitle'
import SubTitle from '@/Components/SubTitle'
import TeachingFactoryProductCard from '@/Components/TeachingFactoryProductCard'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

function TeachingFactory({data}) {

    return (
        <DefaultLayout>
            <ContentTitle subTitle='TEACHING FACTORY' />
            {
                data.map((konsentrasiKeahlian, index)=>(
                    <>
                        <SubTitle key={index}  title={konsentrasiKeahlian.title}/>
                        {
                            konsentrasiKeahlian.teaching_factory_products.map((product, index) => (
                                <TeachingFactoryProductCard key={index} productData={product} />
                            ))
                        }
                    </>
                    
                ))
            }
        </DefaultLayout>
    )
}

export default TeachingFactory