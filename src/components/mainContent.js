import React from 'react';

const MainContent = ({ isDarkTheme }) => {
  const features = [
    {
      title: "Автосохранение",
      description: "Тема сохраняется в localStorage и восстанавливается при перезагрузке"
    },
    {
      title: "Плавные переходы",
      description: "Все изменения темы сопровождаются плавными анимациями"
    },
    {
      title: "Адаптивный дизайн",
      description: "Приложение корректно отображается на всех устройствах"
    },
    {
      title: "Доступность",
      description: "Удобное переключение темы одной кнопкой"
    }
  ];

  const stats = [
    { label: "Текущая тема", value: isDarkTheme ? "Тёмная" : "Светлая" },
    { label: "Время работы", value: "24/7" },
    { label: "Поддержка", value: "100%" }
  ];

  return (
    <main className="container">
      <div className="card">
        <h2>О приложении</h2>
        <p>Это демонстрационное React приложение показывает реализацию переключения между светлой и тёмной темами.</p>

        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3>Статистика</h3>
          <div className="grid">
            {stats.map((stat, index) => (
              <div key={index} className="card">
                <h4>{stat.label}</h4>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '30px' }}>
          <h3>Демонстрационный контент</h3>
          <div className="card">
            <p>Этот текст демонстрирует как контент выглядит в разных темах. Попробуйте переключить тему используя кнопку в правом верхнем углу.</p>
            <button className="button" style={{ marginTop: '15px' }}>
              Пример кнопки
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;