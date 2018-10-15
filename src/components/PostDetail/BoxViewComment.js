import React, { Component } from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

//Icons
import IconButton from '@material-ui/core/IconButton'
import IconEdit from '@material-ui/icons/Edit'
import IconDelete from '@material-ui/icons/Delete'
import IconVoteUp from '@material-ui/icons/ThumbUp'
import IconVoteDown from '@material-ui/icons/ThumbDown'

//Items
import Typography from '@material-ui/core/Typography'

//Core
import { withStyles } from '@material-ui/core/styles';

//Helpers

import capitalize from '../../helpers/capitalize'

//Component
import BoxComment from './BoxComment'

//Style
const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing.unit * -1.2,
    },
    errorToShow: {
        marginTop: theme.spacing.unit * 0.4,
        width: '100%',
        minHeight: '10em',
        padding: theme.spacing.unit * 7,
        paddingTop: '0px',
        paddingBottom: '0px',
    },
    boxComment:{
        marginTop: theme.spacing.unit * 0.4,
    },
    infoComment: {
        marginTop: '0px',
        marginLeft: theme.spacing.unit * 2.3,
        padding: theme.spacing.unit,
    },
    paragraphBody: {        
        minHeight: '3em',
        marginTop: theme.spacing.unit,
    },
    boxCardContent: {
        paddingTop: '0px',
        paddingBottom: '0px',
        marginTop: theme.spacing.unit * 4
    },
    boxActions: {
        padding: '0px 12px',
    }
})


class BoxViewComment extends Component {
    state = {
        dataComment: [],
    }

    componentWillMount() {
        const { getPostComments, idPost } = this.props
        getPostComments(idPost)
    }

    handleUpdateVote = (id, voteChange) => {
        const { changeVote, getPostComments, idPost } = this.props

        changeVote(id, voteChange)
        getPostComments(idPost)
    }

    handleChangeComment = (id, body) => {
        this.setState({
            dataComment: { id, body }
        })
    }

    handleDeleteComment = (id) => {
        const { deleteComment, getPostComments, getPostDataById, idPost } = this.props
        
        deleteComment(id)
        getPostComments(idPost)
        getPostDataById(idPost)
    }

    render() {
        const { classes, data, error, authorLogged, dataPost } = this.props

        if (Object.keys(dataPost).length === 0) {
            return null
        }

        return (
            <Grid item sm={10} xs={12} className={classes.root}>
                {error && (
                    <div className={classes.errorToShow}>
                        <Typography variant="display1" align="center" className={classes.loading} color="default"><pre>{error}</pre></Typography>
                    </div>
                )}

                {Object.keys(data).length > 0 && data.map(v => {
                    const { id, author, body, voteScore, timestamp, deleted } = v
                    const dateTimePost = moment(timestamp)
                    const showDateTime = `${dateTimePost.format('MMMM, D')} of ${dateTimePost.format('YYYY')} at ${dateTimePost.format('HH:mm:ss')} hs`
                    const showComment = deleted === false

                    if (showComment) {
                        return (
                            <Card square={true} key={id} className={classes.boxComment}>
                                <CardContent className={classes.boxCardContent}>
                                    <Typography component="p" className={classes.paragraphBody}>{body}</Typography>                                
                                </CardContent>
                                <CardActions className={classes.boxActions}>             
                                    <IconButton title="Vote Down" onClick={() => this.handleUpdateVote(id, 'downVote')}>
                                        <IconVoteDown />
                                    </IconButton>
                                    <Typography variant='body2'>{voteScore}</Typography>
                                    <IconButton title="Vote Up" onClick={() => this.handleUpdateVote(id, 'upVote')}>
                                        <IconVoteUp />
                                    </IconButton>
                                    {author.toLowerCase() === authorLogged.toLowerCase() && (
                                        <IconButton title="Delete Comment" onClick={() => window.confirm('Do you want to delete a comment ?') && this.handleDeleteComment(id)}>
                                            <IconDelete />
                                        </IconButton>
                                    )}
                                    {author.toLowerCase() === authorLogged.toLowerCase() && (
                                        <IconButton onClick={() => this.handleChangeComment(id, body)}>
                                            <IconEdit />
                                        </IconButton>
                                    )}        
                                </CardActions>
                                <Typography 
                                        variant="caption" 
                                        className={classes.infoComment} 
                                        color="default">{`Posted by ${capitalize(author)} at ${showDateTime}`}</Typography>
                            </Card>
                        )
                    }
                    
                    return
                })}
                <BoxComment idPost={this.props.idPost} {...this.state.dataComment} />
            </Grid>   
        )
    }
}

const mapStateToProps = state => {
    const { authorLogged } = state.login

    return {
        dataPost: state.viewDataPost.data,
        data: state.postComment.data,
        error: state.postComment.error,
        authorLogged,
    }
} 

const mapDispatchToProps = dispatch => ({
    getPostDataById: id => dispatch({ type: 'GET_POST_BY_ID', payload: { id }}),
    getPostComments: id => dispatch({ type: 'GET_ALL_COMMENTS_POST_BY_ID', payload: { id }}),
    changeVote: (id, voteChange) => dispatch({ 
        type: 'CHANGE_VOTE_COMMENT', 
        payload: {
            id, 
            voteChange
        }
    }),
    deleteComment: (id) => dispatch({ 
        type: 'DELETE_COMMENT', 
        payload: { id }
    }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BoxViewComment))