const getBarDataset = (data) => {
  console.log('utils',data.data[0])
  let labelsLength = data.data[0]?.Features.length;
  let barGraphDataSum = [];
  for (let i = 0; i < labelsLength; i++) {
    let finalSum = data.data
      .slice(1)
      .reduce((accu, curr) => accu + parseInt(curr.Features[i]), 0);
    barGraphDataSum.push(finalSum);
  }
  return barGraphDataSum;
};

export { getBarDataset };
