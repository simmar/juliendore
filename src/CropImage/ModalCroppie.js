import {Slider} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, {useCallback, useState} from 'react';
import Cropper from 'react-easy-crop';
import Modal from 'react-modal';
import {getCroppedImg} from './canvasUtils';
import ImgDialog from './ImgDialog';
import {styles} from './styles';

const ModalCropppie = ({imageSrc, classes, isOpen, close, confirm}) => {
  const [crop, setCrop] = useState({x: 0, y: 0});
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  // console.log('imageSrc', imageSrc);

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

  return (
    <>
      {imageSrc ? (
        <Modal isOpen={isOpen} onRequestClose={close}>
          <div className="wrapper">
            <div className="inside">
              <h3>Ajustez votre photo</h3>
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
                  <Button
                    variant="contained"
                    className="button item secondary"
                    onClick={confirm}
                  >
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
        </Modal>
      ) : null}
    </>
  );
};

export default withStyles(styles)(ModalCropppie);
