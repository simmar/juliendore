import React, {useState} from 'react';
import ImageCropper from '../CropImage/ImageCropper';
const ImageUpload = () => {
  const [blob, setBlob] = useState(null);
  const [inputImg, setInputImg] = useState('');

  const getBlob = (blob) => {
    // pass blob up from the ImageCropper component
    setBlob(blob);
  };

  const onInputChange = (e) => {
    // convert image file to base64 string
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        setInputImg(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitImage = (e) => {
    // upload blob to firebase 'images' folder with filename 'image'
    e.preventDefault();
    // firebase
    //   .storage()
    //   .ref('images')
    //   .child('image')
    //   .put(blob, {contentType: blob.type})
    //   .then(() => {
    //     // redirect user
    //   });
  };

  return (
    // <form onSubmit={handleSubmitImage}>
    //   <input type="file" accept="image/*" onChange={onInputChange} />
    //   {inputImg && <ImageCropper getBlob={getBlob} inputImg={inputImg} />}
    //   <button type="submit">Submit</button>
    // </form>
    <>
      <input
        accept="image/*"
        type="file"
        name="file-2[]"
        id="file-2"
        class="button item secondary"
        data-multiple-caption="{count} files selected"
        multiple=""
        onChange={onInputChange}
      />
      <label for="file-2" class="button item secondary">
        <span>Charger un fichier</span>
      </label>
      {inputImg && <ImageCropper getBlob={getBlob} inputImg={inputImg} />}
    </>
  );
};

export default ImageUpload;
