function updateExcalidrawTheme() {
  for (const elem of document.querySelectorAll("img.excalidraw")) {
    const theme = document.documentElement.getAttribute("saved-theme")
    const src = elem.getAttribute("src")
    const newSrc = src ? src.replace(/\.(dark|light)\.svg/, `.${theme}.svg`) : ""
    elem.setAttribute("src", newSrc)
  }
}

document.addEventListener("nav", async () => {
  updateExcalidrawTheme()
})

document.addEventListener("themechange", (e) => {
  updateExcalidrawTheme()
})
