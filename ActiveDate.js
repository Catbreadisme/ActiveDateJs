reg = setInterval(ActiveDateFunction, 1000)

function ActiveDateFunction(){
    globalDate = new Date
  
    let currentTime = {
      CurrentYear: globalDate.getFullYear(),
      CurrentMonth: globalDate.getUTCMonth(),
      CurrentDay: globalDate.getDate(),
      CurrentHour: globalDate.getHours(),
      CurrentMinute: globalDate.getMinutes(),
      CurrentSecond: globalDate.getSeconds()
    }
  
    console.log(currentTime)
    
  }