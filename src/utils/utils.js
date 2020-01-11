export const getPhotos = (url) => {
  return fetch(url)
    .then(resp => resp.json())
    .then(images => images.map(image => image.id))
    .catch(error => console.error(error));
}