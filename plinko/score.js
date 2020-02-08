const outputs = []
const k = 3

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel])

  console.log(outputs)
}

function runAnalysis(){
  const bucket = console.log('Fails intro', bucket)
}

function knn(data, point) {
  const bucket = _.chain(data)
    .map(row => [distance(row[0], point), row[3]])
    .sortBy(row => row[0])
    .slice(0, k)
    .countBy(row => row[1])
    .toPairs()
    .sortBy(row => row[1])
    .last()
    .first()
    .parseInt()
    .value()

  console.log(bucket)
}

function distance(pointA, pontB){
  return Math.abs(pointA - pontB)
}

function splitDataset(data, testCount){
  
}