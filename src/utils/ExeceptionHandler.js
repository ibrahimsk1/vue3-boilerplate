
import Vue from 'vue';
import loggerService from '../services/LoggerService';

Vue.config.errorHandler = (err, vm, info) => {
  console.log(err)
  loggerService.saveLog({ err, vm, info });
};

window.onerror = function(message, source, lineNo, colNo, error) {
  console.log(err)
  loggerService.saveLog({ message, source, lineNo, colNo, error });
};