
const tabs = document.querySelectorAll('.option_tab');
const tabsContainer = document.querySelector('.tabs');
const tabsContent = document.querySelectorAll('.tab_content');

tabsContainer.addEventListener('click', function (e) {
  console.log(this);
  const clicked = e.target.closest('.option_tab');
  console.log(clicked);

  //Guard clause
  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('option_tab-active'));
  clicked.classList.add('option_tab-active');

  //Active content area
  tabsContent.forEach(c => c.classList.remove('tab_content-active'));
  document
    .querySelector(`.tab_content-${clicked.dataset.tab}`)
    .classList.add('tab_content-active');
});