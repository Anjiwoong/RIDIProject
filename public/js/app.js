const createElement = string => {
  const $temp = document.createElement('template');
  $temp.innerHTML = string;
  return $temp.content;
};

const fetchData = async url => {
  const res = await fetch(url);
  const json = await res.json();
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

export { createElement, fetchData, getPayload };
