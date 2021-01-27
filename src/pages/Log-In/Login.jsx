import React, { useEffect } from 'react';
import { Button, CssBaseline, TextField, FormControlLabel, Checkbox, Paper, Box, Grid, Typography } from '@material-ui/core/';
import { Link as LinkMU } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://i.ibb.co/tHKwW7V/sideLogo.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: '500px',
        backgroundPosition: 'center',
        display: 'flex'
    },
    paper: {
        margin: theme.spacing(18, 12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    logoTitle: {
        margin: 'auto auto 10% auto',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    title: {
        color: '#008080',
        fontWeight: '700',
        letterSpacing: '5px',
    },
    subtitle: {
        color: '#9a99aa',
        fontSize: '16px'
    },
    input: {
        width: '100%',
        marginBottom: '10px',
        color: '#008080',
    },
    forogtPw: {
        color: '#008080',
    },
    submit: {
        backgroundColor: '#008080',
        margin: 'auto',
        width: '190px',
        height: '40px',
        display: 'block',
        color: '#fff',
        textDecoration: 'none'
    }
}));

export default function SignInSide({ setActiveAccount }) {

    useEffect(() => {
        alert(`Dear User,\n\nThis platform demo is best supported by Chrome and Microsoft Edge web browsers. Experience may be altered when using other service providers.\n\nThank you,\nANT Team`)
    }, [])

    const classes = useStyles();


    const subgitHandler = () => {
        const emailInput = document.getElementById('email')
        //const emailPassword = document.getElementById('password')

        if (emailInput.value.toLowerCase().includes('alice')) {
            setActiveAccount('Alice')
        }

        if (emailInput.value.toLowerCase().includes('bob')) {
            setActiveAccount('Bob')
        }
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={6} md={6} className={classes.image}>
                <Grid item xs={false} className={classes.logoTitle} >
                    <Typography component="h2" variant="h2" className={classes.title} >
                        Your Company Name and Logo
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h2" variant="h5" className={classes.title}>
                        ANT
                    </Typography>
                    <Typography className={classes.subtitle}>
                        Welcome back! Please login to your account.
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField id="email" label="Email" type="" className={classes.input} style={{ border: 'none' }} />
                        <TextField id="password" label="Password" type="password" className={classes.input} />
                        <Grid justify="space-between" container>
                            <Grid item xs={false}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                            </Grid>
                            <Grid item xs={false}>
                                <LinkMU href="#" variant="body2" className={classes.forogtPw}>
                                    Forgot password?
                                </LinkMU>
                            </Grid>
                        </Grid>
                        <div>
                            <Link to="/maritech/dashboard">
                                <Button
                                    color='secondary'
                                    type="submit"
                                    variant="contained"
                                    className={classes.submit}
                                    onClick={() => subgitHandler()}
                                >
                                    Login
                            </Button>
                            </Link>


                            <button id="customBtn" className="customGPlusSignIn">
                                <span className="icon"></span>
                                <span className="buttonText">Sign in with Google</span>
                            </button>

                        </div>
                        <Box mt={5}>
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}