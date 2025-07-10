<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
<template>
    <div>
        <AppHeader logo-variant="without" />
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
                                    Федерация регби Пермского края заключила спонсорское соглашение с предприятием «ЕвроХим»
                                </div>
                                <div class="news-item_date">
                                    10 МАЯ
                                </div>
                            </div>
                            <div class="news-item_text">
                                Федерация регби Пермского края заключила рекламно-спонсорское соглашение с предприятием «ЕвроХим-Усольский калийный комбинат». Организации договорились о всесторонней поддержке и сотрудничестве по развитию регби в Крае. Часть обязанностей по рекламной деятельности возложена на регбийный клуб «Витязь» в лице мужской команды, выступающей в Федеральной регбийной лиге, а также профессиональной женской команды регби-7.
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
        <div style="margin-top: 100px;">
            <AppFooter />
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


.footer-container {
    margin: 0 auto;
    width: 1280px;
    max-width: 1280px;
    padding-top: 75px;
    padding-bottom: 75px;
}

.footer-wrapper {
    background-color: #28223C;
    color: white;
}
.news-item-full {
    background-color: #28223C;
    display: flex;
    width: 100%;
    gap: 50px;
}

.news-item_text {
    margin-top: 30px;
    color: #28223C;
    font-size: 16px;
    line-height: 25px;
}

.news-item_title {
    color: #28223C;
    font-size: 22px;
    font-weight: 600;
    line-height: 26px;
    max-width: 366px;
}

.news-item_date {
    color: #28223C;
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
    color: #28223C;
    font-size: 14px;
}

.section-title {
    color: #28223C;
    font-size: 57px;
    font-family: 'Rossika';
    letter-spacing: -0.02em;
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


</style>
