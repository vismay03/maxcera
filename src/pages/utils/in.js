
const TOKEN = "login" ;


export const login = () => {
    localStorage.setItem(TOKEN, "true");
    
}


export const logout = () => {
    localStorage.removeItem(TOKEN);
}


export const isLogin = () => {
  
    if(localStorage.getItem(TOKEN)){
        return true;
    }

  return false
    
}

