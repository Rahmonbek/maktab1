import {
  faDoorOpen,
  faNewspaper,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import React, { Component } from "react";
import style from "./BoshSahifa.module.css";
import { Button, Container, Navbar, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rasm1 from "../img/vasily-koloda-8CqDvPuo_kI-unsplash.jpg";
import rasm2 from "../img/mira-kireeva-xTq26wLo5do-unsplash.jpg";
import rasm3 from "../img/javier-trueba-iQPr1XkF5F0-unsplash.jpg";
import imgpp from "../img/mirziyoyev-andijan0519-5.jpg";
import gerb from "../img/pngegg.png";
import "../App.css";
import { Link } from "react-router-dom";
import BoshSahifaDavomi from "./BoshSahifaDavomi";
import MaktabTadbirlari from "./MaktabTadbirlari";
import Footer from "./Footer";
import FadeLoader from "react-spinners/FadeLoader";
import { getNews } from "../host/Config";
import { url, user } from "../host/Host";
import axios from "axios";
import YouTube from "react-youtube";
import Global from "../host/Global";
import { Clock } from "./Clock";
import Darsliklar from "./Darsliklar";
import "aos";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
//import { styles } from "material-ui-pickers/wrappers/InlineWrapper";
import { FaTelegram, FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";




export default class BoshSahifa extends Component {
  state = {
    loader: true,
    news: [],
    id: 0,
    school: null,
    clock: "00 : 00 : 00",
    bool: false,
    top: false,
  };
  getSchool = () => {
    axios.get(`${url}/school-by-admin/${Global.user}`).then((res) => {
      this.setState({
        school: res.data,
      });
    });
  };
  getNews = () => {
    getNews()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          // var a = window.location.href.split("/");
          var v = user;

          this.setState({
            news: res.data,
            id: v,
          });
        } else {
          this.setState({
            news: res.data,
            id: window.location.href.slice(
              window.location.href.indexOf("=") + 1
            ),
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleClick() {
    this.setState({ bool: !this.state.bool });
  }
  componentDidMount() {
    this.getNews();
    this.getSchool();
    setTimeout(() => {
      this.setState({ loader: false });
    }, 2000);
    setInterval(() => {
      this.setState({ clock: Clock() });
    }, 1000);

    window.addEventListener("scroll", this.scrollfunction);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollfunction);
  }
  scrollfunction = () => {
    if (window.scrollY > 83) {
      this.setState({ top: true });
    } else {
      this.setState({ top: false });
    }
  };

  render() {
    return (
      <div>
        {this.state.loader ? (
          <div className="loaderT">
            <div className="loader_center">
              <div className="loader_item">
                <FadeLoader
                  color="blue"
                  loading={this.state.loader}
                  size={120}
                />
              </div>
              <h5 style={{ color: "blue" }}>Sayt test rejimida ishlamoqda</h5>
            </div>
          </div>
        ) : (
          <div>
            <div className={style.bosh_logo_item}>
              <div className={style.bosh_image}>
                <div className={style.bosh_image_item}>
                  <Image
                    style={{ width: "100%", height: "100%" }}
                    src={gerb}
                    alt=""
                  />
                </div>
                <p className={style.bosh_p1}>
                  Xorazm viloyati Gurlan tumani 1-ayrim fanlar chuqur
                  o'rganiladigan Davlat ixtisoslashtirilgan maktabi
                </p>
                <p className={style.bosh_p2}>
                  {this.state.school !== null
                    ? this.state.school.school_number + ""
                    : "Maktab raqami "}{" "}
                  - maktab
                </p>
              </div>
              <div className={style.bosh_clock}>{this.state.clock}</div>
            </div>

            <Navbar
              expand="lg"
              className={`${style.navbar_menu} ${
                this.state.top ? style.active : ""
              }`}
            >
              <Container className={style.navbar_container}>
                <div
                  className={style.navar_logo}
                  style={{ justifyContent: "space-between" }}
                >
                  <Link to={`/`}>
                    {this.state.school !== null
                      ? this.state.school.school_number + " - maktab"
                      : "Maktab raqami"}
                  </Link>
                  <Button
                    value="primay"
                    className={style.navbar_button}
                    onClick={this.handleClick.bind(this)}
                  >
                    <AiOutlineMenu />
                  </Button>
                </div>
                {/* <div className={`${style.navbar_items}`}>
                  <Link to={`/`}>
                    <span>Bosh sahifa</span>
                  </Link>
                  <Link to={`/qabul/`}>
                    <span>Qabul</span>
                  </Link>
                  <Link to={`/yangiliklar/`}>
                    <span>Yangiliklar</span>
                  </Link>
                  <Link to={`/hayot/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Maktab hayoti
                    </span>
                  </Link>
                  <Link to={`/alochilar/`}>
                    <span>Maktab a'lochilari</span>
                  </Link>
                  <Link to={`/rahbariyat/`}>
                    <span>Maktab ma'muriyati</span>
                  </Link>
                </div> */}

<div className={`${style.navbar_items}`}>
                  <Link to={`/`}>
                    <span>Bosh sahifa</span>
                  </Link>
                  <Link to={`/#/`}>
                    <span>Qabul</span>
                  </Link>
                  <Link to={`/#/`}>
                    <span>Yangiliklar</span>
                  </Link>
                  <Link to={`/#/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Maktab hayoti
                    </span>
                  </Link>
                  <Link to={`/#/`}>
                    <span>Maktab a'lochilari</span>
                  </Link>
                  <Link to={`/#/`}>
                    <span>Maktab ma'muriyati</span>
                  </Link>
                </div>






              </Container>
            </Navbar>
            {this.state.bool ? (
              <div className={style.navbar_md}>
                <Container>
                  <div className={style.navar_logo_md}>
                    <Link to={`/`}>
                      {this.state.school !== null
                        ? this.state.school.school_number + " - maktab"
                        : "Maktab raqami"}
                    </Link>
                    <Button
                      value="primay"
                      className={style.navbar_button}
                      onClick={this.handleClick.bind(this)}
                    >
                      <AiOutlineClose />
                    </Button>
                  </div>
                </Container>
                <div className={style.navbar_items_md}>
                  <Link to={`/`}>
                    <span>Bosh sahifa</span>
                  </Link>

                  <Link to={`/qabul/`}>
                    <span onClick={this.handleClick.bind(this)}>Qabul</span>
                  </Link>

                  <Link to={`/yangiliklar/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Yangiliklar
                    </span>
                  </Link>
                  <Link to={`/hayot/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Maktab hayoti
                    </span>
                  </Link>
                  <Link to={`/alochilar/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Maktab a'lochilari
                    </span>
                  </Link>
                  <Link to={`/rahbariyat/`}>
                    <span onClick={this.handleClick.bind(this)}>
                      Maktab ma'muriyati
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              className={style.header_types}
              // style={{
              //   backgroundImage: `url('https://preview.colorlib.com/theme/edustage/img/banner/xhome-banner.jpg.pagespeed.ic.HLGqKgJtIp.jpg')`,
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "cover",
              //   backgroundPosition: "center",
              // }}
            >
              <div className={`${style.header_type}`}>
                <div className={style.header_center}>
                  <h2 className={`text-center ${style.typed_item}`}>
                    BIZNING MAKTABIMIZGA XUSH KELIBSIZ
                  </h2>
                  {/* <div className={style.yozuvBtn}> */}
                    {/* <Link to="/hayot/">
                      <Button>Maktab hayoti</Button>
                    </Link> */}
 <Col
                  className={style.boglanish}
                  lg={10}
                  md={10}
                  sm={12}
                  xl={10}
                >
                  <p>
                    <a
                      href={"https://bit.ly/39Qt87k"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTelegram className={style.relations} style={{ color:"#201f51"}}/>
                    </a>
                  </p>
                  <p>
                    <a
                      href={"https://bit.ly/3B2suzE"}
                      target="_blank"
                      
                      rel="noreferrer"
                    >
                      <FiInstagram className={style.relations} style={{ color:"#201f51"}} />
                    </a>
                  </p>
                  <p>
                    <a
                      href={"https://bit.ly/3ojl7QJ"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebook className={style.relations} style={{ color:"#201f51"}} />
                    </a>
                  </p>
                  <p>
                    <a
                      href={"https://bit.ly/39QGOPL"}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <AiFillYoutube className={style.relations} style={{ color:"#201f51"}} />
                    </a>
                  </p>
                </Col>


                  {/* </div> */}
                </div>
              </div>
            </div>

            <div className={style.card_items}>
              <Card style={{ width: "20rem" }} className={style.card_item}>
                <Card.Img
                  variant="top"
                  src={
                    this.state.school !== null
                      ? this.state.school.b_c2 !== null
                        ? this.state.school.b_c2
                        : rasm2
                      : rasm2
                  }
                />

                <Card.Body className={style.card_for_body}>
                  <Link to={`/yangiliklar/`}>
                    <Card.Title className={style.card_title}>
                      <FontAwesomeIcon
                        icon={faNewspaper}
                        className={style.card_icon}
                      />
                      <h3>Yangiliklar</h3>
                    </Card.Title>
                    <Card.Text>
                      {/* <Link to={`/yangiliklar/`}> */}
                      Maktabimizga doir bo'lgan yangiliklardan xabardor bo'ling
                      {/* </Link> */}
                    </Card.Text>
                  </Link>
                </Card.Body>
              </Card>
              <Card style={{ width: "20rem" }} className={style.card_item}>
                <Card.Img
                  variant="top"
                  src={
                    this.state.school !== null
                      ? this.state.school.b_c1 !== null
                        ? this.state.school.b_c1
                        : rasm1
                      : rasm1
                  }
                />
                <Card.Body className={style.card_for_body}>
                  <Link to={`/yutuqlar/`}>
                    <Card.Title className={style.card_title}>
                      <FontAwesomeIcon
                        icon={faSchool}
                        className={style.card_icon}
                      />
                      <h3>Yutuqlarimiz</h3>
                    </Card.Title>
                    <Card.Text>
                      Sizda bizning maktabimiz yutuqlari bilan tanishib chiqish
                      uchun qulay imkoniyat bor
                    </Card.Text>
                  </Link>
                </Card.Body>
              </Card>{" "}
              <Card style={{ width: "20rem" }} className={style.card_item}>
                <Card.Img
                  variant="top"
                  src={
                    this.state.school !== null
                      ? this.state.school.b_c3 !== null
                        ? this.state.school.b_c3
                        : rasm3
                      : rasm3
                  }
                />
                <Card.Body className={style.card_for_body}>
                  {" "}
                  <Link to={`/gallery/`}>
                    <Card.Title className={style.card_title}>
                      <FontAwesomeIcon
                        icon={faDoorOpen}
                        className={style.card_icon}
                      />
                      <h3>Fotolavhalar</h3>
                    </Card.Title>
                    <Card.Text>
                      {/* <Link to={`/gallery/`}> */}
                      Endi siz maktabimizning fotolavhalarini ko'rishingiz
                      mumkin
                      {/* </Link> */}
                    </Card.Text>{" "}
                  </Link>
                </Card.Body>
              </Card>
            </div>

            <Row className={style.containerRow}>
              <Col xl="6" lg="12" md="12">
                <h3 className={style.main_header}>
                  Maktabdagi yangiliklari va o'zgarishlar
                </h3>

                <Row className={style.bosh_yangilik_row}>
                  {this.state.news.map((item) => {
                    return (
                      <Col
                        className={style.row_col_item}
                        key={item.id}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={6}
                      >
                        <Card className={style.card_item}>
                          <Card.Img variant="top" src={item.image} />
                          <Card.Body className={style.card_for_body}>
                            <Card.Title
                              className={style.card_title}
                              style={{ marginBottom: 0 }}
                            >
                              <h5>
                                <i
                                  style={{ marginRight: "10px" }}
                                  className="far fa-calendar-alt"
                                ></i>
                                {item.published_time.substring(0, 10)}
                              </h5>
                            </Card.Title>
                            <Card.Text>{item.title}</Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
                <div className={style.tugmacha}>
                  <Link to={`/yangiliklar/`}>
                    <Button>Barchasini o'qish {">>"}</Button>
                  </Link>
                </div>
              </Col>
              <Col xl="6" lg="12" md="12">
                <div>
                  <h3 className={style.main_header}>Maktabga video sayohat</h3>
                  <YouTube
                    videoId={
                      this.state.school !== null
                        ? this.state.school.video !== null
                          ? this.state.school.video.slice(
                              this.state.school.video.indexOf("youtu.be/") + 9
                            )
                          : ""
                        : ""
                    }
                    opts={{
                      width: "100%",
                      height: "500px",
                      playerVars: {
                        autoplay: 0,
                      },
                    }}
                  />

                  <p className={style.pp}>
                    Maktabimizga virtual sayohat qiling va siz bizning
                    maktabimiz haqida ko'proq ma'lumotga ega bo'ling.
                  </p>
                  <div className={style.imgpp}>
                    <Image className="imgpp" src={imgpp}></Image>
                  </div>
                </div>
              </Col>
            </Row>
            <Darsliklar/>
            <BoshSahifaDavomi />
            <MaktabTadbirlari />
            <Footer />
          </div>
        )}
      </div>
    );
  }
}
