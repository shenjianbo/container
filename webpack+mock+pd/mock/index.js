const Mock = require('mockjs');
import P_login_do from './POST/login/do/index.js';
import P_register_do from './POST/register/do/index.js';
Mock.mock('/login/do', 'post', P_login_do);
Mock.mock('/register/do', 'post', P_register_do);