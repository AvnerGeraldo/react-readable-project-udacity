import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'

//Icons
import IconButton from '@material-ui/core/IconButton'
import IconEdit from '@material-ui/icons/Edit'
import IconDelete from '@material-ui/icons/Delete'
import IconVoteUp from '@material-ui/icons/ThumbUp'
import IconVoteDown from '@material-ui/icons/ThumbDown'
import IconComments from '@material-ui/icons/Comment'

//Items
import Typography from '@material-ui/core/Typography'

//Core
import { withStyles } from '@material-ui/core/styles';

//Helpers

import capitalize from '../../helpers/capitalize'

//Components
import BoxShowInfoData from '../Helpers/BoxShowInfoData'

//Styles
const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 2,
        marginTop: theme.spacing.unit * 0.2
    },
    infoPost: {
        marginLeft: theme.spacing.unit * 3.1,
        marginTop: theme.spacing.unit * 0.6
    },
    loading: {
        padding: theme.spacing.unit * 4,
        marginTop: theme.spacing.unit * 10
    },
    paragraphBody: {
        minHeight: '15em',
    }
  });

class BoxContentPost extends Component {
    state = {
        showLoading: true
    }

    componentDidMount() {
        const { idPost, getPostDataById } = this.props
        getPostDataById(idPost)

        //Set Loading
        this.setState({ showLoading: false })
    }

    handleUpdateVote = (id, voteChange) => {
        const { changeVote, getPostDataById } = this.props
        changeVote(id, voteChange)
        getPostDataById(id)
    }

    handleDeletePost = (id) => {
        const { deletePost, getPostDataById } = this.props
        deletePost(id)
        getPostDataById(id)
    }

    render() {
        const { dataPost, loadingData } = this.props
        const { showLoading } = this.state
        
        if (showLoading) {
            return (
                <BoxShowInfoData textToShow='Loading data...' />
            )
        }

        if (Object.keys(dataPost).length === 0 && !loadingData) {
            return null
        }

        if (Object.keys(dataPost).length === 0 && loadingData) {
            return <Redirect to="/404"/>
        }

        const { 
            classes, 
            authorLogged,
            openModal,
            changeDataEditPost
        } = this.props

        const {
            id,
            timestamp,
            title,
            body,
            author,
            category,
            voteScore,
            commentCount
        } = dataPost

        const dateTimePost = moment(timestamp)
        const showDateTime = `${dateTimePost.format('MMMM, D')} of ${dateTimePost.format('YYYY')} at ${dateTimePost.format('HH:mm:ss')} hs`
        const textNumComments =  `${commentCount}${(parseInt(commentCount, 10) > 1000 ? 'k' : '')} comments`

        return (
            <Grid item sm={10} xs={12} className={classes.root}>        
                <Card square={true}>
                    <Typography 
                        variant="caption" 
                        className={classes.infoPost} 
                        color="default">{`Category: ${category} - Posted by ${capitalize(author)} at ${showDateTime}`}</Typography>
                    <CardHeader
                        title={title} />
                    <CardContent>
                        <Typography component="p" className={classes.paragraphBody}>{body}</Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton title="Comments" disableRipple={true}>
                            <IconComments/>
                        </IconButton>
                        <Typography variant='body2'>{textNumComments}</Typography>             
                        <IconButton title="Vote Down" onClick={() => this.handleUpdateVote(id, 'downVote')}>
                            <IconVoteDown />
                        </IconButton>
                        <Typography variant='body2'>{voteScore}</Typography>
                        <IconButton title="Vote Up" onClick={() => this.handleUpdateVote(id, 'upVote')}>
                            <IconVoteUp />
                        </IconButton>
                        {author.toLowerCase() === authorLogged.toLowerCase() && (
                            <IconButton title="Delete Post" onClick={() => window.confirm('Do you want to delete post ?') && this.handleDeletePost(id)}>
                                <IconDelete />
                            </IconButton>
                        )}
                        {author.toLowerCase() === authorLogged.toLowerCase() && (
                            <IconButton onClick={() => {
                                changeDataEditPost({
                                    id,
                                    txtTitle: title, 
                                    cboCategory: category,
                                    txtPostText: body,
                                })

                                openModal()
                            }}>
                                <IconEdit />
                            </IconButton>
                        )}        
                    </CardActions>
                </Card>
            </Grid>
        )        
    }
}

const mapStateToProps = state => {
    const { authorLogged } = state.login
    const { data, error, loadingData } = state.viewDataPost

    return {
        dataPost: data,
        errorPost: error,
        loadingData,
        authorLogged,
    }    
}

const mapDispatchToProps = dispatch => ({
    getPostDataById: id => dispatch({ type: 'GET_POST_BY_ID', payload: { id }}),
    changeVote: (id, voteChange) => dispatch({ 
        type: 'CHANGE_VOTE', 
        payload: {
            id, 
            voteChange
        }
    }),    
    deletePost: (id) => dispatch({ 
        type: 'DELETE_POST', 
        payload: {
            id
        }
    }),
    changeDataEditPost: objData => dispatch({ type: 'EDIT_POST', payload: { ...objData }}),
    openModal: _=> dispatch({ type: 'OPEN_MODAL_CREATE_POST' }),
})

const { string, func, bool, object, shape, number } = PropTypes

BoxContentPost.propTypes = {
    dataPost: shape({
        id: string,
        timestamp: number,
        title: string,
        body: string,
        author: string,
        category: string,
        voteScore: number,
        commentCount: number
    }),
    loadingData: bool,
    authorLogged: string.isRequired,
    errorPost: string,
    classes: object,
    openModal: func.isRequired,
    changeDataEditPost: func.isRequired,
    changeVote: func.isRequired,
    deletePost: func.isRequired,
    getPostDataById: func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BoxContentPost))