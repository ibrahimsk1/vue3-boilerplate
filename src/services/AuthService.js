import ApiService from './ApiService'

const ENDPOINTS = {
  LOGIN: '/auth/login',
  SIGN_UP: '/auth/register',
  LOGOUT: '/auth/logout',
  FORGOT_PASSWORD: '/user/forgot-password',
  RESET_PASSWORD: '/user/reset-password'
};

class AuthService extends ApiService {
  constructor() {
    super();
    this.init();
  }

  init = async () => {
    const token = this.getToken();
    const user = this.getUser();

    if (token && user) {
      await this.setAuthorizationHeader();
      this.api.setUnauthorizedCallback(this.destroySession.bind(this));
    }
  };

  setAuthorizationHeader = () => {
    const token = this.getToken();
    if (token) {
      this.api.attachHeaders({
        Authorization: `Bearer ${token}`
      });
    }
  };

  createSession = user => {
    localStorage.setItem('user', JSON.stringify(user));
    //this.setAuthorizationHeader();

  };

  destroySession = () => {
    localStorage.clear();
    this.api.removeHeaders(['Authorization']);

  };

  login = async loginData => {
    // const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    this.createSession(loginData);
    return loginData;
  };



  logout = async () => {
    const {data} = await this.apiClient.post(ENDPOINTS.LOGOUT);
    this.destroySession();
    return {
      ok: true,
      data
    };
  };

  forgotPassword = data => this.apiClient.post(ENDPOINTS.FORGOT_PASSWORD, data);

  resetPassword = data => this.apiClient.post(ENDPOINTS.RESET_PASSWORD, data);

  signup = async signupData => {
    await this.apiClient.post(ENDPOINTS.SIGN_UP, signupData);
    const {
      email,
      password
    } = signupData;
    return this.login({
      email,
      password
    });
  };

  getToken = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user).access_token : undefined;
  };

  getUser = () => {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
  };

  updateUserInStorage = property => {
    const user = localStorage.getItem('user');
    let jsonUser = JSON.parse(user);
    jsonUser = {
      ...jsonUser,
      ...property
    };
    localStorage.setItem('user', JSON.stringify(jsonUser));
  };

}

const authService = new AuthService();

export default authService;