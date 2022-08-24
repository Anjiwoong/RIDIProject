const createElement = string => {
  const $temp = document.createElement('template');
  $temp.innerHTML = string;
  return $temp.content;
};

const fetchData = async url => {
  const json = await fetch(url, { method: 'GET', headers: { 'Content-Type': 'application/json' } })
    .then(res => res.json())
    .catch(e => console.error(e.message));

  return json;
};

const addData = async (url, newData) => {
  const json = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(...newData),
  }).catch(e => console.error('Error: ', e));

  return json;
};

const getPayload = () => {
  const decodeToken = localStorage.getItem('token');
  if (decodeToken !== null) {
    const payload = JSON.parse(window.atob(decodeToken));
    const isAdult = new Date().getFullYear() - payload.birth >= 19;
    return { payload, isAdult };
  }
};

export { createElement, fetchData, addData, getPayload };
