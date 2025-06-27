<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
<template>
    <div>
        <AppHeader />
        <section class="man-team-section">
            <div class="team-container">
                <div class="section-header-wrapper"
                    style="margin-bottom: 80px; margin-top: 100px; max-width: 1280px; width: 1280px; margin-left: auto; margin-right: auto;">
                    <div class="section-item section-item--left">
                        ФЕДЕРАЦИЯ РЕГБИ
                    </div>
                    <div class="section-title">
                        ЗАЛ СЛАВЫ
                    </div>
                    <div class="section-item section-item--right">
                        КЛУБ ВИТЯЗЬ
                    </div>
                </div>

                <!-- Секция с трофеями -->
                <div class="trophies-section">
                    <div class="trophies-container">
                        <!-- Трофеи -->
                        <div class="trophies-wrapper">
                            <div class="trophy-item">
                                <div class="trophy-image">
                                    <img src="/images/trophy1.jpg" alt="Чемпионат России по регби пляжному">
                                </div>
                                <div class="trophy-title">
                                    Чемпионат России<br>по регби пляжному
                                </div>
                            </div>
                            <div class="trophy-item">
                                <div class="trophy-image">
                                    <img src="/images/trophy2.jpg" alt="Кубок России по регби пляжному">
                                </div>
                                <div class="trophy-title">
                                    Кубок России<br>по регби пляжному
                                </div>
                            </div>
                            <div class="trophy-item">
                                <div class="trophy-image">
                                    <img src="/images/trophy3.jpg" alt="Чемпионат России по регби на снегу">
                                </div>
                                <div class="trophy-title">
                                    Чемпионат России<br>по регби на снегу
                                </div>
                            </div>
                            <div class="trophy-item">
                                <div class="trophy-image">
                                    <img src="/images/trophy4.jpg" alt="Чемпионат Федеральной лиги">
                                </div>
                                <div class="trophy-title">
                                    Чемпионат Федеральной лиги
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Секция мужской команды -->
                <div class="section-header-wrapper"
                    style="margin-bottom: 80px; margin-top: 100px; max-width: 1280px; width: 1280px; margin-left: auto; margin-right: auto;">
                    <div class="section-item section-item--left">
                        ФЕДЕРАЦИЯ РЕГБИ
                    </div>
                    <div class="section-title">
                        МУЖСКАЯ
                    </div>
                    <div class="section-item section-item--right">
                        КЛУБ ВИТЯЗЬ
                    </div>
                </div>

                <div class="achievements-section">
                    <div class="achievements-container">
                        <div class="achievements-photo">
                            <img src="/images/man-trophies.jpg" alt="Мужская команда с трофеями">
                        </div>
                        <div style="flex: 0 0 50%; width: 50%;">
                            <div class="achievements-title">
                            Достижения:
                        </div>
                        <div class="achievements-text">
                            Обладатели Кубка России по пляжному регби<br>
                            Участники Чемпионата Высшей Лиги по регби-7 2020 – 2024 гг<br>
                            Призеры Кубка России по пляжному регби 2022 г<br>
                            Серебряные призеры 1 тура Чемпионата Высшей Лиги 2020 г<br>
                            Чемпионы Приволжского Федерального округа по регби-7 2020<br>
                            Обладатели Кубка Москвы по регби на снегу<br>
                            Обладатели Кубка Пермского края по регби на снегу<br><br>

                            Игроки мужской команды входили в состав сборной России по регби-7<br><br>

                            В сезоне 2025г мужская сборная играет в Федеральной регбийной Лиге
                        </div>
                        </div>

                    </div>
                </div>

                <!-- Секция женской команды -->
                <div class="section-header-wrapper"
                    style="margin-bottom: 80px; margin-top: 100px; max-width: 1280px; width: 1280px; margin-left: auto; margin-right: auto;">
                    <div class="section-item section-item--left">
                        ФЕДЕРАЦИЯ РЕГБИ
                    </div>
                    <div class="section-title">
                        ЖЕНСКАЯ
                    </div>
                    <div class="section-item section-item--right">
                        КЛУБ ВИТЯЗЬ
                    </div>
                </div>

                <div class="achievements-section">
                    <div class="achievements-container" style="display: flex; flex-direction: column; gap: 0px;">
                        <div class="achievements-title">
                            Достижения:
                        </div>
                        <div class="achievements-text">
                            В сезоне 2025г женская сборная играет в Премьер-лиге Чемпионата России по регби-7<br><br>
                            Серебряные призеры Чемпионата России по пляжному регби 2024г<br>
                            Призеры Чемпионата России по регби на снегу 2024г<br>
                            Чемпионы России по снежному регби 2023г<br>
                            Трехкратные обладатели Кубка России по пляжному регби 2021, 2022, 2023 гг<br>
                            Серебряные призеры Чемпионата России по регби-7 среди студентов 2020 г<br>
                            Чемпионы России по пляжному регби 2019г<br>
                            Трехкратные Чемпионы Федеральной лиги 2016, 2017, 2018 гг.<br>
                            Лидеры международного турнира по пляжному регби "the Baltic Sea" г.Рига<br>
                            Лидеры международного регбийного турнира в Батуми<br><br>

                            Сезон 2024г команда закончила на 4 месте Премьер-Лиги Чемпионата России по регби-7<br><br>

                            Игроки нашей команды в составе сборной России становились абсолютными чемпионами Европы по <br> пляжному регби и регби на снегу
                        </div>
                        <div class="achievements-woman-photo">
                            <img src="/images/woman-trophies.jpg" alt="Женская команда с трофеями">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div style="margin-top: 100px;">
            <AppFooter />
        </div>
    </div>
</template>

<style scoped>
.achievements-title{
    font-size: 22px;
    line-height: 26px;
    color: #1B0047;
    font-weight: bold;
    margin-bottom: 30px;
}

.achievements-woman-photo {
    width: 100%;
    margin-top: 40px;
}

.achievements-woman-photo img {
    width: 100%;
    height: auto;
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

/* Стили для трофеев */
.trophies-section {
    margin-top: 60px;
    margin-bottom: 60px;
}

.trophies-container {
    max-width: 1280px;
    width: 1280px;
    margin: 0 auto;
}

.trophies-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.trophy-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(25% - 15px);
}

.trophy-image {
    width: 100%;
    height: 400px;
    margin-bottom: 20px;
    overflow: hidden;
    border-radius: 8px;
}

.trophy-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.trophy-title {
    font-size: 16px;
    line-height: 25px;
    color: #1B0047;
    text-align: center;
    font-weight: 400;
}

/* Стили для достижений */
.achievements-section {
    margin-bottom: 60px;
}

.achievements-container {
    max-width: 1280px;
    width: 1280px;
    margin: 0 auto;
    display: flex;
    gap: 50px;
    align-items: flex-start;
}

.achievements-photo {
    flex: 0 0 50%;
    width: 50%;
}

.achievements-photo img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

.achievements-text {
    font-size: 16px;
    line-height: 25px;
    color: #1B0047;
    text-align: left;
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
</style>
