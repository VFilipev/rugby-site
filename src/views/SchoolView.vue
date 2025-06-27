<template>
    <section class="hero-section">
        <header class="navbar-overlay">
            <div class="content-container">
                <nav class="d-flex justify-content-between align-items-start header-nav">
                    <!-- Left Logo - Витязь -->
                    <div class="logo-left">
                        <img src="@/assets/logo-vityaz.svg" alt="Витязь" class="logo-vityaz">
                    </div>

                    <!-- Center Navigation -->
                    <div class="d-flex align-items-center">
                        <nav class="center-nav d-none d-lg-flex">
                            <ul class="nav-list d-flex list-unstyled mb-0">
                                <li class="nav-item dropdown-container" ref="dropdownRef">
                                    <a href="#" class="nav-link" @click.prevent="toggleDropdown">
                                        команда
                                        <span class="dropdown-icon" :class="{ 'open': isDropdownOpen }">
                                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="1.5"
                                                    stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </span>
                                    </a>

                                    <!-- Dropdown Menu -->
                                    <div class="dropdown-menu-custom" :class="{ 'show': isDropdownOpen }"
                                        @click.stop="$event.preventDefault()">
                                        <ul class="dropdown-list">
                                            <li><a href="#" class="nav-link">состав</a></li>
                                            <li><a href="#" class="nav-link">тренировки</a></li>
                                            <li><a href="#" class="nav-link">зал славы</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">матчи</a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">контакты</a>
                                </li>
                            </ul>
                        </nav>

                        <!-- Right Logo - Регби Пермского края -->
                        <div class="logo-right">
                            <img src="@/assets/logo-regby-permskiy-krai.svg" alt="Регби Пермского края"
                                class="logo-regby">
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <!-- Hero Background Image -->
        <div class="hero-image">
            <img src="/images/hero-images-2.jpg" alt="Команда Витязь" class="hero-bg">
        </div>
    </section>
    <section class="match-day">
        <div class="content-container">
            <div class="section-header-wrapper mb-5">
                <div class="section-item section-item--left">
                    ДЕТСКОЕ
                </div>
                <div class="section-title">
                    ШКОЛЫ РЕГБИ
                </div>
                <div class="section-item section-item--right">
                    РЕГБИ
                </div>
            </div>
        </div>
        <div class="school-wrapper">
            <div class="schools-container">
                <!-- Левая колонка -->
                <div class="schools-column schools-column--left">
                    <div class="school-item">
                        <h3 class="school-name">ГБУ ДО ПК «СШОР «Академия игровых видов спорта»</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-address">г. Пермь, мкр. Левшино (стадион Молния)</p>
                                <p class="location-contact">Казанцев Иван Валерьевич</p>
                                <p class="location-phone">89082732327</p>
                            </div>
                            <div class="school-location">
                                <p class="location-address">г. Пермь, мкр. Гайва (стадион Гайва)</p>
                                <p class="location-contact">Садыев Артем Шамилевич</p>
                                <p class="location-phone">89082584292</p>
                            </div>
                            <div class="school-location">
                                <p class="location-address">г. Пермь, Свердловский район (стадион Звезда)</p>
                                <p class="location-contact">Стволов Денис Иванович</p>
                                <p class="location-phone">89194604794</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">МБОУ «СОШ №61»</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-address">г. Пермь</p>
                                <p class="location-contact">Томилина Екатерина Андреевна</p>
                                <p class="location-phone">8 (342) 216 71 21</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">Фроловская СОШ «Навигатор»</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-address">Пермский район, с. Фролы</p>
                                <p class="location-contact">Мурыгина Виктория Викторовна</p>
                                <p class="location-phone">+7 (342) 232-01-20</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">МАОУ «СОШ №21» г. Кунгур</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-contact">Морозова Нелли Николаевна</p>
                                <p class="location-phone">+7(342)716-46-20</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">МАОУ «Комсомольская СОШ»</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-address">Кунгурский район, п. Комсомольский</p>
                                <p class="location-contact">Проданов Александр Михайлович</p>
                                <p class="location-phone">+ 7(342)715-61-16</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">МБОУ "Школа для детей с ОВЗ" г. Лысьва</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-contact">Коновалова Ольга Юрьевна</p>
                                <p class="location-phone">8(349) 5-47-43</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">г. Чернушка Спортивный клуб «веселый мяч»</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-contact">Воронцов Олег Григорьевич</p>
                                <p class="location-phone">+7 (913) 438-20-64</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Правая колонка -->
                <div class="schools-column schools-column--right">
                    <div class="school-item">
                        <h3 class="school-name">МБОУ ДО СШОР <br> «Олимпийские ракетки»</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-address">г. Пермь, мкр. Парковый (Спортхолл), мкр. Юбилейный (Экошкола)</p>
                                <p class="location-contact">Ворончихина Анастасия Александровна 89824887404</p>
                            </div>
                            <div class="school-location">
                                <p class="location-address">г. Пермь, мкр. Парковый МБОУ СОШ №44</p>
                                <p class="location-contact">Маньков Роман Андреевич</p>
                            </div>
                            <div class="school-location">
                                <p class="location-address">г. Пермь, мкр. Парковый (Спортхолл)</p>
                                <p class="location-contact">Тихомирова Дарья Николаевна</p>
                                <p class="location-phone">8 951 9335826</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">МБУ ЗАТО Звездный</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-address">Городской округ ЗАТО Звездный</p>
                                <p class="location-contact">Мясникова Татьяна Евгеньевна</p>
                                <p class="location-phone">+7 (342) 297-14-33</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">МОБУ «Гимназия №3» г. Кудымкара</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-contact">Бабикова Надежда Дмитриевна</p>
                                <p class="location-phone">+7 (342)60 4-24-38</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">МБОУ «СОШ №2» г. Кудымкар</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-contact">Мелехин Вячеслав Александрович</p>
                                <p class="location-phone">7 (342)604-46-36</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">Кочевская СОШ</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-address">Кочевский район, с. Кочево</p>
                                <p class="location-contact">Утробин Андрей Иванович</p>
                                <p class="location-phone">+7 (342) 258-00-40</p>
                            </div>
                        </div>
                    </div>

                    <div class="school-item">
                        <h3 class="school-name">МОУ "Киселевская общеобразовательная школа-интернат для детей с ОВЗ"</h3>
                        <div class="school-locations">
                            <div class="school-location">
                                <p class="location-address">Сукскнский р-н, д. Киселево</p>
                                <p class="location-contact">Плотников Александр Викторович</p>
                                <p class="location-phone">7 (342)753-21-37</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <footer>
        <div class="footer-wrapper">
            <div class="footer-container">
                <div class="row p-0">
                    <div class="col-2">
                        <img src="@/assets/footer_logo.svg" alt="logo">
                    </div>
                    <div class="col-4">
                        <div class="contact-wrapper">
                            <div class="footer-title_contacts">
                                КОНТАКТЫ
                            </div>
                            <div class="contact-row d-flex">
                                <div class="contact-item_icon">
                                    <img src="@/assets/footer-icon_mail.svg" alt="icon_mail">
                                </div>
                                <div class="contact-item_text">
                                    region59@rugby.ru
                                </div>
                            </div>
                            <div class="contact-row d-flex">
                                <div class="contact-item_icon">
                                    <img src="@/assets/footer-icon_tg.svg" alt="icon_mail">
                                </div>
                                <div class="contact-item_text">
                                    @rugbyprm
                                </div>
                            </div>
                            <div class="contact-row d-flex">
                                <div class="contact-item_icon">
                                    <img src="@/assets/footer-icon_vk.svg" alt="icon_mail">
                                </div>
                                <div class="contact-item_text" style="margin-left: 9px;">
                                    vityaz_rugby
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-4">
                        <div class="footer-title_sponsors">
                            СПОНСОРЫ
                        </div>
                        <div class="row-sponsors_icon d-flex">
                            <div class="sponsors_icon">
                                <img src="@/assets/footer-icon_eurochem.svg" alt="footer-icon_eurochem">
                            </div>
                            <div class="sponsors_icon" style="margin-left: 51px;">
                                <img src="@/assets/footer-icon_rugby.svg" alt="footer-icon_rugby">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import MatchCarousel from '@/components/MatchCarousel.vue'

