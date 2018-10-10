import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

//Items
import Typography from '@material-ui/core/Typography'

//Icons
import IconButton from '@material-ui/core/IconButton'
import IconEdit from '@material-ui/icons/Edit'
import IconDelete from '@material-ui/icons/Delete'
import IconVoteUp from '@material-ui/icons/ThumbUp'
import IconVoteDown from '@material-ui/icons/ThumbDown'
import IconComments from '@material-ui/icons/Comment'
import IconOpenPost from '@material-ui/icons/Drafts'

//Core
import { withStyles } from '@material-ui/core/styles'

//Components
import SubHeader from './SubHeader'

//Styles
const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: '0.4em',
    },
    paddingBottomCard: {
        paddingBottom: '5px'
    },
  });
  

const BoxPost = (props) => {
    const { 
        classes, 
        id, 
        title, 
        textToShow, 
        author, 
        numComments, 
        numVotes, 
        categoryPost, 
        timestampPost, 
        valueFilter, 
        sortFilter, 
        changeVote, 
        authorLogged,
        deletePost,
        changeDataEditPost,
        openModal
    } = props

    const textNumComments =  `${numComments}${(parseInt(numComments) > 1000 ? 'k' : '')} comments`
    const filterColumn = valueFilter === 'dateOfCreation' ? 'timestamp' : 'voteScore'

    return (
        <Grid item sm={12} xs={12} className={classes.root}>        
            <Card square={true}>
                <CardHeader action={
                    author.toLowerCase() === authorLogged.toLowerCase() && (
                        <IconButton onClick={() => {
                            changeDataEditPost({
                                id,
                                txtTitle: title, 
                                cboCategory: categoryPost,
                                txtPostText: textToShow,
                            })

                            openModal()
                        }}>
                            <IconEdit />
                        </IconButton>
                    )
                }
                title={title}
                subheader={<SubHeader author={author} category={categoryPost} timestampPost={timestampPost}/>}
                titleTypographyProps={{ 
                    variant: 'title'
                }} className={classes.paddingBottomCard}/>
                <CardContent className={classes.paddingBottomCard}>
                    <Typography component="p">
                        {`${textToShow.slice(0 , 200)}...`}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton title="Open Post">
                        <IconOpenPost />
                    </IconButton>
                    <IconButton title="Comments" disableRipple={true}>
                        <IconComments/>
                    </IconButton>
                    <Typography variant='body2'>{textNumComments}</Typography>             
                    <IconButton title="Vote Down" onClick={() => changeVote(id, 'downVote', sortFilter, filterColumn)}>
                        <IconVoteDown />
                    </IconButton>
                    <Typography variant='body2'>{numVotes}</Typography>
                    <IconButton title="Vote Up" onClick={() => changeVote(id, 'upVote', sortFilter, filterColumn)}>
                        <IconVoteUp />
                    </IconButton>
                    {author.toLowerCase() === authorLogged.toLowerCase() && (
                        <IconButton title="Delete Post" onClick={() => window.confirm('Do you want to delete post ?') && deletePost(id, sortFilter, filterColumn)}>
                            <IconDelete />
                        </IconButton>
                    )}                    
                </CardActions>           
            </Card>
        </Grid>
    )
}

const mapStateToProps = state => {
    const { valueFilter, sortFilter } = state.filters
    const { authorLogged } = state.login

    return {
        valueFilter, 
        sortFilter,
        authorLogged,
    }
}

const mapDispatchToProps = dispatch => ({
    changeVote: (id, voteChange, sortFilter, filterColumn) => dispatch({ 
        type: 'CHANGE_VOTE', 
        payload: {
            id, 
            voteChange, 
            sortFilter, 
            filterColumn
        }
    }),
    deletePost: (id, sortFilter, filterColumn) => dispatch({ 
        type: 'DELETE_POST', 
        payload: {
            id,
            sortFilter, 
            filterColumn
        }
    }),
    changeDataEditPost: objData => dispatch({ type: 'EDIT_POST', payload: { ...objData }}),
    openModal: _=> dispatch({ type: 'OPEN_MODAL_CREATE_POST' }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BoxPost))