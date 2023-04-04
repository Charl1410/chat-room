const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const path = require('path');

app.use(cors()); // Add cors middleware
app.use(express.json());