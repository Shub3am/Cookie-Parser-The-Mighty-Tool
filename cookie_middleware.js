/* THIS IS THE USEABLE MIDDLEWARE WHICH YOU CAN IMPORT */

const express = require("express");
const App = express();

const cookie_Parser = (req, res, next) => {
  const cookie_parser = (req, res, next) => {
    const raw_cookie = req.headers.cookie;
    //Step 2: Convert Cookies into Useable Json
    const cookies = req.headers.cookie.split("; ");
    //Convert Array of Cookies, into Object
    const parsed_cookies = cookies.map((singleCookie) => {
      let tmp = singleCookie.split("=");
      return { [tmp[0]]: tmp[1] };
    });
    req.headers.cookie = parsed_cookies;
    next();
  };
};

module.exports = cookie_Parser;
