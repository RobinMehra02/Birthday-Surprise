
const gallery = document.getElementById("gallery");
for (let i = 1; i <= 10; i++) {
  const img = document.createElement("img");
  img.src = `photo${i}.jpg`;
  img.alt = `Memory ${i}`;
  img.style = "width: 200px; margin: 10px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.2);";
  gallery.appendChild(img);
}
