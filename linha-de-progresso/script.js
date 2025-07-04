const progresso = document.getElementById('progresso')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circulos = document.querySelectorAll('.circulo')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circulos.length) {
    currentActive = circulos.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update() {
  circulos.forEach((circulo, idx) => {
    if (idx < currentActive) {
      circulo.classList.add('ativo')
    } else {
      circulo.classList.remove('ativo')
    }
  })

  const ativos = document.querySelectorAll('.ativo')

  progresso.style.width = (ativos.length - 1) / (circulos.length - 1) * 100 + '%'

  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circulos.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
