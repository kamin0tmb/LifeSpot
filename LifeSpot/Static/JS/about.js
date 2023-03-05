//alert("Javascript для страницы 'о проекте' подключен!")

/*
* Запросим пользовательский ввод
* и сохраним отзыв в объект
*
* */
function getReview() {
    // Создадим объект
    let review = {}

    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if (review["userName"] == null) {
        return
    }

    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if (review["comment"] == null) {
        return
    }

    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()

    // Добавим на страницу
    writeReview(review)
}

/*
* Запишем отзыв на страницу
*
* */
const writeReview = review => {
    document.getElementsByClassName('reviews')[0].innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>` +
        '</div>';
}

/*Слайдер*/
var indexValue = 1;
showImg(indexValue);
function btm_slide(num) { showImg(indexValue = num); }
function side_slide(num) { showImg(indexValue += num); }
function showImg(num) {
    var i;
    const img = document.querySelectorAll('img');
    const slider = document.querySelectorAll('.btm-slides span');
    if (num > img.length)
        indexValue = 1;
    if (num < 1)
        indexValue = img.length;
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
    for (i = 0; i < slider.length; i++) {
        slider[i].style.background = "rgba(255,255,255,0.2)";
    }
    img[indexValue - 1].style.display = "block";
    slider[indexValue - 1].style.background = "rgba(255,255,255,0.7)";
}