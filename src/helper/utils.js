const getBarDataset = (data) => {
 
  let labelsLength = data[0]?.Features.length;
  let barGraphDataSum = [];
  for (let i = 0; i < labelsLength; i++) {
    let finalSum = data.reduce((accu, curr) => accu + parseInt(curr.Features[i]), 0);
    barGraphDataSum.push(finalSum);
  }
  return barGraphDataSum;
};


const getLineDates = (lineData) => {

  return lineData.map(({ Day }) => {
    try {
      const date = new Date(Day);
      const options = { day: "numeric", month: "short" };
      let formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
      );
      return formattedDate;
    } catch (error) {
      console.error("Error formatting date:", error);
    }
  });
}; 


const getFormattedDate = (date) => {
  const creationDate = new Date(date);

  const day = creationDate.getDate().toString().padStart(2, "0");
  const month = (creationDate.getMonth() + 1).toString().padStart(2, "0");
  const year = creationDate.getFullYear();

  return `${year}${month}${day}`;
};
const getFormattedDateRange = (date) => {
  if (!date) return;
  return date.split("-").join("");
};
export { getBarDataset, getLineDates, getFormattedDate, getFormattedDateRange };
