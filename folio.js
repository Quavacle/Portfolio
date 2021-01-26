const panels = document.querySelectorAll('.header')
const secret = document.querySelector('.secret')
const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')
const projectsContainer = document.querySelector('.projects')
let currentProject = 0
const projects = ['asl.html', 'owfa.html', 'habit.html']

function togglePanel() {
  const currentlyActive = document.querySelector('.active') || null
  if (currentlyActive) {
    currentlyActive.classList.remove('active')
  }
  if (currentlyActive === this.parentNode) {
    this.parentNode.classList.remove('active')
  } else {
    this.parentNode.classList.toggle('active')
  }
}

function changeProject(forward = true) {
  if (forward) {
    if (currentProject === projects.length - 1) {
      currentProject = 0
    } else {
      currentProject++
    }
  } else {
    if (currentProject === 0) {
      currentProject = projects.length - 1
    } else {
      currentProject--
    }
  }
  projectsContainer.setAttribute(
    'data',
    './projects/' + projects[currentProject]
  )
}

panels.forEach((panel) => panel.addEventListener('click', togglePanel))

leftButton.addEventListener('click', () => changeProject(false))
rightButton.addEventListener('click', () => changeProject())
