import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

//REdux stuff
import { connect } from 'react-redux';
import { editUserDetails } from '../redux/actions/userActions';
//MUI Stuff
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

const styles = {
    paper: {
        padding: 20
    },
    profile: {
    '& .image-wrapper': {
      textAlign: 'center',
      position: 'relative',
      '& button': {
        position: 'absolute',
        top: '80%',
        left: '70%'
      }
    },
    '& .profile-image': {
      width: 200,
      height: 200,
      objectFit: 'cover',
      maxWidth: '100%',
      borderRadius: '50%'
    },
    '& .profile-details': {
      textAlign: 'center',
      '& span, svg': {
        verticalAlign: 'middle'
      },
      '& a': {
        color: '#00bcd4'
      }
    },
    '& hr': {
      border: 'none',
      margin: '0 0 10px 0'
    },
    '& svg.button': {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  },
  buttons: {
    textAlign: 'center',
    '& a': {
      margin: '20px 10px'
    }
  }};

class EditDetails extends Component {
    state = {
        bio: '',
        website: '',
        location: '',
        open: false
    };

    mapUserDetailsToState = (credentials) => {
        this.setState({
            bio: credentials.bio ? credentials.bio : '',
            website: credentials.website ? credentials.website : '',
            location: credentials.location ? credentials.location : ''
        });
    };
    handleOpen = () => {
        this.setState({ open: true })
        this.mapUserDetailsToState(this.props.credentials);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount(){
        const { credentials } = this.props;
        console.log('here' + credentials);
        this.mapUserDetailsToState(credentials);
    };

    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };
    handleSubmit = () => {
        const userDetails = {
            bio:this.state.bio,
            website:this.state.bio,
            location:this.state.bio,
        }
        this.props.editUserDetails(userDetails);
        this.handleClose();
    };
    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Tooltip title="Edit Details" placement="top">
                    <IconButton onClick={this.handleOpen} className={classes.button}>
                        <EditIcon color="primary"/>
                        </IconButton>
                    </Tooltip>
                <Dialog open={this.state.open}
                onClose={this.handleClose}
                fullWidth
                maxWidth="sm">
                    <DialogTitle>Edit your Details</DialogTitle>
                <DialogContent>
                    <form>
                        <TextField
                            name="bio" type="text" label="Bio"
                        multiline rows="3" 
                        placeholder="A short bio about yourself" 
                        value={this.state.bio} 
                        onChange={this.handleChange} fullWidth />
                        <TextField
                            name="website" type="text" label="Bio"
                        multiline rows="3" 
                        placeholder="Your education" 
                        value={this.state.bio} 
                        onChange={this.handleChange} fullWidth />
                        <TextField
                        name="bio" type="text" label="Location"
                        multiline rows="3" 
                        placeholder="Your professional experience" 
                        value={this.state.bio} 
                        onChange={this.handleChange} fullWidth />
                        
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
                </Dialog>
            </Fragment>
        )
    }

    
}

EditDetails.propTypes = {
    editUserDetails: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
  };
  
  const mapStateToProps = (state) => ({
    credentials: state.user.credentials
  });
  
  export default connect(
    mapStateToProps,
    { editUserDetails }
  )(withStyles(styles)(EditDetails));


