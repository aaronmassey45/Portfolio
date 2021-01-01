interface IFields {
  name: string;
  message: string;
  email: string;
}

// eslint-disable-next-line arrow-body-style
export default async (fields: IFields) => {
  return fetch(process.env.REACT_APP_CONTACT_FORM_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(fields),
  });
};
