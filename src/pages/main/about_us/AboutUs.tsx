"use client";
import Header from "../Header";
import React from "react";
import Footer from "../Footer";

export default function AboutUs() {
    return (
        <>
            <Header />

            <div className="about-us-container">
                <div className="about-is-heading">О нас</div>

                <div className="about-us-content">
                    Мы — крупнейший сервис о кино в рунете. На нем вы сможете
                    посмотреть фильмы и сериалы, купить билеты в кино, узнать
                    рейтинги популярных видео и интересные факты, поставить
                    фильмам оценки, написать рецензии и дополнить описание
                    фильмов.
                </div>
                <div className="about-us-content">
                    был запущен в 2003 году. Портал предоставляет пользователям
                    информацию о фильмах и их создателях, новости кино, интервью
                    с актерами и другими знаменитостями, рецензии пользователей,
                    расписание сеансов в кинотеатрах, ТВ-программу и другие
                    разделы.
                </div>
                <div className="about-us-content">
                    Сайт был создан 7 ноября 2003 года, его основатели — Виталий
                    Таций и Дмитрий Суханов. Владельцем проекта являлась
                    компания ООО «Билетопоиск», которой принадлежало 60 % акций
                    проекта, 40 % акций принадлежало её совладельцу —
                    французской компании ООО AlloCiné. 15 октября 2013 года
                    сервис купила компания «Яндекс» (размер сделки — $80 млн,
                    около 2,6 млрд рублей на то время).{" "}
                </div>
            </div>

            <Footer />
        </>
    );
}
