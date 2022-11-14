const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const dayjs = require('dayjs')
var mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://kweku:mongodb@cluster.8uxr5.mongodb.net/test'
)
const path = require('path')
var visit = require('./models/visit.js')
var bodyParser = require('body-parser')

var cors = require('cors')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use(cors())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // console.log(req.params.url);
  //  Get the req.route.path  and send that data forward to the viewer.
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  let catalog = req.query.catalog

  let product = req.query.product

  let iphoneSrc = req.query.product + '.usdz'
  let androidSrc = req.query.product + '.glb'

  let buttonText = req.query.buttonText
  let buttonBorder = req.query.buttonBorder
  let buttonBackgroundColor = req.query.buttonBackgroundColor
  let textColor = req.query.textColor
  let width = req.query.width
  let height = req.query.height
  let fontSize = req.query.fontSize
  let iconWidth = req.query.iconWidth

  let colorArray = [
    req.query.color1,
    req.query.color2,
    req.query.color3,
    req.query.color4
  ]
  let sizeArray = [
    req.query.size1,
    req.query.size2,
    req.query.size3,
    req.query.size4,
    req.query.size5,
    req.query.size6,
    req.query.size7
  ]

  let sizes = []
  let colors = []
  sizeArray.map((size) => {
    if (size !== undefined) {
      sizes.push(size)
    }
  })
  colorArray.map((color) => {
    if (color !== undefined) {
      colors.push(color)
    }
  })

  res.render('index', {
    root: __dirname,
    catalog: catalog,
    buttonText: buttonText,
    sizes: sizes,
    colors: colors,
    product: product,
    buttonBorder: buttonBorder,
    buttonBackgroundColor: buttonBackgroundColor,
    textColor: textColor,
    width: width,
    height: height,
    fontSize: fontSize,
    iconWidth: iconWidth,
    iphoneSrc: iphoneSrc,
    androidSrc: androidSrc
  })
})

app.post('/test', jsonParser, (req, res) => {
  let city = req.body.city
  let country = req.body.country
  let product = req.body.product
  let userData = req.body.userData

  var utc = require('dayjs/plugin/utc')
  var timezone = require('dayjs/plugin/timezone') // dependent on utc plugin
  dayjs.extend(utc)
  dayjs.extend(timezone)
  var date = Number(dayjs().tz('Europe/Stockholm').format('YYYYMDHHms'))
  var year = Number(dayjs().tz('Europe/Stockholm').format('YYYY'))
  var month = Number(dayjs().tz('Europe/Stockholm').format('M'))
  var day = Number(dayjs().tz('Europe/Stockholm').format('D'))
  var hour = Number(dayjs().tz('Europe/Stockholm').format('HH'))
  var minute = Number(dayjs().tz('Europe/Stockholm').format('m'))
  var second = Number(dayjs().tz('Europe/Stockholm').format('ss'))

  let Visit = new visit({
    customer: req.body.catalog,
    userData: userData,
    product: product,
    date: date,
    year: year,
    month: month,
    day: day,
    hour: hour,
    minute: minute,
    second: second,
    country: country,
    city: city,
    readDate:
      year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
  })
  Visit.save((err, data) => {
    // if (err) {
    //   res.status(400).json({
    //     errorMessage: err,
    //     status: false
    //   })
    // } else {
    //   res.status(200).json({
    //     status: true,
    //     title: 'Registered Successfully.'
    //   })
    // }
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

app.use(express.static(__dirname + '/public'))
