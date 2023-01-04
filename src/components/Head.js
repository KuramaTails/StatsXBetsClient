import React from "react";
import { Helmet } from "react-helmet";

function Head() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <title>Serie A </title>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
      <script src="https://cdn.socket.io/4.5.3/socket.io.js"></script>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      
    </Helmet>
  );
}

export default Head;
