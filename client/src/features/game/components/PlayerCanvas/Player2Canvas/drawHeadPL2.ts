import { drawHead } from '../drawHead';

export const drawHeadPL2 = (
  ctx: CanvasRenderingContext2D,
  strokeColor = 'grey'
) => {
  drawHead(ctx, strokeColor);
  // head to tank connection (rightwards)
  ctx.moveTo(140, 20);
  ctx.lineTo(280, 20);
  ctx.stroke();
};
