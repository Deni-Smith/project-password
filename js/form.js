/* form.js */

export function isPasswordValid(password) {
    console.log(password)
      // your code
      if ( password === "q134b7" ){
        console.log('Пароль верный')
      return true
      }else{ 
        console.log('Пароль не верный')
        return false
      }
  }