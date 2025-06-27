<template>
    <div class="header-wrapper">
        <div class="header-container d-flex justify-content-between align-items-center">
            <div class="logo-left">
                <a href="#" @click.prevent="goToHome" class="logo-link">
                                        <img
                        :src="logoSrc"
                        alt="Витязь"
                        class="logo-vityaz"
                    >
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
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import logoVityazWithout from '@/assets/logo_vityaz_without.svg'
import logoVityaz from '@/assets/logo-vityaz.svg'

// Props
const props = defineProps({
    logoVariant: {
        type: String,
        default: 'without', // 'without' или 'with'
        validator: (value) => ['without', 'with'].includes(value)
    }
})

// Computed property for logo source
const logoSrc = computed(() => {
    return props.logoVariant === 'without' ? logoVityazWithout : logoVityaz
})



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

// Navigation functions
const goToHome = () => {
    router.push('/')
}

const scrollToMatches = () => {
    router.push('/#matches-section')
}

const scrollToSponsors = () => {
    router.push('/#sponsors-section')
}

const goToSchool = () => {
    router.push('/school')
}

const goToTeam = () => {
    isDropdownOpen.value = false
    router.push('/team')
}

const goToTrophies = () => {
    isDropdownOpen.value = false
    router.push('/trophies')
}

const goToSchedule = () => {
    isDropdownOpen.value = false
    router.push('/schedule')
}

// Global click handler for closing menu
const handleGlobalClick = (event) => {
    closeDropdown(event)
}

// Add and remove global click handler
onMounted(() => {
    document.addEventListener('click', handleGlobalClick)
})

onUnmounted(() => {
    document.removeEventListener('click', handleGlobalClick)
})
</script>

<style scoped>
.header-wrapper {
    background-color: #1B0047;
}

.header-container {
    max-width: 1280px;
    width: 1280px;
    margin: 0 auto;
    padding-top: 30px;
    padding-bottom: 28px;
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

.logo-regby {
    width: 135px;
}

.header-nav_item a {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.2px;
    text-decoration: none;
    text-transform: uppercase;
}

.header-nav_link {
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 19.2px;
    text-decoration: none;
    text-transform: uppercase;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.header-icon a {
    display: inline-block;
    transition: transform 0.3s ease;
}

.header-icon a:hover {
    transform: scale(1.1);
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
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 1.2;
    text-transform: uppercase;
    transition: all 0.3s ease;
    padding: 10px 25px;
    border-radius: 4px;
    margin: 0 10px;
}

.dropdown-link:hover {
    color: #ED1B26;
    background: rgba(237, 27, 38, 0.05);
}
</style>
