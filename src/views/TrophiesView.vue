<script setup>

</script>
<template>
    <div>
        <div class="header-wrapper">
            <div class="header-container d-flex justify-content-between align-items-center">
                <div class="logo-left">
                    <img src="@/assets/logo-vityaz.svg" alt="Витязь" class="logo-vityaz">
                </div>
                <div class="nav-right_wrapper d-flex align-items-center">
                    <div class="header-nav_wrapper d-flex gap-5 align-items-start"
                        style="margin-right: 55px;transform: translateY(12px);">
                        <div class="header-nav_item">
                            <a href="#">команда</a>
                        </div>
                        <div class="header-nav_item">
                            <a href="#">матчи</a>
                        </div>
                        <div class="header-nav_item">
                            <a href="#">спонсоры</a>
                        </div>
                        <div class="header-nav_item p-0 text-left">
                            <a class="p-0" href="#">детское<br>регби</a>
                        </div>
                    </div>
                    <div class="icon-wrapper d-flex gap-3" style="margin-right: 45px;">
                        <div class="header-icon">
                            <img src="@/assets/footer-icon_tg.svg" alt="телеграм">
                        </div>
                        <div class="header-icon">
                            <img src="@/assets/footer-icon_vk.svg" alt="вконтакте">
                        </div>
                        <div class="header-icon">
                            <img src="@/assets/footer-icon_mail.svg" alt="почта">
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
                        <div class="achievements-text">
                            В сезоне 2025г мужская сборная играет в Федеральной регбийной Лиге<br><br>

                            Достижения:<br>
                            Обладатели Кубка России по пляжному регби<br>
                            Участники Чемпионата Высшей Лиги по регби-7 2020 – 2024 гг<br>
                            Призеры Кубка России по пляжному регби 2022 г<br>
                            Серебряные призеры 1 тура Чемпионата Высшей Лиги 2020 г<br>
                            Чемпионы Приволжского Федерального округа по регби-7 2020<br>
                            Обладатели Кубка Москвы по регби на снегу<br>
                            Обладатели Кубка Пермского края по регби на снегу<br><br>

                            Игроки мужской команды входили в состав сборной России по регби-7
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
                    <div class="achievements-container">
                        <div class="achievements-text">
                            В сезоне 2025г женская сборная играет в Премьер-лиге Чемпионата России по регби-7<br><br>

                            Достижения:<br>
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

                            Игроки нашей команды в составе сборной России становились абсолютными чемпионами Европы по пляжному регби и регби на снегу
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
    </div>
</template>

<style scoped>
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
    gap: 90px;
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
    padding-top: 57px;
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
}

.achievements-text {
    font-size: 16px;
    line-height: 25px;
    color: #1B0047;
    text-align: left;
    max-width: 900px;
    margin: 0 auto;
}
</style>