// Dropdown state
const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

// Animation state
const newsContainer = ref(null)
const newsItem1 = ref(null)
const newsItem2 = ref(null)
const newsItem3 = ref(null)

const visibleItems = ref({
    item1: false,
    item2: false,
    item3: false
})

// Toggle dropdown function
const toggleDropdown = (event) => {
    event.stopPropagation()
    isDropdownOpen.value = !isDropdownOpen.value
}

// Close dropdown when clicking outside
const closeDropdown = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
        isDropdownOpen.value = false
    }
}

// Intersection Observer for animations
const observeNewsItems = () => {
    const options = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = index * 300 // Задержка между анимациями
                setTimeout(() => {
                    if (entry.target === newsItem1.value) {
                        visibleItems.value.item1 = true
                    } else if (entry.target === newsItem2.value) {
                        visibleItems.value.item2 = true
                    } else if (entry.target === newsItem3.value) {
                        visibleItems.value.item3 = true
                    }
                }, delay)
            }
        })
    }, options)

    // Наблюдаем за каждым элементом новости
    if (newsItem1.value) observer.observe(newsItem1.value)
    if (newsItem2.value) observer.observe(newsItem2.value)
    if (newsItem3.value) observer.observe(newsItem3.value)

    return observer
}

// Глобальный обработчик клика для закрытия меню
const handleGlobalClick = (event) => {
    closeDropdown(event)
}

