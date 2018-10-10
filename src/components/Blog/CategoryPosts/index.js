import React, { Component } from 'react'
import { connect } from 'react-redux'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'

//Core
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Components
import Header from '../../Header'
import BoxTimeLine from '../BoxTimeLine'
import BoxSideBar from '../BoxSideBar'
import ModalCreatePost from '../ModalCreatePost'

//Style
const styles = themes => ({
    root: {
      flexGrow: 1,
      marginTop: themes.spacing.unit * 7
    }
})

class CategoryPosts extends Component {

    componentWillMount() {
        const { dataCategory } = this.props
        dataCategory.length === 0 && this.props.getAllCategories()
    }

    componentDidMount() {
        const { valueFilter, sortFilter, getPostsByCategory } = this.props
        const filterColumn = valueFilter === 'dateOfCreation' ? 'timestamp' : 'voteScore'

       getPostsByCategory(this.props.match.params.category, sortFilter, filterColumn)        
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
        dataCategory: Object.keys(state.categories).length !== 0 ? state.categories.categories : [],
    }
} 

const mapDispatchToProps = dispatch => ({
    getPostsByCategory: (category, sortFilter, filterColumn) => dispatch({ 
        type: 'GET_POSTS_BY_CATEGORY', 
        payload: {
            category,
            sortFilter,
            filterColumn
        }
    }),
    getAllCategories: _=> dispatch({ type: 'GET_ALL_CATEGORIES' })
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CategoryPosts))