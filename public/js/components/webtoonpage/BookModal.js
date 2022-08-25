const $root = document.getElementById('root');

const BookModal = target => {
  const $bookModal = document.createElement('div');

  $bookModal.classList.add('book-modal');
  target.classList.toggle('is-clicked');

  const clicked = target.classList.contains('is-clicked');
  let modalMassage = '';

  if (target.closest('.preference')) {
    modalMassage = clicked ? '선호작품에 등록되었습니다.' : '선호작품에서 삭제되었습니다.';
  } else if (target.closest('.series-noti')) {
    modalMassage = clicked ? '신간알람에 등록되었습니다.' : '신간알람에서 삭제되었습니다.';
  }

  $bookModal.innerHTML = `
  <i class='bx bxs-check-circle'></i>
  <span class='modal-text'>${modalMassage}</span>
  <i class='bx bx-x'></i>
  `;

  $root.appendChild($bookModal);

  setTimeout(() => {
    if ($bookModal.matches('#root>.book-modal')) $root.removeChild($bookModal);
  }, 4000);
};

export default BookModal;
