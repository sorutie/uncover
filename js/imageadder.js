var gallery= $('.vinyl-gallery')
const images = [
  "img/rock/rock-1.png", "img/rock/rock-2.png", "img/rock/rock-3.png", "img/rock/rock-4.png",
  "img/rock/rock-5.png", "img/rock/rock-6.png", "img/rock/rock-7.png"
]

let i=0;

function placeImage(x,y) {
  const nextImage = images[i]

  const img = document.createElement("img")
  img.setAttribute("src", nextImage)
  img.style.left= x + "px"
  img.style.top= y + "px"
  img.style.transform = "translate(40%,-50%) scale(1) rotate("+ (Math.random() * 20 - 10) + "deg)"

  document.body.appendChild(img)

  i=i+1

  if (i>=images.length)(
    i=0
  )
}

document.getElementById("vinyl-button").onclick = function(event) {
  event.preventDefault()
  placeImage(event.pageX,event.pageY)
}
