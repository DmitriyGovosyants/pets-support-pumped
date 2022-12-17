export const handleDate = user => {
  let birthdateParse;

  if (user?.birthdate) {
    const dateArray = user.birthdate.split('.');
    const dateString = dateArray[1] + '.' + dateArray[0] + '.' + dateArray[2];
    birthdateParse = parseInt(Date.parse(dateString), 10);
  }

  return {...user, birthdate: birthdateParse};
}