const $root = document.getElementById('root');

const Toaster = target => {
  const $toaster = document.createElement('div');

  $toaster.classList.add('toaster');
  const isActive = target.classList.contains('active');
  let toasterMessage = '';

  if (target.closest('.preference')) {
    toasterMessage = isActive ? '선호작품에 등록되었습니다.' : '선호작품에서 삭제되었습니다.';
  } else if (target.closest('.notification')) {
    toasterMessage = isActive ? '신간알람에 등록되었습니다.' : '신간알람에서 삭제되었습니다.';
  }

  $toaster.innerHTML = `
  <i class='bx bxs-check-circle'></i>
  <span class='toaster-text'>${toasterMessage}</span>
  <i class='bx bx-x'></i>
  `;

  const $renderedToaster = document.querySelector('.toaster');
  if ($renderedToaster) $root.removeChild($renderedToaster);

  $root.appendChild($toaster);

  setTimeout(() => {
    if ($toaster.matches('#root > .toaster')) $root.removeChild($toaster);
  }, 3000);
};

export default Toaster;
