import { uploadPhoto, createUser } from './utils';

// const testReject = Promise.reject();

const asyncUploadUser = async () => {
  const promises = [uploadPhoto(), createUser()];
  return Promise.all(promises)
    .then((result) => {
      const resObj = {
        photo: result[0],
        user: result[1],
      };
      return resObj;
    })
    .catch(() => {
      const emptyObj = {
        photo: null,
        user: null,
      };
      return emptyObj;
    });
};

export default asyncUploadUser;
