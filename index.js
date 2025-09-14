const NodeProxyServer = require("./server");

const args = process.argv.slice(2);
const port = args[0] || 3000;
const proxyUrl = args[1];

if (port && proxyUrl) {
  new NodeProxyServer(port, proxyUrl).start();
}
