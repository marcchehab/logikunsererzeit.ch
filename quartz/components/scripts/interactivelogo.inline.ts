let solved = 0
let showreallogo = false
const logoWrapper = document.querySelectorAll(".site-logo")[0]
if (localStorage.getItem("logoriddle") == "firstsolved") {
  document.documentElement.classList.add("logosolved")
  showreallogo = true
}
const partycolors = [
  "#F44336",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#E91E63",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
  "#00BCD4",
  "#009688",
  "#4CAF50",
  "#8BC34A",
  "#CDDC39",
  "#FFEB3B",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
  "#9C27B0",
  "#673AB7",
  "#3F51B5",
  "#2196F3",
  "#03A9F4",
]

function fadeInRealLogo() {
  document.documentElement.classList.add("logosolved")
  document.documentElement.classList.remove("logoparty")
  localStorage.setItem("logoriddle", "firstsolved")
}
function party() {
  if (solved < 20) {
    logoWrapper.querySelectorAll("#interactive > g").forEach((el) => {
      const color = partycolors[Math.floor(Math.random() * partycolors.length)]
      el.querySelectorAll("path").forEach((el) => (el.style.fill = color))
    })
    solved += 1
    setTimeout(party, 100)
  } else {
    setTimeout(fadeInRealLogo, 2000)
  }
}

function toggleme(elem: HTMLElement) {
  if (!solved) {
    let interactivekeys = logoWrapper.querySelectorAll("#interactive > g")
    if (elem.id == "toggle-l") {
      elem.parentElement?.classList.toggle("active")
      document.getElementById("z")?.classList.toggle("active")
    } else if (elem.id == "toggle-u") {
      elem.parentElement?.classList.toggle("active")
      document.getElementById("l")?.classList.toggle("active")
    } else if (elem.id == "toggle-z") {
      elem.parentElement?.classList.toggle("active")
      document.getElementById("l")?.classList.toggle("active")
    }
    interactivekeys = logoWrapper.querySelectorAll("#interactive > g")
    solved = Number(Array.from(interactivekeys).every((el) => el.classList.contains("active")))
    if (solved) {
      document.documentElement.classList.add("logoparty")

      const src =
        "https://cdn.jsdelivr.net/npm/tsparticles-confetti@2.9.3/tsparticles.confetti.bundle.min.js"
      let script = document.createElement("script")
      script.src = src
      script.onload = async () => {
        var canvas = document
          .getElementsByClassName("site-logo")[0]
          .appendChild(document.createElement("canvas"))
        canvas.confetti = canvas.confetti || (await confetti.create(canvas, { resize: true }))
        canvas.confetti({
          particleCount: 300,
          ticks: 400,
          scalar: 0.5,
          spread: 60,
          origin: { y: 0.7 },
        })
      }
      document.documentElement.firstChild?.appendChild(script)
      party()
    }
  }
}

function initlogo() {
  if (!showreallogo) {
    document.getElementById("toggle-l")?.addEventListener("click", function () {
      toggleme(this)
    })
    document.getElementById("toggle-u")?.addEventListener("click", function () {
      toggleme(this)
    })
    document.getElementById("toggle-z")?.addEventListener("click", function () {
      toggleme(this)
    })
    document.getElementById("l")?.classList.add("active")
  }
}

initlogo()
