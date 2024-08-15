const evilBtn = document.getElementById("evil");
const OFFSET = 100;

evilBtn.addEventListener("click", () => {
  alert("Good job!!");
  window.close();
});
document.addEventListener("mousemove", (e) => {
  const x = e.pageX;
  const y = e.pageY;

  const btn = evilBtn.getBoundingClientRect();
  const horizontal = distanceCenter(btn.x, x, btn.width);
  const vertical = distanceCenter(btn.y, y, btn.height);
  const hOffset = btn.width / 2 + OFFSET;
  const vOffset = btn.height / 2 + OFFSET;
  if (Math.abs(horizontal) <= hOffset && Math.abs(vertical) <= vOffset) {
    setButtonPosition(
      btn.x + (hOffset / horizontal) * 10,
      btn.y + (vOffset / vertical) * 10
    );
  }
});
function setButtonPosition(left, top) {
  const window = document.body.getBoundingClientRect();
  const btnbox = evilBtn.getBoundingClientRect();
  if (distanceCenter(left, window.left, btnbox.width) < 0) {
    left = window.right - btnbox.width - OFFSET;
  }

  if (distanceCenter(left, window.right, btnbox.width) > 0) {
    left = window.left + OFFSET;
  }
  if (distanceCenter(top, window.top, btnbox.height) < 0) {
    top = window.bottom - btnbox.height - OFFSET;
  }
  if (distanceCenter(top, window.bottom, btnbox.height) > 0) {
    top = window.top + OFFSET;
  }

  evilBtn.style.left = `${left}px`;
  evilBtn.style.top = `${top}px`;
}
function distanceCenter(boxPosition, mousePosition, boxSize) {
  return boxPosition - mousePosition + boxSize / 2;
}
