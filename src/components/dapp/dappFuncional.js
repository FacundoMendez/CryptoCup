const timerFuncionalDapp = () => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/21/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("daysDapp").innerText = Math.floor(distance / (day))
            document.getElementById("hoursDapp").innerText = Math.floor((distance % (day)) / (hour))
            document.getElementById("minutesDapp").innerText = Math.floor((distance % (hour)) / (minute))
            document.getElementById("secondsDapp").innerText = Math.floor((distance % (minute)) / second);
  
          if (distance < 0) {
            document.getElementById("headlineDapp").innerText = "It's my birthday!";
            document.getElementById("countdownDapp").style.display = "none";
            clearInterval(x);
          }
          //seconds
        }, 0)
}

export default timerFuncionalDapp