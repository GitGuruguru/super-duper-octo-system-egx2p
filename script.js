function przejdzDoBloku2() {
    document.querySelector(".dane").classList.add("hidden");
    document.querySelector(".kont").classList.remove("hidden");
  }


  function przejdzDoBloku3() {
    document.querySelector(".kont").classList.add("hidden");
    document.querySelector(".pasw").classList.remove("hidden");
  }


  function sprawdzHasla() {
    const haslo1 = document.getElementById("haslo1").value;
    const haslo2 = document.getElementById("haslo2").value;

    if (haslo1 !== haslo2) {
      alert('Haslo jest nie prawidlowe');
    } else {
      const imie = document.getElementById("imie").value;
      const nazwisko = document.getElementById("nazwisko").value;
      console.log(`Witaj ${imie} ${nazwisko}`);
    }
  }

