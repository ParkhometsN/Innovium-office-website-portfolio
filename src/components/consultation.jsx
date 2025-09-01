import React, { useState } from 'react';
import './styles/cunsultation.css';
import { Col, Row, Input, message, Tooltip } from 'antd';
import Checkbox from './checkbox';
const { TextArea } = Input;

const BackAnswer = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+7 ');
    const [company, setCompany] = useState('');
    const [task, setTask] = useState('');
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState({
        name: false,
        phone: false,
        company: false,
        task: false,
        agree: false
    });

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (value.startsWith('+7')) {
            setPhone(value);
            setErrors({...errors, phone: false});
        }
    };

    const validateFields = () => {
        const newErrors = {
            name: !name.trim(),
            phone: !phone.trim() || phone.length < 5,
            company: !company.trim(),
            task: !task.trim(),
            agree: !agree
        };
        
        setErrors(newErrors);
        return !Object.values(newErrors).some(error => error);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateFields()) {
            message.error('Пожалуйста, заполните все обязательные поля');
            return;
        }

        const text = `
            Новый запрос на консультацию:
            Имя: ${name}
            Телефон: ${phone}
            Компания: ${company}
            Задача: ${task}
        `;

        try {
            const botToken = '7506858742:AAE1DQgI24_BtiH5gRP8Z8Q_7LP8eUrvllg';
            const chatIds = ['866843496', '372268976'];

            for (const chatId of chatIds) {
                const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: chatId,
                        text: text,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Ошибка при отправке сообщения для chat_id: ${chatId}`);
                }
            }

            message.success('Запрос успешно отправлен!');
            window.alert('Ваше сообщение в обработке!');
            
            setName('');
            setPhone('+7');
            setCompany('');
            setTask('');
            setAgree(false);
            setErrors({
                name: false,
                phone: false,
                company: false,
                task: false,
                agree: false
            });
        } catch (error) {
            console.error('Ошибка:', error);
            message.error('Произошла ошибка при отправке запроса');
        }
    };

    return (
        <Col xs={24} md={16} className='wdad'>
            <div className="container_con">
                <Row gutter={[10, 10]} justify="center">
                    <Col xs={24} md={12}>
                        <div className="rifkbl">
                            <div className="ipa">
                                <h2>КОНСУЛЬТАЦИЯ — <span className='green'>0₽</span></h2>
                                <h4>На этом этапе нам важно понять: чего вы хотите и как мы можем<br />
                                    помочь максимально эффективно </h4>
                            </div>
                            <div className="pweiuf">
                                <div className="h">
                                    <p>@miroshnikk</p>
                                    <p>Артем - Маркенинг</p>
                                </div>
                                <h4>innoviumoffice@mail.ru</h4>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={12}>
                        <div className="leftbl">
                            <form id="contacts" className="form-container" onSubmit={handleSubmit}>
                                <Tooltip 
                                    title="Пожалуйста, введите ваше имя" 
                                    visible={errors.name}
                                    placement="topLeft"
                                    color="red"
                                >
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Ваше имя"
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setErrors({...errors, name: false});
                                        }}
                                        className={errors.name ? 'error-field' : ''}
                                    />
                                </Tooltip>

                                <Tooltip 
                                    title="Пожалуйста, введите корректный телефон" 
                                    visible={errors.phone}
                                    placement="topLeft"
                                    color="red"
                                >
                                    <input
                                        type="tel"
                                        id="phone"
                                        placeholder="+7 (___) ___-____"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        className={errors.phone ? 'error-field' : ''}
                                    />
                                </Tooltip>

                                <Tooltip 
                                    title="Пожалуйста, введите название компании" 
                                    visible={errors.company}
                                    placement="topLeft"
                                    color="red"
                                >
                                    <input
                                        type="text"
                                        id="company"
                                        placeholder="Компания"
                                        value={company}
                                        onChange={(e) => {
                                            setCompany(e.target.value);
                                            setErrors({...errors, company: false});
                                        }}
                                        className={errors.company ? 'error-field' : ''}
                                    />
                                </Tooltip>

                                <Tooltip 
                                    title="Пожалуйста, опишите вашу задачу" 
                                    visible={errors.task}
                                    placement="topLeft"
                                    color="red"
                                >
                                    <TextArea
                                        id="task"
                                        rows={6}
                                        placeholder="Описание задачи/ссылка"
                                        value={task}
                                        onChange={(e) => {
                                            setTask(e.target.value);
                                            setErrors({...errors, task: false});
                                        }}
                                        className={errors.task ? 'error-field' : ''}
                                    />
                                </Tooltip>

                                <div className="checkbox-container">
                                    <Tooltip 
                                        title="Необходимо ваше согласие" 
                                        visible={errors.agree}
                                        placement="topLeft"
                                        color="red"
                                    >
                                        <div className='o'>
                                            <Checkbox 
                                                checked={agree}
                                                onChange={(e) => {
                                                    setAgree(e.target.checked);
                                                    setErrors({...errors, agree: false});
                                                }}
                                                className={errors.agree ? 'error-checkbox' : ''}
                                            />
                                            <label htmlFor="agree">Я согласен с политикой конфиденциальности</label>
                                        </div>
                                    </Tooltip>
                                </div>
                                
                                <button className='discuss_project' type="submit">Обсудить проект</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </div>
        </Col>
    );
};

export default BackAnswer;