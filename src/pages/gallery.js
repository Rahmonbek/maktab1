import React, { Component } from "react";
import style from "../css/gallery.module.css";
//import styles from "../css/qabul.module.css";
import { Carousel } from "antd";
import { FadeLoader } from "react-spinners";
import { url, user } from "../host/Host";
import axios from "axios";
import Navbar from "./Navbar";
import { Row, Col, Container } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default class Gallery extends Component {
  state = {
    school: [],
    loader: true,
    images: [],
    smallImages: [],
    photoIndex: 0,
    isOpen: false,
  };
  getSchool = () => {
    var v = user;
    axios
      .get(`${url}/school-by-admin/${v}`)
      .then((res) => {
        this.setState({
          school: res.data,
        });

        this.getPhotos();

        setTimeout(() => {
          this.setState({
            loader: false,
          });
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getPhotos() {
    var images = [];
    var smallImages = [];
    this.state.school !== null
      ? this.state.school.foto !== null
        ? images.push(this.state.school.foto)
        : images.push("rasm")
      : images.push("rasm");

    this.state.school !== null
      ? this.state.school.foto1 !== null
        ? images.push(this.state.school.foto1)
        : images.push("rasm")
      : images.push("rasm");

    this.state.school !== null
      ? this.state.school.foto2 !== null
        ? images.push(this.state.school.foto2)
        : images.push("rasm")
      : images.push("rasm");

    this.state.school !== null
      ? this.state.school.foto3 !== null
        ? images.push(this.state.school.foto3)
        : images.push("rasm")
      : images.push("rasm");

    this.state.school !== null
      ? this.state.school.foto4 !== null
        ? images.push(this.state.school.foto4)
        : images.push("rasm")
      : images.push("rasm");

    this.state.school !== null
      ? this.state.school.foto5 !== null
        ? images.push(this.state.school.foto5)
        : images.push("rasm")
      : images.push("rasm");

    this.state.school !== null
      ? this.state.school.foto6 !== null
        ? images.push(this.state.school.foto6)
        : images.push("rasm")
      : images.push("rasm");

    this.state.school !== null
      ? this.state.school.foto7 !== null
        ? images.push(this.state.school.foto7)
        : images.push("rasm")
      : images.push("rasm");

    smallImages = [...images];

    this.setState({
      images: images,
      smallImages: smallImages,
    });
  }

  componentDidMount() {
    this.getSchool();
  }
  render() {
    const { photoIndex, isOpen, images } = this.state;

    return this.state.loader ? (
      <div className="loaderT">
        <div className="loader_center">
          <div className="loader_item">
            <FadeLoader color="blue" loading={this.state.loader} size={120} />
          </div>
          <h5 style={{ color: "blue" }}>Sayt test rejimida ishlamoqda</h5>
        </div>
      </div>
    ) : (
      <div>
        <Navbar />
        <Carousel autoplay effect="fade">
          {this.state.images !== null
            ? this.state.images.map((item, id) => {
                return (
                  <div key={id} className={style.headerItems}>
                    <div
                      style={{ backgroundImage: `url(${item})` }}
                      className={style.headerItem}
                    ></div>
                    <div className={style.headerItem1}></div>
                  </div>
                );
              })
            : ""}
        </Carousel>

        <Container>
          <Row>
            {images.map((item) => (
              <Col key={item} lg={4} md={6} sm={12} className={style.ColItem}>
                <div
                  className={style.colItem}
                  onClick={() => this.setState({ isOpen: !this.state.isOpen })}
                  style={{ backgroundImage: `url(${item})` }}
                ></div>
              </Col>
            ))}
          </Row>
        </Container>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            enableZoom={true}
          />
        )}
      </div>
    );
  }
}
