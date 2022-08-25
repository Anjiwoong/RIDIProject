// const BookModal = () => `
//   <div class="book-modal">
//   <i class='bx bxs-check-circle'></i>
//   <span class='modal-text'></span>
//   </div>
// `;

const BookModal = target => {
  const $bookModal = document.createElement('div');
  $bookModal.classList.add('book-modal');
  target.classList.toggle('is-clicked');
  const clicked = target.classList.contains('is-clicked');
  const modalMassage = clicked ? '선호작품에 등록되었습니다.' : '선호작품에서 삭제되었습니다.';

  $bookModal.innerHTML = `
  <i class='bx bxs-check-circle'></i>
  <span class='modal-text'>${modalMassage}</span>
  `;

  document.querySelector('#root').appendChild($bookModal);
};

export default BookModal;