// Добавляем и удаляем глобальный обработчик клика
onMounted(() => {
    document.addEventListener('click', handleGlobalClick)

    // Инициализируем анимации с небольшой задержкой
    setTimeout(() => {
        observeNewsItems()
    }, 100)
})

onUnmounted(() => {
    document.removeEventListener('click', handleGlobalClick)
})
</script>

<style>
.footer-title_sponsors{
    margin-bottom: 33px;
}
.footer-title_contacts{
    margin-bottom: 20px;
}
.contact-item_text{
    margin-left: 14px;
}
.footer-container {
    margin: 0 auto;
    width: 1280px;
    max-width: 1280px;
    padding-top: 75px;
    padding-bottom: 75px;
}

.footer-wrapper {
    background-color: #1B0047;
    color: white;
}

.container-logo {
    display: flex;
    justify-content: space-around;
}

#app {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Global reset for full width hero */
body {
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden;
}

html {
    margin: 0;
    padding: 0;
}
</style>

<style scoped>
@font-face {
    font-family: 'Rossika';
    src: url('@/assets/fonts/rossika_light.otf') format('opentype');
    font-style: light;
    font-display: swap;
}

.section-item {
    color: #1B0047;
    font-size: 18px;
}

.section-title {
    color: #1B0047;
    font-size: 57px;
    font-family: 'Rossika';
    letter-spacing: -0.02em;
}

.header-nav {
    padding-top: 40px;
}

/* Hero Section */
.hero-section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.hero-bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

/* Content container */
.content-container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    overflow: visible;
}

/* Header Overlay */
.navbar-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
}

/* Left Logo Section */
.logo-left {
    display: flex;
    color: white;
}

.logo-vityaz {
    width: 116px;
    height: auto;
    filter: brightness(0) invert(1);
}

.club-name {
    line-height: 1.2;
}

.club-title {
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 2px;
    margin-bottom: -5px;
}

.club-subtitle {
    font-size: 0.9rem;
    font-weight: 300;
    letter-spacing: 1px;
    opacity: 0.9;
}

/* Center Navigation */
.center-nav {
    flex: 1;
    justify-content: right;
    margin: 0 40px;
}

.nav-list {
    gap: 40px;
}

.nav-link {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 400;
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: 15px;
    line-height: 1;
}

/* Dropdown Container */
.dropdown-container {
    position: relative;
}

.dropdown-icon {
    display: inline-flex;
    align-items: center;
    transition: transform 0.3s ease;
    opacity: 1;
    position: relative;
    top: 1px;
}

