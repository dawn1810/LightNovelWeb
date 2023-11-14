const express = require("express");

const path = require("path");
/**
 *
 * @param {*} app - express app
 */
const configViewEngine = (app) => {
  const parentDirectory = path.resolve(__dirname, "..", "..");
  app.use(express.static(parentDirectory));
  app.set("view engine", "ejs");
  app.set("views", path.join(parentDirectory, "view"));
};

module.exports = configViewEngine;
