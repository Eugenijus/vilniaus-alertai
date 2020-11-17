import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

const HeadDiv = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

HeadDiv.propTypes = {
  title: PropTypes.string.isRequired
};

export default HeadDiv;
