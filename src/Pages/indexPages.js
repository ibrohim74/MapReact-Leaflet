import React from 'react';
import SignIn from "./login/signIn";
import {NavLink, useLocation} from "react-router-dom";
import RouterS from "../components/routerS";

function IndexPages(props) {
    return (
        <div>
            <div className="wrapper">
                <header className="header">
                    <div className="container-fluid">
                        <div className="row head-rov">
                            <div className="col-xl-5 col-lg-6 col-md-8 pr-0">
                                <div className="head-left">
                                    <nav className="navbar navbar-expand-lg">
                                        <a className="navbar-brand" href="/"> <img src={require( "../resources/images/logo2.png")}
                                                                                         alt="brend"  /></a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                                data-target="#navbarSupportedContent"
                                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                                aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"> </span>
                                        </button>

                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav mr-auto">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="#">Bosh sahifa</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Biz haqimizda</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Foydalanish shartlari</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Blog</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-3 right-col">
                                <div className="head-right">
                                    <NavLink to="/layouts/leafletMap" className="login">Kirish</NavLink>
                                    <NavLink to="/signUp" className="reg">Ro'yxatdan o'tish</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="main-sec">
                    <div className="Modern-Slider">
                        <div className="item">
                            <div className="img-fill">
                                <img src={require("../resources/images/slide-img1.jpg")} alt=""/>
                                    <div className="info">
                                        <div>
                                            <h1>Loyiha haqida</h1>
                                            <h5>Qishloq xo'jaligi vazirligi "O'zdavyerloyiha" davlat ilmiy-loyihalash
                                                instituti tayanch doktorantura bo'limi tayanch doktoranti Xakimov
                                                Boxodirjonning Masofadan zondlash yordamida yaylov yerlarni boshqarish
                                                texnologiyasini ishlab chiqish mavzusidagi dissertatsiyaning amaliy ish
                                                namunasi sifatida 09.11.2020 yil O'zbekiston Respublikasi Adliya
                                                vazirligi huzuridagi Intelektual mulk agentligi tomonidan olingan EHM
                                                "Elektron hisoblash mashinalari uchun yaratilgan dasturlar va
                                                ma'lumotlar bazalarining huquqiy himoyasi" uchun berilgan guvohnoma
                                                asosida yaratilgan dasturiy portaldir! </h5>
                                            <a href="#!" className="green-btn"><span>Ro'yhatdan o'tish</span></a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-fill">
                                <img src={require("../resources/images/slide-img2.jpg")} alt=""/>
                                    <div className="info">
                                        <div>
                                            <h1>Loyiha maqsadi</h1>
                                            <h5>Portal o'z oldiga chorva mollarini to’gri o’tlatish tizimini joriy
                                                qilish, eng avvalo bugungi kunda oziq ovqat xavfsizligini ta’minlash,
                                                yaylovlarda inson faktorini aralashuvi va oshiqcha o’tlatishni cheklash,
                                                yaylovlardan unumli hamda samarali foydalanish tizimini joriy qilishdan
                                                iborat.</h5>
                                            <a href="#!" className="green-btn">Ro'yhatdan o'tish</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-fill">
                                <img src={require("../resources/images/slide-img3.jpg")} alt=""/>
                                    <div className="info">
                                        <div>
                                            <h1>Loyiha vazifalari</h1>
                                            <h5>Yaylovlardan foydalanishda yo’l qoyilayotgan xatolar (hududni to’gri
                                                taqsimlay olmaslik, bosh soniga qarab yaylov belgilanmaslik, antopogen
                                                omillar tasirida ozuqabop o’simliklarni kamayib ketishi) kabi omillarni
                                                oldini olish hamda kerakli taklif va tavsiyalar berib borishni asosiy
                                                vazifalari etib belgilab olgan!</h5>
                                            <a href="#" className="green-btn">Ro'yhatdan o'tish</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="img-fill">
                                <img src={require("../resources/images/slide-img1.jpg")} alt=""/>
                                    <div className="info">
                                        <div>
                                            <h1>Amalga oshirish bosqichlari</h1>
                                            <h5>*Umumiy qism. Yaylov sig'imi va yaylovga chorvani kiritish funksiyasi;
                                                *Yaylovda podani joylashgan o'rnini va yaylovning yo'nalishini
                                                belgilashva topish funksiyasi;
                                                *Yaylovni qo'shish (chorvani o'tlatish hududi hamda chorva sonini
                                                kiritish va joyni belgilash) funksiyasi;
                                                *Belgilangan hududni to'liq sig'imi, o'tlatish (oziqlantirish) va
                                                yaylovni dam oldirish ma'lumotlarini kiritish;
                                                *Ma'lumotlarni qatlamlar bo'yicha yaylov infratuzilmasini (gidrografik,
                                                geobotanik, chorvani dam oldirish hududlari va boshqa zaruriy joylar)ni
                                                qidirib topish;
                                                *Yaylov o'lchash;
                                                *Yaylov xaritasini yuklab olish;
                                                *Yaylov Yaylovda oziqlantirish sxemasini excel ko'rinishda yuklab olish;
                                                *Joyning iqlim ma'lumotlari.</h5>
                                            <a href="#!" className="green-btn">Ro'yhatdan o'tish</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="partners-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 title">
                                <h2>Hamkor tashkilotlar</h2>
                            </div>
                        </div>
                        <div className="partners-block">
                            <div className="partners-item">
                                <img src={require("../resources/images/partners1.jpg")} alt=""/>
                            </div>
                            <div className="partners-item">
                                <img src={require("../resources/images/partners2.jpg")} alt=""/>
                            </div>
                            <div className="partners-item">
                                <img src={require("../resources/images/partners4.png")} alt=""/>
                            </div>
                            <div className="partners-item">
                                <img src={require("../resources/images/partners5.jpg")} alt=""/>
                            </div>
                            <div className="partners-item">
                                <img src={require("../resources/images/partners6.jpg")} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pasture-monitoring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="pasture-block title">
                                    <span>loyiha haqida batafsil</span>
                                    <h2>Loyiha haqida</h2>
                                    <p>Yaylovlarni masofadan turib boshqarishni joriy etish, monitoringini olib borish,
                                        takliflar va tavsiyalar ishlab chiqish. Yaylovlarni asrash, eko tizimni
                                        yaxshilashga qaratilgan muhim dasturiy portal.</p>
                                    <a href="#!" className="green-btn">Batafsil</a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="pasture-img">
                                    <div className="p-img-one">
                                        <img src={require("../resources/images/pasture-monitoring-img1.png")} alt=""/>
                                    </div>
                                    <div className="p-img-two">
                                        <img src={require("../resources/images/pasture-monitoring-img2.png")} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pasture-tasks">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="tasks-block title white">
                                    <span>Asosiy maqsadi </span>
                                    <h2>Yaylov monitoringi</h2>
                                    <p> Asosiy maqsadi chorva mollarini to’gri o’tlatish tizimini joriy qilish, eng
                                        avvalo bugungi kunda oziq ovqat xavfsizligini ta’minlash, yaylovlarda inson
                                        faktorini aralashuvi va oshiqcha o’tlatishni cheklash, yaylovlardan unumli hamda
                                        samarali foydalanish tizimini joriy qilishdan iborat .</p>
                                    <a href="#!" className="green-btn">Batafsil</a>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="tasks-card">
                                    <h3>O'simliklarni <span>dala</span> tahliliy ma'lumotlari</h3>
                                    <span className="card-img">
								<img src={require("../resources/images/tasks-card-icon1.png" )}alt=""/>
							</span>
                                    <div className="card-text">
                                        <p>Donec tristique orci viverra, ultrices risus maximus, porttitor velit.</p>
                                    </div>
                                    <div className="card-link">
                                        <a href="#!" className="view-detail">View Details <img
                                            src={require("../resources/images/arrow-right.svg")} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="tasks-card active">
                                    <h3>O'simliklarning <span>lobaratoriya va alohida hisob-kitoblar</span> tahliliy
                                        ma'lumotlari</h3>
                                    <span className="card-img">
								<img src={require("../resources/images/tasks-card-icon2.png")} alt=""/>
							</span>
                                    <div className="card-text">
                                        <p>Donec tristique orci viverra, ultrices risus maximus, porttitor velit.</p>
                                    </div>
                                    <div className="card-link">
                                        <a href="#!">View Details <img src={require("../resources/images/arrow-right.svg")} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="tasks-card">
                                    <h3>O'simliklarning <span>masofadan zo'ndlash</span> tahliliy ma'lumotlari</h3>
                                    <span className="card-img">
								<img src={require("../resources/images/tasks-card-icon3.png")} alt=""/>
							</span>
                                    <div className="card-text">
                                        <p>Donec tristique orci viverra, ultrices risus maximus, porttitor velit.</p>
                                    </div>
                                    <div className="card-link">
                                        <a href="#!">View Details <img src={require("../resources/images/arrow-right.svg")} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grow-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 title">
                                <p>Barchasi yaylov va yaylov o'simliklarini asrab qolish uchun!</p>
                                <h2>Yaylov monitoringni</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 grow-col">
                                <div className="grow-block">
                                    <div className="grow-img">
                                        <img src={require("../resources/images/icon.png")} alt=""/>
                                    </div>
                                    <div className="grow-text">
                                        <h4><span>Tabiiy </span>yaylovlar</h4>
                                        <p>Vivamus nec purus non velit iaculis dapibus. Duis rhoncus metus a tortor
                                            fermentum, eget placerat enim placerat.</p>
                                        <a href="#!" className="view-detail">View detail <img
                                            src={require("../resources/images/arrow-right-green.svg")} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 grow-col">
                                <div className="grow-block">
                                    <div className="grow-img">
                                        <img src={require("../resources/images/icon2.png")} alt=""/>
                                    </div>
                                    <div className="grow-text">
                                        <h4><span>Madaniy </span>yaylovlar</h4>
                                        <p>Vivamus nec purus non velit iaculis dapibus. Duis rhoncus metus a tortor
                                            fermentum, eget placerat enim placerat.</p>
                                        <a href="#!" className="view-detail">View detail <img
                                            src={require("../resources/images/arrow-right-green.svg")} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 grow-col">
                                <div className="grow-block">
                                    <div className="grow-img">
                                        <img src={require("../resources/images/icon3.png" )}alt=""/>
                                    </div>
                                    <div className="grow-text">
                                        <h4><span>O'rmon </span>xo'jaligi hududiga qarashli yaylovlar</h4>
                                        <p>Vivamus nec purus non velit iaculis dapibus. Duis rhoncus metus a tortor
                                            fermentum, eget placerat enim placerat.</p>
                                        <a href="#!" className="view-detail">View detail <img
                                            src={require("../resources/images/arrow-right-green.svg")} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 grow-col">
                                <div className="grow-block">
                                    <div className="grow-img">
                                        <img src={require("../resources/images/icon4.png")} alt=""/>
                                    </div>
                                    <div className="grow-text">
                                        <h4><span>Yovvoyi </span>tabiat zonasidagi tabiiy landshaftlar</h4>
                                        <p>Vivamus nec purus non velit iaculis dapibus. Duis rhoncus metus a tortor
                                            fermentum, eget placerat enim placerat.</p>
                                        <a href="#!" className="view-detail">View detail <img
                                            src={require("../resources/images/arrow-right-green.svg")} alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="form-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 form-left-col">
                                <div className="form-left">
                                    <h4>Sizning yaylovingizga bizning xizmatlar</h4>
                                    <p>Yaylovlaringizni boshqarish va uni yaxshilash uchun qaratilgan chora tadbrilarni
                                        ko'rish uchun xizmatlar.</p>
                                    <p><img src={require("../resources/images/phone.png")} alt=""/> (+998)90 962 39 69</p>
                                </div>
                            </div>
                            <div className="col-lg-8 form-right-col">
                                <div className="form-right">
                                    <form action="#!" id="form" method="get">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="text" name="Ismingiz" id="Ismingiz"
                                                           placeholder="Ismingiz"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input type="Elektron pochta" name="Elektron pochta"
                                                           id="Elektron pochta" placeholder="Elektron pochta"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea name="Habarlar" id="SMS habarlar"
                                                              placeholder="Habarlar uchun"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 form-btn">
                                                <button type="submit">Habarni yuborish</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 ftr-col">
                                <div className="ftr-logo">
                                    <a href="#!"><img src={require("../resources/images/logo-long.png")} alt=""/></a>
                                </div>
                                <div className="Xizmatlar litsenziyalangan">
                                    <p><img src={require("../resources/images/ftr-icon.png")} alt=""/> Adliya Vazirligining 2020 yil 11
                                        noyabrdagi EHM uchun guvohnomasi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default IndexPages;