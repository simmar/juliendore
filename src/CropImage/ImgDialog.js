import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const ImgDialog = ({croppedImage, onClose}) => {
  console.log('croppedImage', croppedImage);
  return (
    <>
      <IconButton color="inherit" onClick={onClose} aria-label="Close">
        <CloseIcon />
      </IconButton>
      <div className="test column">
        <img src={croppedImage} alt="Cropped" />
      </div>
    </>
  );
};

export default ImgDialog;
