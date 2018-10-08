import React, { Component } from 'react'
import { connect } from 'react-redux'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'

//Toolbar
import IconButton from '@material-ui/core/IconButton'

//Icons

//Fonts
import Typography from '@material-ui/core/Typography';

//Core
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Components
import Header from '../Header'
import BoxTimeLine from './BoxTimeLine'
import BoxSideBar from './BoxSideBar'

//Style
const styles = themes => ({
    root: {
      flexGrow: 1,
      marginTop: themes.spacing.unit * 7
    },
    grow: {
      flexGrow: 1,
    },
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
                    </Grid>
                </CssBaseline>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    

    return {
        
    }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Blog))