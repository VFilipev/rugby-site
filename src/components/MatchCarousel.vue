<template>
    <div class="match-carousel">
        <div class="match-cards"
             ref="matchCards"
             @mousedown="handleMouseDown"
             @mousemove="handleMouseMove"
             @mouseup="handleMouseUp"
             @mouseleave="handleMouseUp"
             @touchstart="handleTouchStart"
             @touchmove="handleTouchMove"
             @touchend="handleTouchEnd">
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
            <div class="match-card">
                <div class="row">
                    <div class="col-12 header-wrapper">
                        <div class="liga text-center">Федеральная <br> регбийная лига</div>
                        <div class="match-date">9 августа</div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="scores-row">
                        <div class="score">0</div>
                        <div class="score-divider">:</div>
                        <div class="score">0</div>
                    </div>
                    <div class="teams-row">
                        <div class="team">Малахит</div>
                        <div class="team">Витязь</div>
                    </div>
                </div>
                <div class="match-location">
                    Челябинск, стадион им. <br> Колющенко
                </div>
            </div>
            <div class="match-card">
                <div class="row">
                    <div class="col-12 header-wrapper">
                        <div class="liga text-center">Федеральная <br> регбийная лига</div>
                        <div class="match-date">30 августа</div>
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
                        <div class="team">Рать</div>
                    </div>
                </div>
                <div class="match-location">
                    Пермь, <br>стадион Звезда
                </div>
            </div>
            <div class="match-card">
                <div class="row">
                    <div class="col-12 header-wrapper">
                        <div class="liga text-center">Федеральная <br> регбийная лига</div>
                        <div class="match-date">19 августа</div>
                    </div>
                </div>
                <div class="match-content">
                    <div class="scores-row">
                        <div class="score">0</div>
                        <div class="score-divider">:</div>
                        <div class="score">0</div>
                    </div>
                    <div class="teams-row">
                        <div class="team">Динамо</div>
                        <div class="team">Витязь</div>
                    </div>
                </div>
                <div class="match-location">
                    Краснодар,<br>Стадион Краснодар
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const matchCards = ref(null)
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)
const currentTranslate = ref(0)

// Адаптивные параметры
const getCardWidth = () => window.innerWidth <= 768 ? 300 : 400
const getCardGap = () => window.innerWidth <= 768 ? 20 : 40
const visibleCards = 3
const partialCardWidth = 46

// Вычисляем количество карточек динамически
const totalCards = computed(() => {
    if (!matchCards.value) return 6 // fallback
    return matchCards.value.children.length
})

// Вычисляем все возможные позиции
const getPositions = () => {
    if (window.innerWidth <= 768) {
        // Фиксированные позиции для мобильной версии
        return [
            45,      // Позиция 0: карточки 1,2,3
            -275,    // Позиция 1: карточки 2,3,4 (начальная)
            -595,    // Позиция 2: карточки 3,4,5
            -915     // Позиция 3: карточки 4,5,6
        ]
    } else {
        // Динамические позиции для десктопной версии
        const positions = []
        const maxStartIndex = totalCards.value - visibleCards
        const cardWidth = getCardWidth()
        const cardGap = getCardGap()
        const basePosition = 36
        const stepSize = cardWidth + cardGap

        for (let i = 0; i <= maxStartIndex; i++) {
            const translateX = basePosition - (i * stepSize)
            positions.push(translateX)
        }

        return positions
    }
}

const handleMouseDown = (e) => {
    isDragging.value = true
    startX.value = e.pageX - matchCards.value.offsetLeft
    scrollLeft.value = currentTranslate.value
    matchCards.value.style.cursor = 'grabbing'
    matchCards.value.style.transition = 'none'
}

const handleMouseMove = (e) => {
    if (!isDragging.value) return
    e.preventDefault()

    const x = e.pageX - matchCards.value.offsetLeft
    const walk = (x - startX.value) * 1
    const newTranslate = scrollLeft.value + walk

    // Динамические границы
    const positions = getPositions()
    const maxTranslate = Math.max(...positions)
    const minTranslate = Math.min(...positions)

    currentTranslate.value = Math.max(minTranslate, Math.min(maxTranslate, newTranslate))
    matchCards.value.style.transform = `translateX(${currentTranslate.value}px)`
}

