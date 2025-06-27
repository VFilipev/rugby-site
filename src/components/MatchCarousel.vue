<template>
    <div class="match-carousel">
        <div class="match-cards">
            <div class="match-card">
                <div class="row">
                    <div class="col-12">
                        <div class="match-date">19 июля, 20:00</div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="d-flex justify-content-between align-items-center">

                        <div class="text-center score">120</div>
                        <div class="text-center score-divider">:</div>
                        <div class="text-center score">120</div>

                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-center team">Енисей<br>СТМ</div>
                        <div class="text-center team-spacer"></div>
                        <div class="text-center team">Витязь</div>
                    </div>
                </div>
                <div class="match-location">
                    Екатеринбург,<br>урал-арена
                </div>
            </div>
            <div class="match-card">
                <div class="row">
                    <div class="col-12">
                        <div class="match-date">19 июля, 20:00</div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="d-flex justify-content-between align-items-center">

                        <div class="text-center score">120</div>
                        <div class="text-center score-divider">:</div>
                        <div class="text-center score">120</div>

                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-center team">Енисей<br>СТМ</div>
                        <div class="text-center team-spacer"></div>
                        <div class="text-center team">Витязь</div>
                    </div>
                </div>
                <div class="match-location">
                    Екатеринбург,<br>урал-арена
                </div>
            </div>
            <div class="match-card">
                <div class="row">
                    <div class="col-12">
                        <div class="match-date">19 июля, 20:00</div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="d-flex justify-content-between align-items-center">

                        <div class="text-center score">120</div>
                        <div class="text-center score-divider">:</div>
                        <div class="text-center score">120</div>

                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="text-center team">Енисей<br>СТМ</div>
                        <div class="text-center team-spacer"></div>
                        <div class="text-center team">Витязь</div>
                    </div>
                </div>
                <div class="match-location">
                    Екатеринбург,<br>урал-арена
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
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
}

.match-card {
    flex: 1;
    background: #1B0047;
    border-radius: 5px;
    padding: 50px;
    color: white;
    display: flex;
    flex-direction: column;
    max-width: 400px
}

.match-date {
    font-size: 18px;
    text-align: center;
    margin-bottom: 40px;
    font-weight: bold;
    font-family: 'Halvetica';
}

.match-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
}

.score-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.score {
    font-family: 'Rossika';
    font-size: 120px;
    line-height: 1;
}

.score-divider {
    font-family: 'Rossika';
    font-size: 120px;
    transform: translateY(-10px);
}

.teams-row {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    padding: 0 20px;
}

.team {
    font-size: 18px;
    text-align: center;
    line-height: 1.2;
    opacity: 0.8;
    width: 120px;
}

.team-spacer {
    width: 40px;
}

.match-location {
    font-size: 16px;
    text-align: center;
    line-height: 1.2;
    margin-top: auto;
}
</style>
