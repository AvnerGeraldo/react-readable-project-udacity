import React from 'react'
import moment from 'moment'

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

//Styles
const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paddingBottomCard: {
        paddingBottom: '5px'
    },
  });
  

const BoxPost = (props) => {
    const { classes } = props
    const textToShow = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales sapien id faucibus posuere. Sed imperdiet velit massa, at dignissim nisl interdum et. Nullam nec sodales ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc est sapien, dapibus et auctor in, porta quis ante. Etiam feugiat placerat lectus at maximus. Vestibulum maximus mi at leo semper vulputate. Donec hendrerit, sapien sit amet convallis molestie, dolor neque fermentum dolor, nec convallis lacus nunc eget lacus. Praesent sodales tristique iaculis. Mauris malesuada viverra ex, eu posuere felis lacinia condimentum.In blandit pulvinar enim in accumsan. Fusce ultricies rhoncus est, sit amet dignissim elit venenatis id. Nulla at mattis massa. Suspendisse potenti. Curabitur varius ante eget ligula suscipit finibus vitae sed dolor. Donec ullamcorper est magna, dapibus pulvinar justo finibus eu. Pellentesque ut dapibus augue, vel porta libero. Nulla faucibus, erat quis interdum aliquam, ex ex auctor nunc, eu pharetra est purus ac metus. Phasellus cursus pretium ullamcorper. Duis iaculis orci risus, eget tincidunt eros volutpat at.Sed mattis dui lacus, eu aliquet justo vestibulum vel. Aenean non metus ac turpis gravida dignissim a id dolor. Aliquam nec metus id purus luctus rutrum. Fusce faucibus purus ut lorem blandit volutpat. Duis ac tempus est. Etiam mi dolor, vulputate sit amet vehicula eget, ornare sit amet tellus. Aenean non efficitur lectus. Sed eu sapien nec diam ornare luctus. Pellentesque venenatis eros consequat, imperdiet lacus in, tincidunt tellus. Nunc et augue rhoncus, vehicula augue nec, faucibus nunc. Vestibulum et neque pellentesque, euismod nibh eu, tincidunt enim. Vestibulum quis ipsum in libero convallis ornare. Suspendisse non elit at elit mollis tempus. Phasellus tempus elit et leo laoreet eleifend.Phasellus malesuada ipsum et lacus sollicitudin, ac imperdiet est sagittis. Suspendisse non consectetur lorem, vitae consequat arcu. Duis interdum elit sit amet sapien ullamcorper, non pretium massa lacinia. Nunc pretium tincidunt diam eget venenatis. Nulla mollis molestie ipsum et vestibulum. Mauris vel metus ac massa aliquam blandit sit amet eget tortor. Fusce faucibus, dui nec aliquet blandit, elit turpis elementum mi, ac consequat nulla odio tincidunt nunc. Donec maximus orci ut tortor bibendum, vel mollis nulla ultrices. Vivamus fringilla lorem a urna mattis, vel vestibulum lectus laoreet. Phasellus mattis tincidunt ex nec ultricies. Nullam fringilla massa lectus, nec faucibus sem tincidunt a. Nam facilisis neque odio, at faucibus turpis consequat nec. Donec viverra dolor ac elit hendrerit, tristique finibus nibh malesuada."
    const numComments = '1.4k comments'

    return (
        <Grid item sm={12} xs={12} className={classes.root}>        
            <Card square={true}>
                <CardHeader action={
                    <IconButton>
                        <IconEdit />
                    </IconButton>
                }
                title="Teste as sakdaksd kaskd aks kdak akskda skaskd kasd kaskd k"
                subheader={`${moment().format('MMMM, D')} of ${moment().format('YYYY')} at ${moment().format('HH:mm:ss')} hs`}
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
                    <IconButton title="Open Post">
                        <IconComments />
                    </IconButton>
                    <Typography variant='body2'>{numComments}</Typography>             
                    <IconButton title="Vote Down">
                        <IconVoteDown />
                    </IconButton>
                    <Typography variant='body2'>588</Typography>
                    <IconButton title="Vote Up">
                        <IconVoteUp />
                    </IconButton>
                </CardActions>           
            </Card>
        </Grid>
    )
}

export default withStyles(styles)(BoxPost)