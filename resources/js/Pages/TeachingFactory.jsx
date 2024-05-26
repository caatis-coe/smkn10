import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import React from 'react'

function TeachingFactory({konsentrasiKeahilan = [], saleItems = []}) {
    return (
        <DefaultLayout>
            <ContentTitle subTitle='TEACHING FACTORY' />
        </DefaultLayout>
    )
}

export default TeachingFactory