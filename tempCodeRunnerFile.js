  chooseIncome: function() {
      let items = prompt('Что принесет дополнительный доход ? (перечислите через запятую)' , '');
      appData.income = items.split(', ');
      appData.income.push(prompt("Может что-то еще?"))
      appData.income.sort();
     
      while ( items == "" || items == null ) {
        items = prompt('Что принесет дополнительный доход ? (перечислите через запятую)' , '');
      }
      items.forEach(function(item, i , mass) {
              console.log(i + ': ' + item + " (массив: " + mass + ')');
      });
        

  }