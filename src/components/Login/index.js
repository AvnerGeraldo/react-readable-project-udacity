import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

//Material UI
//Structure
import Paper from '@material-ui/core/Paper';

//Items
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

//Icons
import PersonIcon from '@material-ui/icons/Person'

//Form
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';

//Fonts
import Typography from '@material-ui/core/Typography';

//Core
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';

//Styles
const styles = theme => ({
    layout: {
      width: 'auto',
      display: 'block', // Fix IE11 issue.
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      marginTop: theme.spacing.unit * 18,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    paperError: {
        display: 'block',
        padding: theme.spacing.unit,
        marginTop: theme.spacing.unit * 2,
        alignItems: 'stretch',
        flexDirection: 'row',
        backgroundColor: '#FFEBEE',
        color: '#B71C1C',
        borderColor: '#EF9A9A'
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', // Fix IE11 issue.
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 2,
    },
});

class Login extends Component {
    state = {
        errorMsg: ''
    }

    componentWillMount() {
        new Promise((resolve) => {
            this.props.verifyIsLogged()
        })
        .catch(error => this.setState({ errorMsg: error }))
    }

    render() {
        const { classes } = this.props
        const { errorMsg } = this.state

        return (
            <React.Fragment>
                <CssBaseline>
                    <div className={classes.layout}>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <PersonIcon fontSize='large'/>
                            </Avatar>
                            <Typography variant="headline">Sign in</Typography>
                            <form className={classes.form}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="author">Author</InputLabel>
                                    <Input name="author" autoComplete="author" autoFocus />
                                </FormControl>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign in
                                </Button>
                            </form>
                            {errorMsg && <Paper elevation={1} className={classes.paperError}>{errorMsg}</Paper>}
                        </Paper>
                    </div>
                </CssBaseline>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ login }) => ({
    login
})

const mapDispatchToProps = dispatch => ({
    verifyIsLogged: _ => dispatch({ type: 'IS_LOGGED' })
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login))