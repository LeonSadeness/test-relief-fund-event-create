<template>
  <section class="main">
    <div>
      <h1>Тестовое задание</h1>
      <h3 class="text-primary-dark">для front-end в фонд “Нужна помощь”</h3>
    </div>

    <div class="content">
      <!-- Autor -->
      <section class="section">
        <p class="h3 sub-title">Исполнитель</p>
        <div class="author">
          <img src="@/assets/LSG_Rect_170.jpg" alt="avater" />
          <div>
            <p>Николай Храпков</p>
            <a
              href="https://github.com/LeonSadeness/test-relief-fund-event-create"
              >github.com</a
            >
          </div>
        </div>
      </section>

      <!-- Separator -->
      <hr />

      <!-- Test job -->
      <section class="section">
        <p class="h3 sub-title">Задание</p>
        <div>
          <p>
            1. Сверстать макет, можно пользоваться js/jquery/vue (<a
              href="https://www.figma.com/file/JIwyybOiALtZ5kL1g28w6B/Front-end-test?node-id=0%3A1"
            >
              Ссылка на макет </a
            >)
          </p>
          <p>
            2. Cверстать динамический список групп, данные “приходят” с бекенда
            (для теста записать статичный массив) Данные в таком виде:
          </p>
          <pre v-highlightjs="json.groups">
          <code class="json"></code>
          </pre>
          <p>
            3. Сделать сборку и отправку данных в формате (при отправке вывести
            в консоль)
          </p>
          <pre v-highlightjs="json.log">
            <code class="json"></code>
            </pre>
          <p>4. Верстка должна быть по БЭМу и максимально семантичной</p>
        </div>
      </section>

      <!-- Additional -->
      <section class="section">
        <p class="h3 sub-title">Дополнительно</p>
        <div>
          <p>
            1. Шрифты можно взять с наших сайтов (например <a
              href="http://nuzhnapomosh.ru/"
            >
              http://nuzhnapomosh.ru/ 
              </a>)
          </p>
          <p>
            2. Не пользоваться готовыми библиотеками для выпадающих списков и
            построения деревьев
          </p>
        </div>
      </section>

      <!-- Bonus -->
      <section class="section">
        <p class="h3 sub-title">Будет плюсом</p>
        <p>
          Логика “Все дети“, то есть при выборе пункта “Все” должны
          выбираться/сниматься все вложенные группы
        </p>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      json: {
        groups:
          "groups: [\n  {\n    id: 1,\n    name: 'Дети',\n    groups: [\n      {\n        id: 2,\n        name: 'Имеющие редкие заболевания',\n        groups: [\n          {\n            id: 3,\n            name: 'Spina Bifida',\n            groups: [],\n          },\n          {\n            id: 4,\n            name: 'Буллёзный эпидермолиз',\n            groups: [],\n          },\n        ],\n      },\n      {\n        id: 5,\n        name: 'С инвалидностью',\n        groups: [],\n      },\n    ],\n  },\n  {\n    id: 6,\n    name: 'Профессиональные сообщества',\n    groups: [],\n  },\n],",
        log: "groups: [4, 2, 1, 6], // юзер кликнул 'Буллёзный эпидермолиз' и 'Профессиональные сообщества'",
      },
    };
  },
};
</script>

<style scoped>
.main {
  padding: 53px 60px;
  display: flex;
  flex-direction: column;
  gap: 35px;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 54px;
  padding: 42px 65px;
  border-radius: 10px;
  border: var(--primary-border);
}

.section {
  display: flex;
  flex-direction: column;
}
.sub-title {
  margin-bottom: 24px;
}

.author {
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 18px;
}
.author > img {
  width: 50px;
  border-radius: 50%;
}
</style>
