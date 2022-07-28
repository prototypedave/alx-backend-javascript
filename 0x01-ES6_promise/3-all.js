import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()]).then(res => {
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    }).catch(error => {
      console.log('Signup system offline');
    });
}
