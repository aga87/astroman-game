const drawFullOxygen = (ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.fillStyle = '#158fe6';
  // left cylinder
  ctx.rect(40, 120, 80, 320);
  // right cylinder
  ctx.rect(160, 120, 80, 320);
  ctx.fill();
};

export const drawOxygen = (ctx: CanvasRenderingContext2D, chances: number) => {
  if (chances === 8) {
    drawFullOxygen(ctx);
  } else if (chances === 7) {
    ctx.clearRect(160, 120, 80, 80);
  } else if (chances === 6) {
    ctx.clearRect(160, 200, 80, 80);
  } else if (chances === 5) {
    ctx.clearRect(160, 280, 80, 80);
  } else if (chances === 4) {
    ctx.clearRect(160, 360, 80, 80);
  } else if (chances === 3) {
    ctx.clearRect(40, 120, 80, 80);
  } else if (chances === 2) {
    ctx.clearRect(40, 200, 80, 80);
  } else if (chances === 1) {
    ctx.clearRect(40, 280, 80, 80);
  } else if (chances === 0) {
    ctx.clearRect(40, 360, 80, 80);
  } else {
    drawFullOxygen(ctx);
  }
};
