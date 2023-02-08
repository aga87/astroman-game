import { drawTank } from '../drawTank';

export const drawTankPL2 = (
  ctx: CanvasRenderingContext2D,
  strokeColor = 'grey'
) => {
  drawTank(ctx, strokeColor);
  // tank to head connection (leftwards)
  ctx.lineTo(0, 20);
  ctx.stroke();
};
