<template>
    <!-- Hero Section with Header Overlay -->
    <section class="hero-section">
        <!-- Header Navigation -->
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
            <!-- Placeholder Image - WebP с fallback -->
            <picture v-show="!isVideoReady" class="hero-placeholder">
                <source srcset="/video/first-frame.webp" type="image/webp">
                <img
                    src="/video/first-frame.png"
                    alt="Команда Витязь"
                    class="hero-bg"
                >
            </picture>
            <!-- Video -->
            <video
                v-show="isVideoReady"
                ref="heroVideo"
                class="hero-bg hero-video"
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                @loadeddata="onVideoLoaded"
                @error="onVideoError"
                @canplay="onVideoCanPlay"
            >
                <source src="/video/output.webm" type="video/webm">
                <!-- Fallback to image if video fails -->
                <img src="/video/first-frame.png" alt="Команда Витязь" class="hero-bg">
            </video>
        </div>
    </section>
    <section class="match-day">
        <div class="content-container">
            <div class="section-header-wrapper mb-5">
                <div class="section-item section-item--left">
                    сезон
                </div>
                <div class="section-title">
                    МАТЧИ
                </div>
                <div class="section-item section-item--right">
                    2025
                </div>
            </div>
        </div>
        <MatchCarousel />
    </section>
    <section class="event-section">
        <div class="content-container">
            <div class="section-header-wrapper" style="margin-bottom: 115px;">
                <div class="section-item section-item--left">
                    сезон
                </div>
                <div class="section-title">
                    СОБЫТИЯ
                </div>
                <div class="section-item section-item--right">
                    2025
                </div>
            </div>
            <div class="news-container" ref="newsContainer">
                <!-- Первая новость -->
                <div class="news-item" ref="newsItem1"
                    :class="{ 'animate-in-left': visibleItems.item1, 'news-hidden': !visibleItems.item1 }">
                    <div class="news-photo">
                        <img src="/images/news-photo.jpg" alt="Детская сборная регби" class="news-image">
                    </div>
                    <div class="news-description">
                        <div class="news-title">
                            Детская сборная, отправилась на финал всероссийских соревнований
                        </div>
                        <div class="news-text">
                            Детская сборная Пермского края из с. Кочево выехала на Финал всероссийских соревнований
                            Регбийной школьной Лиги (тэг-регби) в Москву. Команду возглавляет тренер Кочёвской СОШ
                            Андрей Иванович Угробин. Пожелаем ребятам удачи и хороших игр. ...
                        </div>
                    </div>
                </div>
                <div class="news-item" ref="newsItem2"
                    :class="{ 'animate-in-right': visibleItems.item2, 'news-hidden': !visibleItems.item2 }">
                    <div class="news-photo">
                        <img src="/images/news-photo1.jpg" alt="Детская сборная регби" class="news-image">
                    </div>
                    <div class="news-description">
                        <div class="news-title">
                            Женская команда "Витязь" завершила 4 тур Чемпионата России
                        </div>
                        <div class="news-text">
                            В итоговой таблице девушки идут на 6 месте. Впереди еще ожидаются туры в Москве, Казани и
                            Краснодаре. Верим в наших девушек и желаем удачи! Женский "Витязь" уже не раз показывал свое
                            мастерство в игре, а основные победы еще впереди. ...
                        </div>
                    </div>
                </div>
                <div class="news-item last-news-item" ref="newsItem3"
                    :class="{ 'animate-in-left': visibleItems.item3, 'news-hidden': !visibleItems.item3 }">
                    <div class="news-photo">
                        <img src="/images/news-photo2.jpg" alt="Детская сборная регби" class="news-image">
                    </div>
                    <div class="news-description">
                        <div class="news-title">
                            Мужская команда "Витязь" возвращается в Федеральную регбийную лигу
                        </div>
                        <div class="news-text">
                            Матч между пермским «Витязем» и «Энергией» пройдет уже в эту субботу в рамках первого круга
                            Дивизиона «Урал-Поволжье»на стадионе «Тулпар» г. Казань в 11:00 ...
                        </div>
                    </div>

                    <!-- Стрелка в правом нижнем углу этой новости -->
                    <div class="arrow-container">
                        <img src="@/assets/Arrow.svg" alt="Стрелка" class="arrow-icon">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="sponsor-section">
        <div class="content-container">
            <div class="section-header-wrapper" style="margin-bottom: 100px;">
                <div class="section-item section-item--left">
                    СТАТЬ СПОНСОРОМ
                </div>
                <div class="section-title">
                    СПОНСОРЫ
                </div>
                <div class="section-item section-item--right">
                    ПЕРМСКИЙ КРАЙ
                </div>
            </div>
            <div class="container-logo" style="margin-bottom: 100px;">
                <div class="logo-1">
                    <img src="@/assets/eurochem_logo.svg" alt="Лого Еврохим">
                </div>
                <div class="logo-2">
                    <img src="@/assets/regby_rossii_logo.svg" alt="Лого Пермский край">
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

// Video state
const isVideoReady = ref(false)
const heroVideo = ref(null)

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

// Video functions
const onVideoLoaded = () => {
    console.log('Video metadata loaded')
    // Видео готово к воспроизведению, но еще не переключаем
}

const onVideoCanPlay = () => {
    console.log('Video can play through')
    // Добавляем небольшую задержку для плавного перехода
    setTimeout(() => {
        isVideoReady.value = true
        console.log('Video transition activated')
    }, 100)
}

const onVideoError = (error) => {
    console.warn('Video failed to load:', error)
    // Оставляем изображение если видео не загрузилось
    isVideoReady.value = false
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

    // Предзагружаем видео
    if (heroVideo.value) {
        heroVideo.value.load()
    }
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

/* Hero placeholder and video transitions */
.hero-placeholder {
    transition: opacity 0.8s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.hero-video {
    transition: opacity 0.8s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
}

/* Обеспечиваем плавное появление видео */
.hero-image {
    position: relative;
    background-color: #000; /* Предотвращаем белые вспышки */
}

.hero-image .hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Оптимизация для picture элемента */
.hero-placeholder img {
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
</style>
