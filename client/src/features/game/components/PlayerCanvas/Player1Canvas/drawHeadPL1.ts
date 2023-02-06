import { drawHead } from '../drawHead';

export const drawHeadPL1 = (
  ctx: CanvasRenderingContext2D,
  strokeColor = 'grey'
) => {
  drawHead(ctx, strokeColor);
  // head to tank connection (leftwards)
  ctx.moveTo(140, 20);
  ctx.lineTo(0, 20);
  ctx.stroke();
};
