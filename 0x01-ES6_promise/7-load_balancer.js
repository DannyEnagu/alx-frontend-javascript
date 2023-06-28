async function loadBalancer(FRDownload, USDownload) {
  return Promise.race([FRDownload, USDownload])
    .then((result) => result);
}

export default loadBalancer;
