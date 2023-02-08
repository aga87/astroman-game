export const drawTank = (
  ctx: CanvasRenderingContext2D,
  strokeColor = 'grey'
) => {
  // left cylinder
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = strokeColor;
  ctx.moveTo(20, 460);
  ctx.lineTo(20, 140);
  ctx.arc(80, 140, 60, Math.PI, 0);
  ctx.lineTo(140, 460);
  ctx.closePath();
  // right cylinder
  ctx.moveTo(140, 460);
  ctx.lineTo(260, 460);
  ctx.lineTo(260, 140);
  ctx.moveTo(140, 140);
  ctx.arc(200, 140, 60, Math.PI, 0);
  // pipes
  ctx.moveTo(80, 80);
  ctx.lineTo(80, 60);
  ctx.lineTo(200, 60);
  ctx.lineTo(200, 80);
  ctx.moveTo(140, 60);
  ctx.lineTo(140, 20);
  ctx.stroke();
};
