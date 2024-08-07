import { NextComponentType } from "next";
import Image from "next/image";
// import styles from "./styles.module.scss";
import exifr from "exifr";
import { useEffect, useState } from "react";

interface ImageComponentProps {
  path: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ path }) => {
  const [imageData, setImageData] = useState({});
  useEffect(() => {
    exifr.parse(path).then((data) => {
      setImageData(data);
    });
  }, []);
  const make = imageData?.Make;
  const model = imageData?.Model;
  const ISO = imageData?.ISO;
  const exposureTime = "1/" + String(1 / imageData?.ExposureTime);
  const aperture = imageData?.FNumber;
  const focalLength = imageData?.FocalLength;

  return (
    <div>
      <Image src={path} alt="image" width={200} height={200} />
      {/* <p>{JSON.stringify(imageData)}</p> */}
      <p>
        {make} {model}
      </p>
      {/* <p>{model}</p> */}
      <p>ISO{ISO}</p>
      <p>Shutter Speed {exposureTime}</p>
      <p>ƒ/{aperture}</p>
      <p>{focalLength}mm</p>
    </div>
  );
};

export default ImageComponent;
