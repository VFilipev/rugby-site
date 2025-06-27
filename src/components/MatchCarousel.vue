<template>
    <div class="match-carousel">
        <div class="match-cards">
            <div class="match-card">
                <div class="row">
                    <div class="col-12 header-wrapper">
                        <div class="liga text-center">Федеральная <br> регбийная лига</div>
                        <div class="match-date">31 мая</div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="scores-row">
                        <div class="score">46</div>
                        <div class="score-divider">:</div>
                        <div class="score">7</div>
                    </div>
                    <div class="teams-row">
                        <div class="team">Энергия</div>
                        <div class="team">Витязь</div>
                    </div>
                </div>
                <div class="match-location">
                    Казань,<br>Стадион Тулпар
                </div>
            </div>
            <div class="match-card">
                <div class="row">
                    <div class="col-12 header-wrapper">
                        <div class="liga text-center">Федеральная <br> регбийная лига</div>
                        <div class="match-date">19 июля</div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="scores-row">
                        <div class="score">0</div>
                        <div class="score-divider">:</div>
                        <div class="score">0</div>
                    </div>
                    <div class="teams-row">
                        <div class="team">Рать</div>
                        <div class="team">Витязь</div>
                    </div>
                </div>
                <div class="match-location">
                    Екатеринбург,<br>Деревня Универсиады
                </div>
            </div>
            <div class="match-card">
                <div class="row">
                    <div class="col-12 header-wrapper">
                        <div class="liga text-center">Федеральная <br> регбийная лига</div>
                        <div class="match-date">26 июля</div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="scores-row">
                        <div class="score">0</div>
                        <div class="score-divider">:</div>
                        <div class="score">0</div>
                    </div>
                    <div class="teams-row">
                        <div class="team">Витязь</div>
                        <div class="team">Малахит</div>
                    </div>
                </div>
                <div class="match-location">
                    Пермь,<br>Стадион Гайва
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header-wrapper{
    display: flex;
    flex-direction: column;
    gap: 25px;
}
@font-face {
    font-family: 'Rossika';
    src: url('@/assets/fonts/rossika_light.otf') format('opentype');
    font-style: light;
    font-display: swap;
}

@font-face {
    font-family: 'Halvetica';
    src: url('@/assets/fonts/helvetica_bold.otf') format('otf');
    font-style: bold;
    font-display: swap;
}

.match-carousel {
    width: 100%;
    overflow: hidden;
}

.match-cards {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.match-card {
    flex: 1;
    background: #1B0047;
    border-radius: 5px;
    padding: 25px 50px 50px 50px;
    color: white;
    display: flex;
    flex-direction: column;
    max-width: 400px;
}

.match-date {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    font-family: 'Halvetica';
}

.match-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    margin-top: 30px;
}

.scores-row {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
}

.score {
    font-family: 'Rossika';
    font-size: 90px;
    line-height: 1;
    text-align: center;
}

.score-divider {
    font-family: 'Rossika';
    font-size: 90px;
    line-height: 1;
    text-align: center;
    transform: translateY(-10px);
}

.teams-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.team {
    font-size: 18px;
    text-align: center;
    line-height: 1.2;
    opacity: 0.8;
}

.match-location {
    font-size: 16px;
    text-align: center;
    line-height: 1.2;
    margin-top: auto;
}

.liga {
    font-size: 14px;
    font-weight: normal;
    opacity: 0.9;
    line-height: 1.3;
}
</style>
