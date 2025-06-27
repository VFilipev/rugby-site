<template>
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
                                    <br>
                                    <a href="https://vk.com/rugbyprm" target="_blank" rel="noopener noreferrer" class="contact-link">
                                        rugbyprm
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
                                <a href="https://www.eurochem.ru/" target="_blank" rel="noopener noreferrer" @click="openEuroChem">
                                    <img src="@/assets/footer-icon_eurochem.svg" alt="footer-icon_eurochem">
                                </a>
                            </div>
                            <div class="sponsors_icon" style="margin-left: 51px;">
                                <a href="https://rugby.ru/" target="_blank" rel="noopener noreferrer" @click="openRugbyRussia">
                                    <img src="@/assets/footer-icon_rugby.svg" alt="footer-icon_rugby">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </footer>
</template>

<script setup>
// Функция принудительного открытия EuroChem в новом окне
const openEuroChem = (event) => {
    event.preventDefault()
    window.open('https://www.eurochem.ru/', '_blank', 'noopener,noreferrer')
}

// Функция принудительного открытия Rugby Russia в новом окне
const openRugbyRussia = (event) => {
    event.preventDefault()
    window.open('https://rugby.ru/', '_blank', 'noopener,noreferrer')
}
</script>

<style scoped>
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

.sponsors_icon a {
    display: inline-block;
    transition: transform 0.3s ease;
    cursor: pointer;
}

.sponsors_icon a:hover {
    transform: scale(1.05);
}

.sponsors_icon img {
    display: block;
    max-width: 100%;
    height: auto;
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

/* Footer mobile styles */
@media (max-width: 1024px) {
    .footer-container {
        width: 100%;
        padding: 40px 20px;
    }
}

@media (max-width: 768px) {
    .footer-container .row {
        flex-direction: column;
        gap: 30px;
    }

    .footer-container .col-2,
    .footer-container .col-4 {
        width: 100%;
        max-width: 100%;
        flex: none;
    }

    .footer-title_sponsors {
        font-size: 16px;
        margin-bottom: 20px;
    }

    .row-sponsors_icon {
        justify-content: flex-start;
        gap: 30px;
    }

    .sponsors_icon {
        margin-left: 0 !important;
    }

    .footer-title_contacts,
    .footer-title_sponsors {
        font-size: 16px;
        font-weight: 600;
    }
}
</style>
