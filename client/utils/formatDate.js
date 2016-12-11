const months = {
  '01':'Jan',
  '02':'Feb',
  '03':'Mar',
  '04':'Apr',
  '05':'May',
  '06':'Jun',
  '07':'Jul',
  '08':'Aug',
  '09':'Sep',
  '10':'Oct',
  '11':'Nov',
  '12':'Dec',
};

export default (date) => {
  const parts = date.split('-');
  const year = parts[0];
  const month = months[parts[1]];
  const day = parts[2].substr(0, 2);
  return month + ' ' + day + ', ' + year;
}
