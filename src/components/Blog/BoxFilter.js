import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Icons
import IconArrowUp from '@material-ui/icons/ArrowUpward'
import IconArrowDown from '@material-ui/icons/ArrowDownward'

//Form
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

//Core
import { withStyles } from '@material-ui/core/styles'

//Styles
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      height: '100%',
      color: theme.palette.text.secondary,
    },
    control: {
      padding: theme.spacing.unit,
    },
    formControl: {
      marginLeft: theme.spacing.unit,
      minWidth: 120,      
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    boxFilter: {
      minHeight: '2em',
      height: 'auto',
      marginBottom: '10px',
    },
    sortArrows: {
        fontSize: '22px',
        padding: '5px 0 0',
        cursor: 'pointer',
    },
    sortArrowSelected: {
        color: '#283593',
        fontWeight: 'bolder',
    },
    boxDate: {
        marginLeft: theme.spacing.unit,
        minWidth: '150px',
    }
  });
  

class BoxFilter extends Component {
    state = {
        showFilterData: false,
        valueFilter: 'voteScore',
        sortFilter: 'up'
    }

    handleChangeFilter = (e) => {
        const valueFilter = e.target.value
        const showFilterData = valueFilter === 'dateOfCreation'

        this.setState({ 
            valueFilter,
            showFilterData
        })
    }

    handleChangeSort = (sortValue) => {
        this.setState({ sortFilter: sortValue })
    }
    

    render() {
        const { classes } = this.props
        const { showFilterData, valueFilter, sortFilter } = this.state
        const sortArrowSelected = [classes.sortArrows, classes.sortArrowSelected].join(' ')

        return (
            <Grid item sm={12} xs={12}>        
                <Paper elevation={1} square={true} className={`${classes.control} ${classes.boxFilter}`}>
                    <form method="POST" className={classes.root} onSubmit={(e) => e.preventDefault()}>                    
                        <span style={{ marginRight: '5px' }}>Sort</span>
                        <IconArrowUp onClick={() => this.handleChangeSort('up')} className={(sortFilter === 'up' ? sortArrowSelected : classes.sortArrows)}/>
                        <IconArrowDown onClick={() => this.handleChangeSort('down')} className={(sortFilter === 'down' ? sortArrowSelected : classes.sortArrows)} />
                        <span style={{ marginLeft: '8px' }}>Filter by</span>
                
                        <Select 
                            value={valueFilter} 
                            onChange={(e) => this.handleChangeFilter(e)} 
                            className={classes.formControl}>
                            <MenuItem value="voteScore">Vote Score</MenuItem>
                            <MenuItem value="dateOfCreation">Date Of Creation</MenuItem>
                        </Select>
                        { (showFilterData) && ( <span style={{ marginLeft: '8px' }}>Date</span> )}
                        { (showFilterData) && (
                            <TextField
                                    id="date"
                                    type="date"
                                    defaultValue={moment().format('YYYY-MM-DD')}
                                    className={classes.formControl}
                                    InputLabelProps={{
                                        shrink: true,
                                    }} />
                        )}                       
                    </form>
                </Paper>
            </Grid>
        )
    }
}

export default withStyles(styles)(BoxFilter)