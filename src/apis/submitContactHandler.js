export default async fields =>
  fetch(process.env.REACT_APP_CONTACT_FORM_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(fields),
  });
