import {  useState,useEffect } from "react";
// import axios from "axios";
import className from "classnames/bind";
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Home.module.scss";
import { images } from "../../../asset/img";

const cx = className.bind(styles);


function Home() {

    useEffect(() => {
        AOS.init(); 
    }, []);

    const [isDesProjectVisible, setDesProjectVisible] = useState(false);

    const toggleDesProjectVisibility = () => {
        setDesProjectVisible(!isDesProjectVisible);
    };

    const hideDesProject = () => {
        setDesProjectVisible(false);
    };

    return ( 
        <main className = {cx("homeMain")}>           
            <section className = {cx("home")} id="home">
                <section className = {cx("contentHome")} data-aos="fade-up" data-aos-duration="1000">
                    <article className = {cx("itemContentHome")} data-aos="fade-up" data-aos-duration="1200">
                        <h5>Hello, I'm</h5>
                    </article>
                     <article className = {cx("itemContentHome")} data-aos="fade-up" data-aos-duration="1500">
                        <h1>Vũ Hồng Điệp</h1>
                    </article>
                     <article className = {cx("itemContentHome")} data-aos="fade-up" data-aos-duration="1400">
                        <h3>Backend Devoloper</h3>
                    </article>
                     <article className = {cx("itemContentHomeButton")} data-aos="fade-up" data-aos-duration="1500">
                        <a href="/">
                            <button>Hire Me </button>
                        </a>
                    </article>
                </section>
                <section className = {cx("imgHome")} data-aos="fade-left" data-aos-duration="1400">
                    <img src={images.imageAvata} alt="avata"/>
                    <section className = {cx("media")} data-aos="fade-right">
                        <article className = {cx("contentMedia")} >
                            <a href="/">
                                <i className="bi bi-github"></i>
                            </a>
                        </article>
                    </section>
                </section>
            </section>
            <section className = {cx("about")} id="about">
                <section className = {cx("containerAbout")}>
                    <h1 data-aos="fade-up"
                    data-aos-duration="3000"> about me </h1>
                    <article className = {cx("titleAbout")} data-aos="fade-up"
                    data-aos-duration="3000">
                        <h2>about me</h2>
                    </article>
                    <section className = {cx("contentAbout")}>
                        <article className = {cx("imgAbout")} data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                            <img src={images.imageAvata} alt="avata"/>
                        </article>
                        <section className = {cx("itemAbout")} data-aos="zoom-in">
                            <article className = {cx("titleItemAbout")}>
                                <h2>Hi There! I'm Vũ Hồng Điệp</h2>
                            </article>
                            <article className = {cx("titleItemAbout")}>
                                <h5>Backend Devoloper</h5>
                            </article>
                            <article className = {cx("titleItemAbout")}>
                                <p>I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and otivate people to respond to messages, with a view to making a favorable impact.</p>
                            </article>
                            <section className = {cx("titleItemAboutPersonalInformation")}>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Birthday</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: December 27, 2004</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Phone</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: 0359689640</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Email</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: Vudiep621@gmail.com</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>From</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: Tu Hoàn Phương Canh Hà Nội</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Language</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: English,  VietNameses</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Job</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: Student</p>
                                    </article>
                                </section>
                            </section>
                            <article className = {cx("titleItemDownloadAbout")}>
                                <a href="/">
                                    <button>Download CV</button>
                                </a>
                            </article>
                        </section>
                    </section>
                </section>
            </section>
            <section className = {cx("resume")} id="resume">
                <section className = {cx("containerResume")}>
                    <h1 data-aos="fade-up"
                    data-aos-duration="13000"> Resume me </h1>
                    <article className = {cx("titleResume")} data-aos="fade-up" data-aos-duration="13000">
                        <h2>Resume me</h2>
                    </article>
                    <section className = {cx("contentResume")} data-aos="fade-up" data-aos-duration="3000">
                        <section className = {cx("Education")} >
                            <section className = {cx("titleEducation")}>
                                <i className="bi bi-briefcase"></i>
                                <h2>Education</h2>
                            </section>
                            <section className = {cx("contentEducation")} >
                                
                                <section className = {cx("itemContent")}>
                                    <article className = {cx("titleItemEducation")}>
                                        <svg  height="30">
                                            <circle cx="30" cy="15" r="7" stroke="#101624" stroke-width="3" fill="#232935"></circle>
                                        </svg>
                                        <h2>Master of Computer Science</h2>
                                    </article>
                                    <section className = {cx("contentItemEducation")}>
                                    <svg height="100%">
                                        <line x1="30" y1="0" x2="30" y2="100%" style={{stroke: "#232935", strokeWidth: 1}}></line>
                                    </svg>
                                    
                                        <article className = {cx("content")}>
                                            <h4>2022 - 2025</h4>
                                            <h2>FPT Polytechnic College</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                                        </article>
                                    </section>
                                </section>

                            </section>
                        </section>
                        <section className = {cx("Experience")}>
                            <section className = {cx("titleExperience")}>
                                <i className="bi bi-mortarboard"></i>
                                <h2>Experience</h2>
                            </section>
                            <section className = {cx("contentExperience")} >
                                <section className = {cx("itemContent")}>
                                    <article className = {cx("titleItemExperience")}>
                                        <svg  height="30">
                                            <circle cx="30" cy="15" r="7" stroke="#101624" stroke-width="3" fill="#232935"></circle>
                                        </svg>
                                        <h2>Master of Computer Science</h2>
                                    </article>
                                    <section className = {cx("contentItemExperience")}>
                                        <svg height="100%">
                                            <line x1="30" y1="0" x2="30" y2="100%" style={{ stroke: '#232935', strokeWidth: 1 }}></line>
                                        </svg>
                                    
                                        <article className = {cx("content")}>
                                            <h4>2022 - 2025</h4>
                                            <h2>FPT Polytechnic College</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                                        </article>
                                    </section>
                                </section>

                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section className = {cx("Skills")} id="skills">
                <section className = {cx("containerSkills")}>
                    <h1 data-aos="fade-up"
                    data-aos-duration="13000"> Skills </h1>
                    <article className = {cx("titleSkills")} data-aos="fade-up" data-aos-duration="13000">
                        <h2>Skills</h2>
                    </article>
                    <section className = {cx("contentSkills")}>
                        <article className = {cx("titleContentSkills")}  data-aos="fade-right">
                            <h2>All the skills that I have in that field of work are mentioned.</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                        </article>
                        <section className = {cx("listChartsSkills")}>
                            <section className = {cx("chartsSkils")} data-aos="fade-up"
                            data-aos-duration="1000">
                                <article className = {cx("titleChartsSkils")}>
                                    <h3>HTML</h3>
                                    <h4>70%</h4>
                                </article>
                                <article className = {cx("contentChartsSkils")}>
                                    <article style={{width: "70%"}} className = {cx("contentShow")}></article>
                                    <article className = {cx("contentHidden")}></article>
                                </article>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section className = {cx("Project")} id="project">
                <section className = {cx("containerProject")}>
                    <h1 data-aos="fade-up"
                    data-aos-duration="13000"> Project </h1>
                    <article className = {cx("titleProject")} data-aos="fade-up" data-aos-duration="13000">
                        <h2>Project</h2>
                    </article>
                    <section className = {cx("contentProject")}>
                        <section className = {cx("listContentProject")}>
                            <section className = {cx("itemListContentProject")}  onClick={toggleDesProjectVisibility}>
                                <img src={images.logo} alt="imgProject"/>
                                <article className = {cx("contentItem")} >
                                    <h2>Backend Devoloper</h2>
                                    <p>Design / Marketing</p>
                                </article>
                                <section className={cx("desProject")} style={{ display: isDesProjectVisible ? 'flex' : 'none' }}>
                                    <article className = {cx("imageDesProject")}>
                                        <img src={images.logo} alt="imgProject"/>
                                    </article>
                                    <section className = {cx("contentDesProject")}>
                                        <section className = {cx("itemContentDesProject")}>
                                            <h2>Giới thiệu</h2>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                                            <h2>Cộng nghệ</h2>
                                            <ul>
                                                <li>PHP</li>
                                                <li>Node js</li>
                                                <li>Mogo Db</li>
                                                <li>PHP</li>
                                                <li>Node js</li>
                                                <li>Mogo Db</li>
                                                <li>PHP</li>
                                                <li>Node js</li>
                                                <li>Mogo Db</li>
                                                <li>PHP</li>
                                                <li>Node js</li>
                                                <li>Mogo Db</li>
                                            </ul>
                                            <h2> Đối tượng có trong dự án</h2>
                                            <ul>
                                                <li>Nhân viên</li>
                                                <li>Quản lý</li>
                                                <li>Khách hàng</li>
                                                <li>Nhân viên</li>
                                                <li>Quản lý</li>
                                                <li>Khách hàng</li>
                                                <li>Nhân viên</li>
                                                <li>Quản lý</li>
                                                <li>Khách hàng</li>
                                            </ul>
                                            <a href="/">
                                                <button>Trải nhiệm ngay</button>
                                            </a>
                                        </section>
                                        <article className = {cx("icontDesProject")}>
                                            <i className="bi bi-x-circle" onClick={hideDesProject}></i>
                                        </article>
                                    </section>
                                </section>
                            </section>
                        </section>
                        <article className = {cx("loadMore")}>
                            <a href="/">
                                <button>Load More</button>
                            </a>
                        </article>
                    </section>
                </section>
            </section>
            <section className = {cx("Contact")} id="contact">
                <section className = {cx("containerContact")}>
                    <h1> Contact </h1>
                    <article className = {cx("titleContact")}>
                        <h2>Contact</h2>
                    </article>
                    <section className = {cx("contentContact")} data-aos="fade-up" data-aos-duration="13000">
                        <section className = {cx("formContact")}>
                            <h2>Chỉ cần nói xin chào</h2>
                            <form action="" method="post">
                                <input type="text" name="name" required placeholder="Tên của bạn"/>
                                <input type="text" name="email" required placeholder="Email của bạn"/>
                                <input type="text" name="title" required placeholder="Tiêu đề thư của bạn"/>
                                <textarea name="content" id="" cols="30" rows="10" placeholder="Nội dung thư của bạn"></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </section>
                        <section className = {cx("ContactInfro")}>
                            <h2>Thông tin liên hệ</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.</p>
                            <section className = {cx("contentContactInfro")}>
                                <article className = {cx("icontContentContactInfro")}>
                                    <i className="bi bi-envelope"></i>
                                </article>
                                <article className = {cx("itemContentContactInfro")}>
                                    <h2>Email</h2>
                                    <p>vudiep621@gmail.com</p>
                                </article>
                            </section>
                            <section className = {cx("contentContactInfro")}>
                                <article className = {cx("icontContentContactInfro")}>
                                    <i className="bi bi-telephone"></i>
                                </article>
                                <article className = {cx("itemContentContactInfro")}>
                                    <h2>Số điện thoại</h2>
                                    <p>0976142427</p>
                                </article>
                            </section>
                            <section className = {cx("contentContactInfro")}>
                                <article className = {cx("icontContentContactInfro")}>
                                    <i className="bi bi-geo-alt"></i>
                                </article>
                                <article className = {cx("itemContentContactInfro")}>
                                    <h2>Địa chỉ</h2>
                                    <p>Tu Hoàn Phương Canh Hà Nội</p>
                                </article>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </main>
 
     );

}

export default Home;