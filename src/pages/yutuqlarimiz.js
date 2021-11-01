import Aos from "aos";
import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "../css/yutuqlarimiz.module.css";
import { url, idMaktab } from "../host/Host";
import wins from "../img/wins.jpg";
import FadeLoader from "react-spinners/FadeLoader";

export default class Yutuqlarimiz extends Component {
  state = {
    loader: true,
    qabul: [],
    id: 0,
    school: null,
    students: null,
  };

  getSchool = () => {
    axios.get(`${url}/achiviment/${idMaktab}`).then((res) => {
      this.setState({
        school: res.data,
      });
    });
    axios.get(`${url}/pupil/`).then((res) => {
      this.setState({
        students: res.data,
        loader: false,
      });
      console.log(res.data);
    });
  };

  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
    this.getSchool();
  }
  echoPupil = (id) => {
    var f = "";
    if (this.state.students !== null) {
      this.state.students.map((item) =>
        item.id === id ? (f = item.full_name) : ""
      );
    }
    return f;
  };
  funy = (x) => {
    var mas = this.state.arr;
    mas[x] = !this.state.arr[x];
    if (this.state.arr[x]) {
      let a = document.querySelectorAll("p")[x];
      a.style.opacity = "0";
      a.style.height = "0";
    } else {
      let a = document.querySelectorAll("p")[x];
      a.style.opacity = "1";
      a.style.height = "200px";
    }
    this.setState({
      arr: mas,
    });
  };

  render() {
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
        <div className={style.header}>
          <h1 className={style.sarlavha}>Bizning yutuqlarimiz</h1>
          <div className={style.line}></div>
        </div>
        <Container>
          <Row>
            {this.state.school !== null
              ? this.state.school.map((item, index) => {
                  return (
                    <Col
                      key={index}
                      sm={12}
                      md={6}
                      lg={4}
                      className={style.row_item}
                    >
                      <div className={style.karta}>
                        <div
                          className={style.col_item_image}
                          style={{
                            backgroundImage: `url(${
                              item.image !== null ? item.image : wins
                            })`,
                          }}
                        ></div>
                        <div className={style.col_item_text}>
                          <h3>{item.competition}</h3>
                          {item.pupils.map((item1) => {
                            return <h5>{this.echoPupil(item1)}</h5>;
                          })}
                          <div className={style.pop}>
                            <h3>{item.result}</h3>
                            <p>{item.text}</p>
                          </div>
                        </div>{" "}
                      </div>
                    </Col>
                  );
                })
              : ""}
          </Row>
        </Container>
      </div>
    );
  }
}
