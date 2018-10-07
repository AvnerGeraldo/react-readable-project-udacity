import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


//Material UI
//Toolbar
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'

//Icons
import IconAccountCircle from '@material-ui/icons/AccountCircle';
import IconPower from '@material-ui/icons/PowerSettingsNew'

//Fonts
import Typography from '@material-ui/core/Typography';

//Core
import { withStyles } from '@material-ui/core/styles';

//Helpers
import UpperCase from '../Helpers/UpperCase'

//Style
const styles = themes => ({
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
    iconAccount: {
        marginRight: themes.spacing.unit * 2,
        height: '1.5em',
        width: '1.5em',
    }
})

class Header extends Component {
    componentWillMount() {
        const { author } = this.props
        
        if (author.length === 0) {
            new Promise((resolve) =>this.props.verifyIsLogged())
            .catch(error => this.props.errorLoginFail(error))
        }
    }

    handleLogout = () => {
        if (window.confirm("Deseja sair da aplicação?")) {
            this.props.logout()
        }
    }

    render() {
        const { author, classes } = this.props

        return (
            <AppBar color="default" position="fixed">
                <Toolbar>
                    <IconAccountCircle color="primary" className={classes.iconAccount}/>
                    <Typography variant="title" color="inherit" className={classes.grow}>                                
                        {UpperCase(author)}
                    </Typography>                            
                    <IconButton 
                        color="secondary" 
                        title="Logout" 
                        className={classes.button} 
                        aria-label="Logout" onClick={() => this.handleLogout()}>
                        <IconPower />
                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}

const { func, string, object } = PropTypes

Header.propTypes = {
    author: string.isRequired,
    verifyIsLogged: func.isRequired,
    logout: func.isRequired,
    classes: object
}

const mapStateToProps = state => {
    const { login } = state

    return {
        author: login.authorLogged
    }
}

const mapDispatchToProps = dispatch => ({
    verifyIsLogged: _ => dispatch({ type: 'IS_LOGGED' }),
    logout: _ => dispatch({ type: 'LOGOUT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header))