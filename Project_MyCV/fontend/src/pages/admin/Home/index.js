import classNames from "classnames/bind";
import { useState } from "react";

import styles from "./Home.module.scss";

const cx  = classNames.bind(styles);
function Home() {
    
    const [display, setDisplay] = useState(false);

    const handleDisplay = () => {
        setDisplay(!display);
    }

    return ( 
        <section className={cx("message")}>
            <article className={cx("title")} onClick={handleDisplay} >
                <p className={cx("nameTitle")}>Khanh Dinh Van</p>
                <h1 className={cx("titleMessage")}>
                    THÔNG TIN LỚP HỌC MÔN CHÍNH TRỊ - LỚP VIE1016.25 - THẦY KHANHDV10

                </h1>
                <i className={cx("bi bi-trash3", "remote")}></i>
            </article>
            <section className={cx("container")} style={{display: display ? "block" : "none"}}>
                <article className={cx("itemTilteMessage")}>
                    <h1 >THÔNG TIN LỚP HỌC MÔN CHÍNH TRỊ - LỚP VIE1016.25 - THẦY KHANHDV10</h1>
                </article>
                <article className={cx("itemAccountReceiver")}>
                    <span >Khanh Dinh Van</span>
                    <p>khanhdv10@fe.edu.vn</p>
                </article>
                <article className={cx("itemContentMessage")}>
                    <p>
                        Chào cả lớp,

                        Thầy là Khanhdv10 sẽ đồng hành cùng các em trong môn học Chính trị kỳ này của lớp mình

                        Để đạt kết quả tốt nhất thầy nhấn mạnh các em một số điểm sau:

                        Tham gia học qua GG meet và hệ thống CMS đầy đủ (Nghỉ 1 buổi sẽ phải học lại).
                        Khi join vào lớp ăn mặc nghiêm túc, không gian xung quanh yên tĩnh, hạn chế người qua lại.
                        Hoàn thành đầy đủ các Quiz (đạt 100%) và ASM (từ 50%).
                        Tích cực, chủ động tìm hiểu nội dung bài học, đóng góp ý kiến.
                        Đoàn kết, sáng tạo trong làm việc nhóm.
                        Join nhóm zalo lớp : https://zalo.me/g/njipch617
                    </p>
                </article>

            </section>
        </section>
     );
}

export default Home;