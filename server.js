const NodeCache = require("node-cache");
const axios = require("axios");
const express = require("express");
const app = express();

class NodeProxyServer {
  constructor(port, proxyUrl) {
    this.port = port;
    this.proxyUrl = proxyUrl;
    this.cash = new NodeCache({ stdTTL: 60 }); // Cache TTL set to 1 minute
  }

  async fetchData(req, res) {
    const cashedData = this.cash.get(this.proxyUrl);
    if (cashedData) {
      return res.setHeader("X-Cashe", "HIT").status(200).json(cashedData.data);
    }
    try {
      const response = await axios.get(`${this.proxyUrl}${req.originalUrl}`);
      const data = response.data;
      this.cash.set(this.proxyUrl, data);
      return res
        .setHeader("X-Cashe", "MISS")
        .status(response.status)
        .send(data);
    } catch (error) {
      console.log("error during getting data", error);
      res.status(404).send(error);
    }
  }
  start() {
    // Register all routes before starting the server
    app.get(/.*/, (req, res) => {
      this.fetchData(req, res);
    });
    app.listen(this.port, () =>
      console.log(`Cashing proxy server running on port: ${this.port}`)
    );
  }
  clear() {
    this.cash.flushAll();
  }
}
module.exports = NodeProxyServer;
