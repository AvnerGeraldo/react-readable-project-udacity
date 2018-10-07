import React from 'react'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Items
import Button from '@material-ui/core/Button'

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
    boxCategory: {
        marginTop: theme.spacing.unit * 2,
        minHeight: '10em',
    },
    buttonCreatePost: {
        textTransform: 'uppercase',
        height: '100%',
        width: '100%',
    }
  });
  

const BoxSideBar = (props) => {
    const { classes } = props

    return (
        <Grid item sm={4} xs={12}>
            <Button variant="contained" color="primary" className={classes.buttonCreatePost}>create a post</Button>            
            <Paper 
                className={`${classes.control} ${classes.boxCategory}`}>
                Teste
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(BoxSideBar)