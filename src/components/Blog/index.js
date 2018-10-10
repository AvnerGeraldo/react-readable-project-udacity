import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      marginTop: themes.spacing.unit * 7
    }
})

class Blog extends Component {

    componentWillMount() {
        const { getAllCategories } = this.props
        getAllCategories()
    }
    componentDidMount() {
        const { valueFilter, sortFilter, getAllPosts } = this.props
        const filterColumn = valueFilter === 'dateOfCreation' ? 'timestamp' : 'voteScore'

        getAllPosts(sortFilter, filterColumn)        
    }

    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <CssBaseline>
                    <Header />
                    Teste
                    <Grid 
                        container={true}
                        spacing={8}
                        justify="center"
                        direction="row"
                        alignItems="flex-start"
                        className={classes.root}>                        
                        <BoxTimeLine />
                        <BoxSideBar />
                        <ModalCreatePost />
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Blog))