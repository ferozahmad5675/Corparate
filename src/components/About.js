import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";
import img1 from "../assets/images/img1.jpg";
const About = () => {
  const html = 90;
  const responsive = 80;
  const photoshop = 80;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1}></Image>
          </Col>
          <Col sm={6}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veniam
            mollitia, voluptatem laboriosam velit, laudantium aspernatur quasi
            eius rem veritatis, ut sit illo fugit totam. Voluptatum aperiam
            dignissimos voluptatibus libero. Dolor libero itaque assumenda in!
            Natus animi debitis vero nisi, molestiae nostrum, ea optio delectus,
            et odit sit facilis? Ab aut ipsam sed nam eaque quod dolorum quos
            laudantium repellat. Voluptatibus dolorem vero commodi, delectus,
            unde atque libero sequi consequuntur hic quam esse deleniti ex error
            <div className="progress-block" style={{ marginTop: ".5rem" }}>
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar variant="info" now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>responsive</h4>
              <ProgressBar
                variant="info"
                now={responsive}
                label={`${responsive}%`}
              />
            </div>
            <div className="progress-block">
              <h4>Photoshop</h4>
              <ProgressBar
                variant="info"
                now={photoshop}
                label={`${photoshop}%`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
