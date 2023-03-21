import React from "react";
import "./_.scss";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { saveAs } from "file-saver";
import download from "../../assets/download.png";
import ImageModel from "../../data/model/Image";
import Endpoints from "../../services/api/Endpoints";

const url = Endpoints.baseUrl;

function ImageComponent(props: { image: ImageModel }) {
  const { image } = props;

  const downloadOriginalImage = () => {
    saveAs(`${url}dl/${image.orig}`, image.orig);
  };
  const downloadLargeImage = () => {
    saveAs(`${url}dl/${image.lg}`, image.lg);
  };

  const downloadMediumImage = () => {
    saveAs(`${url}dl/${image.md}`, image.md);
  };

  const downloadSmallImage = () => {
    saveAs(`${url}dl/${image.sm}`, image.sm);
  };

  return (
    <div key={image.th} className="vimg">
      <Image src={`${url}thumbnail/${image.th}`} fluid />
      <div className="info">
        <h4 className="info-title">Download options</h4>
        <img src={download} className="info-dlImg" />
      </div>
      <div className="vimg-dl-opts">
        <Button
          variant="primary"
          className="vimg-dl-opts-button"
          onClick={downloadOriginalImage}
        >
          Original
        </Button>
        <Button
          variant="outline-primary"
          className="vimg-dl-opts-button"
          onClick={downloadLargeImage}
        >
          Large
        </Button>
        <Button
          variant="outline-primary"
          className="vimg-dl-opts-button"
          onClick={downloadMediumImage}
        >
          Medium
        </Button>
        <Button
          variant="outline-primary"
          className="vimg-dl-opts-button"
          onClick={downloadSmallImage}
        >
          Small
        </Button>
      </div>
    </div>
  );
}

export default ImageComponent;
