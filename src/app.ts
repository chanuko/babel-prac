import 'whatwg-fetch';
import "core-js/stable";
import "regenerator-runtime/runtime";

import send from './modules/sendFetch';

addEventListener("click", send, false);
