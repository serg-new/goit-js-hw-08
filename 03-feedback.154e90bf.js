function t(e){return e&&e.__esModule?e.default:e}var n,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof i&&i&&i.Object===Object&&i,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),m=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return s.Date.now()};function g(e,t,n){var i,o,r,u,a,f,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function T(e){return c=e,a=setTimeout(h,t),l?g(e):u}function x(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=r}function h(){var e=v();if(x(e))return j(e);a=setTimeout(h,function(e){var n=t-(e-f);return s?p(n,r-(e-c)):n}(e))}function j(e){return a=void 0,m&&i?g(e):(i=o=void 0,u)}function E(){var e=v(),n=x(e);if(i=arguments,o=this,f=e,n){if(void 0===a)return T(f);if(s)return a=setTimeout(h,t),g(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=b(t)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),E.cancel=function(){void 0!==a&&clearTimeout(a),c=0,i=f=o=a=void 0},E.flush=function(){return void 0===a?u:j(v())},E}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=u.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}n=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const T={},x={form:document.querySelector(".feedback-form"),inputEmail:document.querySelector('input[name="email"]'),inputText:document.querySelector('text[name="message"]')};x.form.addEventListener("input",t(n)((function(){T.email=x.inputEmail.value,T.message=x.inputText.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))}),500)),x.form.addEventListener("submit",(function(t){if(t.preventDefault(),""!==x.inputEmail.value&&""!==x.inputText.value)return e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),void console.log(T);alert("Всі поля треба заповнити")})),function(){try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(x.inputEmail.value=e.email,x.inputText.value=e.message)}catch(e){console.log(e.name)}}();
//# sourceMappingURL=03-feedback.154e90bf.js.map
