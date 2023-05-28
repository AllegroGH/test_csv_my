import _ from 'lodash';

// const idIndex = 0;
const survivedIndex = 1;
// const pclassIndex = 2;
const nameIndex = 3;
const sexIndex = 4;
// const ageIndex = 5;
// const sibspIndex = 6;
// const parchIndex = 7;
// const ticketIndex = 8;
// const fareIndex = 9;
// const cabinIndex = 10;
const embarkedIndex = 11;

const parse = (content) => {
  const result = content
    .trim()
    .split('\r\n')
    .slice(1)
    .map((el) => el.split(',"'))
    .map((el) => [el[0], ...el[1].split('",')])
    .map(([prev, name, next], index) => [...prev.split(','), name, ...next.split(',')]);
  return result;
};

const getEmbarkedList = (data) => _.union(data.filter((el) => el[embarkedIndex]).map((el) => el[embarkedIndex])).sort();

const getGendersRatio = (data) => {
  const maleCount = data.filter((el) => el[sexIndex] === 'male').length;
  const femaleCount = data.filter((el) => el[sexIndex] === 'female').length;
  return [maleCount, femaleCount];
};

const getSurvivedPercent = (data) => {
  const survived = data.filter((el) => Number(el[survivedIndex]));
  return `${Math.round((survived.length / data.length) * 100)}%`;
};

const getANames = (data) =>
  data
    .filter((el) => el[nameIndex][0] === 'A')
    .map((el) => el[nameIndex])
    .join('\n      ');

export default function solution(content) {
  const data = parse(content);
  console.log(`Count: ${data.length}`);

  const EmbarkedList = getEmbarkedList(data);
  console.log(`EmbarkedList: ${EmbarkedList}`);

  const [males, females] = getGendersRatio(data);
  console.log(`Genders ratio (male/female): ${males}/${females}`);

  const survivedPercent = getSurvivedPercent(data);
  console.log(`Survived: ${survivedPercent}`);

  const ANames = getANames(data);
  console.log(`Passenger names beginning with "A": 
      ${ANames}`);
}
