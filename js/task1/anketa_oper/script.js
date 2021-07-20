const GENDER_MAN = 'мужской';
const GENDER_WOMEN = 'женский';
 
 let surname = prompt('Введите вашу фамилию');
 let name = prompt('Веведите ваше имя');
 let patronymic = prompt('Введите ваше отчество');
 let age = parseInt(prompt('Веведите ваш возраст'));
 let gender = confirm('ваш пол - мужской?');
 let gendername, pension;

gendername = gender ? GENDER_MAN : GENDER_WOMEN;

pension = ((gendername === GENDER_MAN && age >= 63) || (gendername === GENDER_WOMEN && age >= 60)) ? 'да' : 'нет';

 
alert (' ваше фио: '+surname+' '+name+ ' '+patronymic+
        '\nваш возраст в годах: ' + age+
        '\nваш возраст в днях: ' + (age*365)+
        '\nчерез 5 лет вам будет: ' + (age+5) + 
        '\nваш пол: ' + gendername +
        '\nвы на пенсии: ' + pension);
