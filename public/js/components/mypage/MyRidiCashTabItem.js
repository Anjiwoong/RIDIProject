const MyRidiCashTabItem = (item, index, href) => `
<li class="my__ridicash__tablist"><a class="${href === item.href ? 'active' : ''}" href="${item.href}">${item.title}</a></li>
`;

export default MyRidiCashTabItem;