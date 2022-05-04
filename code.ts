let colorPalette = [
  {name: 'red-900', color: '#470000'},
  {name: 'red-800', color: '#750007'},
  {name: 'red-700', color: '#A30814'},
  {name: 'red-600', color: '#D01B28'},
  {name: 'red-500', color: '#e93542'},
  {name: 'red-400', color: '#FB4C58'},
  {name: 'red-300', color: '#FF6874'},
  {name: 'red-200', color: '#FF8B94'},
  {name: 'red-100', color: '#FFB8BA'},
  {name: 'red-050', color: '#FFE6E6'},
  {name: 'orange-900', color: '#472200'},
  {name: 'orange-800', color: '#753900'},
  {name: 'orange-700', color: '#A35200'},
  {name: 'orange-600', color: '#D16B12'},
  {name: 'orange-500', color: '#fb862d'},
  {name: 'orange-400', color: '#FF9A43'},
  {name: 'orange-300', color: '#FFAE60'},
  {name: 'orange-200', color: '#FFC48A'},
  {name: 'orange-100', color: '#FFDAB8'},
  {name: 'orange-050', color: '#FFF2E6'},
  {name: 'yellow-900', color: '#473D00'},
  {name: 'yellow-800', color: '#756000'},
  {name: 'yellow-700', color: '#A38000'},
  {name: 'yellow-600', color: '#D19E0E'},
  {name: 'yellow-500', color: '#ffb829'},
  {name: 'yellow-400', color: '#FFCA3F'},
  {name: 'yellow-300', color: '#FFDA5C'},
  {name: 'yellow-200', color: '#FFE88A'},
  {name: 'yellow-100', color: '#FFF3B8'},
  {name: 'yellow-050', color: '#FFFBE6'},
  {name: 'grass-900', color: '#1A4700'},
  {name: 'grass-800', color: '#2A6D00'},
  {name: 'grass-700', color: '#3B8B00'},
  {name: 'grass-600', color: '#4DA300'},
  {name: 'grass-500', color: '#5eb40e'},
  {name: 'grass-400', color: '#7BCE2E'},
  {name: 'grass-300', color: '#97E35C'},
  {name: 'grass-200', color: '#B4F28A'},
  {name: 'grass-100', color: '#D1FCB8'},
  {name: 'grass-050', color: '#EFFFE6'},
  {name: 'green-900', color: '#003F09'},
  {name: 'green-800', color: '#005F11'},
  {name: 'green-700', color: '#00791B'},
  {name: 'green-600', color: '#008D28'},
  {name: 'green-500', color: '#039b36'},
  {name: 'green-400', color: '#2EB956'},
  {name: 'green-300', color: '#5CD178'},
  {name: 'green-200', color: '#8AE59C'},
  {name: 'green-100', color: '#B8F3C2'},
  {name: 'green-050', color: '#E6FCE9'},
  {name: 'teal-900', color: '#004747'},
  {name: 'teal-800', color: '#007575'},
  {name: 'teal-700', color: '#009CA2'},
  {name: 'teal-600', color: '#0AB8BF'},
  {name: 'teal-500', color: '#20ced5'},
  {name: 'teal-400', color: '#3AE4EB'},
  {name: 'teal-300', color: '#5CF4FA'},
  {name: 'teal-200', color: '#8AFEFF'},
  {name: 'teal-100', color: '#B8FFFF'},
  {name: 'teal-050', color: '#E6FFFF'},
  {name: 'sky-900', color: '#003E47'},
  {name: 'sky-800', color: '#006075'},
  {name: 'sky-700', color: '#007FA3'},
  {name: 'sky-600', color: '#0099D1'},
  {name: 'sky-500', color: '#05b0fa'},
  {name: 'sky-400', color: '#2EC6FF'},
  {name: 'sky-300', color: '#5CD8FF'},
  {name: 'sky-200', color: '#8AE7FF'},
  {name: 'sky-100', color: '#B8F3FF'},
  {name: 'sky-050', color: '#E6FCFF'},
  {name: 'blue-900', color: '#002247'},
  {name: 'blue-800', color: '#003975'},
  {name: 'blue-700', color: '#0150A3'},
  {name: 'blue-600', color: '#1369D1'},
  {name: 'blue-500', color: '#2d82eb'},
  {name: 'blue-400', color: '#4497FD'},
  {name: 'blue-300', color: '#62ADFF'},
  {name: 'blue-200', color: '#8AC3FF'},
  {name: 'blue-100', color: '#B8DAFF'},
  {name: 'blue-050', color: '#E6F2FF'},
  {name: 'violet-900', color: '#1E1347'},
  {name: 'violet-800', color: '#352675'},
  {name: 'violet-700', color: '#503DA3'},
  {name: 'violet-600', color: '#6E5AD1'},
  {name: 'violet-500', color: '#8f7bf4'},
  {name: 'violet-400', color: '#9D89FF'},
  {name: 'violet-300', color: '#AE9CFF'},
  {name: 'violet-200', color: '#C1B3FF'},
  {name: 'violet-100', color: '#D7CDFF'},
  {name: 'violet-050', color: '#F0ECFF'},
  {name: 'purple-900', color: '#320E47'},
  {name: 'purple-800', color: '#531D75'},
  {name: 'purple-700', color: '#7333A3'},
  {name: 'purple-600', color: '#934ED1'},
  {name: 'purple-500', color: '#b36ef7'},
  {name: 'purple-400', color: '#C17EFF'},
  {name: 'purple-300', color: '#CF92FF'},
  {name: 'purple-200', color: '#DCABFF'},
  {name: 'purple-100', color: '#EAC8FF'},
  {name: 'purple-050', color: '#F7EAFF'},
  {name: 'pink-900', color: '#470E44'},
  {name: 'pink-800', color: '#751D6C'},
  {name: 'pink-700', color: '#A33291'},
  {name: 'pink-600', color: '#D04DB3'},
  {name: 'pink-500', color: '#ef6cd2'},
  {name: 'pink-400', color: '#FC7CE0'},
  {name: 'pink-300', color: '#FF91EB'},
  {name: 'pink-200', color: '#FFAAF4'},
  {name: 'pink-100', color: '#FFC8FA'},
  {name: 'pink-050', color: '#FFEAFE'},
  {name: 'gray-900', color: '#2F2F2F'},
  {name: 'gray-800', color: '#4D4D4D'},
  {name: 'gray-700', color: '#6C6C6C'},
  {name: 'gray-600', color: '#8A8A8A'},
  {name: 'gray-500', color: '#a8a8a8'},
  {name: 'gray-400', color: '#B8B8B8'},
  {name: 'gray-300', color: '#C7C7C7'},
  {name: 'gray-200', color: '#D7D7D7'},
  {name: 'gray-100', color: '#E7E7E7'},
  {name: 'gray-050', color: '#F6F6F6'},
  {name: 'slate-900', color: '#282931'},
  {name: 'slate-800', color: '#43444F'},
  {name: 'slate-700', color: '#5E606D'},
  {name: 'slate-600', color: '#7A7C8A'},
  {name: 'slate-500', color: '#9698a6'},
  {name: 'slate-400', color: '#A8AAB7'},
  {name: 'slate-300', color: '#BABCC8'},
  {name: 'slate-200', color: '#CDCED8'},
  {name: 'slate-100', color: '#E0E1E8'},
  {name: 'slate-050', color: '#F4F4F7'},
  {name: 'mist-900', color: '#273237'},
  {name: 'mist-800', color: '#42525A'},
  {name: 'mist-700', color: '#5E717A'},
  {name: 'mist-600', color: '#7B909A'},
  {name: 'mist-500', color: '#99aeb8'},
  {name: 'mist-400', color: '#A9BDC7'},
  {name: 'mist-300', color: '#BACDD5'},
  {name: 'mist-200', color: '#CCDBE2'},
  {name: 'mist-100', color: '#DFEAEE'},
  {name: 'mist-050', color: '#F3F7F9'},
];


function hexToRGB(hex: string) {

  const r = (parseInt(hex.slice(1, 3), 16) / 255);
  const g = (parseInt(hex.slice(3, 5), 16) / 255);
  const b = (parseInt(hex.slice(5, 7), 16) / 255);

  const result = {
    r: r,
    g: g,
    b: b
  }

  return result;
}

function createFigmaStyle(color){
  const style = figma.createPaintStyle() 
  style.name = color.name
  style.description = color.color;
  
  const colorRGB: RGB = hexToRGB(color.color)  

  // style.type = "PAINT"
  const paint: SolidPaint = {
      type: "SOLID",
      color: colorRGB
  }

  style.paints = [paint]
}

colorPalette.forEach(color => createFigmaStyle(color));

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin();
