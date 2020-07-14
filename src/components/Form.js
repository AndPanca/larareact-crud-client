import 'date-fns';
import React, {Component} from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { withStyles } from "@material-ui/core/styles";

//CSS INLINE
const useStyles = theme => ({
    root: {
        width: "95%",
        marginBottom: theme.spacing(1)
    },
    judul: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        textAlign: 'center'
    }
});

class Form extends Component {
    //SET default State form dan button
    state = {
        form: {id: "", name: "", birthday: new Date('01-01-2003'), gender: "M", email: "", phone: "", address: "", isEdit: false},
        btnName: "Submit",
        btnColor: "primary",
    };

    //Cek data kosong
    isEmpty(obj){
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    };

    //Update button dan form setelah pilih edit
    componentDidUpdate(prevProps){
        if (prevProps !== this.props && !this.isEmpty(this.props.identitasId)){
          this.setState({
            form: {...this.props.identitasId, isEdit: true},
            btnName: "Update",
            btnColor: "secondary"
          });
        }
    };

    //handle data tanggal
    handleDateChange = date => {
        this.setState({
          form: {
            ...this.state.form,
            birthday: date
          }
        })
    };

    //handle data radio
    handleGenderChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            gender: e.target.value
          }
        })
    };

    //handle data setiap input
    handleChange = event =>{
      const {name, value} = event.target;
      let form = this.state.form;
      form[name] = value;
      this.setState({form});
    };

    onFormSubmit = event => {
      //preven form submit
      event.preventDefault();
      //Cek Validasi form
      if (this.formValidation()){
        //Kirim data props onFormSubmit ke Index.js 
        this.props.onFormSubmit(this.state.form);
      }
      //Membersihkan form setelah update
      this.clearFormFields();
    };

    formValidation = () => {
      //Id
      if(document.getElementsByName("id")[0].value === ""){
        alert('Enter Id');
        return false;
      }
      //Name
      if(document.getElementsByName("name")[0].value === ""){
        alert('Enter Name');
        return false;
      }
      //Email
      if(document.getElementsByName("email")[0].value === ""){
        alert('Enter Email');
        return false;
      }
      //Phone
      if(document.getElementsByName("phone")[0].value === ""){
        alert('Enter Phone');
        return false;
      }
      //Address
      if(document.getElementsByName("address")[0].value === ""){
        alert('Enter Address');
        return false;
      }
      return true;
    };

    clearFormFields = () => {
      //Membersihkan form input setalah submit dan update
      this.setState({
        form: {id: "", name: "", birthday: new Date('01-01-2003'), gender: "M", email: "", phone: "", address: "", isEdit: false}
      })
    };
    
    render () {
        const { classes } = this.props;
        return (
            <div>
                <Container>
                    <Typography variant="h5" className={classes.judul}>Formulir Identitas</Typography>
                    <form noValidate autoComplete="off">
                        <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={1}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField 
                                      id="standard-basic" 
                                      className={classes.root}
                                      name="id" 
                                      label="Id" 
                                      placeholder="NIK/KTM"
                                      value={this.state.form.id}
                                      onChange={this.handleChange}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField 
                                      id="standard-basic" 
                                      className={classes.root} 
                                      name="name"
                                      label="Name" 
                                      placeholder="Full name"
                                      value={this.state.form.name}
                                      onChange={this.handleChange}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            disableToolbar
                                            variant="inline"
                                            margin="normal"
                                            format="yyyy-MM-dd"
                                            id="date-picker-inline"
                                            label="Birthday"
                                            className={classes.root}
                                            value={this.state.form.birthday}
                                            onChange={this.handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={6}>
                                    <FormControl style={{ marginTop: '2ch' }} component="fieldset">
                                        <FormLabel component="legend">Gender</FormLabel>
                                        <RadioGroup row aria-label="gender" name="gender" value={this.state.form.gender} onChange={this.handleGenderChange}>
                                            <FormControlLabel value="F" control={<Radio />} label="Female" />
                                            <FormControlLabel value="M" control={<Radio />} label="Male" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField 
                                      id="standard-basic" 
                                      className={classes.root} 
                                      name="email"
                                      label="Email" 
                                      placeholder="blabla@mail.com"
                                      value={this.state.form.email}
                                      onChange={this.handleChange} />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField 
                                      id="standard-basic" 
                                      className={classes.root} 
                                      name="phone"
                                      label="Phone Number" 
                                      placeholder="+62"
                                      value={this.state.form.phone}
                                      onChange={this.handleChange}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField 
                                      id="standard-multiline-static" 
                                      className={classes.root} 
                                      name="address"
                                      label="Address" 
                                      multiline rows={2}
                                      value={this.state.form.address}
                                      onChange={this.handleChange}/>
                                    <Button 
                                      variant="contained" 
                                      style={{marginTop: '4ch', marginBottom:'4ch'}} 
                                      color={this.state.btnColor} 
                                      onClick={this.onFormSubmit}>
                                      {this.state.btnName}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </div>
        )
    }
}
// Untuk menggunakan Style inline, convert dari hooks ke class
export default withStyles(useStyles)(Form);