"use client";
import React from "react";

import styles from "./PolicyContent.module.scss";
import { motion } from "framer-motion";
import { appearAnimationRight, appearAnimationTop } from "@/assets/animations";

interface PolicyContentProps {}

const PolicyContent: React.FC<PolicyContentProps> = () => {
  return (
    <div className={styles.policyContent}>
      <motion.h2
        className={styles.title}
        initial="initial"
        whileInView="animate"
        variants={appearAnimationRight}
        custom={1}
        viewport={{ amount: 0.2, once: true }}
      >
        Политика в отношении обработки персональных данных
      </motion.h2>
      <motion.div
        className={styles.textContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.h3 variants={appearAnimationRight} custom={1}>
          1. Общие положения
        </motion.h3>
        <motion.p variants={appearAnimationTop} custom={2}>
          1.1. Политика в отношении обработки персональных данных (далее — Политика) направлена на защиту прав и свобод
          физических лиц, персональные данные которых обрабатывает Общество с ограниченной ответственностью «Веброкет»
          г. Усть-Лабинск (далее — Оператор).
        </motion.p>
        <motion.p variants={appearAnimationTop} custom={3}>
          1.2. Политика разработана в соответствии с п. 2 ч. 1 ст. 18.1 Федерального закона от 27 июля 2006 г. № 152-ФЗ
          «О персональных данных» (далее — ФЗ «О персональных данных»).
        </motion.p>
        <motion.p variants={appearAnimationTop} custom={4}>
          1.3. Политика содержит сведения, подлежащие раскрытию в соответствии с ч. 1 ст. 14 ФЗ «О персональных данных»,
          и является общедоступным документом.
        </motion.p>
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.h3 variants={appearAnimationRight} custom={1}>
          2. Сведения об операторе
        </motion.h3>
        <motion.p variants={appearAnimationTop} custom={2}>
          2.1. Оператор ведет свою деятельность по адресу Краснодарский край, г. Усть-Лабинск, ул. Октябрьская, д. 68,
          кв. 50.
        </motion.p>
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.h3 variants={appearAnimationRight} custom={1}>
          3. Сведения об обработке персональных данных
        </motion.h3>
        <motion.p variants={appearAnimationTop} custom={2}>
          3.1. Оператор обрабатывает персональные данные на законной и справедливой основе для выполнения возложенных
          законодательством функций, полномочий и обязанностей, осуществления прав и законных интересов Оператора,
          работников Оператора и третьих лиц.
        </motion.p>
        <motion.p variants={appearAnimationTop} custom={3}>
          3.2. Оператор получает персональные данные непосредственно у субъектов персональных данных. 3.3. Оператор
          обрабатывает персональные данные автоматизированным и неавтоматизированным способами, с использованием средств
          вычислительной техники и без использования таких средств.
        </motion.p>
        <motion.p variants={appearAnimationTop} custom={4}>
          3.4. Действия по обработке персональных данных включают сбор, запись, систематизацию, накопление, хранение,
          уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление,
          доступ), обезличивание, блокирование, удаление и уничтожение.
        </motion.p>
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.h3 variants={appearAnimationRight} custom={1}>
          4. Обработка персональных данных клиентов
        </motion.h3>
        <motion.p variants={appearAnimationTop} custom={2}>
          4.1. Оператор обрабатывает персональные данные клиентов в рамках правоотношений с Оператором, урегулированных
          частью второй Гражданского Кодекса Российской Федерации от 26 января 1996 г. № 14-ФЗ, (далее — клиентов).
        </motion.p>
        <motion.p variants={appearAnimationTop} custom={3}>
          4.2. Оператор обрабатывает персональные данные клиентов в целях соблюдения норм законодательства РФ, а также с
          целью:
        </motion.p>
        <motion.ul className={styles.list} variants={appearAnimationTop} custom={3}>
          <li className={styles.item}>информирование о новых предложениях и специальных акциях; </li>
          <li className={styles.item}>заключение и исполнение условий договора.</li>
        </motion.ul>
        <motion.p variants={appearAnimationTop} custom={4}>
          4.3. Оператор обрабатывает персональные данные клиентов с их согласия, предоставляемого клиентами и/или их
          законными представителями путем совершения конклюдентных действий на настоящем интернет-сайте, в том числе, но
          не ограничиваясь, оформлением заявки на обратную связь, в соответствии с настоящей Политикой.
        </motion.p>
        <motion.p variants={appearAnimationTop} custom={5}>
          4.4. Оператор обрабатывает персональные данные клиентов не дольше, чем того требуют цели обработки
          персональных данных, если иное не предусмотрено требованиями законодательства РФ.
        </motion.p>
        <motion.p variants={appearAnimationTop} custom={6}>
          4.5. Оператор обрабатывает следующие персональные данные клиентов:
        </motion.p>
        <ul>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={7}>
            фамилия, имя, отчество;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={11}>
            номер контактного телефона;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={12}>
            адрес электронной почты.
          </motion.li>
        </ul>
        <motion.p variants={appearAnimationTop} custom={13}>
          Персональные данные, которые автоматически передаются в процессе посещения страниц сайта:
        </motion.p>
        <ul>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={14}>
            IP адрес;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={15}>
            информация из cookies;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={16}>
            информация о браузере (или иной программе, которая осуществляет доступ к сайту);
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={17}>
            время доступа;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={18}>
            посещенные адреса страниц;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={19}>
            реферер (адрес предыдущей страницы) и т.п.
          </motion.li>
        </ul>
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.h3 variants={appearAnimationRight} custom={1}>
          5. Сведения об обеспечении безопасности персональных данных
        </motion.h3>
        <motion.p variants={appearAnimationTop} custom={2}>
          5.1. Оператор назначает ответственного за организацию обработки персональных данных для выполнения
          обязанностей, предусмотренных ФЗ «О персональных данных» и принятыми в соответствии с ним нормативными
          правовыми актами.
        </motion.p>
        <motion.p variants={appearAnimationTop} custom={3}>
          5.2. Оператор применяет комплекс правовых, организационных и технических мер по обеспечению безопасности
          персональных данных для обеспечения конфиденциальности персональных данных и их защиты от неправомерных
          действий:
        </motion.p>
        <ul>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={4}>
            обеспечивает неограниченный доступ к Политике, копия которой размещена по адресу нахождения Оператора, а
            также может быть размещена на сайте Оператора (при его наличии);
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={5}>
            во исполнение Политики утверждает и приводит в действие документ «Положение об обработке персональных
            данных» (далее — Положение) и иные локальные акты;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={6}>
            производит ознакомление работников с положениями законодательства о персональных данных, а также с Политикой
            и Положением;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={7}>
            осуществляет допуск работников к персональным данным, обрабатываемым в информационной системе Оператора, а
            также к их материальным носителям только для выполнения трудовых обязанностей;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={8}>
            устанавливает правила доступа к персональным данным, обрабатываемым в информационной системе Оператора, а
            также обеспечивает регистрацию и учёт всех действий с ними;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={9}>
            производит оценку вреда, который может быть причинен субъектам персональных данных в случае нарушения ФЗ «О
            персональных данных»;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={10}>
            производит определение угроз безопасности персональных данных при их обработке в информационной системе
            Оператора;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={11}>
            применяет организационные и технические меры и использует средства защиты информации, необходимые для
            достижения установленного уровня защищенности персональных данных;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={12}>
            осуществляет обнаружение фактов несанкционированного доступа к персональным данным и принимает меры по
            реагированию, включая восстановление персональных данных, модифицированных или уничтоженных вследствие
            несанкционированного доступа к ним;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={13}>
            производит оценку эффективности принимаемых мер по обеспечению безопасности персональных данных до ввода в
            эксплуатацию информационной системы Оператора;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={14}>
            осуществляет внутренний контроль соответствия обработки персональных данных ФЗ «О персональных данных»,
            принятым в соответствии с ним нормативным правовым актам, требованиям к защите персональных данных,
            Политике, Положению и иным локальным актам, включающий контроль за принимаемыми мерами по обеспечению
            безопасности персональных данных и их уровня защищенности при обработке в информационной системе Оператора.
          </motion.li>
        </ul>
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ amount: 0.2, once: true }}
      >
        <motion.h3 variants={appearAnimationRight} custom={1}>
          6. Права субъектов персональных данных
        </motion.h3>
        <motion.p variants={appearAnimationTop} custom={2}>
          6.1. Субъект персональных данных имеет право:
        </motion.p>
        <ul>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={3}>
            на получение персональных данных, относящихся к данному субъекту, и информации, касающейся их обработки;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={4}>
            на уточнение, блокирование или уничтожение его персональных данных в случае, если они являются неполными,
            устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={5}>
            на отзыв данного им согласия на обработку персональных данных;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={6}>
            на защиту своих прав и законных интересов, в том числе на возмещение убытков и компенсацию морального вреда
            в судебном порядке;
          </motion.li>
          <motion.li className={styles.item} variants={appearAnimationTop} custom={7}>
            на обжалование действий или бездействия Оператора в уполномоченный орган по защите прав субъектов
            персональных данных или в судебном порядке.
          </motion.li>
        </ul>
        <motion.p variants={appearAnimationTop} custom={8}>
          6.2. Для реализации своих прав и законных интересов субъекты персональных данных имеют право обратиться к
          Оператору либо направить запрос лично или с помощью представителя. Запрос должен содержать сведения, указанные
          в ч. 3 ст. 14 ФЗ «О персональных данных».
        </motion.p>
      </motion.div>
    </div>
  );
};

export { PolicyContent };
