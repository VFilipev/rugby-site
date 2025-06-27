<script setup>
import AppHeader from '@/components/AppHeader.vue'

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

// Функция перехода на главную страницу
const goToHome = () => {
    router.push('/')
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
                    <a href="#" @click.prevent="goToHome" class="logo-link">
                        <img src="@/assets/logo_vityaz_without.svg" alt="Витязь" class="logo-vityaz">
                    </a>
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
        <section class="events-section">
            <div class="events-container">
                <div class="section-header-wrapper"
                    style="margin-bottom: 100px; margin-top: 100px; max-width: 1280px; width: 1280px; margin-left: auto; margin-right: auto;">
                    <div class="section-item section-item--left">
                        НОВОСТИ
                    </div>
                    <div class="section-title">
                        СОБЫТИЯ
                    </div>
                    <div class="section-item section-item--right">
                        2025
                    </div>
                </div>
                <div class="row-news_wrapper">
                    <div class="news-item">
                        <div class="news-item_photo">
                            <img src="/images/news-photo.jpg" alt="Детская сборная регби">
                        </div>
                        <div class="news-item_description">
                            <div class="news-item_header d-flex justify-content-between">
                                <div class="news-item_title">
                                    Детская сборная, отправилась на финал всероссийских соревнований
                                </div>
                                <div class="news-item_date">
                                    10 ИЮНЯ
                                </div>
                            </div>
                            <div class="news-item_text">
                                Детская сборная Пермского края из с. Кочево выехала на Финал всероссийских соревнований
                                Регбийной школьной Лиги (тэг-регби) в Москву. Команду возглавляет тренер Кочёвской СОШ
                                Андрей Иванович Утробин. Пожелаем ребятам удачи и хороших игр. Проект развития детского
                                регби и тэг-регби в Крае реализуется при полной поддержке Федерации регби Пермского края
                                и партнера «ЕвроХим»
                            </div>
                        </div>
                    </div>
                    <div class="news-item">
                        <div class="news-item_photo">
                            <img src="/images/news-photo1.jpg" alt="Детская сборная регби">
                        </div>
                        <div class="news-item_description">
                            <div class="news-item_header d-flex justify-content-between">
                                <div class="news-item_title">
                                    Женская команда "Витязь" завершила 4 тур Чемпионата России
                                </div>
                                <div class="news-item_date">
                                    1 ИЮНЯ
                                </div>
                            </div>
                            <div class="news-item_text">
                                Женская профессиональная команда "Витязь" завершила 4 тур Чемпионата России по регби-7 в
                                Красноярске. В итоговой таблице девушки идут на 6 месте. Впереди еще ожидаются туры в
                                Москве, Казани и Краснодаре. Верим в наших девушек и желаем удачи! Женский "Витязь" уже
                                не раз показывал свое мастерство в игре, а основные победы еще впереди. Тренерский
                                состав и менеджмент команды готовы поддерживать игроков на пути к достижению высших
                                результатов.
                            </div>
                        </div>
                    </div>
                    <div class="news-item-full">
                        <div class="news-item_photo">
                            <img src="/images/news-photo_full.jpg" alt="Детская сборная регби">
                        </div>
                        <div class="news-item_description" style="padding-top: 50px; padding-right: 80px;">
                            <div class="news-item_header d-flex justify-content-between">
                                <div class="news-item_title" style="color: #fff;">
                                    Мужская команда "Витязь" возвращается в Федеральную регбийную лигу
                                </div>
                                <div class="news-item_date" style="color: #fff;">
                                    24 МАЯ
                                </div>
                            </div>
                            <div class="news-item_text" style="color: #fff; max-width: 440px;">
                                В преддверии игр: Интервью с капитаном команды РК «Витязь» Всеволодом Гусевым
                                Матч между пермским «Витязем» и «Энергией» пройдет уже в эту субботу в рамках первого
                                круга Дивизиона «Урал-Поволжье»на стадионе «Тулпар» г. Казань в 11:00
                            </div>
                        </div>
                    </div>
                    <div class="news-item">
                        <div class="news-item_photo">
                            <img src="/images/news-photo3.jpg" alt="Детская сборная регби">
                        </div>
                        <div class="news-item_description">
                            <div class="news-item_header d-flex justify-content-between">
                                <div class="news-item_title">
                                    Федерация регби Пермского края заключила спонсорское соглашение с предприятием "ЕвроХим"
                                </div>
                                <div class="news-item_date">
                                    10 МАЯ
                                </div>
                            </div>
                            <div class="news-item_text">
                                Федерация регби Пермского края заключила рекламно-спонсорское соглашение с предприятием "ЕвроХим-Усольский калийный комбинат". Организации договорились о всесторонней поддержке и сотрудничестве по развитию регби в Крае. Часть обязанностей по рекламной деятельности возложена на регбийный клуб "Витязь" в лице мужской команды, выступающей в Федеральной регбийной лиге, а также профессиональной женской команды регби-7.
                            </div>
                        </div>
                    </div>
                    <div class="news-item">
                        <div class="news-item_photo">
                            <img src="/images/news-photo4.jpg" alt="Детская сборная регби">
                        </div>
                        <div class="news-item_description">
                            <div class="news-item_header d-flex justify-content-between">
                                <div class="news-item_title">
                                    В команде РК «Витязь» и Федерации регби Пермского края поменялся спортивный менеджмент.
                                </div>
                                <div class="news-item_date">
                                    1 МАЯ
                                </div>
                            </div>
                            <div class="news-item_text">
                                Единогласным решением учредителей клуба новым директором регбийного клуба "Витязь" избран Кирилл Тропинин. Также Кирилл назначен исполнительным директором Федерации регби Пермского края. Кирилл выходец из другого спорта, профессиональный спортсмен смешанных единоборств (ММА), при этом последние несколько лет входил в  менеджмент гос. корпорации "Ростех", где отвечал за взаимодействие с заказчиками гражданской продукции. Новый директор дал небольшое интервью для Федерации регби России
                            </div>
                        </div>
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
.logo-regby{
    width:135px
}
.footer-title_sponsors{
    margin-bottom: 33px;
}
.footer-title_contacts{
    margin-bottom: 20px;
}
.contact-item_text{
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

.events-container {}

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
    font-size: 14px;
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

.row-news_wrapper {
    display: flex;
    flex-direction: column;
    gap: 65px;
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

.logo-link {
    display: inline-block;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.logo-link:hover {
    transform: scale(1.05);
}

.logo-vityaz {
    display: block;
    max-width: 100%;
    height: auto;
}
</style>
