import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpUserPromise, uploadPhotoPromise])
    .then((results) => {
      const resultList = [];

      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          resultList.push(result);
        } else {
          resultList.push({ status: result.status, value: `${result.reason}` });
        }
      });

      return resultList;
    });
}
