import React, { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import classNames from "classnames/bind";

import styles from "./PDFViewer.module.scss";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Notification from "../Notification";


const cx = classNames.bind(styles);

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function PDFViewer({ name, value , Item=""}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfURL, setPdfURL] = useState(null);

    const fileInputRef = useRef(null);
    useEffect(() => {
        if(Item === ""){
            setPdfURL("");
        }else{
            setPdfURL(Item)
        }
    }, [Item])

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const fileType = ["application/pdf"];

    const handleFileInputChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && fileType.includes(selectedFile.type)) {
            value(selectedFile);

            let reader = new FileReader();
            reader.onload = () => {
                setPdfURL(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }else{
           Notification("Please select pdf file", "warning");
        }
    };

    return (
        <section className={cx("wrapper")}>
            <article className={cx("show-file")}>
                {pdfURL && (
                    <Document
                        file={pdfURL}
                        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                )}
            </article>
            <article className={cx("input-file")}>
                <button onClick={handleButtonClick}>
                    Chọn {name}
                    <input
                        ref={fileInputRef}
                        type="file"
                        name={name}
                        onChange={(e) => handleFileInputChange(e)}
                    />
                </button>
            </article>
        </section>
    );
}

export default PDFViewer;
