<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

// Router
const router = useRouter()

// Dropdown state
const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

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

// Функция плавной прокрутки к секции матчей
const scrollToMatches = () => {
    router.push('/#matches-section')
}

// Функция плавной прокрутки к секции спонсоров
const scrollToSponsors = () => {
    router.push('/#sponsors-section')
}

// Функция перехода к школе регби
const goToSchool = () => {
    router.push('/school')
}

// Функция перехода к команде
const goToTeam = () => {
    isDropdownOpen.value = false
    router.push('/team')
}

// Функция перехода к трофеям
const goToTrophies = () => {
    isDropdownOpen.value = false
    router.push('/trophies')
}

// Функция перехода к расписанию
const goToSchedule = () => {
    isDropdownOpen.value = false
    router.push('/schedule')
}

// Глобальный обработчик клика для закрытия меню
const handleGlobalClick = (event) => {
    closeDropdown(event)
}

// Добавляем и удаляем глобальный обработчик клика
onMounted(() => {
    document.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
    document.removeEventListener('click', handleGlobalClick)
})
</script>
<template>
    <div>
        <div class="header-wrapper">
            <div class="header-container d-flex justify-content-between align-items-center">
                <div class="logo-left">
                    <img src="@/assets/logo_vityaz_without.svg" alt="Витязь" class="logo-vityaz">
                </div>
                <div class="nav-right_wrapper d-flex align-items-center">
                    <div class="header-nav_wrapper d-flex gap-5 align-items-start"
                        style="margin-right: 55px;transform: translateY(12px);">
                        <div class="header-nav_item dropdown-container" ref="dropdownRef">
                            <a href="#" class="header-nav_link" @click.prevent="toggleDropdown">
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
                                    <li><a href="#" class="dropdown-link" @click.prevent="goToTeam">состав</a></li>
                                    <li><a href="#" class="dropdown-link" @click.prevent="goToSchedule">тренировки</a></li>
                                    <li><a href="#" class="dropdown-link" @click.prevent="goToTrophies">зал славы</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="header-nav_item">
                            <a href="#" @click.prevent="scrollToMatches">матчи</a>
                        </div>
                        <div class="header-nav_item">
                            <a href="#" @click.prevent="scrollToSponsors">спонсоры</a>
                        </div>
                        <div class="header-nav_item p-0 text-left">
                            <a class="p-0" href="#" @click.prevent="goToSchool">детское<br>регби</a>
                        </div>
                    </div>
                    <div class="icon-wrapper d-flex gap-3" style="margin-right: 45px;">
                        <div class="header-icon">
                            <a href="https://t.me/rugbyprm" target="_blank" rel="noopener noreferrer">
                                <img src="@/assets/footer-icon_tg.svg" alt="телеграм">
                            </a>
                        </div>
                        <div class="header-icon">
                            <a href="https://vk.com/vityaz_rugby" target="_blank" rel="noopener noreferrer">
                                <img src="@/assets/footer-icon_vk.svg" alt="вконтакте">
                            </a>
                        </div>
                        <div class="header-icon">
                            <a href="mailto:region59@rugby.ru" target="_blank" rel="noopener noreferrer">
                                <img src="@/assets/footer-icon_mail.svg" alt="почта">
                            </a>
                        </div>
                    </div>
                    <div class="logo-right">
                        <img src="@/assets/logo-regby-permskiy-krai.svg" alt="Регби Пермского края" class="logo-regby">
                    </div>
                </div>
            </div>
        </div>
        <section class="man-team-section">
            <div class="team-container">
                <div class="section-header-wrapper"
                    style="margin-bottom: 80px; margin-top: 100px; max-width: 1280px; width: 1280px; margin-left: auto; margin-right: auto;">
                    <div class="section-item section-item--left">
                        ФЕДЕРАЦИЯ РЕГБИ
                    </div>
                    <div class="section-title">
                        РАСПИСАНИЕ
                    </div>
                    <div class="section-item section-item--right">
                        КЛУБ ВИТЯЗЬ
                    </div>
                </div>

                <!-- Блок с расписанием -->
                <div class="schedule-content">
                    <!-- Мужская команда -->
                    <div class="team-schedule">
                        <div class="d-flex" style="gap: 85px;">
                            <h2 class="team-title">Мужская<br>команда</h2>
                            <div class="location-info">
                                <p>Стадион Локомотив<br>г. Пермь, Ул. Боровая 32к2</p>
                            </div>
                        </div>
                        <div class="schedule-table">
                            <div class="schedule-column">
                                <div class="schedule-day">Понедельник</div>
                                <div class="schedule-day">Вторник</div>
                                <div class="schedule-day">Четверг</div>
                                <div class="schedule-day">Воскресенье</div>
                            </div>
                            <div class="schedule-column">
                                <div class="schedule-time">20:30 - 21:30</div>
                                <div class="schedule-time">20:00 - 21:30</div>
                                <div class="schedule-time">20:00 - 21:30</div>
                                <div class="schedule-time">12:00 - 13:30</div>
                            </div>
                            <div class="schedule-column">
                                <div class="schedule-type">кроссфит "место силы"</div>
                                <div class="schedule-type">технико-тактическая</div>
                                <div class="schedule-type">технико-тактическая</div>
                                <div class="schedule-type">игровая</div>
                            </div>
                        </div>
                        <div class="schedule-info">
                            <div class="trainer-info">
                                <p>Тренер: Артем Садыев<br>@ArtSadyev</p>
                            </div>
                        </div>
                    </div>

                    <!-- Женская команда -->
                    <div class="team-schedule">
                        <h2 class="team-title">Женская<br>команда</h2>
                        <div class="schedule-info">
                            <div class="trainer-info">
                                <p>Тренировки проходят<br>по предварительной записи</p>
                                <p>Тренер: Ислам Гарифуллин<br>@islamiosss</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Блок призыва к действию -->
                <div class="cta-section">
                    <div class="cta-content">
                        <h3 class="cta-title">Ведется набор в мужскую и женскую<br>сборную Пермского края!</h3>
                        <button class="cta-button">ХОЧУ В КОМАНДУ!</button>
                    </div>
                </div>
            </div>
        </section>
        <div class="footer-wrapper" style="margin-top: 100px;">
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
                                    <a href="mailto:region59@rugby.ru" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/footer-icon_mail.svg" alt="icon_mail">
                                    </a>
                                </div>
                                <div class="contact-item_text">
                                    <a href="mailto:region59@rugby.ru" target="_blank" rel="noopener noreferrer" class="contact-link">
                                        region59@rugby.ru
                                    </a>
                                </div>
                            </div>
                            <div class="contact-row d-flex">
                                <div class="contact-item_icon">
                                    <a href="https://t.me/rugbyprm" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/footer-icon_tg.svg" alt="icon_mail">
                                    </a>
                                </div>
                                <div class="contact-item_text">
                                    <a href="https://t.me/rugbyprm" target="_blank" rel="noopener noreferrer" class="contact-link">
                                        @rugbyprm
                                    </a>
                                </div>
                            </div>
                            <div class="contact-row d-flex">
                                <div class="contact-item_icon">
                                    <a href="https://vk.com/vityaz_rugby" target="_blank" rel="noopener noreferrer">
                                        <img src="@/assets/footer-icon_vk.svg" alt="icon_mail">
                                    </a>
                                </div>
                                <div class="contact-item_text" style="margin-left: 9px;">
                                    <a href="https://vk.com/vityaz_rugby" target="_blank" rel="noopener noreferrer" class="contact-link">
                                        vityaz_rugby
                                    </a>
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
    </div>
