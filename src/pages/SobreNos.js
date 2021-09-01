import React from "react";
import {Parallax} from "react-parallax";
import happyDoc from "../imagens/HappyDoc&pacient_2.jpg"
import logo_principal from "../imagens/logo_clinica_principal.png";
import Footer from "../components/footer2";
import "./Font.css";
import {Col, Container, Row} from "react-grid-system";
import coronacuidado from "../imagens/corona_cuidado.JPG";
import alerta_covid from"../imagens/Atendimento_Suspenso.png";
import info from "../imagens/INFORMATIVO.jpg";
import mascara from "../imagens/mascara.JPG";
import boletim from "../imagens/boletim.png";
import Carousel from "react-simply-carousel";

const style = {
  margin: "1%",
};

class Info extends React.Component {
  constructor() {
    super();
  }
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <div>
        <div>
          <Parallax
            bgImage={happyDoc}
            bgImageAlt="clinica"
            strength={100}
          >
            <img
              src={logo_principal}
              align="right"
              style={{ padding: "100px", paddingTop: "80px" }}
            />
            <div style={{ height: "600px", width: "565px" }} />
          </Parallax>
        </div>

        <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <Container justify="center">
            <Row justify="center">
              <Col sm={1} align="right" className="Box">
                <img src="https://i.ibb.co/CPkvkj2/calendar.png" />
              </Col>
              <Col sm={4}>
                <img
                  src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SG9yw6FyaW8gZGUgYXRlbmRpbWVudG8/geliat-extralight.png"
                  style={{ paddingTop: "40px", paddingBottom: "10px" }}
                />
                <header className="Texto-1" border="20px">
                  Segunda - Domingo: 8h às 17h<br></br>
                </header>
              </Col>
              <Col sm={1} className="Box">
                <img src="https://i.ibb.co/s3RccYV/phone.png" />
              </Col>
              <Col sm={4}>
                <br></br>
                <img
                  src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGVsZWZvbmVzIGRlIENvbnRhdG8/geliat-extralight.png"
                  style={{ paddingTop: "20px", paddingBottom: "10px" }}
                />
                <header className="Texto-1" border="20px">
                  (31) 34555555 | (31)999999999
                </header>
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ padding: "10px" }}>
          <Container className="Especial">
            <img src="https://see.fontimg.com/api/renderfont4/8Mzm0/eyJyIjoiZnMiLCJoIjo0NywidyI6MTAwMCwiZnMiOjQ3LCJmZ2MiOiIjRkZGRkZGIiwiYmdjIjoiIzhBMDAwMCIsInQiOjF9/U3VhIHNhw7pkZSBlbSBib2FzIG3Do29zLg/sambosa.png" />
          </Container>
        </div>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <img
            src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjo0MiwidyI6MTAwMCwiZnMiOjQyLCJmZ2MiOiIjODQxMDEwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/U29icmUgTsOzcw/geliat-extralight.png"
            align="left"
            style={{ padding: "170px", paddingTop: "190px" }}
          ></img>
          <br></br>
          <div className="Font">
            <header className="Font-header">
              A clínica médica é um dos ramos mais amplos da Medicina. Geralmente, os médicos especializados em clínica médica são o primeiro contato de um paciente que possui, por exemplo, uma queixa de dor, mas que não sabe como dar continuidade ao seu tratamento ou a que especialidade médica recorrer.
              É por conta desse caráter polivalente que os profissionais de clínica médica devem ter uma formação mais abrangente, com um pouco de conhecimento em cada uma das áreas da Medicina, em uma integração de cuidados.
              Por meio dos relatos dos sintomas dos pacientes, da realização de exames clínicos como raios-X e exames de sangue, e da avaliação médica, os profissionais de clínica médica conseguem realizar um diagnóstico, iniciar um tratamento e até mesmo orientar o paciente para uma segunda especialidade médica, que vai aprofundar os cuidados e a assistência nos casos de maior complexidade.
              Quando um paciente não possui queixas de dor, mas quer realizar uma avaliação completa de seu estado de saúde, o profissional de clínica médica também é a especialidade a ser procurada. Esse médico orientará o paciente a fazer uma série de exames para ter um checkup completo e verificar seu atual estado de saúde. A atuação na prevenção de doenças e condições médicas é um dos pilares do trabalho da clínica médica.
            </header>
          </div>
        </div>
        <div style={{ padding: "50px" }}>
          <Container>
            <Row justify="center" align="center">
              <Col sm={4}>
                <img src="https://i.ibb.co/fMcdrVG/missao.jpg" />
                <br></br>
                <img
                  src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjozOSwidyI6MTAwMCwiZnMiOjM5LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TWlzc8Ojbw/geliat-extralight.png"
                  style={{ paddingLeft: "0px" }}
                />
                <header className="Texto" border="50px">
                  Promover a saúde prestando um atendimento de qualidade e
                  humanizado, com respeito ao indivíduo em todos os aspectos.
                </header>
              </Col>
              <Col sm={4}>
                <img src="https://i.ibb.co/d5Ch3Zm/valores.jpg" />
                <br></br>
                <img
                  src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjozOSwidyI6MTAwMCwiZnMiOjM5LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VmFsb3Jlcw/geliat-extralight.png"
                  style={{ paddingTop: "10px" }}
                />
                <header className="Texto" border="50px">
                  Ética, competência, humanização, eficiência, qualidade,
                  transparência, compromisso, respeito e confiança.
                </header>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <div>
            <img
                src={alerta_covid} width={1000}
            />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Info;
