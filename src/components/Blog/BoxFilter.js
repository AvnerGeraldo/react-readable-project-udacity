import React from 'react'
import moment from 'moment'

//Material UI
//Structure
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

//Icons
import IconArrowUp from '@material-ui/icons/ArrowUpward'
import IconArrowDown from '@material-ui/icons/ArrowDownward'

//Form
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

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
      padding: theme.spacing.unit,
    },
    formControl: {
      marginLeft: theme.spacing.unit,
      minWidth: 120,      
    },
    selectEmpty: {
      marginTop: theme.spacing.unit * 2,
    },
    boxFilter: {
      minHeight: '2em',
      height: 'auto',
      marginBottom: '10px',
    },
    sortArrows: {
        fontSize: '22px',
        padding: '5px 0 0',
    },
    sortArrowSelected: {
        color: '#283593',
        fontWeight: 'bolder',
    }
  });
  

const BoxFilter = (props) => {
    const { classes } = props
    const sortArrowSelected = classes.sortArrows.concat(' ').concat(classes.sortArrowSelected)
    console.log(moment().format('DD/MM/YYYY'))
    return (
        <Grid item sm={12} xs={12}>        
            <Paper elevation={1} square={true} className={`${classes.control} ${classes.boxFilter}`}>
                <form method="POST" className={classes.root} onSubmit={(e) => e.preventDefault()}>                    
                    <span style={{ marginRight: '5px' }}>Sort</span>
                    <IconArrowUp className={sortArrowSelected}/>
                    <IconArrowDown className={classes.sortArrows} />
                    <span style={{ marginLeft: '8px' }}>Filter by</span>
            
                    <Select value="" onChange={() => 'Teste'}   className={classes.formControl}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>

                    <span style={{ marginLeft: '8px' }}>Date</span>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue={moment().format('YYYY-MM-DD')}
                        className={classes.formControl}
                        InputLabelProps={{
                            shrink: true,
                        }} />
                </form>
            </Paper>
        </Grid>
    )
}

export default withStyles(styles)(BoxFilter)