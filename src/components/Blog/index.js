import React, { Component } from 'react'
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
import ModalCreatePost from './CreatePost'

//Style
const styles = themes => ({
    root: {
      flexGrow: 1,
      marginTop: themes.spacing.unit * 7
    }
})

class Blog extends Component {

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

export default withStyles(styles)(Blog)