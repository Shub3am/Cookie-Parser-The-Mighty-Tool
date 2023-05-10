/*
As I was reading through the documentation on cookies, I couldn't help but wonder why we couldn't use them directly and why we needed cookies-parser. This inspired me to create my own cookie-parser implementation to gain a better understanding of the process.

Most of the repositories on my GitHub account are personal implementations of various concepts and tools that fascinate me. This particular project takes cookies from a request and converts them into a usable format, making them easier to work with.

*/

const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Made My Own Cookie Parser
/* So Cookie resides in Headers of Request */
//Cookie is stored in String

//Step 1: Extract Cookie

app.use("/", (req, res) => {
  const raw_cookie = req.headers.cookie;
  //Step 2: Convert Cookies into Useable Json
  const cookies = req.headers.cookie.split("; ");
  //Convert Array of Cookies, into Object
  const parsed_cookies = cookies.map((singleCookie) => {
    let tmp = singleCookie.split("=");
    return { [tmp[0]]: tmp[1] };
  });
  //Finally Sent Response as JSON
  res.json(parsed_cookies);
});

app.listen(3000, () => {
  console.log("Website Running on PORT:3000");
});
