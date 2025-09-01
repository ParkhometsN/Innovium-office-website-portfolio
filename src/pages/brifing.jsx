import React, { useState } from "react";
import '../components/home.css';
import '../components/styles/loaderimg.css';
import { Layout } from 'antd';
import AppHeader from "../components/Header.jsx";
import BackAnswer from "../components/consultation.jsx";
import LoaderImg from "../components/loader_img.jsx";
import { Carousel } from 'antd';

const { Content } = Layout;

const botToken = '7506858742:AAE1DQgI24_BtiH5gRP8Z8Q_7LP8eUrvllg';
const chatId = '866843496';

// const contentStyle = {
//     margin: 0,
//     height: '360px',
//     color: '#fff',
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
//   };

function Brifing() {
  const [form, setForm] = useState({
    companyName: "",
    foundationYear: "",
    geography: "",
    activities: "",
    staffSize: "",
    licenses: "",
    siteGoals: "",
    siteResults: "",
    userActions: "",
    targetAudience: "",
    audienceDetails: "",
    painPoints: "",
    uniqueness: "",
    reasonToChoose: "",
    uniqueSellingPoint: "",
    siteSections: "",
    callbackForm: "",
    siteTexts: "",
    mediaFiles: "",
    copywritingHelp: "",
    professionalPhotography: "",
    brandStyle: "",
    inspirationSites: "",
    designPreferences: "",
    notAllowedElements: "",
    responsiveDesign: "",
    multilingualSupport: "",
    serviceIntegration: "",
    hosting: "",
    projectDeadline: "",
    importantDeadlines: "",
    budget: "",
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    preferredContactMethod: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = `📝 Новый брифинг:\n\n` +
      `1. 📌 Общая информация о компании\n` +
      `   - Название компании: ${form.companyName}\n` +
      `   - Год основания: ${form.foundationYear}\n` +
      `   - География работы: ${form.geography}\n` +
      `   - Направления деятельности: ${form.activities}\n` +
      `   - Количество сотрудников: ${form.staffSize}\n` +
      `   - Лицензии/сертификаты: ${form.licenses}\n\n` +
      
      `2. 🎯 Цели сайта\n` +
      `   - Задачи сайта: ${form.siteGoals}\n` +
      `   - Ожидаемые результаты: ${form.siteResults}\n` +
      `   - Действия пользователя: ${form.userActions}\n\n` +
      
      `3. 🧠 Целевая аудитория\n` +
      `   - Основной клиент: ${form.targetAudience}\n` +
      `   - Возраст и доход: ${form.audienceDetails}\n` +
      `   - Боли клиента: ${form.painPoints}\n\n` +
      
      `4. 💎 Уникальность и преимущества\n` +
      `   - Отличие от конкурентов: ${form.uniqueness}\n` +
      `   - Причины выбора: ${form.reasonToChoose}\n` +
      `   - УТП: ${form.uniqueSellingPoint}\n\n` +
      
      `5. 🏗️ Структура и функционал сайта\n` +
      `   - Разделы сайта: ${form.siteSections}\n` +
      `   - Формы обратной связи: ${form.callbackForm}\n\n` +
      
      `6. 🖼️ Контент и материалы\n` +
      `   - Тексты для сайта: ${form.siteTexts}\n` +
      `   - Фото/видео материалы: ${form.mediaFiles}\n` +
      `   - Помощь в копирайтинге: ${form.copywritingHelp}\n` +
      `   - Профессиональная фотосъемка: ${form.professionalPhotography}\n\n` +
      
      `7. 🎨 Дизайн и стиль\n` +
      `   - Фирменный стиль: ${form.brandStyle}\n` +
      `   - Примеры сайтов: ${form.inspirationSites}\n` +
      `   - Предпочтения по дизайну: ${form.designPreferences}\n` +
      `   - Запрещенные элементы: ${form.notAllowedElements}\n\n` +
      
      `8. ⚙️ Технические моменты\n` +
      `   - Адаптивная версия: ${form.responsiveDesign}\n` +
      `   - Мультиязычность: ${form.multilingualSupport}\n` +
      `   - Интеграции: ${form.serviceIntegration}\n` +
      `   - Хостинг: ${form.hosting}\n\n` +
      
      `9. 📆 Сроки и бюджет\n` +
      `   - Сроки реализации: ${form.projectDeadline}\n` +
      `   - Важные дедлайны: ${form.importantDeadlines}\n` +
      `   - Бюджет: ${form.budget}\n\n` +
      
      `10. 📞 Контактные данные\n` +
      `   - Имя: ${form.contactName}\n` +
      `   - Телефон: ${form.contactPhone}\n` +
      `   - Email: ${form.contactEmail}\n` +
      `   - Способ связи: ${form.preferredContactMethod}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      });
      alert("Брифинг успешно отправлен через Telegram!");
    } catch (error) {
      console.error("Ошибка отправки в Telegram:", error);
      alert("Ошибка при отправке брифинга.");
    }
  };

  return (
    <Layout>
      <AppHeader />
      <Content className="briefing-form-container">
        <form onSubmit={handleSubmit} className="briefing-form">
          <label className="titlebrifing">Брифинг для разработки сайта</label>

          <label className="titlebloc">1. 📌 Общая информация о компании</label>
          <label>Название компании</label>
          <input name="companyName" value={form.companyName} onChange={handleChange} />

          <label>Год основания</label>
          <input name="foundationYear" value={form.foundationYear} onChange={handleChange} />

          <label>География работы (города, регионы)</label>
          <input name="geography" value={form.geography} onChange={handleChange} />

          <label>Направления деятельности (капремонт, строительство домов, дизайн-проекты, малоэтажное строительство и т.д.)</label>
          <input name="activities" value={form.activities} onChange={handleChange} />

          <label>Сколько сотрудников в компании?</label>
          <input name="staffSize" value={form.staffSize} onChange={handleChange} />

          <label>Есть ли лицензии, сертификаты, награды?</label>
          <input name="licenses" value={form.licenses} onChange={handleChange} />

          <label className="titlebrifing">2. 🎯 Цели сайта</label>
          <label>Какие задачи должен решать сайт? (продажа услуг, сбор заявок, презентация портфолио и т.д.)</label>
          <input name="siteGoals" value={form.siteGoals} onChange={handleChange} />

          <label>Каких результатов вы хотите достичь через сайт?</label>
          <input name="siteResults" value={form.siteResults} onChange={handleChange} />

          <label>Какие действия должен совершить пользователь на сайте? (оставить заявку, рассчитать цену, позвонить, скачать каталог и т.д.)</label>
          <input name="userActions" value={form.userActions} onChange={handleChange} />

          <label className="titlebrifing">3. � Целевая аудитория</label>
          <label>Кто ваш основной клиент? (частные лица, застройщики, госзаказы, бизнес)</label>
          <input name="targetAudience" value={form.targetAudience} onChange={handleChange} />

          <label>Средний возраст и уровень дохода клиента?</label>
          <input name="audienceDetails" value={form.audienceDetails} onChange={handleChange} />

          <label>Какие боли и задачи клиента должен решать сайт?</label>
          <input name="painPoints" value={form.painPoints} onChange={handleChange} />

          <label className="titlebrifing">4. 💎 Уникальность и преимущества</label>
          <label>Чем вы отличаетесь от конкурентов?</label>
          <input name="uniqueness" value={form.uniqueness} onChange={handleChange} />

          <label>Почему клиент должен выбрать именно вас?</label>
          <input name="reasonToChoose" value={form.reasonToChoose} onChange={handleChange} />

          <label>Есть ли у компании УТП (уникальное торговое предложение)?</label>
          <input name="uniqueSellingPoint" value={form.uniqueSellingPoint} onChange={handleChange} />

          <label className="titlebrifing">5. 🏗️ Структура и функционал сайта</label>
          <label>Какие разделы планируются на сайте? (Главная, Услуги, Портфолио, О компании, Контакты, Частые вопросы и т.д.)</label>
          <input name="siteSections" value={form.siteSections} onChange={handleChange} />
          
          <label>Какие функции вам интересны:</label>
          <label>Нужна ли форма заявки / обратный звонок / чат с менеджером / Калькулятор стоимости / Онлайн-консультация / Отзывы/ Админка для контента?</label>
          <input name="callbackForm" value={form.callbackForm} onChange={handleChange} />

          <label className="titlebrifing">6. 🖼️ Контент и материалы</label>
          <label>Есть ли у вас тексты для сайта?</label>
          <input name="siteTexts" value={form.siteTexts} onChange={handleChange} />

          <label>Есть ли фотографии, видео, рендеры?</label>
          <input name="mediaFiles" value={form.mediaFiles} onChange={handleChange} />

          <label>Нужна ли помощь в написании текстов / копирайтинге?</label>
          <input name="copywritingHelp" value={form.copywritingHelp} onChange={handleChange} />

          <label>Нужна ли профессиональная фотосъемка объектов?</label>
          <input name="professionalPhotography" value={form.professionalPhotography} onChange={handleChange} />

          <label className="titlebrifing">7. 🎨 Дизайн и стиль</label>
          <label>Есть ли фирменный стиль / логотип?</label>
          <input name="brandStyle" value={form.brandStyle} onChange={handleChange} />

          <label>Есть ли сайт, который вам нравится по дизайну и функционалу? Укажите ссылки.</label>
          <input name="inspirationSites" value={form.inspirationSites} onChange={handleChange} />

          <label>Предпочтения по цветам, шрифтам, стилю? (светлый, тёмный, минимализм, хай-тек, классика)</label>
          <input name="designPreferences" value={form.designPreferences} onChange={handleChange} />

          <label>Есть ли что-то, что точно НЕ должно быть на сайте?</label>
          <input name="notAllowedElements" value={form.notAllowedElements} onChange={handleChange} />

          <label className="titlebrifing">8. ⚙️ Технические моменты</label>
          <label>Нужна ли адаптивная версия под телефоны?</label>
          <input name="responsiveDesign" value={form.responsiveDesign} onChange={handleChange} />

          <label>Нужна ли мультиязычность (например, русский + английский)?</label>
          <input name="multilingualSupport" value={form.multilingualSupport} onChange={handleChange} />

          <label>Нужна ли интеграция с сервисами (телеграм, CRM, почта, аналитика)?</label>
          <input name="serviceIntegration" value={form.serviceIntegration} onChange={handleChange} />

          <label>Где будет размещён сайт? Нужен ли хостинг?</label>
          <input name="hosting" value={form.hosting} onChange={handleChange} />

          <label className="titlebrifing">9. 📆 Сроки и бюджет</label>
          <label>Когда должен быть готов сайт?</label>
          <input name="projectDeadline" value={form.projectDeadline} onChange={handleChange} />

          <label>Есть ли важные дедлайны?</label>
          <input name="importantDeadlines" value={form.importantDeadlines} onChange={handleChange} />

          <label>Какой примерный бюджет на разработку?</label>
          <input name="budget" value={form.budget} onChange={handleChange} />

          <label className="titlebrifing">10. 📞 Контактные данные</label>
          <label>Имя контактного лица</label>
          <input name="contactName" value={form.contactName} onChange={handleChange} />

          <label>Телефон</label>
          <input name="contactPhone" value={form.contactPhone} onChange={handleChange} />

          <label>Email</label>
          <input name="contactEmail" value={form.contactEmail} onChange={handleChange} />

          <label>Удобный способ связи</label>
          <input name="preferredContactMethod" value={form.preferredContactMethod} onChange={handleChange} />

          <button className="sendbrif" type="submit">Отправить брифинг</button>
        </form>
      </Content>
      {/* <>
            <Carousel arrows infinite={false}>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
            </Carousel>

        </> */}
    </Layout>
  );
}

export default Brifing;