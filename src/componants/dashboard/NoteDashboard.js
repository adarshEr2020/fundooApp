import React, { Component } from 'react'
import { addToArchiveNotes, requestNotesData } from '../../services/service'
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
            isArchived: false,
            color: ''
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
        addToArchiveNotes(obj)
            .then((response) => {
                console.log(response);
                this.getAllNotes()
            }).catch((err) => {
                console.warn(err);
            })
    }

    // request data of all notes
    getAllNotes = () => {
        requestNotesData().then((response) => {
            console.log("requested all notes", response);
            this.setState({
                data: response
            })
        }).catch((err) => {
            console.log(err);
        })
    }
    componentDidMount() {
        this.getAllNotes()
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
                <Note getAllNotes={this.getAllNotes}/>
                <ViewNotes data={data}
                    handleArchive={this.handleArchive}
                    handleNoteColor={this.handleNoteColor}
                    getAllNotes={this.getAllNotes}
                />
            </div>
        )
    }
}
