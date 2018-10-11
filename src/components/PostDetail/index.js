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
import BoxContentPost from './BoxContentPost'
import ModalCreatePost from '../Blog/ModalCreatePost'

//Style
const styles = themes => ({
    root: {
      flexGrow: 1,
      marginTop: themes.spacing.unit * 7
    }
})

class BoxPostDetail extends Component {
    componentWillMount() {
        const { dataCategory } = this.props
        dataCategory.length === 0 && this.props.getAllCategories()        
    }

    render() {
        const { classes, match: { params: id }, getPostDataById } = this.props        
        
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
                        <BoxContentPost id={id}/>
                        <ModalCreatePost closeFunc={() => getPostDataById(id)}/>
                    </Grid>
                </CssBaseline>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {

    return {
        dataCategory: Object.keys(state.categories).length !== 0 ? state.categories.categories : [],
    }
} 

const mapDispatchToProps = dispatch => ({
    getPostDataById: id => dispatch({ type: 'GET_POST_BY_ID', payload: id }),
    getAllCategories: _=> dispatch({ type: 'GET_ALL_CATEGORIES' })
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BoxPostDetail))