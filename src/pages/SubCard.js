import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Breadcrumb, Card, Row, Col } from "antd";
import main_cards from "../data/main_cards.json";

const { Meta } = Card;

function SubCard() {
  const param = useParams();
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="breadcrumb">
        <img
          onClick={() => navigate(-1)}
          src={require("../assets/icons/back.png")}
          height="12"
          width="auto"
        />

        <p>
          {main_cards
            .filter((x) => x.id === param.id)
            .map((x) => (
              <span>{x.card_title}</span>
            ))}
        </p>
      </div>
      {/* <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/">
            {main_cards
              .filter((x) => x.id === param.id)
              .map((x) => (
                <span>{x.card_title}</span>
              ))}
          </Link>
        </Breadcrumb.Item>
      </Breadcrumb> */}

      {main_cards
        .filter((x) => x.id === param.id)
        .map((x) => {
          return (
            <Row gutter={[16, 16]}>
              {x.sub_cards.map((data) => {
                console.log("hi", data);
                return (
                  <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                    <a href={data.card_link} target="_blank">
                      <Card
                        cover={
                          <img
                            className="card-img"
                            alt={data.card_thumbnail}
                            src={`/${data.card_thumbnail}`}
                          />
                        }
                      >
                        <Meta
                          title={data.card_title}
                          description={data.card_subtitle}
                        />
                      </Card>
                    </a>
                  </Col>
                );
              })}
            </Row>
          );
        })}
    </div>
  );
}

export default SubCard;
