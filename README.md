Cashing proxy
Sample solution for the cashing proxy challenge from roadmap.sh.

This is a simple command-line interface (CLI) application for cashing proxy

project url: https://roadmap.sh/projects/caching-server

Prerequisites

Node.js installed on your system.
Installation
Clone the Repository

git clone --depth=1 https://github.com/Ahmad-Bra/cashing-proxy

# Navigate to the project Directory
cd your project directory

# start project

node index.js <port> <URL>
exam: node index.js 5000 http://dummyjson.com

# fetching data
use any client side to fetch data from your url wich you added recently
you can use ant browser or postman 

exam: http://localhost:5000/products

benfits: if you requeste it will be cashed in the requeste header for 1 minute
if you requeste for the same data it you will be get it from cash not from server wich is reducing fetching time clearly 
