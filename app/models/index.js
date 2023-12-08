const dbConfig = require("../config/database");
const mongoose = require("mongoose");

module.exports = {
    mongoose,
    url: dbConfig.url,
    contacts: require('./contacts.model')(mongoose)
}