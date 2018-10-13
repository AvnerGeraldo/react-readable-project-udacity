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
import BoxShowInfoData from '../Helpers/BoxShowInfoData'

//Styles
const styles = theme => ({
    boxPosts: {
        minHeight: theme.spacing.unit * 33.7,
        height: 'auto',
    }
  });
  

const BoxPosts = (props) => {
    const { classes, dataPost, loadingData } = props
    const textToShow = loadingData === true ? 'No results' : 'Loading data...'
    const showInfoBox = (dataPost.length === 0 || !dataPost.data || 
        dataPost.length > 0 && dataPost.data.length >= 0 && dataPost.error ||
        dataPost.data && dataPost.data.length === 0)
        
    return (
        <Grid item sm={7} xs={12}>            
            <Paper className={`${classes.boxPosts}`}>
                <BoxFilter />
                { showInfoBox && <BoxShowInfoData textToShow={textToShow} />}
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
    const { dataPost, loadingData } = state.posts

    return {
        dataPost,
        loadingData,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(BoxPosts))