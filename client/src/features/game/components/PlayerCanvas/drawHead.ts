export const drawHead = (
  ctx: CanvasRenderingContext2D,
  strokeColor = 'grey'
) => {
  ctx.beginPath();
  ctx.lineWidth = 6;
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = 'black';
  // pipes
  ctx.moveTo(140, 20);
  ctx.lineTo(140, 80);
  // head
  ctx.moveTo(240, 180);
  ctx.arc(140, 180, 100, 0, 2 * Math.PI);
  ctx.stroke();
  // eyes
  ctx.fillRect(60, 130, 160, 60);
  ctx.strokeRect(60, 130, 160, 60);
  ctx.closePath();
  // smile
  ctx.beginPath();
  ctx.arc(140, 180, 80, 0.25 * Math.PI, 0.75 * Math.PI);
  ctx.stroke();
};
