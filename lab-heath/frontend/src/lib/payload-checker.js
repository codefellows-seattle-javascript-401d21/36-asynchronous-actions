
export const checker = arr => {
  if(!arr) {
    throw new Error('No Payload detected');
  }

  let {timestamp, title, updating, value, _id} = arr;
  if(!timestamp, !title, !updating, !value, !_id) {
    throw new Error('Payload is missing a part of the payload');
  }
};

