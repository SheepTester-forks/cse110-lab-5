// expose.js

window.addEventListener('DOMContentLoaded', init)

const confetti = new JSConfetti()

function init () {
  const hornSelect = document.getElementById('horn-select')
  const hornImage = document.querySelector('#expose > img')
  const audio = document.querySelector('audio')
  const volumeInput = document.getElementById('volume')
  const volumeImage = document.querySelector('#volume-controls > img')

  hornSelect.addEventListener('change', () => {
    hornImage.src = `./assets/images/${hornSelect.value}.svg`
  })

  function updateVolume () {
    const volume = +volumeInput.value
    audio.volume = volume / 100
    if (volume === 0) {
      volumeImage.src = './assets/icons/volume-level-0.svg'
    } else if (volume < 33) {
      volumeImage.src = './assets/icons/volume-level-1.svg'
    } else if (volume < 67) {
      volumeImage.src = './assets/icons/volume-level-2.svg'
    } else {
      volumeImage.src = './assets/icons/volume-level-3.svg'
    }
  }
  volumeInput.addEventListener('input', updateVolume)
  updateVolume()

  document.querySelector('button').addEventListener('click', () => {
    if (hornSelect.value === 'select') {
      return
    }
    audio.src = `./assets/audio/${hornSelect.value}.mp3`
    audio.currentTime = 0
    audio.play()
    if (hornSelect.value === 'party-horn') {
      confetti.addConfetti()
    }
  })
}
