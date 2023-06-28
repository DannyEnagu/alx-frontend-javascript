import { uploadPhoto, createUser } from './utils';

// const testReject = Promise.reject();

const handleProfileSignup = () => {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises)
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
      return values;
    }).catch(() => { console.log('Signup system offline'); });
};

export default handleProfileSignup;
