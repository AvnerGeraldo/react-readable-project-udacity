import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Icons
import IconArrowUp from '@material-ui/icons/ArrowUpward'
import IconArrowDown from '@material-ui/icons/ArrowDownward'

//Form
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

//Core
import { withStyles } from '@material-ui/core/styles'

//Styles
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    control: {
      padding: theme.spacing.unit,
    },
    formControl: {
      marginLeft: theme.spacing.unit,
      minWidth: 120,      
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
  });
  

class BoxFilter extends Component {
    state = {
        valueFilter: 'voteScore',
        sortFilter: 'up'
    }

    handleChangeFilter = (e) => {
        const valueFilter = e.target.value
        const filterColumn = valueFilter === 'dateOfCreation' ? 'timestamp' : 'voteScore'

        this.setState({ valueFilter })

        this.props.filteringData(this.state.sortFilter, filterColumn)
    }

    handleChangeSort = (sortValue) => {
        this.setState({ sortFilter: sortValue })        

        const filterColumn = this.state.valueFilter === 'dateOfCreation' ? 'timestamp' : 'voteScore'
        this.props.filteringData(sortValue, filterColumn)
    }
    

    render() {
        const { classes } = this.props
        const { valueFilter, sortFilter } = this.state
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
                    </form>
                </Paper>
            </Grid>
        )
    }
}

const { string, func } = PropTypes

BoxFilter.propTypes = {
    classes: string,
    filteringData: func.isRequired
}

const mapDispatchToProps = dispatch => ({
    filteringData: (sortFilter, filterColumn) => dispatch({ 
        type: 'GET_ALL_POSTS', 
        payload: {
            sortFilter,
            filterColumn
        }
    })
})

export default connect(null, mapDispatchToProps)(withStyles(styles)(BoxFilter))