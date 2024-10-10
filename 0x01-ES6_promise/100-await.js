// This import a function that uploadPhoto and createUser from utils.js

import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
