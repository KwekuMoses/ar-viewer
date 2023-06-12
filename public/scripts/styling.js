// style the button
let thebutton = document.getElementById('thebutton')
let btntext = document.getElementById('btntext')
let icon = document.getElementById('theIcon')
let color = thebutton.getAttribute('background-color')
thebutton.style.backgroundColor = color

// style the border
let border = thebutton.getAttribute('button-border')
thebutton.style.border = border

// style the text-color
let textColor = thebutton.getAttribute('text-color')
thebutton.style.color = textColor

// style the width
let button_width = thebutton.getAttribute('width')
thebutton.style.width = button_width

// style the height
let button_height = thebutton.getAttribute('height')
thebutton.style.height = button_height

// style the fontsize
let fontSize = btntext.getAttribute('fontSize')
btntext.style.fontSize = fontSize

// style the iconWidth
let iconWidth = theIcon.getAttribute('iconWidth')
icon.style.width = iconWidth
