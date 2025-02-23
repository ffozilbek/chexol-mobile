window.addEventListener("DOMContentLoaded", () => {
  const langToggler = document.querySelector("#language-toggle");
  const mainText = document.querySelector(".main__text-inner");
  const btnAccess = document.querySelector(".btn-access");
  const btnComplain = document.querySelector(".btn-complain");
  const btnShare = document.querySelector(".btn-share");
  const shareHandler = document.querySelector("#btn-share");
  const modal = document.querySelector(".modal");
  const loader = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = "none";
    }, 4000);
  }, 3000);

  langToggler.addEventListener("change", () => {
    if (langToggler.checked) {
      mainText.innerHTML = `
                    <h1 class="heading">Здравствуйте!</h1>
                    <p class="info">Спасибо за ваш заказ! Если вам понравился наш товар, пожалуйста, оставьте отзыв и отметьте звёздочки. Это будет для нас отличной мотивацией!
                        <br /><br /> Если у вас возникли какие-либо проблемы с заказом, свяжитесь с нами – мы заменим его в течение <span>1 дня</span>.
                    </p>
    `;
      btnAccess.textContent = "Оценка товара";
      btnComplain.textContent = "Жалобы";
      btnShare.textContent = "Поделиться с друзьями";
      modal.textContent = "Скопировано 👍";
    } else {
      mainText.innerHTML = `
                    <h1 class="heading">Assalomu alaykum!</h1>
                    <p class="info">Buyurtmangiz uchun tashakkur! Agar mahsulotimiz sizga yoqqan bo'lsa, iltimos,
                        fikr-mulohazangizni
                        qoldiring va yulduzchalarni sarg'aytiring. Bu biz uchun katta motivatsiya bo‘ladi!
                        <br /><br /> Agar buyurtmangiz bilan bog‘liq biron muammo yuzaga kelgan bo‘lsa, biz bilan
                        bog‘laning –
                        uni
                        <span>1 kun</span>
                        ichida almashtirib beramiz.
                    </p>
`;
      btnAccess.textContent = "Mahsulotni baholash";
      btnComplain.textContent = "Shikoyatlar haqida";
      btnShare.textContent = "Do'stlarga ulashish";
      modal.textContent = "Nusxa olindi 👍";
    }
  });

  shareHandler.addEventListener("click", () => {
    navigator.clipboard.writeText("https://uzum.uz/chexol-mobile").then(() => {
      modal.classList.add("active");
      setTimeout(() => {
        modal.classList.remove("active");
      }, 2000);
    });
  });
});
