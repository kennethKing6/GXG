import React from 'react'
import {Layout } from 'antd'
import './pages.css'

export default function PagesContainer(props) {
    console.log("pgaesContainer props",props)
    return (
        <Layout className="MainLayout">
            <props.currentPage/>
        </Layout>
    )
}
