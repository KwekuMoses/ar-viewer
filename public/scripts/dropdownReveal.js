let dropdown = document.getElementById('dropdown')

const revealDropDown = () => {
  dropdown.classList.contains('active')
    ? dropdown.classList.remove('active')
    : dropdown.classList.add('active')
}

document.getElementById('thebutton').addEventListener('click', revealDropDown)
