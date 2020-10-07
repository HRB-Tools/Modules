// Unpacks two-dimensional array into html table

export const tm = (csv: any[][]) => {
  let htmlDoc = csv
    .map(row => `<tr>${row.map(value => `<td>${value}</td>`).join('')}</tr>`)
    .join('\n');

  return `<table>${htmlDoc}</table>`;
};
