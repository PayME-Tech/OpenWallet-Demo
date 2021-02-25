import { SCREEN_SIZE } from "../configs/variables.config"

const BASE_WIDTH = 375
const LIMIT_RATIO = 1.2

export const RF = (designSize, factor = 0.5) => {
  const scaleRatio = SCREEN_SIZE.WIDTH / BASE_WIDTH

  if (scaleRatio >= 1 / LIMIT_RATIO && scaleRatio <= LIMIT_RATIO) {
    return Math.round(designSize * scaleRatio)
  }
  return Math.round(designSize * (scaleRatio - Math.abs(scaleRatio - 1) * factor))
}
