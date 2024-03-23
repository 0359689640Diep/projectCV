import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import classNames from "classnames";

import styles from "./PDFViewer.module.scss";

const cx = classNames.bind(styles);

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function PDFViewer({ path }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <section className={cx("wrapper")}>
      <Document file="http://localhost:7000/api/image/get-image/1710905070105CV_Vu_Hong_Diep.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </section>
  );
}

export default PDFViewer;
