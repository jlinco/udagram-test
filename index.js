const dotenv = require('dotenv').config()
const envValues = dotenv.parsed

console.log('Hi, this is ' + envValues.NAME + ' ' + envValues.SURNAME)