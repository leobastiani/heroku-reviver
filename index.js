const fs = require("fs");
const fetch = require("node-fetch");

function fn() {
  try {
    const settings = JSON.parse(fs.readFileSync("./heroku-reviver.json"));
    for (const site of settings.sites) {
      console.log("site:", site);
      fetch(site);
    }
  } catch (e) {
    console.error(e);
  }
}

setInterval(fn, 5 * 60 * 1000);

fn();
