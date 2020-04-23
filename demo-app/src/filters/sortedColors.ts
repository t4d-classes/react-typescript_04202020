import { Color } from '../models/Color';

export const sortColors = (colors: Color[], sortDir: boolean) => {

  const sortedColors = colors.concat();

  sortedColors.sort( (a: Color, b: Color) => {

    if (a.name < b.name) {
      return sortDir ? -1 : 1;
    } else if (a.name > b.name) {
      return sortDir ? 1 : -1;
    } else {
      return 0;
    }

  } );

  return sortedColors;

};