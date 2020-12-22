import { isAuthActive } from '../constants/config'
export default (to, from, next) => {
  if (isAuthActive){
    next()
  }else{
    if (localStorage.getItem('user') != null && localStorage.getItem('user').length > 0) {
      // verify with firebase or jwt
      next()
    } else {
      localStorage.removeItem('user')
      next('/user/login')
    }
  }
}
