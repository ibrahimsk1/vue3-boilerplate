
import Vue from 'vue';
import { logger } from '@/app/shared/services/app-logger/app-logger';

Vue.config.errorHandler = (err, vm, info) => {
  logger.logToServer({ err, vm, info });
};

window.onerror = function(message, source, lineNo, colNo, error) {
  logger.logToServer({ message, source, lineNo, colNo, error });
};