export interface IProgressCircle {
  percent: number
  color?: string
}

export interface IProgressBar extends IProgressCircle {
  maxWidth: string
}
