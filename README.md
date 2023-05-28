### Badges
[![build](https://github.com/AllegroGH/test_csv_my/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/AllegroGH/test_csv_my/actions/workflows/build.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/b3acf96798b65a976af7/maintainability)](https://codeclimate.com/github/AllegroGH/test_csv_my/maintainability)

### Titanic

Вам дана таблица пассажиров Титаника в файле test.csv.

- выведите число сколько всего пассажиров в этой таблице
- выведите все именования портов посадки (колонка Embarked)
- выведите соотношение пассажиров мужчин и женщин
- выведите процент выживших пассажиров
- выведите имена всех пассажиров, начинающиеся на букву А

Задания достаточно простые, но в датасете есть много различной информации, для тренировки можете попридумывать себе дополнительные задачи, например: вести пассажира с наибольшим количеством родственников, соотношение пассажиров по классу каюты и тд.

Пример запуска: 
```bash
node bin/app.js __fixtures__/test.csv
```
