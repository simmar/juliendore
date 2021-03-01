import {Slider} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import Cropper from 'react-easy-crop';
import {CartContext} from '../Context';
import {getCroppedImg} from './canvasUtils';
import {styles} from './styles';

const ModalCropppie = ({imageSrc, classes, close, setState, validate}) => {
  const [crop, setCrop] = useState({x: 0, y: 0});
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const {setisActive} = useContext(CartContext);
  useEffect(() => {
    const id = setInterval(() => {
      console.log('close');
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [close]);

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
      console.log('donee', {croppedImage});
      setCroppedImage(croppedImage);
      setState(croppedImage);
      setisActive(true);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  return (
    <>
      {imageSrc ? (
        <div className="wrapper">
          <div className="inside">
            <h3>Ajustez votre photo</h3>
            <div className={classes.cropContainer}>
              <Cropper
                image={imageSrc}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect={1}
                cropShape="round"
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
                  onChange={(e, rotation) => setRotation(rotation)}
                />
              </div>
              <div className="column">
                <Button
                  variant="contained"
                  className="button item secondary"
                  onClick={close}
                >
                  Fermer
                </Button>
                <Button
                  onClick={() => {
                    showCroppedImage();
                    close();
                  }}
                  //onClick={validate}
                  variant="contained"
                  className="button item main"
                >
                  Valider
                </Button>
              </div>
            </div>
            {/* <ImgDialog croppedImage={croppedImage} onClose={onClose} /> */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default withStyles(styles)(ModalCropppie);
