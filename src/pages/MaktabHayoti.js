import React, { Component } from "react";
import styles from "../css/maktabHayoti.module.css";
import "../css/maktahayotiAli.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../css/video.css";
import "bootstrap/dist/css/bootstrap.min.css";
import school1 from "../img/school1.jpg";
import school2 from "../img/school2.jpg";
import school4 from "../img/school4.jpg";
import school5 from "../img/school5.jpg";
import school7 from "../img/school7.jpg";
import school8 from "../img/school8.jpg";
import school9 from "../img/school9.jpg";
import school10 from "../img/school10.jpg";
import school11 from "../img/school11.jpg";
import school12 from "../img/school12.jpg";
import school13 from "../img/school13.jpg";
import Images2 from "../img/priscilla-du-preez-XkKCui44iM0-unsplash.jpg";
import { BiStop } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import { FadeLoader } from "react-spinners";
import axios from "axios";
import "../css/maktabhayoti.css";
import video from "../Video/teacher.mp4";
import { url, user } from "../host/Host";
export default class MaktabHayoti extends Component {
  state = {
    loading: true,
    data: [],
  };
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    var v = user;
    axios.get(`${url}/school-by-admin/${v}`).then((res) => {
      console.log(res.user);
      this.setState({ data: res.data });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 2000);
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {this.state.loading === true ? (
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
          <>
            <header>
              <div class="overlay"></div>
              <video
                playsinline="playsinline"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source src={video} type="video/mp4" />
              </video>

              <div class="container h-100">
                <div class="d-flex h-100 text-center align-items-center">
                  <div class="w-100 text-white">
                    <h1
                      style={{
                        fontFamily: "font",
                        fontSize: "71px",
                        fontWeight: "1000",
                        color: "#dfbe04",
                        marginTop: "150px",
                      }}
                    >
                      Maktab hayoti
                    </h1>
                  </div>
                </div>
              </div>
            </header>

            <Container fluid className={styles.secondContainer} id="1">
              <Row>
                <Col lg={1} className={styles.iconPath}>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "200px", left: "35px" }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "450px", left: "35px" }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "700px", left: "35px" }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "950px", left: "35px" }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1200px",
                      left: "35px",
                    }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1450px",
                      left: "35px",
                    }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1700px",
                      left: "35px",
                    }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                </Col>
                <Col lg={11}>
                  <div className={styles.secondMain}>
                    <h1 className={styles.secondHeading} data-aos="zoom-in">
                      Tadbirlar va qadriyatlar
                    </h1>
                  </div>
                  <Container fluid>
                    <Row>
                      <Col xs={12} sm={12} md={12} lg={4}>
                        <div className="container12">
                          <img
                            src={
                              data !== null && data.m_h_navruz !== null
                                ? data.m_h_navruz
                                : school1
                            }
                            alt=""
                          />
                          {/* <span>Navro'z bayrami</span> */}
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={4}>
                        <div className="container12">
                          <img
                            src={
                              data !== null && data.m_h_mustaqillik !== null
                                ? data.m_h_mustaqillik
                                : school2
                            }
                            alt=""
                          />

                          {/* <span>Mustaqillik kuni</span> */}
                        </div>
                      </Col>
                      <Col xs={12} sm={12} md={12} lg={4}>
                        <div className="container12">
                          <img
                            src={
                              data !== null && data.m_h_bitiruv !== null
                                ? data.m_h_bitiruv
                                : school4
                            }
                            alt=""
                          />

                          {/* <span>Bitiruv tadbiri</span> */}
                        </div>
                      </Col>

                      <Col lg={12}>
                        <p className={styles.secondText} data-aos="zoom-in-up">
                          {data !== null && data.m_h_tq !== null
                            ? data.m_h_tq
                            : `Uzoqlarda, tog'lar so'zining orqasida, Vokaliya va
                        Consonantia mamlakatlaridan uzoqroqda ko'r matnlar
                        yashaydi. Ular alohida yashashadi Alohida ular Semantika
                        qirg'og'idagi Bookmarksgroveda, katta til okeanida
                        yashaydilar. Duden nomli kichik daryo ularning joylari
                        bo'ylab oqadi va uni zarur regelialiya bilan ta'minlaydi.
                        Bu paradisematik mamlakat, unda jumlaning qovurilgan
                        qismlari og'zingizga uchadi. Hattoki qudratli ishora ham
                        ko'r-ko'rona matnlarni nazorat qila olmaydi, bu deyarli
                        nostografik hayot.`}
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </Col>

                <Col lg={1} className={styles.iconPath}>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "200px", left: "35px" }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "450px", left: "35px" }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "700px", left: "35px" }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{ position: "absolute", top: "950px", left: "35px" }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1200px",
                      left: "35px",
                    }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                  <div
                    data-aos="fade-down"
                    aos-duration="2000"
                    style={{
                      position: "absolute",
                      top: "1450px",
                      left: "35px",
                    }}
                  >
                    <BiStop
                      style={{ fontSize: "40px", color: "rgb(231, 198, 10)" }}
                    />
                  </div>
                </Col>

                <Col>
                  <div className={styles.avtobus}>
                    <div className={styles.avtobustext}>
                      {" "}
                      <h1>Transport xizmati</h1>
                      <p>
                        {data.m_h_t_t !== null && data !== null
                          ? data.m_h_t_t
                          : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud. U erda ko'r-ko'rona matnlar
                            yashaydi. Alohida ular Semantika qirg'og'idagi
                            Bookmarksgroveda, katta til okeanida yashaydilar.
                            Duden nomli kichik daryo ularning joylari bo'ylab
                            oqadi va uni zarur regelialiya bilan ta'minlaydi. Bu
                            paradizmatik. Bu jumlaning qovurilgan qismlari uchib
                            ketadigan jannat matikasi mamlakati.`}
                      </p>
                    </div>
                    <div className={styles.avtobusimg}>
                      <Image
                        src={
                          data !== null && data.m_h_t !== null
                            ? data.m_h_t
                            : school5
                        }
                        className={styles.secondImage}
                        data-aos="zoom-in-up"
                      />
                    </div>
                  </div>
                </Col>

                <Col lg={11}>
                  <div className={styles.mashq}>
                    <div className={styles.mashq1}>
                      <Image
                        src={Images2}
                        style={{ boxShadow: "0 20px 30px rgba(0, 0, 0, 0.5)" }}
                      />
                    </div>
                    <div className={styles.mashq2}>
                      <h2>
                        {data.m_h_k_h !== null && data !== null
                          ? data.m_h_k_h
                          : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud.`}
                      </h2>
                      <h4>
                        {data.m_h_k_t !== null && data !== null
                          ? data.m_h_k_t
                          : `Talabalar shaharchasida sayohat qilishning ko'plab
                            variantlari mavjud. U erda ko'r-ko'rona matnlar
                            yashaydi.`}
                      </h4>
                    </div>
                  </div>
                </Col>
                <Col lg={11} md={11} sm={11} className={styles.flip}>
                  <Row className="my-5">
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      style={{ marginTop: "15px" }}
                    >
                      <div className={styles.flipBox}>
                        <div className={styles.flipBoxInner}>
                          <div
                            style={{
                              backgroundImage: `url('${
                                data.m_h_oshxona !== null && data !== null
                                  ? data.m_h_oshxona
                                  : school7
                              }')`,
                            }}
                            className={styles.flipBoxFront}
                          >
                            <div className={styles.hayotiy}>
                              <h3>Maktab oshxonasi</h3>
                            </div>
                          </div>
                          <div className={styles.flipBoxBack}>
                            <h3>Maktab oshxonasi</h3>
                            <p>
                              {" "}
                              {data.m_h_oshxona_t !== null && data !== null
                                ? data.m_h_oshxona_t
                                : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      style={{ marginTop: "15px" }}
                    >
                      <div className={styles.flipBox}>
                        <div className={styles.flipBoxInner}>
                          <div
                            style={{
                              backgroundImage: `url('${
                                data.m_h_sport !== null && data !== null
                                  ? data.m_h_sport
                                  : school8
                              }')`,
                            }}
                            className={styles.flipBoxFront}
                          >
                            <div className={styles.hayotiy}>
                              <h3>Sport mashg'ulotlari</h3>
                            </div>
                          </div>
                          <div className={styles.flipBoxBack}>
                            <h3>Sport mashg'ulotlari</h3>
                            <p>
                              {" "}
                              {data.m_h_sport_t !== null && data !== null
                                ? data.m_h_sport_t
                                : `
                            Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      style={{ marginTop: "15px" }}
                    >
                      <div className={styles.flipBox}>
                        <div className={styles.flipBoxInner}>
                          <div
                            style={{
                              backgroundImage: `url('${
                                data.m_h_musiqa !== null && data !== null
                                  ? data.m_h_musiqa
                                  : school9
                              }')`,
                            }}
                            className={styles.flipBoxFront}
                          >
                            <div className={styles.hayotiy}>
                              <h3>San'at & madaniyat</h3>
                            </div>
                          </div>
                          <div className={styles.flipBoxBack}>
                            <h3>San'at & madaniyat</h3>
                            <p>
                              {" "}
                              {data.m_h_musiqa_t !== null && data !== null
                                ? data.m_h_musiqa_t
                                : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                            katta til okeanida yashaydilar. Dudenmut nomli kichik
                            daryo.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      style={{ marginTop: "15px" }}
                    >
                      <div className={styles.flipBox}>
                        <div className={styles.flipBoxInner}>
                          <div
                            style={{
                              backgroundImage: `url('${
                                data.m_h_axborot !== null && data !== null
                                  ? data.m_h_axborot
                                  : school10
                              }')`,
                            }}
                            className={styles.flipBoxFront}
                          >
                            <div className={styles.hayotiy}>
                              <h3>Axborot texnologiyalari</h3>
                            </div>
                          </div>
                          <div className={styles.flipBoxBack}>
                            <h3>Axborot texnologiyalari</h3>
                            <p>
                              {" "}
                              {data.m_h_axborot_t !== null && data !== null
                                ? data.m_h_axborot_t
                                : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      style={{ marginTop: "15px" }}
                    >
                      <div className={styles.flipBox}>
                        <div className={styles.flipBoxInner}>
                          <div
                            style={{
                              backgroundImage: `url('${
                                data.m_h_xavfsizlik !== null && data !== null
                                  ? data.m_h_xavfsizlik
                                  : school11
                              }')`,
                            }}
                            className={styles.flipBoxFront}
                          >
                            <div className={styles.hayotiy}>
                              <h3>Xavfsizlik va qo'riqlash</h3>
                            </div>
                          </div>
                          <div className={styles.flipBoxBack}>
                            <h3>Xavfsizlik va qo'riqlash</h3>
                            <p>
                              {data.m_h_xavfsizlik_t !== null && data !== null
                                ? data.m_h_xavfsizlik_t
                                : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xs={12}
                      sm={12}
                      md={4}
                      lg={4}
                      style={{ marginTop: "15px" }}
                    >
                      <div className={styles.flipBox}>
                        <div className={styles.flipBoxInner}>
                          <div
                            style={{
                              backgroundImage: `url('${
                                data.m_h_tibbiyot !== null && data !== null
                                  ? data.m_h_tibbiyot
                                  : school12
                              }')`,
                            }}
                            className={styles.flipBoxFront}
                          >
                            <div className={styles.hayotiy}>
                              <h3>Sog'lik va salomatlik</h3>
                            </div>
                          </div>
                          <div className={styles.flipBoxBack}>
                            <h3>Sog'lik va salomatlik</h3>
                            <p>
                              {data.m_h_tibbiyot_t !== null && data !== null
                                ? data.m_h_tibbiyot_t
                                : `Alohida ular Semantika qirg'og'idagi Bookmarksgroveda,
                          katta til okeanida yashaydilar. Dudenmut nomli kichik
                          daryo.`}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col lg={11}>
                  <div className={styles.prezident}>
                    <div className={styles.prezident1}>
                      <Image
                        src={
                          data.m_h_o_r !== null && data !== null
                            ? data.m_h_o_r
                            : school13
                        }
                      />
                    </div>
                    <div className={styles.prezident2}>
                      <p>
                        {data.m_h_o !== null && data !== null
                          ? data.m_h_o
                          : `Bizning maqsadimiz moliyaviy xizmatlar sohasining
                          markazida bo'lishdir, chunki korxonalar bo'ylab biznes
                          kengaymoqda.`}
                      </p>
                      <h1>
                        {data.m_h_o_t !== null && data !== null
                          ? data.m_h_o_t
                          : "Alisa"}
                      </h1>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </div>
    );
  }
}
