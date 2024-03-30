    import { useRef, useState, useEffect } from "react";
    import classNames from "classnames/bind";
    import style from "./UploadImage.module.scss";


    const cx = classNames.bind(style);

    function UploadImage({ Item, name, id, value = "" ,required = false, multiple = false, onImageChange}) {
        // Sử dụng useRef để tham chiếu đến thẻ input
        const fileInputRef = useRef(null);
        const [images, setImages] = useState([]);

        useEffect(() => {
 
            if (Item) {
                if (Array.isArray(Item)) {
                    // Trường hợp Item là mảng, setImages với mảng này
                    const Images = Item.map((url) => ({ preview: url }));
                    setImages(Images);
                } else {
                    // Trường hợp Item là chuỗi, setImages với mảng chứa 1 phần tử
                    setImages([{ preview:  Item }]);
                }
            }
        }, [Item]);

        useEffect(() => {
            if (value === "") {
                // Nếu Item là chuỗi rỗng, xóa hết dữ liệu trong mảng images
                setImages([]);
            } 
        }, [value]);

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
        const handleFileInputChange = (e) => {
            // Thực hiện các hành động xử lý file ở đây (ví dụ: hiển thị tên file đã chọn)
            const selectedFiles = fileInputRef.current.files;

            const newImages = Array.from(selectedFiles).map((file) => {
            file.preview = URL.createObjectURL(file);
            return file;
            });

            setImages(newImages);
            onImageChange(e.target.files);
        };
        return (
            <section className={cx("wrapper")}>
                {images.map((img, keys) => (
                    <section key={keys} className={cx("content")}>
                        <article className={cx("images")}>                            
                            <img src={img.preview} alt="img" />
                        </article>
                    </section>
                ))}
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
                                onChange={(e) => handleFileInputChange(e)}
                            />
                        </button>
                    </article>
            </section>
        );
    }

    export default UploadImage;
