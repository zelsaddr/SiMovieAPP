const timestampToDate = (timestamp) => {
  let date = new Date(timestamp * 1000);
  let hours = date.getHours();
  // Minutes part from the timestamp
  let minutes = "0" + date.getMinutes();
  // Seconds part from the timestamp
  let seconds = "0" + date.getSeconds();

  // Will display time in 10:30:23 format
  return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
};

export default timestampToDate;
