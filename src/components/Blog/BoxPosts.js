import React from 'react'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Core
import { withStyles } from '@material-ui/core/styles';

//Styles
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    demo: {
      height: 240,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      height: '100%',
      color: theme.palette.text.secondary,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
    boxPosts: {
        minHeight: '20em',
        height: 'auto',
    }
  });
  

const BoxPosts = (props) => {
    const { classes } = props

    return (
        <Grid item sm={7} xs={12}>
            <Paper 
                className={`${classes.boxPosts}`}>
                Teste
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(BoxPosts)