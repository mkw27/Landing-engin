export function slider(images, imgEl) {
  let i = 0;

  function render() {
    imgEl.src = images[i];
  }

  document.getElementById("next").onclick = () => {
    i = (i + 1) % images.length;
    render();
  };

  document.getElementById("prev").onclick = () => {
    i = (i - 1 + images.length) % images.length;
    render();
  };

  render();
}
