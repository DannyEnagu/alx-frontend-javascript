import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises)
    .then((result) => {
      const data = [];

      for (const xy of result) {
        const obj = {
          status: xy.status,
          value: xy.value || xy.reason,
        };
        data.push(obj);
      }

      return data;
    });
}
