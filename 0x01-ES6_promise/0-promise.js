// 0-promise.js
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate API call or asynchronous task
    resolve('Success');  // or you can reject if an error occurs
  });
}

