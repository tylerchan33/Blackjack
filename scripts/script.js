const canvas = document.querySelector("canvas")

const ctx = canvas.getContext("2d")



canvas.setAttribute("height", getComputedStyle(canvas)["height"])
canvas.setAttribute("width", getComputedStyle(canvas)["width"])

function drawBox(x, y, width, height, color) {
    let img = new Image()
    img.onload = drawBox
    img.src= "/media/10_of_clubs.png"
    ctx.strokeStyle = color
    ctx.strokeRect(x, y, width, height)
    let pattern = ctx.createPattern(img, "repeat")
    ctx.fillStyle = pattern
}


drawBox((canvas.width / 2) - 100, 10 , 100, 150, "red")
drawBox((canvas.width / 2) + 10, 10 , 100, 150, "red")
drawBox((canvas.width / 2) + 10, canvas.height - 160 , 100, 150, "red")
drawBox((canvas.width / 2) - 100, canvas.height - 160 , 100, 150, "red")


