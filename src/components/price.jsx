import React from "react";
import './styles/price.css';

const Price = ({ title, bag, description }) => {
  // Разбиваем описание на отдельные пункты по разделителю (например, по точке с запятой)
  const descriptionItems = description.split(';').map((item, index) => (
    <li key={index}>{item.trim()}</li> // Убираем лишние пробелы и рендерим как <li>
  ));

  return (
    <div className="container_for_serves">
      <div className="white_background">
        <img src={bag} alt={title} />
        <div className="content_serves">
          <div className="title_name_of_serves">
            <div className="title_price">
              <h4>{title}</h4>
            </div>
            <ul className="description">
              {descriptionItems}
            </ul>
          </div>
          <a href="https://t.me/miroshnikk">
            <button className="style_button">рассчитать проект</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Price;