.dropdown-icon svg {
    stroke: currentColor;
    transition: transform 0.3s ease;
}

/* Dropdown icon animation */
.dropdown-icon.open {
    transform: rotate(180deg);
}

/* Dropdown Menu */
.dropdown-menu-custom {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 15px;
    min-width: 200px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
}

.dropdown-menu-custom.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.dropdown-list {
    list-style: none;
    margin: 0;
    padding: 0;
}

.dropdown-list li {
    margin: 8px 0;
}

.dropdown-link {
    display: block;
    color: white;
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.2;
}

/* Right Logo */
.logo-right {
    display: flex;
    align-items: center;
}

.logo-regby {
    height: 80px;
    width: auto;
}

/* Responsive Design */
@media (max-width: 991.98px) {
    .center-nav {
        display: none;
    }

    .logo-vityaz {
        width: 50px;
    }

    .club-title {
        font-size: 1.5rem;
    }

    .club-subtitle {
        font-size: 0.8rem;
    }

    .logo-regby {
        height: 60px;
    }
}

@media (max-width: 767.98px) {
    .logo-vityaz {
        width: 40px;
        margin-right: 10px;
    }

    .club-title {
        font-size: 1.3rem;
    }

    .club-subtitle {
        font-size: 0.7rem;
    }

    .logo-regby {
        height: 50px;
    }
}

/* Match day section */
.match-day {
    width: 100%;
    margin-top: 60px;
}

.event-section {
    width: 100%;
    margin-top: 100px;
    margin-bottom: 100px;
    position: relative;
    overflow: visible;
}

/* News Section Styles */
.news-container {
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 100%;
}

.news-item {
    display: flex;
    gap: 100px;
    align-items: flex-start;
    width: 100%;
}

.news-photo {
    flex: 0 0 590px;
    height: 278px;
    overflow: hidden;
    border-radius: 3px;
}

.news-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.news-item:hover .news-image {
    transform: scale(1.05);
}

.news-description {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 0;
}

.news-title {
    font-size: 22px;
    font-weight: 700;
    color: #1B0047;
    line-height: 1.2;
    letter-spacing: -0.01em;
}

.news-text {
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    font-weight: 400;
}

/* Responsive Design for News */
@media (max-width: 1024px) {
    .news-item {
        flex-direction: column !important;
        gap: 25px;
    }

    .news-photo {
        flex: none;
        width: 100%;
        height: 250px;
    }

    .news-title {
        font-size: 28px;
    }

    .news-text {
        font-size: 16px;
    }
}

@media (max-width: 768px) {
    .news-container {
        gap: 40px;
    }

    .news-photo {
        height: 200px;
    }

    .news-title {
        font-size: 24px;
    }

    .news-text {
        font-size: 15px;
    }

    .news-description {
        gap: 15px;
        padding: 10px 0;
    }
}

@media (max-width: 480px) {
    .news-title {
        font-size: 20px;
    }

    .news-text {
        font-size: 14px;
    }

    .event-section {
        margin-top: 60px;
    }
}

/* Arrow styles */
.last-news-item {
    position: relative;
}

.arrow-container {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 10;
    cursor: pointer;
}

.arrow-icon {
    width: 26px;
    height: 16px;
    transition: transform 0.3s ease;
    fill: #1B0047;
}

.arrow-container:hover .arrow-icon {
    transform: translateX(3px) scale(1.1);
}

/* News Animation Styles */
.news-item {
    transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.news-hidden {
    opacity: 0;
    filter: blur(3px);
}

.news-hidden .news-photo {
    transform: scale(0.9);
}

.news-hidden .news-description {
    transform: translateY(30px);
}

.animate-in-left {
    animation: slideInLeft 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.animate-in-right {
    animation: slideInRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-100px);
        filter: blur(3px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0);
    }
}

