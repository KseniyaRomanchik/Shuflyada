// @flow
import constants from 'constants/common';

// type BreakPoints = Array<string | {
//   MIN: number,
//   MAX: number
// }>;

export function defineScreenSize(size: number): string {

  console.log(size)

  return Object.entries(constants.SCREEN_SIZES).find(breakpoint => 
    breakpoint[1].MAX >= size && breakpoint[1].MIN < size
  )[0].toLowerCase();
}
