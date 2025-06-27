<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import TeamModal from '@/components/TeamModal.vue'

// Router
const router = useRouter()

// Dropdown state
const isDropdownOpen = ref(false)
const dropdownRef = ref(null)

// Modal state
const isTeamModalOpen = ref(false)

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

const openTeamModal = () => {
    isTeamModalOpen.value = true
}

const closeTeamModal = () => {
    isTeamModalOpen.value = false
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
                        ФЕДЕРАЛЬНАЯ ЛИГА
                    </div>
                    <div class="section-title">
                        МУЖСКАЯ
                    </div>
                    <div class="section-item section-item--right">
                        КОМАНДА
                    </div>
                </div>
                <div class="row-team_wrapper d-flex flex-wrap">
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl1.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Артем <br> Садаев
                            </div>
                            <div class="amplua">
                                тренер
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl2-2.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Всеволод <br> Гусев
                            </div>
                            <div class="amplua">
                                капитан
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl3.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Денис <br> Стволов
                            </div>
                            <div class="amplua">

                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl4.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Максим <br> Казымов
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl5.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Руслан <br> Абдуллаев
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl6.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Дмитрий <br> Назаренко
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl7.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Даниил <br> Кривощеков
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl8.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Сергей <br> Казанцев
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl9.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Константин <br> Бурдин
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl10.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Никита <br> Ермаков
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl11.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Вячеслав <br> Поддубный
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl12.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Андрей <br> Панов
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl13.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Александр <br> Сергеюк
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl14.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Арсений <br> Исаев
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl15.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Артемий <br> Никулин
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl16.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Виталий <br> Гвоздев
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl17.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Андрей <br> Немцев
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl18.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Артем <br> Лузин
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl19.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Егор <br> Ромашов
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl20.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Ярослав <br> Озерных
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl21.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Демид <br> Книжников
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl22.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Арсений <br> Ковалев
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl23.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Владислав <br> Мажирин
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl24.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Алишер <br> Кемелов
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl_no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Александр <br> Щукин
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl_no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Дмитрий <br> Усатов
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl_no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Руслан <br> Баженов
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl_no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Василий <br> Одинцов
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl_no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Арсен <br> Хазиев
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/pl_no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Иван <br> Платов
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="man-team-action-wrapper">
                    <div class="man-team-action_title">
                        Ведется набор в мужскую
                        сборную Пермского края!
                    </div>
                    <div class="man-team-action_btn" @click="openTeamModal">
                        ХОЧУ В КОМАНДУ!
                    </div>
                </div>
                <div class="section-header-wrapper"
                    style="margin-bottom: 80px; margin-top: 100px; max-width: 1280px; width: 1280px; margin-left: auto; margin-right: auto;">
                    <div class="section-item section-item--left">
                        ПРЕМЬЕР ЛИГА
                    </div>
                    <div class="section-title">
                        ЖЕНСКАЯ
                    </div>
                    <div class="section-item section-item--right">
                        КОМАНДА
                    </div>
                </div>
                <div class="row-team_wrapper d-flex flex-wrap">
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw1.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Ислам <br>Гарифуллин
                            </div>
                            <div class="amplua">
                                тренер
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw2.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Лариса <br> Копеева
                            </div>
                            <div class="amplua">
                                капитан
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw3.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Кристина <br> Власова
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw4.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Дарья <br> Тихомирова
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw5.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Яна <br> Цыбина
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw6.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Анастасия <br> Ворончихина
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw7.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Софья <br> Анисимова
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw8.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Ангелина <br> Недбаевская
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw9.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Диана <br> Яхъяева
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw10.jpeg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Ангелина <br> Амерзянова
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw-no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Милена <br> Балаченкова
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw-no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Дарья <br> Попова
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw-no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Вилена <br> Шуваева
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                    <div class="player">
                        <div class="photo">
                            <img src="/images/plw-no-photo.jpg" alt="pl1">
                        </div>
                        <div class="name-wrapper d-flex justify-content-between">
                            <div class="name">
                                Анастасия <br> Кравчук
                            </div>
                            <div class="amplua">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="man-team-action-wrapper">
                    <div class="man-team-action_title">
                        Ведется набор в женскую
                        сборную Пермского края!
                    </div>
                    <div class="man-team-action_btn" @click="openTeamModal">
                        ХОЧУ В КОМАНДУ!
                    </div>
                </div>
                <div class="section-header-wrapper"
                    style="margin-bottom: 80px; margin-top: 100px; max-width: 1280px; width: 1280px; margin-left: auto; margin-right: auto;">
                    <div class="section-item section-item--left">
                        ФЕДЕРАЦИЯ РЕГБИ
                    </div>
                    <div class="section-title">
                        ДИРЕКЦИЯ
                    </div>
                    <div class="section-item section-item--right">
                        КЛУБ ВИТЯЗЬ
                    </div>
                </div>
                <div class="directorate-wrapper">
                    <div class="directorate-item">
                        <div class="directorate-item_photo">
                            <img src="/images/dir1.jpg" alt="dir1">
                        </div>
                        <div class="directorate-item_description">
                            <div class="directorate-item_name">
                                Алексей <br> Конев
                            </div>
                            <div class="directorate-item_post">
                                Президент Федерации регби Пермского края
                            </div>
                        </div>
                    </div>
                    <div class="directorate-item">
                        <div class="directorate-item_photo">
                            <img src="/images/dir2.jpg" alt="dir1">
                        </div>
                        <div class="directorate-item_description">
                            <div class="directorate-item_name">
                                Кирилл <br> Тропинин
                            </div>
                            <div class="directorate-item_post" style="width: 293px;">
                                Директор регби-клуба "Витязь" исполнительный Директор Федерации регби Пермского края
                            </div>
                        </div>
                    </div>
                </div>
                <div class="directorate-wrapper" style="margin-top: 50px;">
                    <div class="directorate-item">
                        <div class="directorate-item_photo">
                            <img src="/images/dir3.jpg" alt="dir1">
                        </div>
                        <div class="directorate-item_description">
                            <div class="directorate-item_name">
                                Анастасия <br> Ворончихина
                            </div>
                            <div class="directorate-item_post">
                                заместитель исполнительного директора Федерации регби Пермского края
                            </div>
                        </div>
                    </div>
                    <div class="directorate-item">
                        <div class="directorate-item_photo">
                            <img src="/images/dir4.jpg" alt="dir1">
                        </div>
                        <div class="directorate-item_description">
                            <div class="directorate-item_name">
                                Василий <br> Вахрин
                            </div>
                            <div class="directorate-item_post" style="width: 293px;">
                                пресс-центр
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

        <!-- Модальное окно заявки в команду -->
        <TeamModal
            :isOpen="isTeamModalOpen"
            @close="closeTeamModal"
        />
    </div>
</template>

<style scoped>
.logo-regby{
    width:135px
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
</style>
