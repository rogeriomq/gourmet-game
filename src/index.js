function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Alert {
  static question(message) {
    return window.confirm(message);
  }
  static input(message) {
    return window.prompt(message, '');
  }
  static confirm(message) {
    return window.confirm(message);
  }
}

const foods = ['bolo de chocolate', 'massa', 'lasanha'];

const start = () => {
  let index = foods.indexOf('massa');
  const startIndex = index;
  const init = Alert.confirm('Vamos começar?\n Pense em um prato que gosta');

  if (!init) return;

  do {
    console.log('index ', index, 'foods:', foods);
    if (index < 0) return start();

    let resp = Alert.question(`O prato que você pensou é ${foods[index]}`);

    if (resp) {
      if (index === foods.length - 1 || index === 0) {
        Alert.confirm('Yeap, Acertei!');
        return start();
      }

      index = index >= startIndex ? index + 1 : index - 1;
      console.log({ index });
      continue;
    }

    if (index === foods.length - 1 || index === 0) {
      const newDish = Alert.input('Desisto\n Em qual prato você pensou?');
      if (newDish) {
        const category = Alert.input(
          `${newDish} é __________ mas ${foods[index]} não`
        );

        foods.splice(index, 0, category);
        foods.splice(index === 0 ? 0 : index + 1, index === 0 ? 0 : 1, newDish);
        return start();
      }
    }

    index--;
  } while (true);
};

document.getElementById('btn-start').onclick = function () {
  start();
};
