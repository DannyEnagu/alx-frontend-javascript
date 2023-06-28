function handleResponseFromAPI(success) {
  return success
    .then(() => {
      const data = { status: 200, body: 'success' };
      return data;
    })
    .catch(() => Error())
    .finally(() => { console.log('Got a response from the API'); });
}

export default handleResponseFromAPI;
