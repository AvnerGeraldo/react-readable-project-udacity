import React from 'react'
import { connect } from 'react-redux'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Core
import { withStyles } from '@material-ui/core/styles';

//Components
import BoxFilter from './BoxFilter'
import BoxPost from './BoxPost'

//Styles
const styles = theme => ({
    boxPosts: {
        minHeight: '20em',
        height: 'auto',
    }
  });
  

const BoxPosts = (props) => {
    const { classes, dataPost } = props
    return (
        <Grid item sm={7} xs={12}>            
            <Paper className={`${classes.boxPosts}`}>
                <BoxFilter />
                { dataPost.data && 
                    dataPost.data.map(v => {                          
                        return (!v.deleted && <BoxPost key={v.id}
                                id={v.id}
                                title={v.title} 
                                textToShow={v.body}
                                author={v.author}
                                numComments={v.commentCount}
                                numVotes={v.voteScore}
                                categoryPost={v.category}
                                timestampPost={v.timestamp} />
                        )
                    })
                }
            </Paper>
        </Grid>
    )
}

const mapStateToProps = state => {
    const { dataPost } = state.posts
    
    return {
        dataPost
    }
}

export default connect(mapStateToProps)(withStyles(styles)(BoxPosts))