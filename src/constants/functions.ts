export function gridColNumber(breakpointName: string): number {
  switch (breakpointName) {
    case 'xs':
      return 12
    case 'sm':
      return 6
    case 'md':
      return 4
    case 'lg':
      return 3
    case 'xl':
      return 2
    default:
      return 1
  }
}