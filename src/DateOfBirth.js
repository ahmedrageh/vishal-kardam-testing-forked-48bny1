import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG
} from "react-component-export-image";
import React, { useRef } from "react";

const ComponentToPrint = React.forwardRef((props, ref) => (
  <div ref={ref}>Hello World</div>
));

const MyComponent = () => {
  const componentRef = useRef();
  function datebtweenDiffernce() {
    const date1 = new Date("7/13/2010");
    const date2 = new Date("12/15/2010");
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffTime + " milliseconds");
    console.log(diffDays + " days");
  }
  return (
    <React.Fragment>
      <ComponentToPrint ref={componentRef} />

      <button onClick={() => exportComponentAsJPEG(componentRef)}>
        Export As JPEG
      </button>
      <button onClick={() => exportComponentAsPDF(componentRef)}>
        Export As PDF
      </button>
      <button onClick={() => exportComponentAsPNG(componentRef)}>
        Export As PNG
      </button>
      <button onClick={() => datebtweenDiffernce()}>
        Difference Between Dates
      </button>
    </React.Fragment>
  );
};

export default MyComponent;
