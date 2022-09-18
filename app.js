const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const path = require('path')

var cors = require('cors')

app.use(express.static('public'))

app.use(cors())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  // console.log(req.params.url);
  // Get the req.route.path  and send that data forward to the viewer
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.glb`;
  // let ios_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/${req.params.url}.reality`;
  let src = `/picasso`
  // let ios_src = `/picasso.usdz`;
  let button_text = req.query.text || 'View In Ar'

  let size_1 = req.query.sizes_1
  let size_2 = req.query.sizes_2
  let size_3 = req.query.sizes_3
  let size_4 = req.query.sizes_4
  let size_5 = req.query.sizes_5
  let size_6 = req.query.sizes_6
  let size_7 = req.query.sizes_7

  res.render('index', {
    root: __dirname,
    src: src,
    button_text: button_text,
    size_1: size_1,
    size_2: size_2,
    size_3: size_3,
    size_4: size_4,
    size_5: size_5,
    size_6: size_6,
    size_7: size_7
  })
})
app.get('/:url', (req, res) => {
  // console.log(req.params.url);
  //  Get the req.route.path  and send that data forward to the viewer.
  // let android_src = `https://s3.eu-west-2.amazonaws.com/product.baetes.com/Limitato_Slipin_DarkGreen_${req.params.url}.glb`;
  let srcfolder = req.query.src
  let product = req.query.product
  let button_text = req.query.button_text
  let button_border = req.query.button_border
  let button_backgroundColor = req.query.button_backgroundColor
  let text_color = req.query.text_color
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

  let sizes_used = []
  let colors_used = []
  sizeArray.map((size) => {
    if (size !== undefined) {
      sizes_used.push(size)
    }
  })
  colorArray.map((color) => {
    if (color !== undefined) {
      colors_used.push(color)
    }
  })

  console.log(width)

  res.render('index', {
    root: __dirname,
    Src: srcfolder,
    button_text: button_text,
    sizes_used: sizes_used,
    colors_used: colors_used,
    product: product,
    button_border: button_border,
    button_backgroundColor: button_backgroundColor,
    text_color: text_color,
    width: width,
    height: height,
    fontSize: fontSize,
    iconWidth: iconWidth
  })
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

app.use(express.static(__dirname + '/public'))
