import React from 'react'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'

//Items
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

//Core
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
    title404: {
        marginTop: '3.2em'
    },
    subTitle404: {
        marginTop: '1em'
    },
    button: {
        marginTop: '2.5em',
        justifyContent: 'center',
    }
})

const Page404 = (props) => {
    const { classes } = props

    return (
        <Grid container={true} justify="center" direction="row">
            <Grid item sm={10} xs={12} align="center">
                <Typography color="primary" variant="display3" align="center" className={classes.title404}>404</Typography>
                <Typography color="primary" variant="display1" align="center" className={classes.subTitle404}>Page not found!</Typography>
                <Button 
                    color="primary" 
                    size="medium" 
                    variant="contained" 
                    href="/"
                    className={classes.button}>Go to the Home</Button>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Page404)