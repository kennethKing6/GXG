import React from 'react'
import PagesContainer from '../pagesContainer';
import Contact from './contact';

export default function index() {
    return (
        <PagesContainer currentPage={Contact}/>
    )
}
