import React, { Component } from 'react'
import Header from './Header'
import './Asidebar.scss'
import Note from './Note'
import Asidebar from './Asidebar'

export default class NoteDashboard extends Component {
    render() {
        
        return (
            <div>
                <Header/>
                {/* <Aside/> */}
                {/* <head/> */}
                <Note/>
                <Asidebar/>
            </div>
        )
    }
}
