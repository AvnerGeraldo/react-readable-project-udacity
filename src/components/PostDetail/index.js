import React, { Component } from 'react'
import { connect } from 'react-redux'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Items
import Typography from '@material-ui/core/Typography'

//Core
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Components
import Header from '../Header'
import BoxContentPost from './BoxContentPost'
import BoxViewComment from './BoxViewComment'

//Modal
import ModalCreatePost from '../Blog/ModalCreatePost'

//Style
const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing.unit * 4.3
    },
    buttonBack: {
        textDecoration: 'none',
        padding: theme.spacing.unit * 2
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
                        <Grid item sm={10} xs={12} className={classes.root}>
                            <Paper square={true}>
                                <Typography variant="button" component="a" href="/" color="primary" className={classes.buttonBack}>Voltar</Typography>
                            </Paper>
                        </Grid>
                        <BoxContentPost id={id}/>
                        <BoxViewComment idPost={id}/>
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
    getAllCategories: _=> dispatch({ type: 'GET_ALL_CATEGORIES' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BoxPostDetail))