const svg = document.getElementById("canvas");
const colorPicker = document.getElementById("colorPicker");
const undoBtn = document.getElementById("undoBtn");

let drawing = false;
let currentPath;
let paths = [];

svg.addEventListener("mousedown", (e) => {
  drawing = true;

  currentPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  currentPath.setAttribute("stroke", colorPicker.value);
  currentPath.setAttribute("stroke-width", "3");
  currentPath.setAttribute("fill", "none");

  const point = getPoint(e);
  currentPath.setAttribute("d", `M ${point.x} ${point.y}`);

  svg.appendChild(currentPath);
  paths.push(currentPath);
});

svg.addEventListener("mousemove", (e) => {
  if (!drawing) return;

  const point = getPoint(e);
  const d = currentPath.getAttribute("d");
  currentPath.setAttribute("d", `${d} L ${point.x} ${point.y}`);
});

svg.addEventListener("mouseup", () => {
  drawing = false;
});

svg.addEventListener("mouseleave", () => {
  drawing = false;
});

function getPoint(e) {
  const rect = svg.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };
}

undoBtn.addEventListener("click", () => {
  if (paths.length > 0) {
    const lastPath = paths.pop();
    svg.removeChild(lastPath);
  }
});
