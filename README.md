# Server project

Веб-интерфейс для управления серверами. 

## Описание

Тестовое задание в компанию Мобилон Телекоммуникации.

## Технический стек

db: mongodb

backend: node.js c фреймворком express.js, работа с бд через mongoose

frontend: фреймворк angular.js, шаблонизатор pug, оформление bootstrap css, графики chart.js

## Задания

### задание 1

действие "перезапуск" для сервера: 

а) добавить кнопку с действием в сервер

б) добавить журналирование этого действия

### задание 2

добавить CRUD-операции для групп серверов

а) добавить отдельный таб для работы с группами

б) вывести список групп, 

в) добавить кнопку добавления группы, добавить форму добавления группы, сохранять группу

г) сделать выбор групп в форме добавления сервера

### задание 3 

добавить общий график (монитор) по всем заданиям серверов за день по часам

а) на графике по оси Х вывести часы от 0 до 23

б) вывести столбцы в каждом часе количество выполненных заданий каждым сервером

в) в каждом часе количество столбцов - это количество серверов

г) над графиком сделать выбор даты (чтобы можно посмотреть задания по часам за любой день), 
по умолчанию текущий день

[Скриншоты начального интерфейса и после выполненных заданий](web.md)