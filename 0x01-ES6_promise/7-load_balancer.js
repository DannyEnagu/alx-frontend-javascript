export default function loadBalancer(FRDownload, USDownload) {
  return Promise.any([FRDownload, USDownload])
    .then((result) => result);
}
