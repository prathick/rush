import React, { useState } from 'react';
import { withStyles } from '@material-ui/core'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { CSVLink } from "react-csv";
import RushData from '../data/rushing.json'

const styles = () => ({
    wrapper: {
        margin: 10
    }
})

const Rush = (props) => {
    const [rush, setRush] = useState(RushData)

    const nameFilter = (event) => {
        let name = event.target.value
        if (name.length === 0) return setRush(RushData)
        let filterRush = [...RushData]
        filterRush = filterRush.filter(i => i.Player.toLowerCase().indexOf(name.toLowerCase()) > -1)
        setRush(filterRush)
    }

    const { classes } = props

    return (
        <div className={classes.wrapper}>
            <form>
                <label htmlFor="search">Search by Player Name: </label>
                <input type="text" name="search" onChange={nameFilter} />
            </form>
            <ReactTable
                data={rush}
                columns={[
                    {
                        Header: "Player Name",
                        accessor: "Player",
                    },
                    {
                        Header: "Team Name",
                        accessor: "Team",
                    },
                    {
                        Header: "Player Position",
                        accessor: "Pos",
                    },
                    {
                        Header: "Rushing Attempts",
                        accessor: "Att",
                    },
                    {
                        Header: "Rushing Attempts/Game",
                        accessor: "Att/G"
                    },
                    {
                        Header: "Total Yards",
                        accessor: "Yds"
                    },
                    {
                        Header: "Avg Yards/Attempt",
                        accessor: "Avg"
                    },
                    {
                        Header: "Yards Per Game",
                        accessor: "Yds/G"
                    },
                    {
                        Header: "Total Touchdowns",
                        accessor: "TD"
                    },
                    {
                        Header: "Long Rush",
                        accessor: "Lng"
                    },
                    {
                        Header: "First Downs",
                        accessor: "1st"
                    },
                    {
                        Header: "First Down %",
                        accessor: "1st%"
                    },
                    {
                        Header: "20+ Yards",
                        accessor: "20+"
                    },
                    {
                        Header: "40+ Yards",
                        accessor: "40+"
                    },
                    {
                        Header: "Fumbles",
                        accessor: "FUM"
                    }

                ]}
                defaultPageSize={10}
                className="-striped -highlight"
            />

            <CSVLink data={rush}>Download the table</CSVLink>;
        </div >
    );
}

export default withStyles(styles)(Rush);