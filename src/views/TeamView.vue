<script setup>
import { ref } from 'vue'
import TeamModal from '@/components/TeamModal.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

// Modal state
const isTeamModalOpen = ref(false)

const openTeamModal = () => {
    isTeamModalOpen.value = true
}

const closeTeamModal = () => {
    isTeamModalOpen.value = false
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
                <div class="section-header-wrapper">
                    <div class="section-item section-item--left d-none d-md-block">
                        ФЕДЕРАЦИЯ РЕГБИ
                    </div>
                    <div class="section-title d-none d-md-block">
                        ДИРЕКЦИЯ
                    </div>
                    <div class="section-item section-item--right d-none d-md-block">
                        КЛУБ ВИТЯЗЬ
                    </div>
                </div>
                <div class="directorate-wrapper d-none d-md-flex">
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
                <div class="directorate-wrapper d-none d-md-flex" style="margin-top: 50px;">
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
        <div style="margin-top: 100px;">
            <AppFooter />
        </div>

        <!-- Модальное окно заявки в команду -->
        <TeamModal :isOpen="isTeamModalOpen" @close="closeTeamModal" />
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
}

.man-team-action_title {
    font-size: 22px;
    line-height: 26px;
    color: #1B0047;
    font-weight: bold;
}

.man-team-action_btn:hover {
    cursor: pointer;
}

.man-team-action-wrapper {
    width: 289px;
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
    font-size: 14px;
}

.section-title {
    color: #1B0047;
    font-size: 57px;
    font-family: 'Rossika';
    letter-spacing: -0.02em;
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
    margin-bottom: 80px;
    margin-top: 100px;
    max-width: 1280px;
    width: 1280px;
    margin-left: auto;
    margin-right: auto;
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

/* Mobile Styles */
@media (max-width: 767.98px) {

    .team-container {
        padding: 0 20px;
    }

    .section-header-wrapper {
        margin: 60px auto 60px auto !important;
        max-width: 100% !important;
        width: 100% !important;
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: space-between !important;
        text-align: center !important;
        height: auto !important;
    }

    /* Первая секция заголовка */
    .man-team-section .section-header-wrapper:first-of-type {
        margin-top: 40px !important;
    }

    .section-title {
        font-size: 40px !important;
        flex: 1;
        text-align: center;
    }

    .section-item--left {
        font-size: 12px;
        flex: 0 0 auto;
        text-align: left;
    }

    /* Заменяем текст "ФЕДЕРАЛЬНАЯ ЛИГА" на "2025/26" для мобильной версии */
    .section-item--left {
        font-size: 0;
        /* Скрываем оригинальный текст */
    }

    .section-item--left::before {
        content: "2025/26";
        font-size: 12px;
        display: block;
    }

    .section-item--right {
        font-size: 12px;
        flex: 0 0 auto;
        text-align: right;
    }

    .row-team_wrapper {
        max-width: 100%;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        column-gap: 0;
        row-gap: 40px;
    }

    .player {
        width: 277px;
        margin-bottom: 0;
    }

    .photo {
        width: 277px;
        height: 305px;
        overflow: hidden;
    }

    .photo img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
    }

    .name-wrapper {
        width: 277px;
        height: 65px;
        padding-top: 14px;
        padding-left: 26px;
        padding-right: 26px;
    }

    .name {
        font-size: 16px;
        line-height: 1.2;
    }

    .amplua {
        font-size: 12px;
    }

    .man-team-action-wrapper {
        width: 100%;
        max-width: 320px;
        margin: 60px auto;
        padding: 0 20px;
    }

    .man-team-action_title {
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        max-width: 280px;
    }

    .man-team-action_btn {
        width: 220px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
    }




}
</style>
