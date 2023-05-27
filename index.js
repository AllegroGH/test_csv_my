import _ from 'lodash';

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

const getEmbarkedList = (data) => _.union(data.map((el) => el[11]));

const getGendersRatio = (data) => {
  const maleCount = data.filter((el) => el[4] === 'male').length;
  const femaleCount = data.filter((el) => el[4] === 'female').length;
  return [maleCount, femaleCount];
};

const getSurvivedPercent = (data) => {
  const survived = data.filter((el) => Number(el[1]));
  return `${Math.round((survived.length / data.length) * 100)}%`;
};

const getANames = (data) =>
  data
    .filter((el) => el[3][0] === 'A')
    .map((el) => el[3])
    .join('\n');

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
  console.log(`Passenger names beginning with "A": ${ANames}`);
}
