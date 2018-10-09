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

    componentWillMount() {
        this.props.getFilters()
    }

    handleChangeFilter = (e) => {
        const valueFilter = e.target.value
        const filterColumn = valueFilter === 'dateOfCreation' ? 'timestamp' : 'voteScore'

        this.props.changeFilter(valueFilter, this.props.sortFilter)
        this.props.filteringData(this.props.sortFilter, filterColumn)
    }

    handleChangeSort = (sortValue) => {
        this.props.changeFilter(this.props.valueFilter, sortValue)      

        const filterColumn = this.props.valueFilter === 'dateOfCreation' ? 'timestamp' : 'voteScore'
        this.props.filteringData(sortValue, filterColumn)
    }
    

    render() {
        const { classes, valueFilter, sortFilter } = this.props
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

const { string, object, func } = PropTypes

BoxFilter.propTypes = {
    classes: object,
    filteringData: func.isRequired,
    valueFilter: string.isRequired,
    sortFilter: string.isRequired,
}

const mapStateToProps = state => ({
    valueFilter: state.filters.valueFilter,
    sortFilter: state.filters.sortFilter,
})

const mapDispatchToProps = dispatch => ({
    filteringData: (sortFilter, filterColumn) => dispatch({ 
        type: 'GET_ALL_POSTS', 
        payload: {
            sortFilter,
            filterColumn
        }
    }),
    changeFilter: (valueFilter, sortFilter) => dispatch({
        type: 'CHANGE_FILTERS',
        payload: {
            valueFilter, 
            sortFilter
        }
    }),
    getFilters: _ => dispatch({ type: 'GET_FILTERS' })
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BoxFilter))