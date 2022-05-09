const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('planet-img');
const textToChange = document.getElementById('text-to-change');
const playMusic = document.getElementById('music-to-play')
const labels = document.querySelectorAll('label');
const options = document.querySelectorAll('option');
const button = document.querySelector('.form-submit-button');


selectEl.addEventListener('change', function () {

    if(this.value === 'mercury'){
        setMercury(this)
        function setMercury(that) {
            registrationImage.src = "Styles/Assets/Planet.svg";
            textToChange.innerText = "польоту у космос";
            playMusic.src = "Styles/Assets/Mercury.mp3";
            labels[2].innerText = "Планета";
            options[that.selectedIndex].innerText = "Меркурій";
            document.body.style.backgroundImage = "url(Styles/Assets/Bg.svg)"
        }
        } else if (this.value === 'uranus'){
        setUran(this)
            function setUran(that) {
                registrationImage.src = "Styles/Assets/Uran.svg";
                textToChange.innerText = "польоту у космос";
                playMusic.src = "Styles/Assets/Uran.mp3";
                labels[2].innerText = "Планета";
                options[that.selectedIndex].innerText = "Уран";
                document.body.style.backgroundImage = "url(Styles/Assets/Bg.svg)"
            }

        } else if (this.value === 'earth') {
        setUkraine(this)

            function setUkraine(that) {
                registrationImage.src = "Styles/Assets/Ukraine.jpeg";
                textToChange.innerText = "для запису до ЗСУ";
                playMusic.src = "Styles/Assets/gimn.mp3";
                labels[2].innerText = "Хоробрі люди";
                options[that.selectedIndex].innerText = "ЗСУ";
                document.body.style.backgroundImage = "url(Styles/Assets/Ukraine-bg.jpg)"
            }
        } else if (this.value === 'mars') {
        setAnime(this)

        function setAnime(that) {
            registrationImage.src = "Styles/Assets/anime.jpeg";
            textToChange.innerText = "для перегляду аніме";
            playMusic.src = "Styles/Assets/anime-music.mp3";
            labels[2].innerText = "Аніме";
            options[that.selectedIndex].innerText = "Неймовірні пригоди ДжоДжо";
            document.body.style.backgroundImage = "url(Styles/Assets/anime-bg.jpeg)"
        }
    } else if (this.value === 'neptune') {
        setDiving(this)

        function setDiving(that) {
            registrationImage.src = "Styles/Assets/diving.jpeg";
            registrationImage.style.transform = "scale(85%)";
            textToChange.innerText = "для запису на дайвінг";
            playMusic.src = "Styles/Assets/diving-music.mp3";
            labels[2].innerText = "Океан";
            options[that.selectedIndex].innerText = "Атлантичний";
            document.body.style.backgroundImage = "url(Styles/Assets/diving-bg.jpg)"
        }
    } else {
        setSneakyRicardo(this);

            function setSneakyRicardo(elem) {
                registrationImage.src = "Styles/Assets/ricardo-you-got-that.gif";
                registrationImage.style.transform = "scale(90%)";
                textToChange.innerText = "запису на танці";
                playMusic.src = "Styles/Assets/u-got-that.mp3";
                labels[2].innerText = "Хореограф";
                options[elem.selectedIndex].innerText = "Рікардо Мілос";
                document.body.style.backgroundImage = "url(Styles/Assets/DiscoHall1.webp)";
            }
    }

//     if (true === this.value === 'mercury') {
//         setMercury(this)
//     } else if (true === this.value === 'uranus') {
//         setUran(this);
//     } else {
//         setSneakyRicardo(this);
//     }
//
// })
//
// function setMercury(elem) {
//     registrationImage.src = "Styles/Assets/Planet.svg";
//     registrationImage.style.transform = "scale(80%)";
//     document.body.style.backgroundImage = "url(Styles/Assets/Bg.svg)"
// }
//
// function setUran(elem) {
//     registrationImage.src = "Styles/Assets/Uran.svg";
//     registrationImage.style.transform = "scale(80%)";
//     document.body.style.backgroundImage = "url(Styles/Assets/Bg.svg)"
// }
//
// function setSneakyRicardo(elem) {
//     registrationImage.src = "Styles/Assets/ricardoM.gif";
//     registrationImage.style.transform = "scale(80%)";
//     textToChange.innerText = "запису на танці";
//     labels[2].innerText = "Хореограф";
//     options[elem.selectedIndex].innerText = "Рікардо Мілос";
//     document.body.style.backgroundImage = "url(Styles/Assets/DiscoHall1.webp)"
// }
//
button.addEventListener('click',function () {
    console.log(this.className);
    this.classList.toggle('form-submit-button')
})

})