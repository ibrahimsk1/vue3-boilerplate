import { isAuthActive } from '../constans/config'
export default (to, from, next) => {
  if (isAuthActive){
    next()
  }else{
    if (localStorage.getItem('user') != null && localStorage.getItem('user').length > 0) {
      next()
    } else {
      localStorage.removeItem('user')
      next('/Auth')
    }
  }
}
