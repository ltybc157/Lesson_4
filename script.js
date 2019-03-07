let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц", '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц", '');
  }
}
start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  timeData: time,
  savings: true,
  chooseExpenses: function () {

    for (let i = 0; i < 2; i++) {
      let a = prompt("Ведите обязательно статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        i = i - 1;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень доставка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений?', ''),
        percent = +prompt("Под какой процент?", '');

      appData.monthIncome = save / 100 / 12 * percent;
      alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    let one = prompt('Статья необязательных расходов?', '1 вопрос');
    let two = prompt('Статья необязательных расходов?', '2 вопрос');
    let three = prompt('Статья необязательных расходов?', '3 вопрос'); {
      appData.optionalExpenses[1] = one;
      appData.optionalExpenses[2] = two;
      appData.optionalExpenses[3] = three;
    }

  },
  chooseIncome: function () {

    let items = prompt('Что принесет дополнительный доход ? (перечислите через запятую)', '');
    appData.income = items.split(', ');
    appData.income.push(prompt("Может что-то еще?"))
    appData.income.sort();

    while (items == "" || items == null) {
      items = prompt('Что принесет дополнительный доход ? (перечислите через запятую)', '');
    }
    let qwe = appData.income;
    delete qwe[0];
    qwe.forEach(function (qwe, i) {
      console.log("Способы доп. заработка: " + i + ': ' + qwe);
      alert("Способы доп. заработка: " + i + ': ' + qwe);
    });
    for (let key in appData) {
      console.log("Наша программа включает в себя данные: " + appData);
      alert("Наша программа включает в себя данные: " + key + appData);

    }

  }
}