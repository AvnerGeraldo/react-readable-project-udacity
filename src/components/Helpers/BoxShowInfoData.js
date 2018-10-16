import React from 'react'
import PropTypes from 'prop-types'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'

//Core
import withStyles from '@material-ui/core/styles/withStyles';

//Items
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 0.2
    },
    loading: {
        padding: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit * 10,
        marginBottom: theme.spacing.unit * 10
    },
})

const BoxShowInfoData = ({ textToShow, classes }) => (
    <Grid item sm={12} xs={12} className={classes.root}>
        <Typography variant="display1" align="center" className={classes.loading}>{textToShow}</Typography>
    </Grid>
)

const { string, object } = PropTypes
BoxShowInfoData.propTypes = {
    textToShow: string.isRequired,
    classes: object
}

export default withStyles(styles)(BoxShowInfoData)