import React from "react";
import '../components/home.css';
import { Col, Layout, Row, Grid} from 'antd';
import AppHeader from "../components/Header.jsx";
import ActiveButton from "../components/main_button.jsx";
import Card from "../components/Cards.jsx";
import Cardmainheader from "../components/cards_header.jsx";
import StyledText from "../components/padding-text.jsx";
import BackAnswer from "../components/consultation.jsx";
import CardSecondPrice from "../components/second_price.jsx";
import CArsdinn from "../components/how_we_work.jsx";
import Hero from "../components/Hero.jsx";
import TypingWords from "../components/changewords.jsx";
import AttentionAlert from "../components/attentionalert.jsx";





const { Content } = Layout;
// const { useBreakpoint } = Grid;

export default function App() {
  // const screens = useBreakpoint();
  const words = ['С кем уже поработали', 'авиакомпания', 'строительство', 'ремонт', 'архитекторы', 'дизайнеры', 'отели и хостелы', 'юристы', 'производители оборудования', 'производители вывесок', 'массажный салон', 'магазины косметики', 'бренды косметики', 'спортивные центры', 'доставка еды', 'обучающие центры', 'постельное белье', 'эвент агентство', 'кальянные', 'массажный салон',
    'барбершопы', 'салон красоты', 'станция тех обслужиания', 'мгимо', 'итмо', 'экологическая лаборатория', 'донорское нко', 'школа кино', 'магазин одежды', 'тревел стартап', 'агентство недвижимости', 'и другие'];
  const cardsData = [
    {
      title: 'Разработка сайта для KREMEN',
      imageUrl: '/img/new.png',
      link: '/kremen',
    },
    {
      title: 'Редизайн сайта для Автогольдера',
      imageUrl: '/img/s.png',
      link: '/about',
    },
    {
      title: 'Разработка интернет магазина для 19.12.design',
      imageUrl: '/img/t.png',
      link: '/chairdesign',
    },

    
    {
      title: 'Разработка логотипа для RAV',
      imageUrl: '/img/fo.png',
      link: '/rav',
    },
    {
      title: 'Интернет магазин для Tausshh shop',
      imageUrl: '/img/taussh_title.png',
      link: '/tausshh',
    },
    {
      title: 'Разработка логотипа для unkai',
      imageUrl: '/img/unkaititle.png',
      link: '/unkai',
    },
    // {
    //   title: 'Карточка 5',
    //   imageUrl: '/img/fi.png',
    //   link: 'https://example.com/link3',
    // },
  ];

  return (
      <Layout>
        <AppHeader />
        <div className="hero_section">
          <Hero />
          <h2>Добро пожаловать в <span className="green">Innovium</span> — ваше digital-пространство для роста</h2>
          <h3>Мы создаем эффективные digital-решения: Помогаем бизнесу привлекать клиентов, увеличивать продажи и масштабироваться. с помощью <TypingWords /></h3>
        </div>
        <AttentionAlert />
        <div className="main">
          <div className="container_content_main">
            <Row className="moblll" gutter={[60,  100]}>
              <Col xs={24} sm={24} md={12}>
                <div id="keyses" className="card-container">
                  <div className="about_block">
                    <h3>Кейсы</h3>
                    <h4>Каждый проект — это результат профессионального подхода, глубокого понимания потребностей и умения находить нестандартные решения.
                    </h4>
                  </div>
                  {cardsData.slice(0, Math.ceil(cardsData.length / 2)).map((card, index) => (
                    <Card
                      key={index}
                      title={card.title}
                      imageUrl={card.imageUrl}
                      link={card.link}
                    />
                  ))}
                </div>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <div className="card-container">
                  {cardsData.slice(Math.ceil(cardsData.length / 2)).map((card, index) => (
                    <Card
                      key={index}
                      title={card.title}
                      imageUrl={card.imageUrl}
                      link={card.link}
                    />
                  ))}
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="work_widsh_who">
          <Col xs={24} sm={24} md={13}>
            <h2>
              Создаем сайты и бренды с дерзким подходом и заботой о каждом клиенте. Внимание к деталям и полная ответственность за весь процесс — от первой идеи до финального результата. Честные цены без навязывания. Мы создаем идеальные решения, которые впечатляют и работают на результат.
            </h2>
          </Col>
          <Col xs={24} sm={24} md={13}>
            <div className="styled_text">
              <div>
                <StyledText words={words} backgroundColor="#191818" textColor="#ADEAA2" />
              </div>
            </div>
          </Col>
        </div>
        <Col span={24} className="ujujjjuju">
          <div className="howwework">
            <div className="titkleod">
                <h2>Создание сайта</h2>
                <h2>по шагам</h2>
            </div>
            
            <CArsdinn
                  text="Проведём 3-5 интервью, где изучим продукт, рынок, ЦА и воронку"
                  gif="./img/gif/first.gif"
                  step="Шаг 1"
                  dopdescr = 'Начинаем с анализа: кто ваш пользователь и что ему нужно. Определяем цели и проверяем, как он будет взаимодействовать с сайтом. '
            /> 
            <CArsdinn
                  text="Напишем 2+ сценариев текста и поведения пользователя"
                  gif="./img/gif/second.gif"
                  step="Шаг 2"
                  dopdescr = 'Затем подключаем User Flow и Screen Maps. User Flow показывает путь пользователя, а Screen Maps — какие страницы для этого нужны. Это делает сайт удобным и эффективным, убирая лишнее и оставляя только то, что работает.'
            />
            <CArsdinn
                  text="Соберем черно-белую версию сайта"
                  gif="./img/gif/frame.png"
                  step="Шаг 3"
                  dopdescr = ' Это помогает сосредоточиться на функциональности и логике, а не на визуальных деталях. Черно-белый прототип позволяет быстро тестировать структуру и навигацию, убедиться, что все сценарии пользователя работают корректно, и внести правки до этапа дизайна, сэкономив время и ресурсы'
            />
            <CArsdinn
                  text="Разработаем индивидуальный дизайн под целевую аудиторию"
                  gif="./img/gif/fram.png"
                  step="Шаг 4"
                  dopdescr= 'Здесь мы добавляем цвета, шрифты, изображения и другие визуальные элементы, которые делают сайт привлекательным и запоминающимся. Дизайн разрабатывается с учетом бренда, целевой аудитории и задач сайта, чтобы не только радовать глаз, но и усиливать удобство использования'
            />
            <CArsdinn
                  text="SEO: сделаем сайт видимым для поисковиков"
                  gif="./img/gif/se.png"
                  step="Шаг 5"
                  dopdescr = 'После завершения дизайна важно позаботиться о SEO (поисковой оптимизации). Это комплекс мер, которые помогают вашему сайту занимать высокие позиции в поисковых системах, таких как Google или Яндекс. Мы оптимизируем тексты, заголовки, мета-теги и изображения, чтобы сайт был не только красивым, но и легко находимым. Правильное SEO увеличивает трафик, привлекает целевую аудиторию и помогает вашему бизнесу расти.'
            />
          </div>
        </Col>
        <div className="background_wrappe">
          <div id="price" className="Cardsecondprice">
              <CardSecondPrice
                type = 'Сайты'
                ddd = 'Мы создаем сайты различных типов: от простых одностраничников до сложных многофункциональных платформ.'
                imgprice = './img/sayt.png'
                pricecardssec = 'от ₽85 000'
                srferst ='Лендинг'
                sersecond = 'Корпоративный'
                serthree = 'Сайт-каталог'
                serfour = 'Интренет магазин'
              />
              <CardSecondPrice 
                type = 'Сайт + Брендбук'
                ddd = 'Мы поможем с оформлением геосервисов, создадим стильную печатную продукцию и разработаем дизайн для ваших товаров или услуг.'
                imgprice = './img/marketing.png'
                pricecardssec = 'от ₽165 000'
                srferst ='Оформление геосервисов'
                sersecond = 'Печатная продукция/флаеры'
                serthree = 'Оформление товаров/услуг'
                serfour = 'Весь пакет '
              />
              <CardSecondPrice
                type = 'Сайт + Брендбук + Продвижение'
                ddd = 'комплексный старт: создание сайта, разработка брендбука и продвижение.'
                imgprice = './img/design.png'
                pricecardssec = 'от ₽224 000'
                srferst ='SEO текст для продвижения поисковике'
                sersecond = 'Посев по профильным сайтам'
                serthree = 'SMM по актуальным площадкам'
                serfour = 'Структурный маркетинговый план по этапам'
              />
          </div>
        </div>
        <div id="backanswer" className="backclients">
          <BackAnswer />
        </div>
      </Layout>
  );
}

