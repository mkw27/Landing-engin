export function modal(btn, modal, frame, url) {
  let lock = false;

  btn.onclick = () => {
    if (lock) return;

    lock = true;

    frame.src = url;
    modal.classList.remove("hidden");
  };

  document.getElementById("close").onclick = () => {
    modal.classList.add("hidden");
    frame.src = "";
    lock = false;
  };
}