const handleMouseUp = () => {
    if (!isDragging.value) return

    isDragging.value = false
    matchCards.value.style.cursor = 'grab'
    matchCards.value.style.transition = 'transform 0.3s ease'

    // Находим ближайшую позицию динамически
    const positions = getPositions()
    let closestPosition = positions[0]
    let minDistance = Math.abs(currentTranslate.value - positions[0])

    for (let i = 1; i < positions.length; i++) {
        const distance = Math.abs(currentTranslate.value - positions[i])
        if (distance < minDistance) {
            minDistance = distance
            closestPosition = positions[i]
        }
    }

    currentTranslate.value = closestPosition
    matchCards.value.style.transform = `translateX(${currentTranslate.value}px)`
}

// Touch event handlers
const handleTouchStart = (e) => {
    isDragging.value = true
    startX.value = e.touches[0].pageX - matchCards.value.offsetLeft
    scrollLeft.value = currentTranslate.value
    matchCards.value.style.transition = 'none'
}

const handleTouchMove = (e) => {
    if (!isDragging.value) return
    e.preventDefault()

    const x = e.touches[0].pageX - matchCards.value.offsetLeft
    const walk = (x - startX.value) * 1
    const newTranslate = scrollLeft.value + walk

    // Динамические границы
    const positions = getPositions()
    const maxTranslate = Math.max(...positions)
    const minTranslate = Math.min(...positions)

    currentTranslate.value = Math.max(minTranslate, Math.min(maxTranslate, newTranslate))
    matchCards.value.style.transform = `translateX(${currentTranslate.value}px)`
}

const handleTouchEnd = () => {
    if (!isDragging.value) return

    isDragging.value = false
    matchCards.value.style.transition = 'transform 0.3s ease'

    // Находим ближайшую позицию динамически
    const positions = getPositions()
    let closestPosition = positions[0]
    let minDistance = Math.abs(currentTranslate.value - positions[0])

    for (let i = 1; i < positions.length; i++) {
        const distance = Math.abs(currentTranslate.value - positions[i])
        if (distance < minDistance) {
            minDistance = distance
            closestPosition = positions[i]
        }
    }

    currentTranslate.value = closestPosition
    matchCards.value.style.transform = `translateX(${currentTranslate.value}px)`
}

const initializeCarousel = () => {
    // Устанавливаем адаптивную ширину контейнера
    const cardWidth = getCardWidth()
    const cardGap = getCardGap()
    const containerWidth = totalCards.value * cardWidth + (totalCards.value - 1) * cardGap
    matchCards.value.style.width = `${containerWidth}px`

    // Начальная позиция - вторая позиция для всех версий (показываем карточки 2,3,4)
    const positions = getPositions()
    currentTranslate.value = positions[1] || positions[0] // fallback на первую если меньше карточек
    matchCards.value.style.transform = `translateX(${currentTranslate.value}px)`
}

onMounted(() => {
    initializeCarousel()

    // Обработчик изменения размера окна для адаптивности
    window.addEventListener('resize', initializeCarousel)
})

onUnmounted(() => {
    // Очистка обработчика событий
    window.removeEventListener('resize', initializeCarousel)
})
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
    position: relative;
    overflow: hidden;
    padding: 0 50px; /* Отступы для показа частичных карточек по краям */
}

.match-cards {
    display: flex;
    gap: 40px;
    transition: transform 0.3s ease;
    cursor: grab;
    user-select: none;
    touch-action: pan-x;
    -webkit-user-select: none;
    -webkit-touch-callout: none;
}

.match-cards:active {
    cursor: grabbing;
}

.match-card {
    flex: 0 0 400px; /* Фиксированная ширина 400px */
    background: #1B0047;
    padding: 25px 50px 50px 50px;
    color: white;
    display: flex;
    flex-direction: column;
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
    font-size: 14px;
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

/* Mobile Styles */
@media (max-width: 768px) {
    .match-carousel {
        padding: 0 20px;
    }

    .match-cards {
        gap: 20px;
    }

    .match-card {
        flex: 0 0 300px;
        padding: 20px 30px 30px 30px;
    }

    .score {
        font-size: 60px;
    }

    .score-divider {
        font-size: 60px;
        transform: translateY(-8px);
    }

    .team {
        font-size: 16px;
    }

    .match-date {
        font-size: 16px;
    }

    .match-location {
        font-size: 12px;
    }
}
</style>
