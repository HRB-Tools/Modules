// CSV Splitter -> returns a two dimensional array

export const resultArray = (csvString) => csvString
  .split(/\r?\n/)
  .map(row => row.split(';');


export const csvArray = (arrayOfArrays) => arrayOfArrays
  .map(rowElements => rowElemements.join(';'))
  .join('\n');
