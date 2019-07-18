const words: Array<string> = ['俺', 'お前', '大五郎'];
const getWord = (): string => words[Math.floor(Math.random() * 3)];

const values: Array<string> = [];
let count: number = 0;

while (true) {
  values.push(getWord());
  if (values.length === 3) {
    count++;
    console.log(`${count}\t${values.join('と')}`);
    if (JSON.stringify(values) === JSON.stringify(words)) {
      break;
    } else {
      values.splice(0, values.length);
    }
  }
}
