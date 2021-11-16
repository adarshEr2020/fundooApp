import React, { Component } from 'react'
import { addTorchiveNotes, requestNotesData } from '../../services/service'
import Header from './Header'
import './Asidebar.scss'
import Note from './Note'
import ViewNotes from './ViewNotes'
import Asidebar from './Asidebar'

export default class NoteDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            data: [],
            isArchived: false
        }
    }

    // request to archive note
    handleArchive = (note) => {
        this.setState({
            ...note,
            isArchived: !this.state.isArchived
        })
        const obj = {
            noteIdList: [note.id],
            isArchived: true
        }
        addTorchiveNotes(obj)
            .then((response) => {
                console.log(response);
            }).catch((err) => {
                console.warn(err);
            })
    }

    // request data of all notes
    componentDidMount() {
        requestNotesData().then((response) => {
            console.log("request data", response);
            this.setState({
                data: response
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    handleDrawerToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    }


    render() {
        const { data } = this.state
        return (
            <div>
                <Header />
                <Asidebar
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.open} />
                <Note />
                <ViewNotes data={data} handleArchive={this.handleArchive} />
            </div>
        )
    }
}
