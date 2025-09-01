import React from 'react';

// Компонент, который применяет стили к тексту
const StyledText = ({ words, backgroundColor, textColor, border }) => {
  const baseStyles = {
    border: border || '0px solid white', // Используем переданный border или значение по умолчанию
    padding: '15px 20px', // Padding 20px сверху/снизу и 10px слева/справа
    backgroundColor: backgroundColor || '#f0f0f0', // Цвет фона (по умолчанию серый)
    color: textColor || '#000', // Цвет текста (по умолчанию черный)
    display: 'inline-block', // Чтобы padding применялся корректно
    margin: '5px', // Отступ между словами
    borderRadius: '10px', // Скругление углов
  };
  const firstElementStyles = {
    ...baseStyles,
    backgroundColor: '#0B0B0B', // Другой цвет фона для первого элемента
    border: border || '1px solid white',
  };

  const lastElementStyles = {
    ...baseStyles,
    backgroundColor: '#0B0B0B', // Другой цвет фона для последнего элемента
    border: border || '1px solid white',
  };

  if (Array.isArray(words)) {
    return (
      <div>
        {words.map((word, index) => {
          let styles = baseStyles;

          // Применяем дополнительные стили для первого элемента
          if (index === 0) {
            styles = firstElementStyles;
          }

          // Применяем дополнительные стили для последнего элемента
          if (index === words.length - 1) {
            styles = lastElementStyles;
          }

          return (
            <span key={index} style={styles}>
              {word}
            </span>
          );
        })}
      </div>
    );
  }

  return <span style={baseStyles}>{words}</span>;
};

export default StyledText;