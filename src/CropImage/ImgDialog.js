import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import {withStyles} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  imgContainer: {
    position: 'relative',
    flex: 1,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class ImgDialog extends React.Component {
  // state = {
  //   open: false,
  // };

  // handleClickOpen = () => {
  //   this.setState({open: true});
  // };

  // handleClose = () => {
  //   this.setState({open: false});
  // };

  render() {
    const {classes} = this.props;

    return (
      <Dialog
        fullScreen
        open={!!this.props.img}
        onClose={this.props.onClose}
        TransitionComponent={Transition}
      >
        <IconButton
          color="inherit"
          onClick={this.props.onClose}
          aria-label="Close"
        >
          <CloseIcon />
        </IconButton>
        <div className={classes.imgContainer}>
          <img src={this.props.img} alt="Cropped" className={classes.img} />
        </div>
      </Dialog>
    );
  }
}

export default withStyles(styles)(ImgDialog);
