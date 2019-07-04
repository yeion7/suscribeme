import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Title from "../components/Title";
import Message from "../components/Message";
import Social from "../components/Social";
import suscribeme from "../images/suscribeme.png";
import "../styles/main.css";

const IndexPage = ({ data }) => {
  const {
    title,
    message,
    color,
    titleFont,
    messageFont,
    social
  } = data.site.siteMetadata;
  return (
    <div
      id="background"
      style={{
        backgroundColor: "#ea955a",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="description" content={title + "&middot" + message} />
        <title>{title}</title>
        <link
          rel="stylesheet"
          href={
            "https://fonts.googleapis.com/css?family=" +
            titleFont +
            "|" +
            messageFont
          }
        />
      </Helmet>
      <img src={suscribeme} alt="" />
      <Message message={message} messageFont={messageFont} color={color} />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        message
        pattern
        color
        titleFont
        messageFont
      }
    }
  }
`;
