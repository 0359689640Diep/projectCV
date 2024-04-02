import {  useState,useEffect } from "react";
import className from "classnames/bind";
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from "./Home.module.scss";
import { sendMessage } from "../../../Services/message";
import { getAccount } from "../../../Services/account";
import { getResult } from "../../../Services/result";
import { getProject } from "../../../Services/project";
import { getSkill } from "../../../Services/skills";
import { toast } from "react-toastify";

const cx = className.bind(styles);


function Home() {

    useEffect(() => {
        AOS.init(); 
    }, []);

    const [DataAccount, SetDataAccount] = useState([]);
    const [DataProject, SetDataProject] = useState([]);
    const [DataSkills, SetDataSkills] = useState([]);
    const [DataResule, SetdataResule] = useState([]);
    const [isDesProjectVisible, setDesProjectVisible] = useState(false);

    const toggleDesProjectVisibility = () => {
        setDesProjectVisible(!isDesProjectVisible);
    };

    const hideDesProject = () => {
        setDesProjectVisible(false);
    };

    // lay du lieu tu form
    const [NameUserReceiver, setNameUserReceiver] = useState("");
    const [EmailReceiver, setEmailReceiver] = useState("");
    const [TitleMessage, setTitleMessage] = useState("");
    const [Content, setContent] = useState("");

    const getData = async () => {
        try {
            const account = await getAccount();
            const result = await getResult();
            const project = await getProject();
            const skill = await getSkill();

            SetDataAccount(account.dataAccount);
            SetDataSkills(skill.data);
            SetDataProject(project.data);
            SetdataResule(result.data);
            
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {getData()}, []);

    // call api
    const fectAPI = async (e) => {
       e.preventDefault();
        const body = {
            NameUserReceiver,
            EmailReceiver,
            TitleMessage,
            Content
        }
       const response = await  sendMessage(body);
        // Reset the input fields
        if(response.status >= 400){
            toast.warning(response.data.message);
        }else{
            toast.success(response.data.message);
            setNameUserReceiver("");
            setEmailReceiver("");
            setTitleMessage("");
            setContent("");
        }
    }
    return ( 
 
        <main className = {cx("homeMain")}>   
            {DataAccount  && DataAccount[0] && DataSkills && DataSkills[0] && DataProject && DataProject && DataResule &&   
            <>      
            <section className = {cx("home")} id="home">
                <section className = {cx("contentHome")} data-aos="fade-up" data-aos-duration="1000">
                    <article className = {cx("itemContentHome")} data-aos="fade-up" data-aos-duration="1200">
                        <h5>Hello, I'm</h5>
                    </article>
                     <article className = {cx("itemContentHome")} data-aos="fade-up" data-aos-duration="1500">
                    <h1>{DataAccount[0].Name}</h1>

                    </article>
                     <article className = {cx("itemContentHome")} data-aos="fade-up" data-aos-duration="1400">
                        <h3>Backend Devoloper</h3>
                    </article>
                     <article className = {cx("itemContentHomeButton")} data-aos="fade-up" data-aos-duration="1500">
                        <a href="#contact">
                            <button>Hire Me </button>
                        </a>
                    </article>
                </section>
                <section className = {cx("imgHome")} data-aos="fade-left" data-aos-duration="1400">
                    <img src={DataAccount[0].Image[0]} alt="avata"/>
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
                            <img src={DataAccount[0].Image[1]} alt="avata"/>
                        </article>
                        <section className = {cx("itemAbout")} data-aos="zoom-in">
                            <article className = {cx("titleItemAbout")}>
                                <h2>Hi There! I'm {DataAccount[0].Name}</h2>
                            </article>
                            <article className = {cx("titleItemAbout")}>
                                <h5>Backend Devoloper</h5>
                            </article>
                            <article className = {cx("titleItemAbout")}>
                                <p>{DataAccount[0].Describe}</p>
                            </article>
                            <section className = {cx("titleItemAboutPersonalInformation")}>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Birthday</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: {DataAccount[0].Birthday}</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Phone</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: {DataAccount[0].Phone.join(" - ")}</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Email</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: {DataAccount[0].Email}</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>From</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: {DataAccount[0].From}</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Language</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: {DataAccount[0].Language.join(", ")}</p>
                                    </article>
                                </section>
                                <section className = {cx("contentTitleItemAbout")}>
                                    <article className = {cx("itemTitle")}>
                                        <p>Job</p>
                                    </article>
                                    <article className = {cx("itemContent")}>
                                        <p>: {DataAccount[0].Job.join(", ")}</p>
                                    </article>
                                </section>
                            </section>
                            <article className = {cx("titleItemDownloadAbout")}>
                                <a href={DataAccount[0].CV}>
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
                                {
                                    DataResule.map((item, index) => {
                                        if(item.Type === 0){
                                            return (
                                                <section key={index} className = {cx("itemContent")}>
                                                    <article className = {cx("titleItemEducation")}>
                                                        <svg  height="30">
                                                            <circle cx="30" cy="15" r="7" stroke="#101624" strokeWidth="3" fill="#232935"></circle>
                                                        </svg>
                                                        <h2>{item.Name}</h2>
                                                    </article>
                                                    <section className = {cx("contentItemEducation")}>
                                                    <svg height="100%">
                                                        <line x1="30" y1="0" x2="30" y2="100%" style={{stroke: "#232935", strokeWidth: 1}}></line>
                                                    </svg>
                                                    
                                                        <article className = {cx("content")}>
                                                            <h4>{item.Date}</h4>
                                                            <h2>{item.SchoolName}</h2>
                                                            <p>{item.Describe}</p>
                                                        </article>
                                                    </section>
                                                </section>
                                            )
                                        }
                                    })
                                }

                            </section>
                        </section>
                        <section className = {cx("Experience")}>
                            <section className = {cx("titleExperience")}>
                                <i className="bi bi-mortarboard"></i>
                                <h2>Experience</h2>
                            </section>
                            <section className = {cx("contentExperience")} >
                            {
                                DataResule.map((item, index) => {
                                        if(item.Type === 1){
                                            return (
                                                <section key={index} className = {cx("itemContent")}>
                                                    <article className = {cx("titleItemExperience")}>
                                                        <svg  height="30">
                                                            <circle cx="30" cy="15" r="7" stroke="#101624" strokeWidth="3" fill="#232935"></circle>
                                                        </svg>
                                                    <h2>{item.Name}</h2>
                                                    </article>
                                                    <section className = {cx("contentItemExperience")}>
                                                        <svg height="100%">
                                                            <line x1="30" y1="0" x2="30" y2="100%" style={{ stroke: '#232935', strokeWidth: 1 }}></line>
                                                        </svg>
                                                    
                                                        <article className = {cx("content")}>
                                                            <h4>{item.Date}</h4>
                                                            <h2>{item.SchoolName}</h2>
                                                            <p>{item.Describe}</p>
                                                        </article>
                                                    </section>
                                                </section>
                                            )
                                        }
                                        })
                            }

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
                            <h2>{DataSkills[0].TitleSkills}</h2>
                            <p>{DataSkills[0].ContentSkills}</p>
                        </article>
                        <section className = {cx("listChartsSkills")}>
                        {DataSkills[0].Skills.map((item, index) => {
                            return (
                                <section key={index} className = {cx("chartsSkils")} data-aos="fade-up"
                                data-aos-duration="1000">
                                    <article className = {cx("titleChartsSkils")}>
                                        <h3>{item.Name}</h3>
                                        <h4>{item.Percentage}%</h4>
                                    </article>
                                    <article className = {cx("contentChartsSkils")}>
                                        <article style={{width: `${item.Percentage}%`}} className={cx("contentShow")}></article>
                                        <article className = {cx("contentHidden")}></article>
                                    </article>
                                </section>
                            )
                        })}
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
                        {DataProject.map((item, index) => {
                            return (
                                <section key={index} className = {cx("itemListContentProject")}  onClick={toggleDesProjectVisibility}>
                                    <img src={item.Image[0]} alt="imgProject"/>
                                    <article className = {cx("contentItem")} >
                                        <h2>{item.Name}</h2>
                                        <p>Design / Marketing</p>
                                    </article>
                                    <section className={cx("desProject")} style={{ display: isDesProjectVisible ? 'flex' : 'none' }}>
                                        <article className = {cx("imageDesProject")}>
                                            <img src={item.Image[1]} alt="imgProject"/>
                                        </article>
                                        <section className = {cx("contentDesProject")}>
                                            <section className = {cx("itemContentDesProject")}>
                                                <h2>Giới thiệu</h2>
                                                <p>{item.Introduce}</p>
                                                <h2>Cộng nghệ</h2>
                                                <ul>
                                                {item.Technology.map((itemTechnology, indexTechnology) => {
                                                    return (
                                                        <li key={indexTechnology}>{itemTechnology}</li>
                                                    )
                                                })}
                                                </ul>
                                                <h2> Đối tượng có trong dự án</h2>
                                                <ul>
                                                {item.ObjectInProject.map((itemObjectInProject, indexObjectInProject) => {
                                                    return (
                                                        <li key={indexObjectInProject}>{itemObjectInProject}</li>
                                                    )
                                                })}
                                                </ul>
                                                <a href={`${item.LinkProject}`}>
                                                    <button>Trải nhiệm ngay</button>
                                                </a>
                                            </section>
                                            <article className = {cx("icontDesProject")}>
                                                <i className="bi bi-x-circle" onClick={hideDesProject}></i>
                                            </article>
                                        </section>
                                    </section>
                                </section>
                            )
                        })}
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
                            <h2>Just say Hello</h2>
                            <form action="" method="post">
                                <input type="text" name="NameUserReceiver" required value={NameUserReceiver} placeholder="Your Name" onChange={(e) => setNameUserReceiver(e.target.value)}/>
                                <input type="email" name="EmailReceiver" required value={EmailReceiver} placeholder="Your Email" onChange={(e) => setEmailReceiver(e.target.value)}/>
                                <input type="text" name="TitleMessage" required value={TitleMessage} placeholder="Your Subject" onChange={(e) => setTitleMessage(e.target.value)}/>
                                <textarea name="Content" id="" cols="30" rows="10" value={Content} placeholder="Your Message" onChange={(e) => setContent(e.target.value)}></textarea>
                                <button type="submit" onClick={fectAPI}>Send Message</button>
                            </form>
                        </section>
                        <section className = {cx("ContactInfro")}>
                            <h2>Contact Info</h2>
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
                                    <h2>Phone</h2>
                                    <p>0976142427</p>
                                </article>
                            </section>
                            <section className = {cx("contentContactInfro")}>
                                <article className = {cx("icontContentContactInfro")}>
                                    <i className="bi bi-geo-alt"></i>
                                </article>
                                <article className = {cx("itemContentContactInfro")}>
                                    <h2>Address</h2>
                                    <p>Tu Hoàn Phương Canh Hà Nội</p>
                                </article>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            </>}
        </main>
 
     );

}

export default Home;