import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'

//Core
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Components
import Header from '../Header'
import BoxTimeLine from './BoxTimeLine'
import BoxSideBar from './BoxSideBar'
import ModalCreatePost from './ModalCreatePost'

//Style
const styles = themes => ({
    root: {
      flexGrow: 1,
      marginTop: themes.spacing.unit * 9
    }
})

class Blog extends Component {

    componentWillMount() {
        const { dataCategory } = this.props
        dataCategory.length === 0 && this.props.getAllCategories()        
    }

    componentDidMount() {
        const { valueFilter, sortFilter, getAllPosts } = this.props
        const filterColumn = valueFilter === 'dateOfCreation' ? 'timestamp' : 'voteScore'

        getAllPosts(sortFilter, filterColumn)
    }

    render() {
        const { classes, sortFilter, valueFilter, getAllPosts } = this.props
        const filterColumn = valueFilter === 'dateOfCreation' ? 'timestamp' : 'voteScore'

        return (
            <React.Fragment>
                <CssBaseline>
                    <Header />
                    <Grid 
                        container={true}
                        spacing={8}
                        justify="center"
                        direction="row"
                        alignItems="flex-start"
                        className={classes.root}>                        
                        <BoxTimeLine />
                        <BoxSideBar />
                        <ModalCreatePost closeFunc={() => getAllPosts(sortFilter, filterColumn)}/>
                    </Grid>
                </CssBaseline>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    const { valueFilter, sortFilter } = state.filters

    return {
        valueFilter, 
        sortFilter,
        dataCategory: Object.keys(state.categories).length !== 0 ? state.categories.categories: [],
    }
} 

const mapDispatchToProps = dispatch => ({
    getAllPosts: (sortFilter, filterColumn) => dispatch({ 
        type: 'GET_ALL_POSTS', 
        payload: {
            sortFilter,
            filterColumn
        }
    }),
    getAllCategories: _=> dispatch({ type: 'GET_ALL_CATEGORIES' })
})

const { string, object, func, array } = PropTypes

Blog.propTypes = {
    valueFilter: string.isRequired,
    sortFilter: string.isRequired,
    dataCategory: array.isRequired,
    classes: object,
    getAllPosts: func.isRequired,
    getAllCategories: func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Blog))