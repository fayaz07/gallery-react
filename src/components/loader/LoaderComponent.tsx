import { Spinner } from "react-bootstrap";
import "./_.scss";

function LoaderComponent() {
  return (
    <div className="loadingIndicator">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoaderComponent;
