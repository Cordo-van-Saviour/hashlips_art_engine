require("dotenv").config();

(exports.handler = async (event) => {
  const AWS = require("aws-sdk");
  AWS.config.logger = console.log;
  const s3 = new AWS.S3({
    region: "us-east-1",
    apiVersion: "2006-03-01",
    params: {
      Bucket: process.env.S3_BUCKET,
    },
  });

  global.s3 = s3;

  const { startCreating, buildSetup, copyToTempDir } = require("./src/main.js");

  (async () => {
    await copyToTempDir();
    // buildSetup();
    // startCreating();
  })();
})();
