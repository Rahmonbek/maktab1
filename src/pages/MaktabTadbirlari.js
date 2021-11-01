import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


// import axios from 'axios'
// import {url} from '../host/Host'
import {message} from 'antd'




import style from "./MaktabTadbirlari.module.css";
import school from "../img/gerb.jpg";
import her2 from "../img/h2.jpg";
import her3 from "../img/h3.jpg";
import her4 from "../img/h4.jpg";
import her5 from "../img/h5.png";
import "./form.css";
import her6 from "../img/h6.png";
import uzorami from "../img/uzorami.jpg";
import OnlineMaktab from "../img/Online-Maktab.jpg";
import OnlineMaktab3 from "../img/Online-Maktab3.jpg";
import {
  Clusterer,
  GeolocationControl,
  Map,
  Placemark,
  RouteButton,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import axios from "axios";
import { url, user } from "../host/Host";
import {
  faClock,
  faMapMarkerAlt,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { getEvents } from "../host/Config";
import Global from "../host/Global";
export default class MaktabTadbirlari extends Component {
  state = {
    events: [],
    id: 0,
    number: [1, 2, 3],
    school: "",
  };

  getEvents = () => {
    getEvents()
      .then((res) => {
        if (window.location.href.indexOf("id=") === -1) {
          this.setState({
            events: res.data,
          });
        } else {
          this.setState({
            events: res.data,
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
  getSchool = () => {
    var v = user;
    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        this.setState({
          school: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  componentDidMount() {
    this.getEvents();
    this.getSchool();
  }
  sendMurojat=()=>{
   
    var name=document.getElementById('name').value
    var phone=document.getElementById('phone').value
    var text=document.getElementById('text').value
    var config={
      name,
      phone,
      text,
      school:Global.schoolId
    }
    
    axios.post(`${url}/murojaat/`, config).then(res=>{message.success('Murojaatingiz yuborildi');
   name=document.getElementById('name').value=""
   phone=document.getElementById('phone').value=""
   text=document.getElementById('text').value=""}).catch(err=>{message.success('Murojaatingiz yuborilmadi')})
  }

  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 7,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
      },
    };

    return (
      <div>
        <div className={style.container}>
          <h2 className={style.main_header}>Maktab tadbirlari</h2>
          <Row>
            {this.state.events.map((item, key) => {
              return key < 3 ? (
                <Col
                  xs={12}
                  sm={12}
                  md={4}
                  lg={4}
                  style={{ marginTop: "15px" }}
                >
                  <div className={style.flipBox}>
                    <div className={style.flipBoxInner}>
                      <div
                        className={style.flipBoxFront}
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className={style.filpBoxFrontItem}>
                          <p>{item.title}</p>
                        </div>
                      </div>
                      <div
                        className={style.flipBoxBack}
                        style={{ backgroundImage: `url(${uzorami})` }}
                      >
                        <Row className={style.map}>
                          <Col xs={10} sm={10} md={10} lg={10}>
                            <h3>{item.title}</h3>
                            <div className={style.mapItem}>
                              <div className={style.innerMap}>
                                <FontAwesomeIcon
                                  className={style.redIcon1}
                                  icon={faCalendarAlt}
                                />
                                <span>{item.date}</span>
                              </div>
                              <div className={style.innerMap}>
                                <FontAwesomeIcon
                                  className={style.redIcon1}
                                  icon={faClock}
                                />
                                <span>{item.time}</span>
                              </div>
                              <div className={style.innerMap}>
                                <FontAwesomeIcon
                                  className={style.redIcon1}
                                  icon={faMapMarkerAlt}
                                />
                                <span>{item.address}</span>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Col>
              ) : (
                ""
              );
            })}
          </Row>
          <Link to={`/tadbirlar/`} className={style.barchasiniKurish}>
            Hamma tadbirlarni ko'rish &gt;
          </Link>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <h1 className={style.main_header}> Bizning hamkorlarimiz</h1>

          <div className="sliderHomiy" style={{ backgroundColor: "white" }}>
            <Carousel
              responsive={responsive}
              autoPlay={this.props.deviceType !== "mobile" ? true : false}
              autoPlaySpeed={3000}
              infinite={true}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a
                    href="https://president.uz/oz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={school} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a
                    href="https://www.gov.uz/uz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={her2} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasining Hukumat portali</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a
                    href="https://lex.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={her3} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi qonun hujjatlari milliy bazasi</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a
                    href="https://my.gov.uz/oz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={her4} />
                  </a>
                </div>
                <p>Interaktiv davlat xizmatlarining Yagona portali</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a
                    href="https://www.uzedu.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={her5} />
                  </a>
                </div>
                <p>O'zbekiston Respublikasi xalq ta'limi vazirligi</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  alingItems: "center",
                }}
              >
                <div className="toolpat" style={{ backgroundColor: "white" }}>
                  <a
                    href="https://ittower.uz/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src={her6} />
                  </a>
                </div>
                <p>IT Tower firmasi </p>
              </div>
            </Carousel>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          <Row
            style={{
              backgroundColor: "white",
              paddingTop: "40px",
              maxWidth: "100% !important",
            }}
          >
            <Col lg={6} md={12} sm={12}>
              <h1 className={style.main_header}>Bizning manzilimiz</h1>
              <div className={style.mapsr}>
                <br />
                <YMaps key={"uz_UZ"} query={{ lang: "uz_UZ" }}>
                  <Map
                    width="100%"
                    height="400px"
                    state={{
                      center: [41.552486, 60.62089],
                      zoom: 13,
                    }}
                  >
                    <Clusterer
                      options={{
                        groupByCoordinates: false,
                      }}
                    >
                      <Placemark
                        key={-1}
                        geometry={[41.552486, 60.62089]}
                        options={{
                          iconLayout: "default#image",
                        }}
                        properties={{
                          hintContent: `<h6><b className="personStyle">${this.state.school.school_number} - maktab</b></h6>`,
                        }}
                        modules={["geoObject.addon.hint"]}
                      />
                    </Clusterer>

                    <GeolocationControl options={{ float: "left" }} />

                    <RouteButton options={{ float: "right" }} />
                    <ZoomControl options={{ float: "left" }} />
                  </Map>
                </YMaps>
                <br />
                <div className={style.manzil_image}>
                  <Image src={OnlineMaktab} style={{ width: "50%" }} />
                  <Image src={OnlineMaktab3} style={{ width: "50%" }} />
                </div>
                <br />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} className="fgr">
              <h1 className={style.main_header}>Murojat qilish</h1>
              <div className="formFER">
                <div className="container">
                  <div className="brand-logo"></div>
                  <div className="inputs">

                  <form>
                      <label>F.I.O.</label>
                      <input type="text" id="name" placeholder="Ism Familiya Sharifi" />
                      <label>Telefon raqam</label>
                      <input type="text" id="phone" placeholder="+998 99 999 99 99" />
                      <label>Murojaat</label>
                      <textarea id="text" placeholder="Murojaat matni..."></textarea>
                      <button type="button" onClick={this.sendMurojat}>Yuborish</button>
                    </form>
                    {/* <form>
                      <label>F.I.O.</label>
                      <input type="text" placeholder="Ism Familiya Otchistva" />
                      <label>Telefon raqam</label>
                      <input type="text" placeholder="+998 99 999 99 99" />
                      <label>Murojat</label>
                      <textarea placeholder="Murojat matni..."></textarea>
                      <button type="submit">Yuborish</button>
                    </form> */}

                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