@keyframes slideInRight {
    from {
        opacity: 0;
        transform: translateX(100px);
        filter: blur(3px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
        filter: blur(0);
    }
}

/* Дополнительные эффекты для фото и текста */
.news-photo {
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.news-description {
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.section-header-wrapper {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    height: 60px;
}

.section-item--left {
    justify-self: start;
}

.section-title {
    justify-self: center;
}

.section-item--right {
    justify-self: end;
}

/* Schools Section */
.school-wrapper {
    background-color: #FFFFFF;
    padding: 60px 0 80px 0;
    width: 100%;
}

.schools-container {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 390px 390px;
    column-gap: 270px;
    row-gap: 40px;
    justify-content: center;
    position: relative;
    padding-top: 20px;
    grid-template-rows: repeat(7, auto);
}

.schools-column {
    width: 390px;
    max-width: 390px;
    display: contents;
}

.schools-column--left {
    grid-column: 1;
}

.schools-column--right {
    grid-column: 2;
}

/* Позиционирование элементов по строкам для выравнивания */
.schools-column--left .school-item:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
}

.schools-column--left .school-item:nth-child(2) {
    grid-column: 1;
    grid-row: 2;
}

.schools-column--left .school-item:nth-child(3) {
    grid-column: 1;
    grid-row: 3;
}

.schools-column--left .school-item:nth-child(4) {
    grid-column: 1;
    grid-row: 4;
}

.schools-column--left .school-item:nth-child(5) {
    grid-column: 1;
    grid-row: 5;
}

.schools-column--left .school-item:nth-child(6) {
    grid-column: 1;
    grid-row: 6;
}

.schools-column--left .school-item:nth-child(7) {
    grid-column: 1;
    grid-row: 7;
}

.schools-column--right .school-item:nth-child(1) {
    grid-column: 2;
    grid-row: 1;
}

.schools-column--right .school-item:nth-child(2) {
    grid-column: 2;
    grid-row: 2;
}

.schools-column--right .school-item:nth-child(3) {
    grid-column: 2;
    grid-row: 3;
}

.schools-column--right .school-item:nth-child(4) {
    grid-column: 2;
    grid-row: 4;
}

.schools-column--right .school-item:nth-child(5) {
    grid-column: 2;
    grid-row: 5;
}

.schools-column--right .school-item:nth-child(6) {
    grid-column: 2;
    grid-row: 6;
}

.school-item {
    max-width: 390px;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    position: relative;
}

.school-name {
    color: #1B0047;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    margin: 0 0 20px 0;
    font-family: 'Helvetica', Arial, sans-serif;
}

.school-locations {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.school-location {
    margin-bottom: 0;
}

.location-address {
    color: #1B0047;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0 0 5px 0;
    font-family: 'Helvetica', Arial, sans-serif;
}

.location-contact {
    color: #1B0047;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0 0 3px 0;
    font-family: 'Helvetica', Arial, sans-serif;
}

.location-phone {
    color: #1B0047;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    margin: 0 0 10px 0;
    font-family: 'Helvetica', Arial, sans-serif;
}

/* Responsive Design for Schools */
@media (max-width: 1024px) {
    .schools-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 30px;
        justify-content: center;
        padding: 0 20px;
    }

    .schools-column {
        width: 100%;
        max-width: 600px;
        display: block;
        justify-self: center;
    }

    .schools-column--left,
    .schools-column--right {
        grid-column: 1;
    }

    /* Сброс позиционирования для мобильных */
    .schools-column--left .school-item,
    .schools-column--right .school-item {
        grid-column: unset;
        grid-row: unset;
    }
}

@media (max-width: 768px) {
    .school-wrapper {
        padding: 40px 0 60px 0;
    }

    .schools-container {
        padding: 0 20px;
    }

    .schools-column {
        max-width: 100%;
    }

    .school-name {
        font-size: 18px;
    }

    .location-address,
    .location-contact,
    .location-phone {
        font-size: 15px;
    }
}

@media (max-width: 480px) {
    .school-wrapper {
        padding: 30px 0 50px 0;
    }

    .schools-container {
        padding: 0 15px;
    }

    .school-name {
        font-size: 16px;
        margin-bottom: 15px;
    }

    .location-address,
    .location-contact,
    .location-phone {
        font-size: 14px;
    }

    .school-item {
        margin-bottom: 35px;
    }
}
</style>
