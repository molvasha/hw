function greeting(Name){
    message = `Приветствую тебя, ${Name}`;
    return message
}

const Name = prompt('Введите ваше имя: ');
console.log(greeting(Name));