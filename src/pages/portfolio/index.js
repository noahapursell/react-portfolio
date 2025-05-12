import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  const allTags = Array.from(
    new Set(dataportfolio.flatMap((p) => p.tags || []))
  ).sort();

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearTags = () => setSelectedTags([]);

  const filteredProjects =
    selectedTags.length === 0
      ? dataportfolio
      : dataportfolio.filter((p) =>
        selectedTags.every((tag) => p.tags?.includes(tag))
      );

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <div className="mb-4 tag-filters">
          <Button
            variant={selectedTags.length === 0 ? "dark" : "outline-dark"}
            onClick={clearTags}
            className="me-2 mb-2"
          >
            All
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? "dark" : "outline-dark"}
              onClick={() => toggleTag(tag)}
              className="me-2 mb-2"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="mb-5 po_items_ho">
          {filteredProjects.map((data, i) => (
            <a
              key={i}
              href={data.link}
              className="po_item"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={
                  data.img.startsWith("http")
                    ? data.img
                    : `${process.env.PUBLIC_URL}${data.img}`
                }
                alt={data.name}
                className="portfolio-img"
              />
              <h5 className="portfolio-title">{data.title}</h5>
              <div className="content">
                <p>{data.description}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
