import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import AppIcon from '../images/monkey.png';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
//Redux
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userActions';

const styles = {
    form: {
      textAlign: 'center'
    },
    image: {
      margin: '20px auto 20px auto'
    },
    pageTitle: {
      margin: '10px auto 10px auto'
    },
    textField: {
      margin: '10px auto 10px auto'
    },
    button: {
      marginTop: 20,
      position: 'relative'
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 10
    },
    progress: {
      position: 'absolute'
    }
  };

export class signup extends Component {
    constructor(){
        super();
        this.state = {
            "email": '',
            "password": '',
            "confirmPassword": '',
            "handle": '',
            "errors": {},
            "test": ''
        }
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.UI.errors) {
        this.setState({errors: nextProps.UI.errors});
      }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        });
        const newUserData = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle,
            test: this.state.test
        };
        this.props.signupUser(newUserData, this.props.history);
    };
    handleChange = (event) => {
        this.setState ({
               [ event.target.name ]: event.target.value
        });
    };
    render() {
        const { classes, UI: { loading } } = this.props;
        const { errors } = this.state;
        console.log(this.props);
        return (
           
                <Grid container className={classes.form}>
                    <Grid item sm/>
                    <Grid item sm>
                        <img src={AppIcon} alt="monkeyimage" className={classes.image}/>
                        <Typography variant="h2" className={classes.pageTitle}>
                            Signup
                        </Typography>
                        <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.error}
              error={errors.error ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
                            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              className={classes.textField}
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              fullWidth
            />
            <select id="areas" name="area" onChange={this.handleChange} class="form-control form-control-lg">
              <option>Wicker Park</option>
              <option>Rogers Park</option>
              <option>Washington Park</option>
              <option>West Ridge</option>
              <option>Hyde Park</option>
              <option>Woodlawn</option>
              <option>Lincoln Square</option>
              <option>South Shore</option>
              <option>North Center</option>
              <option>Chatham</option>
              <option>Lake View</option>
              <option>Avalon Park</option>
              <option>Lincoln Park</option>
              <option>South Chicago</option>
              <option>Near North Side</option>
              <option>Burnside</option>
              <option>Edison Park</option>
              <option>Calumet Heights</option>
              <option>Norwood Park</option>
              <option>Roseland</option>
              <option>Jefferson Park</option>
              <option>Pullman</option>
              <option>Forest Glen</option>
              <option>South Deering</option>
              <option>North Park</option>
              <option>East Side</option>
              <option>Albany Park</option>
              <option>West Pullman</option>
              <option>Portage Park</option>
              <option>Riverdale</option>
              <option>Irving Park</option>
              <option>Hegewisch</option>
              <option>Dunning</option>
              <option>Garfield Ridge</option>
              <option>Montclare</option>
              <option>Archer Heights</option>
              <option>Belmont Cragin</option>
              <option>Brighton Park</option>
              <option>Hermosa</option>
              <option>Mckinley Park</option>
              <option>Avondale</option>
              <option>Bridgeport</option>
              <option>Logan Square</option>
              <option>New City</option>
              <option>Humboldt Park</option>
              <option>West Elsdon</option>
              <option>West Town</option>
              <option>Gage Park</option>
              <option>Austin</option>
              <option>Clearing</option>
              <option>West Garfield Park</option>
              <option>West Lawn</option>
              <option>East Garfield Park</option>
              <option>Chicago Lawn</option>
              <option>Near West Side</option>
              <option>West Englewood</option>
              <option>West Englewood</option>

              <option>North Lawndale</option>

              <option>Englewood</option>

              <option>South Lawndale</option>
              <option>Greater Grand Crossing</option>

              <option>Lower West Side</option>

              <option>Ashburn</option>
              <option>Loop</option>
              <option>Auburn Gresham</option>
              <option>Near South Side</option>
              <option>Beverly</option>
              <option>Armour Square</option>
              <option>Washington Heights</option>
              <option>Douglas</option>
              <option>Mount Greenwood</option>
              <option>Oakland</option>
              <option>Morgan Park</option>
              <option>Fuller Park</option>
              <option>Ohare</option>
              <option>Grand Boulevard</option>
              <option>Edgewater</option>
              <option>Kenwood</option>




            </select>
            <TextField
              id="handle"
              name="handle"
              type="text"
              label="Handle"
              className={classes.textField}
              helperText={errors.handle}
              error={errors.handle ? true : false}
              value={this.state.handle}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="test"
              name="test"
              type="text"
              label="test"
              className={classes.textField}
              helperText={errors.handle}
              error={errors.handle ? true : false}
              value={this.state.test}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.textField}
              helperText={errors.error}
              error={errors.error ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
                <Typography variant="body2" className={classes.customError}>
                    {errors.general}
                </Typography>
            )}
                            <Button type="submit" variant="contained" color="primary" className={classes.button} disabled={loading}>
                        Signup
                        {loading && (<CircularProgress size={30} className={classes.progress}/>)}
                                </Button>
                                <small>Already have an account ? login <Link to="/signup">here</Link></small>
                        </form>
                        </Grid>
                    <Grid item sm/>
                    <Grid item sm/>
                </Grid>
            
        );
    }
}

signup.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});



export default connect(mapStateToProps, { signupUser })(withStyles(styles)(signup));
