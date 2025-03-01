# Products App

Тестовое задание: интерфейс для просмотра и фильтрации списка продуктов с возможностью добавления в избранное.

## Функционал

- Просмотр списка продуктов (название, изображение, категория, цена).
- Поиск по названию.
- Фильтрация по категориям.
- Добавление в избранное (сохранение в localStorage).
- Отображение только избранных продуктов (переключатель).
- Адаптивная верстка на базе Ant Design Grid.

## Технологии

- **React** + **TypeScript**
- **Redux Toolkit** (RTK) + `react-redux`
- **CSS Modules**
- **Ant Design**
- (Опционально: `json-server` для моковых данных)

## Структура проекта (FSD)

src/ ├── app/ # Инициализация приложения, store, ... ├── entities/ # Бизнес-сущность "product" ├── features/ # Фичи (filters, favorites) ├── pages/ # Страницы (ProductsPage) ├── shared/ # Общие ресурсы (api, типы, утилиты) └── index.tsx # Точка входа


## Установка и запуск

```bash```
git clone https://github.com/your-username/products-app.git
cd products-app
npm install

# Запуск проекта
npm run start

---

##

На этом **проект готов**:

1. Все ключевые пункты задания выполнены.  
2. Приложение корректно работает: поиск, фильтры, избранное.  
3. Код структурирован по FSD.

---
