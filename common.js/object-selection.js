const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}
];

const getWorthyWorkers = (workersArray) => {
  const WorthyWorkers = [];

  for (let i = 0; i < workersArray.length; i++) {
    const currentWorker = workersArray[i];

    if (currentWorker.salary > 1000) {
      WorthyWorkers.push(currentWorker.name);
    }
  }

  return WorthyWorkers;
}

console.log(getWorthyWorkers(workers));