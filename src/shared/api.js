import fetch from "isomorphic-fetch";

export function fetchPopularJobs(id = "all") {
  //Proxy setup code to use stubs
  let url = `/repositories?job=${id}`;
  if (!__isBrowser__) {
    url = process.env.API_ENDPOINT + url;
  }
  const encodedURI = encodeURI(url);
  return new Promise(resolve => {
    fetch(encodedURI)
      .then(data => {
        return data.json();
      })
      .then(repos => {
        resolve(repos);
        return repos;
      })
      .catch(error => {
        resolve([]);
        return null;
      });
  });
}
