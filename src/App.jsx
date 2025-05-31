import styles from "./app.module.css";
import { useState } from "react";
import data from "./assets/data.json";

export const App = () => {
    const [steps] = useState(data);
    const [activeIndex, setActiveIndex] = useState(0);

    const forwardClick = () => {
        setActiveIndex(activeIndex + 1);
    };

    const backClick = () => {
        setActiveIndex(activeIndex - 1);
    };

    const backToFirstClick = () => {
        setActiveIndex(0);
    }

    const toClickedItem = (event) => {
        const numberOfClickedItem = Number(event.target.innerText) - 1;
        setActiveIndex(numberOfClickedItem);
    }

    const isFirst = activeIndex === 0;
    const isLast = activeIndex === steps.length - 1;

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Инструкция по готовке пельменей</h1>
                <div className={styles.steps}>
                    <div className={styles["steps-content"]}>
                        {steps[activeIndex].content}
                    </div>
                    <ul className={styles["steps-list"]}>
                        {steps.map((item, index) => {
                            return (
                                <li className={
                                        styles["steps-item"] + " " +
                                        (index <= activeIndex ? styles.done : "") + " " +
                                        (index === activeIndex ? styles.active : "")
                                    } key={item.id}
                                    >
                                    <button className={styles["steps-item-button"]} onClick={toClickedItem}>
                                        {index + 1}
                                    </button>
                                    {item.title}
                                </li>
                            );
                        })}
                    </ul>
                    <div className={styles["buttons-container"]}>
                        <button className={styles.button} onClick={backClick} disabled={isFirst}>
                            Назад
                        </button>
                        <button className={styles.button} onClick={isLast ? backToFirstClick : forwardClick}>
                            {isLast ? "Начать сначала" : "Далее"}
                        </button>
                        {/* "Начать сначала", можно сделать этой же кнопкой, просто подменять обработчик и текст в зависимости от условия */}
                        {/* Или заменять всю кнопку в зависимости от условия */}
                    </div>
                </div>
            </div>
        </div>
    );
};

//  <li className={styles['steps-item'] + ' ' + styles.done}>
//                             {/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
//                             <button className={styles['steps-item-button']}>1</button>
//                             {/* При клике на кнопку установка выбранного шага в качестве активного */}
//                             Шаг 1
//                         </li>
//                         <li className={styles['steps-item'] + ' ' + styles.done}>
//                             <button className={styles['steps-item-button']}>2</button>
//                             Шаг 2
//                         </li>
//                         <li
//                             className={
//                                 styles['steps-item'] +
//                                 ' ' +
//                                 styles.done +
//                                 ' ' +
//                                 styles.active
//                             }
//                         >
//                             <button className={styles['steps-item-button']}>3</button>
//                             Шаг 3
//                         </li>
//                         <li className={styles['steps-item']}>
//                             <button className={styles['steps-item-button']}>4</button>
//                             Шаг 4
//                         </li>
