import { drawTank } from '../drawTank';

export const drawTankPL1 = (
  ctx: CanvasRenderingContext2D,
  strokeColor = 'grey'
) => {
  drawTank(ctx, strokeColor);
  // tank to head connection (rightwards)
  ctx.lineTo(280, 20);
  ctx.stroke();
};
