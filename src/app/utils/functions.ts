const getMyAge = () => {
  const birth = new Date(1999, 6, 10);
  const now = new Date();
  const age = now.getFullYear() - birth.getFullYear();
  const month = now.getMonth() - birth.getMonth();

  if (month < 0 || (month === 0 && now.getDate() < birth.getDate())) {
    return age - 1;
  }
  return age;
};

const getMyExperience = () => {
  const initDate = new Date(2017, 1, 1);
  const now = new Date();

  return now.getFullYear() - initDate.getFullYear();
};

export { getMyAge, getMyExperience };
