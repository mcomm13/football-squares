import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  numberPairs = [
    { team1: 'X', team2: 'X' },
    { team1: 'X', team2: 'X' },
    { team1: 'X', team2: 'X' },
    { team1: 'X', team2: 'X' },
    { team1: 'X', team2: 'X' },
    { team1: 'X', team2: 'X' },
    { team1: 'X', team2: 'X' },
    { team1: 'X', team2: 'X' },
    { team1: 'X', team2: 'X' },
    { team1: 'X', team2: 'X' }
  ];

  constructor() {}

  getRandomNumbers(): Array<any> {
    const numberPool = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomizedNumbers = [];
    let randomIndex, randomNumber;

    for (let i = 0; i <= 9; i++) {
      randomIndex = Math.floor(Math.random() * (10 - i));
      randomNumber = numberPool[randomIndex];

      randomizedNumbers.push(randomNumber);
      numberPool.splice(randomIndex, 1);
    }

    return randomizedNumbers;
  }

  assignNumberPairs() {
    const team1Numbers = this.getRandomNumbers();
    const team2Numbers = this.getRandomNumbers();

    for (let i = 0; i <= 9; i++) {
      this.numberPairs[i] = { team1: team1Numbers[i], team2: team2Numbers[i] };
    }
  }
}
