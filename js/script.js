window.addEventListener('DOMContentLoaded', function () {

    // menu

    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const closeMenu = document.querySelector('.menu__close');
    const menuLink = document.querySelectorAll('.menu__link');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    /*  closeMenu.addEventListener('click', () => {
         menu.classList.remove('active');
     }); */

    menuLink.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });

    // scroll
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    // buttons 

    const btns = document.querySelectorAll('.promo__link');

    btns[0].addEventListener('click', () => {
        if (!btns[0].classList.contains('btn_active')) {
            btns[0].classList.add('btn_active');
            btns[1].classList.remove('btn_active');
        }
    });

    btns[1].addEventListener('click', () => {
        if (!btns[1].classList.contains('btn_active')) {
            btns[1].classList.add('btn_active');
            btns[0].classList.remove('btn_active');
        }
    });

    // skills


    const counters = document.querySelectorAll('.skills__ratings-counter');
    const lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach((item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    // resume


    class resumeCard {
        constructor(src, alt, title, descr, location, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.location = location;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            console.log('resumeCard constructor called');
        }

        render() {
            const element = document.createElement('li');
            console.log('Rendering resume card');

            element.innerHTML = `
                <div class="resume__item">
                    <div class="resume__item-head">
                        <figure class="resume__item-icon"><img src="${this.src}" alt="${this.alt}"></figure>
                        <h4 class="title title_fz14 resume__item-title">${this.title}</h4>
                        <p class="resume__item-location">${this.location}</p>
                    </div>
                    <div class="resume__item-body">
                        <p>${this.descr}</p>
                    </div>
                </div>
            `;

            this.parent.append(element);
        }
    }
    new resumeCard(
        "icons/experience/university.svg",
        "work",
        "Курс по Web-разработке",
        'Курс направленный на освоение основных инструментов для WEB-разработки: HTML, CSS, JS, Git и GitHub, Bootstrap, мобильную адаптацию, Gulp, БЭМ <a href="https://www.udemy.com/certificate/UC-405a5d29-3fcc-429f-aefb-c49bc949df10/">Сертификат</a>',
        'Udemy',
        ".resume__column_first .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/courses.svg",
        "work",
        "Создание современных адаптивных веб сайтов. HTML5, CSS3",
        'Курс ориентированный на изучение HTML5, CSS3 и jQuery. <a href="https://www.udemy.com/certificate/UC-5a88eb47-eba4-4b1b-a178-9a8ec2f05c58/">Сертификат</a>',
        'Udemy',
        ".resume__column_first .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/courses.svg",
        "work",
        "Копирайтинг и продвижение сайтов",
        'Курс по копирайтингу и продвижению сайтов <a href="https://www.udemy.com/certificate/UC-475e57ca-9fb8-4fe9-ab96-18eb2e2f3adc/">Сертификат</a>',
        'Udemy',
        ".resume__column_first .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/courses.svg",
        "work",
        "Интернет-маркетинг",
        'Курс о методах и стратегии продвижения продукта в интернете. <a href="Surtificate\certificate.pdf"target="_blanck">Сертификат</a>',
        'Google Навыки',
        ".resume__column_first .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/courses.svg",
        "work",
        "Основы поисковой оптимизации (SEO). Факторы ранжирования сайтов",
        'Курс помогающий разобраться в SEO оптимизации <a href="https://stepik.org/cert/880171">Сертификат</a>',
        'Stepik',
        ".resume__column_first .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/courses.svg",
        "work",
        "ТЕСТИРОВАНИЕ ВЕБ-ПРИЛОЖЕНИЙ 2.0",
        'Курс по тестированию веб-приложений с разбором основных методик и иструментов.',
        'Software-Testing',
        ".resume__column_first .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/courses.svg",
        "work",
        "Посадка верстки и создание тем на CMS WordPress",
        'Курс разработке тем для WordPress, установки их на сайт и создание админ-панелей. <a href="https://www.udemy.com/certificate/UC-eaa9de89-7c03-4d9a-9c87-415890b98265/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email">Сертификат</a>',
        'Stepik',
        ".resume__column_first .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/courses.svg",
        "work",
        "Посадка верстки и создание тем на CMS WordPress",
        'Курс разработке тем для WordPress, установки их на сайт и создание админ-панелей. <a href="https://www.udemy.com/certificate/UC-eaa9de89-7c03-4d9a-9c87-415890b98265/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email">Сертификат</a>',
        'Stepik',
        ".resume__column_first .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Интернет-маркетолог",
        'Радиостанция "Серебряный дождь", региональное отделение. Занимался ведением сайта и социальных сетей, разработкой контента, настройкой рекламы',
        'Радиостанция "Серебряный дождь" | Красноярск (2018-2019)',
        ".resume__column_second .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Интернет-маркетолог",
        "Компания занималась комплексными решениями по пожарной безопасности. Первая часть проекта - это некомерческая организация проводящая обучение поведению при ЧС. Вторая часть это проекта - это разработка планов пожарной эвакуации, помощь прохождение пожарного надзора и продажа пожарного оборудования. В мои обязанности в ходило администрирование сайтов, продвижение их, создание контента и настройка рекламы.",
        'Технопарк "Лабиринт безопасности" Альтернатива | Красноярск (2019 - 2020)',
        ".resume__column_second .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Интернет-маркетолог",
        "Фонд занимается созданием комплексных решений для онкологических пациентов и их близких. Основная часть проектов фонда сосредоточена в интернет-пространстве. В мои обязанности входил контроль, администрирование и продвижение этих ресурсов.",
        'Фонд "Не напрасно" | Санкт-Петербург (2020-2022)',
        ".resume__column_second .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Разработка / Проект-менеджер / Интернет-маркетолог",
        'Проект занимается сбором вещей, часть которых идет в переработку, а часть в благотворительность. TOLKOVO - это проект Фонда "Лепта". <br> В мои задачи входит:<br> - Разработка и согласование нового функционала; <br> - Постановка задач разработчикам;<br> - Внесение оперативных правок в верстку сайта;<br> - Тестирование сайта;<br> - Наполнение контентом; <br>',
        'Сервис "TOLKOVO" | Санкт-Петербург (2022 - по настоящее время)',
        ".resume__column_second .resume__list"
    ).render();
    new resumeCard(
        "icons/experience/designer.svg",
        "work",
        "Разработка / Контент-менеджер",
        'Санкт-Петербургский Театр Балета им. Леонида Якобсона. На проекте я занимаюсь контролем работоспособности сайта, разработкой и наполнением контентом',
        'Театр Балета им. Леонида Якобсона | Санкт-Петербург (2021 - по настоящее время)',
        ".resume__column_second .resume__list"
    ).render();

    console.log('Before resume() is called');
    console.log('After resume() is called');


    // Форма

    /* $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        });
        return false;
    }); */

    function validateContactForm() {
        const form = document.querySelector('.contacts__form');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = form.querySelector('input[name="name"]');
            const emailInput = form.querySelector('input[name="email"]');
            const textArea = form.querySelector('textarea');
            const checkbox = form.querySelector('input[type="checkbox"]');

            if (!nameInput.checkValidity()) {
                alert('Пожалуйста, введите свое имя.');
                return;
            }

            if (!emailInput.checkValidity()) {
                alert('Пожалуйста, введите корректный адрес почты.');
                return;
            }

            if (!textArea.checkValidity()) {
                alert('Пожалуйста, введите сообщение.');
                return;
            }

            if (!checkbox.checked) {
                alert('Подтвердите согласие с политикой конфиденциальности.');
                return;
            }

            // Все данные прошли валидацию - можно отправить форму на сервер
            sendFormToServer(form);
        });

        // Функция для отправки формы на сервер
        function sendFormToServer(form) {
            const formData = new FormData(form);

            fetch('mailer/smart.php', {
                method: 'POST',
                body: formData,
            })
                .then(function (response) {
                    if (response.ok) {
                        // Очистка полей формы после успешной отправки
                        form.reset();

                        // Можете добавить здесь дополнительные действия после успешной отправки
                    } else {
                        alert('Произошла ошибка при отправке формы.');
                    }
                });
        }
    }

    // Функция для проверки валидности email
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Запуск валидации формы
    validateContactForm();

    // Портфолио

    const portfolioItems = document.querySelector('.portfolio__wrapper');


    class Card {
        constructor(id, src, alt, title, descr, link, isChecked = false) {
            this.id = id;
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.link = link;
            this.isChecked = isChecked;
        }

        render() {

            const portfolioInput = document.createElement('input');
            const portfolioLabel = document.createElement('label');

            portfolioInput.setAttribute("type", "radio");
            portfolioInput.setAttribute("name", "slide");
            portfolioInput.setAttribute("id", this.id);
            if (this.isChecked) {
                portfolioInput.setAttribute('checked', true);
            }

            portfolioLabel.classList.add('card');
            portfolioLabel.setAttribute("for", this.id);
            portfolioLabel.style.backgroundImage = `url('${this.src}')`;

            portfolioLabel.innerHTML = `        
                <div class="row">
                    <div class="icon">${this.id.replace('c', '')}</div>
                    <div class="description">
                        <h4>${this.title}</h4>
                        <p>${this.descr}</p>
                        <a href='${this.link}'>Перейти</a>
                    </div>
                </div>
            
        `;
            portfolioItems.append(portfolioInput);
            portfolioItems.append(portfolioLabel);
        }
    }
    new Card(
        "c1",
        "img/works/pulse.jpg",
        "Pulse",
        'Pulse',
        'Лендинг для продажи браслетов для спорта',
        '/Pulse',
        true
    ).render();

    new Card(
        "c2",
        "img/works/odig.jpg",
        "Odig",
        'Odig',
        'Сайт для туристов, которые собираются посетить Японию',
        '/odig'
    ).render();

    new Card(
        "c3",
        "img/works/cesar-1.jpg",
        "auxpo",
        'auxpo',
        'Главная страница сайта посвященная продаже NFT изображений',
        '/auxpo'
    ).render();

    new Card(
        "c4",
        "img/works/paralax.jpg",
        "Paralax",
        'Paralax',
        'Сайт демонстрирующий реализацию паралакс эффекта на сайте. Создан на основе разобранного векторного изображения',
        '/paralax'
    ).render();

    new Card(
        "c5",
        "img/works/StarCraft_II.jpg",
        "starcraft",
        'Starcraft',
        'Небольшая игра созданная с помощью Vue',
        '/starcraft'
    ).render();

    new Card(
        "c6",
        "img/works/mavic.png",
        "Mavic",
        'Mavic',
        'Лендинг для презентации квадракоптеров DJI Mavic',
        '/mavic'
    ).render();




    /* const portfolioItem = document.querySelectorAll('.portfolio__item');
    const portfolioDescr = document.querySelectorAll('.portfolio__descr');
    const portfolioTitle = document.querySelectorAll('.portfolio__title');

    portfolioItem[portfolioItem.length - 1].classList.add('portfolio__item-active');
    portfolioItem[portfolioItem.length - 1].querySelector('.portfolio__title').classList.add('portfolio__title-active');
    portfolioItem[portfolioItem.length - 1].querySelector('.portfolio__descr').classList.add('portfolio__descr-active');



    portfolioItem.forEach(item => {


        item.addEventListener('click', () => {

            portfolioItem.forEach(allItem => {
                allItem.style.width = '5%';
                item.classList.remove('portfolio__item-active');
            });
            portfolioTitle.forEach(allTitle => {
                allTitle.classList.remove('portfolio__title-active');
            });
            portfolioDescr.forEach(allDescr => {
                allDescr.classList.remove('portfolio__descr-active');
            });

            item.style.width = '100%';
            item.classList.add('portfolio__item-active');
            console.log(item.childNodes);
            item.querySelector('.portfolio__title').classList.add('portfolio__title-active');
            item.querySelector('.portfolio__descr').classList.add('portfolio__descr-active');
        });
    }); */

});