</template>

<style scoped>
.header-nav_item a {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 19.2px;
    text-decoration: none;
}

.header-nav_link {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 19.2px;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

/* Dropdown Container */
.dropdown-container {
    display: flex;
    align-items: center;
    gap: 10px;
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
    z-index: 9999;
    background: white;
    padding: 15px 0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(27, 0, 71, 0.1);
}

.dropdown-menu-custom.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(51px);
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
    color: #1B0047 !important;
    text-decoration: none;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.2;
    transition: all 0.3s ease;
    padding: 10px 25px;
    border-radius: 4px;
    margin: 0 10px;
}

.dropdown-link:hover {
    color: #ED1B26;
    background: rgba(237, 27, 38, 0.05);
}

.logo-regby {
    width: 135px
}

.directorate-wrapper {
    width: 973px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}

.directorate-item_post {
    font-size: 16px;
    line-height: 25px;
    width: 180px;
}

.directorate-item_name {
    font-size: 22px;
    line-height: 26px;
    color: #1B0047;
}

.directorate-item_description {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.directorate-item {
    display: flex;
    gap: 51px
}

.man-team-action_btn {
    background-color: #ED1B26;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
    color: #fff;
    border-radius: 5px;
}

.man-team-action_title {
    font-size: 22px;
    line-height: 26px;
    color: #1B0047;
}

.man-team-action_btn:hover {
    cursor: pointer;
}

.man-team-action-wrapper {
    width: 273px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.amplua {
    font-size: 10px;
    color: #fff;
}

.name {
    color: #fff;
    font-size: 14px;
    line-height: 1;
}

.name-wrapper {
    height: 55px;
    background-color: #1B0047;
    padding-top: 14px;
    padding-left: 17px;
    padding-right: 17px;
    width: 184px;
}

.row-team_wrapper {
    max-width: 1280px;
    width: 1280px;
    margin: 0 auto;
    column-gap: 90px;
    row-gap: 50px;
}

.footer-title_sponsors {
    margin-bottom: 33px;
}

.footer-title_contacts {
    margin-bottom: 20px;
}

.contact-item_text {
    margin-left: 14px;
}

.contact-link {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact-link:hover {
    color: #ED1B26;
}

.header-icon a {
    display: inline-block;
    transition: transform 0.3s ease;
}

.header-icon a:hover {
    transform: scale(1.1);
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

.news-item-full {
    background-color: #1B0047;
    display: flex;
    width: 100%;
    gap: 50px;
}

.news-item_text {
    margin-top: 30px;
    color: #1B0047;
    font-size: 16px;
    line-height: 25px;
}

.news-item_title {
    color: #1B0047;
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    max-width: 366px;
}

.news-item_date {
    color: #1B0047;
    font-size: 20px;
    font-family: 'Rossika';
    font-weight: 400;

}

.news-item {
    display: flex;
    width: 100%;
    max-width: 1280px;
    width: 1280px;
    margin: 0 auto;
    gap: 50px;
}

.news-item_photo,
.news-item_description {
    width: calc(50% - 25px);
    flex: 0 0 calc(50% - 25px);
}

.news-item_photo img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
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

.header-nav_item a {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 19.2px;
    text-decoration: none;
}

.header-container {
    max-width: 1280px;
    width: 1280px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 33px;
}

.header-wrapper {
    background-color: #1B0047;
}

.player {
    width: 184px;
    margin-bottom: 40px;
}

.photo {
    width: 184px;
    height: 220px;
    overflow: hidden;
}

.photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

/* Стили для расписания */
.schedule-content {
    max-width: 1280px;
    width: 1280px;
    padding-left: 120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    gap: 100px;
    margin-bottom: 100px;
}

.team-schedule {
    flex: 1;
}

.team-title {
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 22px;
    font-weight: 700;
    color: #1B0047;
    line-height: 1.18;
    margin-bottom: 30px;
}

.schedule-info {
    margin-top: 30px;
}

.location-info p,
.trainer-info p {
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #1B0047;
    line-height: 1.56;
    margin-bottom: 15px;
}

.schedule-table {
    display: flex;
    gap: 50px;
}

.schedule-column {
    display: flex;
    flex-direction: column;
}

.schedule-day,
.schedule-time {
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #1B0047;
    line-height: 1.56;
    padding: 5px 0;
}

.schedule-type {
    font-family: 'Helvetica', Arial, sans-serif;
    font-size: 13px;
    font-weight: 400;
    color: #1B0047;
    line-height: 1.92;
    padding: 5px 0;
}

/* Блок призыва к действию */
.cta-section {
    max-width: 1280px;
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.cta-content {
    text-align: center;
    max-width: 457px;
}

.cta-title {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #1B0047;
    line-height: 1.21;
    margin-bottom: 35px;
}

.cta-button {
    background-color: #ED1B26;
    color: white;
    border: none;
    border-radius: 3px;
    padding: 15px 30px;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.19;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #d41620;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .schedule-content {
        flex-direction: column;
        gap: 50px;
        padding: 0 20px;
    }

    .schedule-table {
        gap: 30px;
    }
}

@media (max-width: 768px) {
    .schedule-table {
        flex-direction: column;
        gap: 20px;
    }

    .schedule-column {
        gap: 5px;
    }

    .team-title {
        font-size: 20px;
    }

    .cta-title {
        font-size: 20px;
    }
}
</style>
