import React, { Component } from 'react'
import { requestNotesData } from '../../services/service'
import Header from './Header'
import './Asidebar.scss'
import Note from './Note'
import Asidebar from './Asidebar'
import ViewNotes from './ViewNotes'

export default class NoteDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            data: [],
        }
    }

    componentDidMount() {
        requestNotesData().then((response) => {
            this.setState({
                data: response
            })
        }).catch((err) => {
            console.log(err);
        })
        // console.log("Arrray" + this.state.data);
    }


    handleDrawerToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        const data = this.state.data
        console.log("note data"+data);
        // const viewNotes = data.map((note) => {
        //     <ViewNotes key={note.title} value={note.description} />
        //     console.log(note);
        // })
        return (
            <div>
                <Header handleDrawerToggle={this.handleDrawerToggle} />
                <Asidebar
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.open} />
                <Note />
                {/* {viewNotes} */}
                <ViewNotes data={data} />
            </div>
        )
    }
}
