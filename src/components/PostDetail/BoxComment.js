import React, { Component, createRef } from 'react'
import { connect } from 'react-redux'


//Material UI
//Structure
import Paper from '@material-ui/core/Paper'

//Items
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

//Icons
import IconAdd from '@material-ui/icons/Add'
import IconEdit from '@material-ui/icons/Edit'

//Core
import { withStyles } from '@material-ui/core/styles'

//Helpers
import capitalize from '../../helpers/capitalize'

//Style
const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit * 2,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
    },
    textFieldMultiLine: {
        padding: theme.spacing.unit * 2,
        paddingTop: '0px',
        paddingBottom: '0px',
        width: '100%',
    },
    labelTextFieldMultiLine: {
        marginLeft: theme.spacing.unit * 2
    },
    infoComment: {
        marginTop: '0px',
        marginLeft: theme.spacing.unit * 2.3,
        padding: theme.spacing.unit * 0.5,
        paddingTop: '0px'
    },
    btnIconUpdate: {
        position: 'absolute',
        bottom: theme.spacing.unit * -2.2,
        right: theme.spacing.unit * -0.1,
    },
})
class BoxComment extends Component {
    state = {
        body: '',
        showEditButton: false,
    }

    componentWillReceiveProps(nextProps) {
        const bodyReceive = nextProps.body

        if (this.state.body.length === 0 && bodyReceive.length > 0) {            
            this.setState({
                body: bodyReceive,
                showEditButton: true
            })
        }
    }

    handleChangeCommentText = (e) => {
        this.setState({ body: e.target.value })
    }

    handleComment = (idPost, idComment, body, author) => {
        const { getPostComments, handleComment } = this.props
        handleComment(idPost.id, idComment, body, author)
        getPostComments(idPost)
        //Limpar campo
        this.setState({ body: '', showEditButton: false })
    }
    
    render() {        
        const { idPost, classes, authorLogged } = this.props
        const { body, showEditButton } = this.state        
        const idReceive = this.props.id
        let buttonColor = 'primary'
        let buttonIcon = <IconAdd />

        if (showEditButton) {
            buttonColor = 'secondary'
            buttonIcon = <IconEdit />
        }

        return (
            <Paper className={classes.root}>
                <TextField
                    label="Comment"
                    multiline
                    rows={4}
                    value={body}
                    onChange={this.handleChangeCommentText}
                    className={classes.textFieldMultiLine}
                    margin="normal"
                    InputLabelProps={{
                        className: classes.labelTextFieldMultiLine
                    }} />
                <Typography 
                    variant="caption" 
                    className={classes.infoComment} 
                    color="default">{`Author: ${capitalize(authorLogged)}`}</Typography>
                <Button 
                    variant="fab" 
                    className={classes.btnIconUpdate} 
                    color={buttonColor} 
                    onClick={() => this.handleComment(idPost, idReceive, this.state.body, authorLogged)}>
                    {buttonIcon}
                </Button>
            </Paper>
        )
    }
}

const mapStateToProps = state => {
    const { authorLogged } = state.login

    return {
        authorLogged,
    }
}

const mapDispatchToProps = dispatch => ({
    getPostComments: id => dispatch({ type: 'GET_ALL_COMMENTS_POST_BY_ID', payload: id }),
    handleComment: (idPost, idComment, body, author) => dispatch({ 
        type: 'HANDLE_COMMENT', 
        payload: { idPost, idComment, body, author }
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(BoxComment))