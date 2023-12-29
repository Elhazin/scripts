const mono = require('mongoose')
const short = require('shortid')
const fs = require('fs')
const path = require('path')
const shorturl = new mono.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: short.generate
    },
    clicks: {
        type: Number,
        required: true,
        default: 0
    }
})

module.exports = mono.model('shorten', shorturl);
