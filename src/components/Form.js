import 'date-fns';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const useStyles = makeStyles((theme) => ({
    root: {
        width: "95%",
        marginBottom: theme.spacing(1)
    },
    judul: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        textAlign: 'center'
    }
}));

const Form = () => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2000-01-01T21:11:54'));
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Typography variant="h5" className={classes.judul}>Formulir Identitas</Typography>
                <form noValidate autoComplete="off">
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" className={classes.root} label="Id" placeholder="NIK/KTM" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" className={classes.root} label="Name" placeholder="Full name" />
                            </Grid>
                            <Grid item xs={6}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="dd/MM/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Birthday"
                                        className={classes.root}
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl style={{ marginTop: '2ch' }} component="fieldset">
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup row aria-label="gender" name="gender" value={value} onChange={handleChange}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" className={classes.root} label="Email" placeholder="blabla@mail.com" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-basic" className={classes.root} label="Phone Number" placeholder="+62" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField id="standard-multiline-static" className={classes.root} label="Address" multiline rows={2} />
                                <Button variant="contained" style={{marginTop: '4ch', marginBottom:'4ch'}} color="primary" href="#contained-buttons">Submit</Button>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    )
}

export default Form;