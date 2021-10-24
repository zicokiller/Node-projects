const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const { get } = require("cheerio/lib/api/traversing");

const PORT = 8000;

const app = express();

const url = "http://www.theguardian.com/uk";
// async function getArticles() {
//   try {
//     const response = await axios(url);
//     const html = response.data;
//     const $ = cheerio.load(html);

//      const articles = [];
//      $(".fc-item__title", html).each(function () {
//        const title = $(this).find("a").attr("href");
//       articles.push({
//          title,
//          url,
//       });
//     });
//     console.log(articles);
     
//   } catch(error) {
//     console.error(error);
//   }
// }
axios(url)
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);

    const articles = [];
    $(".fc-item__title", html).each(function () {
      const title = $(this).find("a").attr("href");
      articles.push({
        title,
        url,
      });
    });
    console.log(articles);
  })
  .catch((err) => console.err(err));

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
