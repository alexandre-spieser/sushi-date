import { readFileSync } from "fs";
import { join } from "path";

export default (content: string) => `
<html lang="en">
    <head>
        <title>Sushi Date <3 (TypeScript +  Go)</title>
        <meta charset="utf8">
        <meta name="viewport" content="user-scalable=0, initial-scale=1, width=device-width">
        <style>
            ${readFileSync(join(__dirname, "style.css"), "utf8")}
        </style>
    </head>
    <body>
    <main>
    <div>
      ${content}
      <br />      
      <br />
      <small>This project demonstrates how to use TypeScript with <span style="color: white;font-weight: bold;">\`now\`</span>. <a target="_blank" href="https://zeit.co/blog/scalable-apps-with-typescript-and-now-2">Read more about how it works</a> or <a href="https://github.com/zeit/now-examples/tree/master/typescript">get the source code</a> and play.</small>
      </main>
      <br />
    </div>
    <br />
    <div>
    <h3>The date according to Go is:</h3>
    <p class="date js-date">Loading date...</p>
    </div>
    <script>
      function main() {
        return fetch("/go-api/date.go").then(function (response) {
          return response.text();
        }).then(function (date) {
          document.querySelector(".js-date").textContent = date
        });
      }

      main();
    </script>
</html>`;
