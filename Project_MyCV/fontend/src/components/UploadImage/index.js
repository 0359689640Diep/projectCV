    import { useRef, useState, useEffect } from "react";
    import classNames from "classnames/bind";
    import style from "./UploadImage.module.scss";

    const cx = classNames.bind(style);

    function UploadImage({ data, name, id, required = false, multiple = false }) {

        // Sử dụng useRef để tham chiếu đến thẻ input
        const fileInputRef = useRef(null);
        const [image, setImages] = useState();

        useEffect(() => {
            // cleanup
            return() =>{
                image && URL.revokeObjectURL(image.preview)
            }
        }, [image])

        // Hàm xử lý khi nút được nhấn
        const handleButtonClick = () => {
            // Kích hoạt sự kiện click trên thẻ input
            fileInputRef.current.click();
        };

        // Hàm xử lý khi có sự thay đổi trên thẻ input (đã chọn file)
        const handleFileInputChange = () => {
            // Thực hiện các hành động xử lý file ở đây (ví dụ: hiển thị tên file đã chọn)
            const selectedFiles = fileInputRef.current.files[0];
            selectedFiles.preview = URL.createObjectURL(selectedFiles);
            setImages(selectedFiles);
        };

        return (
            <section className={cx("wrapper")}>
                <section className={cx("content")}>
                    
                    {image && (<img src={image.preview} alt="Image" />)}
                    <article className={cx("item")}>
                        <button onClick={handleButtonClick}>
                            Chọn {name}
                            {/* Thêm ref vào thẻ input để tham chiếu đến nó */}
                            <input
                                ref={fileInputRef}
                                type="file"
                                name={name}
                                id={id}
                                required={required}
                                multiple={multiple}
                                onChange={handleFileInputChange}
                            />
                        </button>
                    </article>
                </section>
            </section>
        );
    }

    export default UploadImage;
