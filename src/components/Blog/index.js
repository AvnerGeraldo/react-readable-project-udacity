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

//Style
const styles = themes => ({
    root: {
      flexGrow: 1,
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