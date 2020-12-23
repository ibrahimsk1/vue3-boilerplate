const ENDPOINTS = {
    LOG: '/logger/saveLog',
  };

class AuthService extends ApiService {
    constructor() {
      super();
    }

    saveLog = async logData => {
        const result = await this.apiClient.post(ENDPOINTS.LOG, logData);
    };


}

const loggerService = new AuthService();

export default loggerService;