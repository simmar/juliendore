import React, {useState} from 'react';

const Upload = () => {
  const [productPicture, setproductPicture] = useState({
    file: null,
    inputKey: Date.now(),
  });

  const onChangePicture = (e) => {
    console.log(e.target.files[0].name);
    console.log('productPicture', productPicture);
    let file = e.target.files[0]; //Capture the file in variable otherwise event gets nullified and you won't get file.
    setproductPicture((prevState) => ({
      ...prevState,
      file: URL.createObjectURL(file),
    }));
  };
  return (
    <div className="has-text-centered">
      <input
        type="file"
        name="file-2[]"
        id="file-2"
        class="button item secondary"
        data-multiple-caption="{count} files selected"
        multiple=""
        onChange={(e) => onChangePicture(e)}
        key={productPicture.inputKey}
      />
      <label for="file-2" class="button item secondary">
        <span>Charger un fichier</span>
      </label>
      {/* {productPicture.file && <img src={productPicture.file} alt="-" />} */}
      {/* <div className="sticker user hidden">
        <span
          className="sticker-selector"
          data-full="images/stickers/full/jd.png"
        >
          <img alt="" src="images/stickers/jd.png" />
        </span>
        <span className="close" id="clear-user-image-btn">
          <svg
            fill="none"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#fff">
              <path d="m1.70711.292893c-.39053-.3905241-1.023693-.3905241-1.414217 0-.3905241.390524-.3905241 1.023687 0 1.414217zm12.58579 15.414207c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142zm-14.000007-13.99999 14.000007 13.99999 1.4142-1.4142-13.99999-14.000007z" />
              <path d="m.292893 14.2929c-.3905241.3905-.3905241 1.0237 0 1.4142.390524.3905 1.023687.3905 1.414217 0zm15.414207-12.58579c.3905-.39053.3905-1.023693 0-1.414217-.3905-.3905245-1.0237-.3905245-1.4142 0zm-13.99999 13.99999 13.99999-13.99999-1.4142-1.414217-14.000007 14.000007z" />
            </g>
          </svg>
          <img src="svg/user-image-close.svg" alt="Modifier" />
        </span>
      </div> */}
    </div>
  );
};

export default Upload;
