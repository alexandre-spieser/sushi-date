import { readFileSync } from "fs";
import { join } from "path";

export default (content: string) => `
<html lang="en">
    <head>
        <title>Sushi Date <3 (TypeScript + Go)</title>
        <meta charset="utf8">
        <meta name="viewport" content="user-scalable=0, initial-scale=1, width=device-width">
        <style>
            ${readFileSync(join(__dirname, "style.css"), "utf8")}
        </style>
    </head>
    <body>
    <main>
    <h1>Sushi Date <3 (TypeScript + Go)</h1>
    <div>
      <h3>The SUSHI (TS Front End + Sushi API):</h3>
      ${content}
      <br />      
      <br />
      </main>
      <br />
    </div>
    <br />
    <div>
    <h3>The DATE (according to Go-Api):</h3>
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
