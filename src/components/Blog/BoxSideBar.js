import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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

//Helpers
import capitalize from '../../helpers/capitalize'

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
    const { classes, openModal, dataCategory } = props
    const categoryUrl = props.match.params.category ? props.match.params.category : ''

    return (
        <Grid item sm={4} xs={12}>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => openModal()}
                className={classes.buttonCreatePost}>create a post</Button>            
            <Paper square={true} className={`${classes.control} ${classes.boxCategory}`}>
                <Typography align="center" variant="title" color="default">Categories</Typography>
                <List component="nav">
                    <ListItem button component="a" href="/" selected={categoryUrl === ''}>
                        <ListItemText primary="Todas"/>
                    </ListItem>
                    {dataCategory && dataCategory.map(v => (
                        <ListItem key={v.name} 
                            button 
                            component="a" 
                            href={`/${v.name}`}
                            selected={categoryUrl === v.name}>
                            <ListItemText primary={capitalize(v.name)} />
                        </ListItem>
                    ) )}
                </List>
            </Paper>
        </Grid>
    )
}

const mapStateToProps = state => {
    const { categories } = state.categories
    return {
        dataCategory: categories
    }
}

const mapDispatchToProps = dispatch => ({
    openModal: _=> dispatch({ type: 'OPEN_MODAL_CREATE_POST' })
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(BoxSideBar)))