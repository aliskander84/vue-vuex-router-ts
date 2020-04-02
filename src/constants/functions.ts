export function gridColNumber(breakpointName: string): number {
  switch (breakpointName) {
    case 'xs':
      console.log('xs')
      return 12
    case 'sm':
      console.log('sm')
      return 6
    case 'md':
      console.log('md')
      return 4
    case 'lg':
      console.log('lg')
      return 3
    case 'xl':
      console.log('xl')
      return 2
    default:
      console.log('default')
      return 1
  }
}