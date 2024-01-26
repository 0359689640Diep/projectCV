    import { useRef, useState, useEffect } from "react";
    import classNames from "classnames/bind";
    import style from "./UploadImage.module.scss";

    const cx = classNames.bind(style);

    function UploadImage({ Item, name, id, required = false, multiple = false }) {

        // Sử dụng useRef để tham chiếu đến thẻ input
        const fileInputRef = useRef(null);
        const [images, setImages] = useState([]);

        useEffect(() => {
            if (Item) {
            if (Array.isArray(Item)) {
                // Trường hợp Item là mảng, setImages với mảng này
                setImages(Item.map((url) => ({ preview: url })));
            } else {
                // Trường hợp Item là chuỗi, setImages với mảng chứa 1 phần tử
                setImages([{ preview: Item }]);
            }
            }
        }, [Item]);

        useEffect(() => {
            // cleanup
            return () => {
            images.forEach((image) => URL.revokeObjectURL(image.preview));
            };
        }, [images]);

        // Hàm xử lý khi nút được nhấn
        const handleButtonClick = () => {
            // Kích hoạt sự kiện click trên thẻ input
            fileInputRef.current.click();
        };

        // Hàm xử lý khi có sự thay đổi trên thẻ input (đã chọn file)
        const handleFileInputChange = () => {
            // Thực hiện các hành động xử lý file ở đây (ví dụ: hiển thị tên file đã chọn)
            const selectedFiles = fileInputRef.current.files;

            const newImages = Array.from(selectedFiles).map((file) => {
            file.preview = URL.createObjectURL(file);
            return file;
            });

            setImages(newImages);
        };
        return (
            <section className={cx("wrapper")}>
                <section className={cx("content")}>
                    <article className={cx("images")}>

                        {images.map((img) => (
                            <img key={img.preview} src={img.preview} alt="img" />
                        ))}

                    </article>
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
