import {Slider} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React, {useCallback, useState} from 'react';
import Cropper from 'react-easy-crop';
import {getCroppedImg} from './canvasUtils';
import ImgDialog from './ImgDialog';

const ModalCropppie = ({classes}) => {
  console.log('classes', classes);
  console.log('imageSrc', imageSrc);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({x: 0, y: 0});
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const [isToggled, setToggled] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const onClose = useCallback(() => {
    setCroppedImage(null);
  }, []);

  const handleClick = () => {
    const toggleTrueFalse = () => setToggled(!isToggled);
    console.log('isToggled', isToggled);
  };

  <>
    {imageSrc ? (
      <React.Fragment>
        <div className="wrapper">
          <div className="inside">
            <h3>Ajustez votre photo</h3>
            <IconButton
              color="inherit"
              onClick={handleClick}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <div className={classes.cropContainer}>
              <Cropper
                image={imageSrc}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect={4 / 3}
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                disableAutomaticStylesInjection={true}
              />
            </div>
            <div className={classes.controls}>
              <div className={classes.sliderContainer}>
                <Typography
                  variant="overline"
                  classes={{root: classes.sliderLabel}}
                >
                  Zoom
                </Typography>
                <Slider
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  aria-labelledby="Zoom"
                  // classes={{container: classes.slider}}
                  onChange={(e, zoom) => setZoom(zoom)}
                />
              </div>
              <div className={classes.sliderContainer}>
                <Typography
                  variant="overline"
                  classes={{root: classes.sliderLabel}}
                >
                  Rotation
                </Typography>
                <Slider
                  value={rotation}
                  min={0}
                  max={360}
                  step={1}
                  aria-labelledby="Rotation"
                  // classes={{container: classes.slider}}
                  onChange={(e, rotation) => setRotation(rotation)}
                />
              </div>
              <div className="column">
                <Button variant="contained" className="button item secondary">
                  Annuler
                </Button>
                <Button
                  onClick={showCroppedImage}
                  variant="contained"
                  className="button item main"
                >
                  Valider
                </Button>
              </div>
            </div>
            <ImgDialog img={croppedImage} onClose={onClose} />
          </div>
        </div>
      </React.Fragment>
    ) : //<input type="file" onChange={onFileChange} accept="image/*" />
    null}
  </>;
};
function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}
export default ModalCropppie();
