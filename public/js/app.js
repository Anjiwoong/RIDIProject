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

export { createElement, fetchData };
