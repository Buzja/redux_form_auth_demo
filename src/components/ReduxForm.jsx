import React from 'react';
import {reduxForm,Field} from 'redux-form';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#000',
        main: '#26d2b4',
        dark: '#1eb197',
        contrastText: '#fff',
      },
    },
  });

const validate = values=>{
    const errors = {}
    
    if(!values.email){
        errors.email = "Required"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if(!values.password){
        errors.password = "Required";
    }
    else if(values.password.length < 6){
        errors.password = "Password must be longer";
    }
    return errors;
}

const warn = values =>{
    const warnings = {}
    if(values.email.length < 7){
        warnings.email = "So strange email address";
    }
    return warnings;
}

const renderField = ({input,name,type,meta:{touched, error, warning}})=>(
    <div>
        <TextField
        {...input}
          label={name} 
          type={type}
          placeholder={name}
          helperText={error || warning}
          margin="normal"
        />
        {/* <input {...input} placeholder={name} type={type}/>
        {touched && ((error && <span>{error}</span>)||(warning && <span>{warning}</span>))} */}
    </div>
)

const ReduxForm = props => {
    const  {handleSubmit,submitting} = props;
    return (
        <MuiThemeProvider theme={theme}>
        <Grid 
            container
            alignItems='center'
            justify='center'
            style={{height: 100+"vh",
        width:100+"%"
        }}
        >
        <Grid container alignItems='center' justify='center' direction='column' 
        style={{height: 300+"px", width:300+"px",boxShadow: "0 0 10px rgba(0,0,0,0.2)", borderRadius: 50+"%"}} >
        <form onSubmit={handleSubmit(props.onSubmit)}>
            <Field name="email" placeholder="email" component={renderField} type="email"/>
            <Field name="password" placeholder="email" component={renderField} type="password"/>
            <Button variant="extendedFab" color="secondary" type="submit" disabled={submitting} style={{width:"100%"}}>
                <Icon color="disabled" style={{ fontSize: 24, marginLeft: -5+"px", marginRight: 10+"px"}}>
                add
                </Icon>
                Login
            </Button>
        </form>
        </Grid >
        </Grid>
        </MuiThemeProvider>
    )
}


export default reduxForm({
    form:'login',
    initialValues:{
        email: "",
        password: ""
    },
    validate,
    warn
})(ReduxForm);