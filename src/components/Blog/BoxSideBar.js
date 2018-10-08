import React from 'react'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Items
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

//Core
import { withStyles } from '@material-ui/core/styles'

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
            <Paper square={true} className={`${classes.control} ${classes.boxCategory}`}>
                <Typography align="center" variant="title" color="default">Categories</Typography>
                <List component="nav">
                    <ListItem button>
                        <ListItemText primary="Category 1" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Category 2" />
                    </ListItem>
                    <ListItem button>
                        <ListItemText primary="Category 3" />
                    </ListItem>
                </List>
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(BoxSideBar)