import React from 'react'
import ContentTitle from '@/Components/ContentTitle'
import DefaultLayout from '@/Layouts/DefaultLayout'
import AppTableKurikulum from '@/Components/AppTableKurikulum'

function Kurikulum() {
    return (
        <DefaultLayout>
        <ContentTitle title='PEMBELAJARAN' subTitle='KURIKULUM' />
        <AppTableKurikulum />
        </DefaultLayout>
    )
}

export default Kurikulum