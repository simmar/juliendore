// import Dialog from '@material-ui/core/Dialog';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core/styles';
import {getOrientation} from 'get-orientation/browser';
import React, {useState} from 'react';
import {getRotatedImage} from '../CropImage/canvasUtils';
import ModalCroppie from '../CropImage/ModalCroppie';
import {styles} from '../CropImage/styles';
const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
};

const Demo = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setImageSrc(null);
  };

  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      let imageDataUrl = await readFile(file);

      // apply rotation if needed
      const orientation = await getOrientation(file);
      const rotation = ORIENTATION_TO_ANGLE[orientation];
      if (rotation) {
        imageDataUrl = await getRotatedImage(imageDataUrl, rotation);
      }

      setImageSrc(imageDataUrl);
    }
  };

  const body = (
    <div>
      <ModalCroppie imageSrc={imageSrc} close={handleClose} />
    </div>
  );

  return (
    <div>
      <div>
        <input
          type="file"
          name="file-2[]"
          id="file-2"
          className="button item secondary"
          onChange={onFileChange}
          onClick={handleOpen}
        />
        <label htmlFor="file-2" className="button item secondary">
          <span>Charger un fichier</span>
        </label>
      </div>
      <Modal aria-labelledby="customized-dialog-title" open={open}>
        {body}
      </Modal>
    </div>
  );
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}
export default withStyles(styles)(Demo);
