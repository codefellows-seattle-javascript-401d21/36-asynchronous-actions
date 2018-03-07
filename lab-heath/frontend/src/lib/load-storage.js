export const loadState = () => {
  try {

    let catItem = localStorage.getItem('owners');
    let expItem = localStorage.getItem('cats');

    let owners = JSON.parse(catItem);
    let cats = JSON.parse(expItem);

    const newData = { owners, cats };

    if (newData.owners === null && newData.cats === null) {
      return undefined;
    }

    return newData;
  } catch(error) {
    return undefined;
  }
};