let contentsBounds = document.querySelector('body');
let width = 800;
let height = 500;
let ratio = contentsBounds.width / width;
width *= ratio;
height *= ratio;

let minX = localStorage.getItem('min-x');
let minY = localStorage.getItem('min-y');
let maxX = localStorage.getItem('max-x');
let maxY = localStorage.getItem('max-y');
let equation = localStorage.getItem('equation')

functionPlot({
  target: "#root",
  width,
  height,
  xAxis: { domain: [Number(minX),Number(maxX)]},
  yAxis: { domain: [Number(minX), Number(maxY)] },
  grid: true,
  data: [
    {
      fn: equation
    }
  ]
});
