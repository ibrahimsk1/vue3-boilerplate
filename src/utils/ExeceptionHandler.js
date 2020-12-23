
import Vue from 'vue';
import loggerService from '../services/LoggerService';

Vue.config.errorHandler = (err, vm, info) => {
  loggerService.saveLog({ err, vm, info });
};

window.onerror = function(message, source, lineNo, colNo, error) {
  loggerService.saveLog({ message, source, lineNo, colNo, error });
};