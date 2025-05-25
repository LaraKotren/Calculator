document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons button');
    
    buttons.forEach(button => {
        // mouseover - при наведении мыши
        button.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        // mouseout - когда мышь уходит
        button.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Добавление значения в поле ввода
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Очистка поля ввода
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Добавление записи в историю
function addToHistory(expression, result) {
    const historyDiv = document.getElementById('history');
    const entry = document.createElement('div');
    entry.textContent = `${expression} = ${result}`;
    historyDiv.appendChild(entry);
    
    // Прокрутка к последней записи
    historyDiv.scrollTop = historyDiv.scrollHeight;
}

// Вычисление результата
function calculate() {
    const display = document.getElementById('display');
    const expression = display.value;
    
    try {
        // Вычисляем результат
        const result = eval(expression);
        
        // Добавляем в историю
        addToHistory(expression, result);
        
        // Отображаем результат
        display.value = result;
    } catch (error) {
        display.value = 'Ошибка';
    }
}

// Добавляем обработку клавиатуры
document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        appendToDisplay(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});
