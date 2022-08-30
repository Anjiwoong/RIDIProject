const colorSettingBtn = item => `
<li class="viewer__footer__settings__color__item">
  <button data-mode="${item}">
    <span class="sr-only">${item} theme</span>
  </button>
</li>
`

export default colorSettingBtn;