function getHole(index) {
    return document.getElementById("hole" + index);
  }
  
  // Получаем счетчики
  const deadCounter = document.getElementById('dead');
  const lostCounter = document.getElementById('lost');
  
  
  let dead = 0;
  let lost = 0;
  
  
  for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    
    if (!hole) {
      console.error("Лунка с id hole" + i + " не найдена");
      continue;
    }
    
    hole.addEventListener('click', function() {
      
      if (hole.classList.contains('hole_has-mole')) {
        // Если крот есть, увеличиваем счетчик побед
        dead++;
        deadCounter.textContent = dead;
        
        // Проверяем условие победы
        if (dead >= 10) {
          alert('Победа! Вы поймали 10 кротов!');
          // Сбрасываем счетчики
          dead = 0;
          lost = 0;
          deadCounter.textContent = dead;
          lostCounter.textContent = lost;
        }
      } else {
        // Если крота нет, увеличиваем счетчик поражений
        lost++;
        lostCounter.textContent = lost;
        
        
        if (lost >= 5) {
          alert('Вы проиграли! Слишком много промахов!');
          
          dead = 0;
          lost = 0;
          deadCounter.textContent = dead;
          lostCounter.textContent = lost;
        }
      }
    });
  }