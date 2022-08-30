const MyRidiCashEmpty = isDeatil => `
<div class="my__ridicash__empty">
    <span><i class='bx bx-coin-stack' ></i></span>
    ${isDeatil ? `<p>리디캐시 충전 내역이 없습니다.</p>` : `<p>입금 대기 내역이 없습니다.</p>`}
</div>
`;

export default MyRidiCashEmpty;