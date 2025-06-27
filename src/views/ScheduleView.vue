<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import TeamModal from '@/components/TeamModal.vue'

// Modal state
const isModalOpen = ref(false)

// Open modal function
const openModal = () => {
    isModalOpen.value = true
}

// Close modal function
const closeModal = () => {
    isModalOpen.value = false
}
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
                        <button class="cta-button" @click="openModal">ХОЧУ В КОМАНДУ!</button>
                    </div>
                </div>
            </div>
        </section>
        <div style="margin-top: 100px;">
            <AppFooter />
        </div>

        <!-- Team Modal -->
        <TeamModal :isOpen="isModalOpen" @close="closeModal" />
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



.footer-container {
    margin: 0 auto;
    width: 1280px;
    max-width: 1280px;
    padding-top: 75px;
    padding-bottom: 75px;
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
