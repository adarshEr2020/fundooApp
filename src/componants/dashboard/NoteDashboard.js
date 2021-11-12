import React, { Component } from 'react'
import { requestNotesData } from '../../services/service'
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
            isAchiveNote: [],
        }
    }

    componentDidMount() {
        requestNotesData().then((response) => {
            console.log(response);
            this.setState({
                data: response
            })
            this.handleArchiveSetState()
        }).catch((err) => {
            console.log(err);
        })
    }

    handleArchiveSetState = () => {
        this.setState({
            isAchiveNote: this.filterNotes()
        })
    }
    filterNotes = () => {
        const filterData = this.state.data.filter((element) => {
            return !element.isArchived && !element.isDeleted;
        });
        return filterData;
    }

    handleDrawerToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    }
    render() {
        const { isAchiveNote, data } = this.state
        console.log("note data" + data +"\nfilter note"+isAchiveNote);


        return (
            <div>
                <Header/>
                <Asidebar
                    handleDrawerToggle={this.handleDrawerToggle}
                    open={this.state.open} />
                <Note />
                <ViewNotes data={data} />
            </div>
        )
    }
}
