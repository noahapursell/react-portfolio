import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, projectDescriptions, dataportfolio } from "../../content_option";

export const PortfolioPage = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();

  const content = projectDescriptions[projectName];
  const basicInfo = dataportfolio.find((p) => p.name === projectName);

  useEffect(() => {
    if (!projectName || !content || !basicInfo) {
      navigate("/portfolio", { replace: true });
    }
  }, [projectName, content, basicInfo, navigate]);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="12">
            {content &&
              content.map((block, index) => {
                switch (block.type) {
                  case "heading":
                    return (
                      <div key={index} className="mb-3">
                        <h1 className="display-4">{block.content}</h1>
                        {basicInfo?.date && (
                          <p className="text-muted" style={{ marginTop: "-0.75rem" }}>
                            <strong>{basicInfo.date}</strong>
                          </p>
                        )}
                      </div>
                    );
                  case "sub-heading":
                    return (
                      <h3 key={index} className="mb-3 text-muted">
                        {block.content}
                      </h3>
                    );
                  case "summary":
                    return (
                      <div key={index} className="mb-4">
                        <img
                          src={basicInfo.img}
                          alt={projectName}
                          style={{ maxWidth: "100%", borderRadius: "12px", marginBottom: "1rem" }}
                        />
                        <p>{basicInfo.description}</p>

                        {basicInfo.tags && basicInfo.tags.length > 0 && (
                          <div style={{ marginTop: "0.75rem" }}>
                            <strong>Tags:</strong>{" "}
                            {basicInfo.tags.map((tag, i) => (
                              <span
                                key={i}
                                style={{
                                  display: "inline-block",
                                  margin: "0.2rem 0.4rem 0.2rem 0",
                                  padding: "0.2rem 0.5rem",
                                  backgroundColor: "#e0e0e0",
                                  color: "#333",
                                  borderRadius: "8px",
                                  fontSize: "0.85rem"
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    );

                  case "text":
                    return <p key={index}>{block.content}</p>;
                  case "link":
                    return (
                      <p key={index}>
                        <a href={block.link} target="_blank" rel="noopener noreferrer">
                          {block.description}
                        </a>
                      </p>
                    );
                  case "image":
                    return (
                      <div key={index} style={{ marginBottom: "1rem" }}>
                        <img
                          src={block.link}
                          alt={block.caption || "Project image"}
                          style={{ maxWidth: "100%", borderRadius: "12px" }}
                        />
                        {block.caption && <p><em>{block.caption}</em></p>}
                      </div>
                    );
                  case "video":
                    const isYouTube = block.link.includes("youtube.com") || block.link.includes("youtu.be");
                    const embedLink = block.link.includes("watch?v=")
                      ? block.link.replace("watch?v=", "embed/")
                      : block.link.replace("youtu.be/", "www.youtube.com/embed/");

                    return (
                      <div key={index} style={{ marginBottom: "1rem" }}>
                        {isYouTube ? (
                          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                            <iframe
                              src={embedLink}
                              title="YouTube video"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                borderRadius: "12px",
                                border: "none"
                              }}
                            ></iframe>
                          </div>
                        ) : (
                          <video controls style={{ maxWidth: "100%", borderRadius: "12px" }}>
                            <source
                              src={block.link.startsWith("http") ? block.link : `${process.env.PUBLIC_URL}${block.link}`}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>
                        )}
                        {block.description && <p><em>{block.description}</em></p>}
                      </div>
                    );

                  default:
                    return null;
                }

              })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
