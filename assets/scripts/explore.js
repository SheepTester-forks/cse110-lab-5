// explore.js

const voicesReady = new Promise(resolve => {
  // Attach listener in case voices are loaded before DOMContentLoaded. Assumes
  // voices won't change during a page session.
  window.speechSynthesis.addEventListener(
    'voiceschanged',
    () => {
      resolve(window.speechSynthesis.getVoices())
    },
    { once: true }
  )
})

window.addEventListener('DOMContentLoaded', init)

async function init () {
  const voiceSelect = document.getElementById('voice-select')
  const input = document.getElementById('text-to-speak')
  const face = document.querySelector('#explore > img')

  const voices = await voicesReady

  voiceSelect.append(
    ...voices.map((voice, i) =>
      Object.assign(document.createElement('option'), {
        textContent: `${voice.name} (${voice.lang})`,
        value: i
      })
    )
  )

  document.querySelector('button').addEventListener('click', () => {
    if (voiceSelect.value === 'select') {
      return
    }
    const utterance = new SpeechSynthesisUtterance(input.value)
    utterance.voice = voices[voiceSelect.value]
    window.speechSynthesis.speak(utterance)

    utterance.addEventListener('start', () => {
      face.src = './assets/images/smiling-open.png'
    })
    utterance.addEventListener('end', () => {
      face.src = './assets/images/smiling.png'
    })
    utterance.addEventListener('error', () => {
      face.src = './assets/images/smiling.png'
    })
  })
}
