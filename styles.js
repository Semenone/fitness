(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n@font-face {\n  font-family: \"SF PRO Display Black\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-Black.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display BoldItalic\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-BlackItalic.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display Bold\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-Bold.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display BoldItalic\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-BoldItalic.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display Heavy\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-Heavy.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display HeavyItalic\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-BlackItalic.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display Light\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-Light.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display LightItalic\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-LightItalic.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display Medium\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-Medium.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display MediumItalic\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-MediumItalic.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display Regular\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-Regular.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display RegularItalic\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-RegularItalic.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display Semibold\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-Semibold.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display SemiboldItalic\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-SemiboldItalic.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display Thin\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-Thin.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display ThinItalic\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-ThinItalic.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display Ultralight\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-Ultralight.otf');\n}\n@font-face {\n  font-family: \"SF PRO Display UltralightItalic\";\n  src: url('https://semenone.github.io/fitness/SF-Pro-Display-UltralightItalic.otf');\n}\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\nbody {\n  line-height: 1;\n  transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000;\n  perspective: 1000;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background-color: #262626;\n  color: #ffffff;\n  font-size: 21px;\n  font-family: \"SF PRO Display Regular\", \"Arial\", sans-serif;\n}\n@media (min-width: 1366px) {\n  body {\n    zoom: 1.0671875;\n  }\n}\n@media (min-width: 1400px) {\n  body {\n    zoom: 1.09375;\n  }\n}\n@media (min-width: 1680px) {\n  body {\n    zoom: 1.3125;\n  }\n}\n@media (min-width: 1920px) {\n  body {\n    zoom: 1.5;\n  }\n}\n@media (min-width: 3840px) {\n  body {\n    zoom: 3;\n  }\n}\nmain * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\na {\n  display: inline-block;\n  outline: none;\n  color: #fff;\n  text-decoration: none;\n}\n.clearfix:before,\n.clearfix:after {\n  content: \"\";\n  display: table;\n}\n.clearfix:after {\n  clear: both;\n}\n[hidden], .hidden {\n  display: none !important;\n}\n[invisible], .invisible {\n  visibility: hidden !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3NlbXlvbi9maXRuZXNzLWFwcC9zdHlsZXMvX3Jlc2V0LnNjc3MiLCJzcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvc2VteW9uL2ZpdG5lc3MtYXBwL3N0eWxlcy9fZm9udHMuc2NzcyIsIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3R5bGVzL192YXJzLnNjc3MiLCIvVXNlcnMvc2VteW9uL2ZpdG5lc3MtYXBwL3N0eWxlcy9fZ2VuZXJhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FDQUE7OztDQUFBO0FBS0E7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQ0Q7QURDQSxnREFBQTtBQUNBOztFQUVDLGNBQUE7QUNFRDtBREFBO0VBQ0MsY0FBQTtBQ0dEO0FEREE7RUFDQyxnQkFBQTtBQ0lEO0FERkE7RUFDQyxZQUFBO0FDS0Q7QURIQTs7RUFFQyxXQUFBO0VBQ0EsYUFBQTtBQ01EO0FESkE7RUFDQyx5QkFBQTtFQUNBLGlCQUFBO0FDT0Q7QURKQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ09KO0FDM0RBO0VBQWEsbUNDOEJBO0VEOUIwQix1RUFBQTtBRGdFdkM7QUMvREE7RUFBYSx3Q0NnQ0s7RURoQzBCLDZFQUFBO0FEbUU1QztBQ2xFQTtFQUFhLGtDQzhCRDtFRDlCMEIsc0VBQUE7QURzRXRDO0FDckVBO0VBQWEsd0NDOEJLO0VEOUIwQiw0RUFBQTtBRHlFNUM7QUN4RUE7RUFBYSxtQ0M4QkE7RUQ5QjBCLHVFQUFBO0FENEV2QztBQzNFQTtFQUFhLHlDQzhCTTtFRDlCMEIsNkVBQUE7QUQrRTdDO0FDOUVBO0VBQWEsbUNDOEJBO0VEOUIwQix1RUFBQTtBRGtGdkM7QUNqRkE7RUFBYSx5Q0M4Qk07RUQ5QjBCLDZFQUFBO0FEcUY3QztBQ3BGQTtFQUFhLG9DQzhCQztFRDlCMEIsd0VBQUE7QUR3RnhDO0FDdkZBO0VBQWEsMENDOEJPO0VEOUIwQiw4RUFBQTtBRDJGOUM7QUMxRkE7RUFBYSxxQ0M4QkU7RUQ5QjBCLHlFQUFBO0FEOEZ6QztBQzdGQTtFQUFhLDJDQzhCUTtFRDlCMEIsK0VBQUE7QURpRy9DO0FDaEdBO0VBQWEsc0NDOEJHO0VEOUIwQiwwRUFBQTtBRG9HMUM7QUNuR0E7RUFBYSw0Q0M4QlM7RUQ5QjBCLGdGQUFBO0FEdUdoRDtBQ3RHQTtFQUFhLGtDQzhCRDtFRDlCMEIsc0VBQUE7QUQwR3RDO0FDekdBO0VBQWEsd0NDOEJLO0VEOUIwQiw0RUFBQTtBRDZHNUM7QUM1R0E7RUFBYSx3Q0M4Qks7RUQ5QjBCLDRFQUFBO0FEZ0g1QztBQy9HQTtFQUFhLDhDQzhCVztFRDlCMEIsa0ZBQUE7QURtSGxEO0FHbklBOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7R0FBQSxxQkFBQTtPQUFBLGlCQUFBO0FIb0lGO0FHaklBO0VBc0JFLGNBQUE7RUFFQSxxQkFBQTtFQUNBLDZCQUFBO0VBRUEsbUNBQUE7RUFDQSwyQkFBQTtFQUVBLHlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQ0FBQTtFQUNBLHdCQUFBO0VBRUEseUJEOUJxQjtFQytCckIsY0R2Q007RUN5Q04sZUFBQTtFQUNBLDBEQUFBO0FIeUdGO0FHL0lFO0VBRkY7SUFHSSxlQUFBO0VIa0pGO0FBQ0Y7QUdoSkU7RUFORjtJQU9JLGFBQUE7RUhtSkY7QUFDRjtBR2pKRTtFQVZGO0lBV0ksWUFBQTtFSG9KRjtBQUNGO0FHbEpFO0VBZEY7SUFlSSxTQUFBO0VIcUpGO0FBQ0Y7QUduSkU7RUFsQkY7SUFtQkksT0FBQTtFSHNKRjtBQUNGO0FHL0hBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBSGtJRjtBRy9IQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBSGtJRjtBRy9IQTs7RUFFRSxXQUFBO0VBQ0EsY0FBQTtBSGtJRjtBRy9IQTtFQUNFLFdBQUE7QUhrSUY7QUcvSEE7RUFDRSx3QkFBQTtBSGtJRjtBRy9IQTtFQUNFLDZCQUFBO0FIa0lGIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBpbXBvcnQgJ3N0eWxlcy9tYWluJzsiLCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cblxuKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLCBxIHtcbiAgcXVvdGVzOiBub25lO1xufVxuXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IEJsYWNrXCI7XG4gIHNyYzogdXJsKH5hc3NldHMvZm9udHMvU0YtUFJPLURpc3BsYXkvU0YtUHJvLURpc3BsYXktQmxhY2sub3RmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheSBCb2xkSXRhbGljXCI7XG4gIHNyYzogdXJsKH5hc3NldHMvZm9udHMvU0YtUFJPLURpc3BsYXkvU0YtUHJvLURpc3BsYXktQmxhY2tJdGFsaWMub3RmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheSBCb2xkXCI7XG4gIHNyYzogdXJsKH5hc3NldHMvZm9udHMvU0YtUFJPLURpc3BsYXkvU0YtUHJvLURpc3BsYXktQm9sZC5vdGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IEJvbGRJdGFsaWNcIjtcbiAgc3JjOiB1cmwofmFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheS9TRi1Qcm8tRGlzcGxheS1Cb2xkSXRhbGljLm90Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXkgSGVhdnlcIjtcbiAgc3JjOiB1cmwofmFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheS9TRi1Qcm8tRGlzcGxheS1IZWF2eS5vdGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IEhlYXZ5SXRhbGljXCI7XG4gIHNyYzogdXJsKH5hc3NldHMvZm9udHMvU0YtUFJPLURpc3BsYXkvU0YtUHJvLURpc3BsYXktQmxhY2tJdGFsaWMub3RmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheSBMaWdodFwiO1xuICBzcmM6IHVybCh+YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5L1NGLVByby1EaXNwbGF5LUxpZ2h0Lm90Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXkgTGlnaHRJdGFsaWNcIjtcbiAgc3JjOiB1cmwofmFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheS9TRi1Qcm8tRGlzcGxheS1MaWdodEl0YWxpYy5vdGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IE1lZGl1bVwiO1xuICBzcmM6IHVybCh+YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5L1NGLVByby1EaXNwbGF5LU1lZGl1bS5vdGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IE1lZGl1bUl0YWxpY1wiO1xuICBzcmM6IHVybCh+YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5L1NGLVByby1EaXNwbGF5LU1lZGl1bUl0YWxpYy5vdGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IFJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwofmFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheS9TRi1Qcm8tRGlzcGxheS1SZWd1bGFyLm90Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXkgUmVndWxhckl0YWxpY1wiO1xuICBzcmM6IHVybCh+YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5L1NGLVByby1EaXNwbGF5LVJlZ3VsYXJJdGFsaWMub3RmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheSBTZW1pYm9sZFwiO1xuICBzcmM6IHVybCh+YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5L1NGLVByby1EaXNwbGF5LVNlbWlib2xkLm90Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXkgU2VtaWJvbGRJdGFsaWNcIjtcbiAgc3JjOiB1cmwofmFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheS9TRi1Qcm8tRGlzcGxheS1TZW1pYm9sZEl0YWxpYy5vdGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IFRoaW5cIjtcbiAgc3JjOiB1cmwofmFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheS9TRi1Qcm8tRGlzcGxheS1UaGluLm90Zik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXkgVGhpbkl0YWxpY1wiO1xuICBzcmM6IHVybCh+YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5L1NGLVByby1EaXNwbGF5LVRoaW5JdGFsaWMub3RmKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheSBVbHRyYWxpZ2h0XCI7XG4gIHNyYzogdXJsKH5hc3NldHMvZm9udHMvU0YtUFJPLURpc3BsYXkvU0YtUHJvLURpc3BsYXktVWx0cmFsaWdodC5vdGYpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHRJdGFsaWNcIjtcbiAgc3JjOiB1cmwofmFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheS9TRi1Qcm8tRGlzcGxheS1VbHRyYWxpZ2h0SXRhbGljLm90Zik7XG59XG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMDtcbiAgcGVyc3BlY3RpdmU6IDEwMDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IFJlZ3VsYXJcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEzNjZweCkge1xuICBib2R5IHtcbiAgICB6b29tOiAxLjA2NzE4NzU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgYm9keSB7XG4gICAgem9vbTogMS4wOTM3NTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2ODBweCkge1xuICBib2R5IHtcbiAgICB6b29tOiAxLjMxMjU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgYm9keSB7XG4gICAgem9vbTogMS41O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzg0MHB4KSB7XG4gIGJvZHkge1xuICAgIHpvb206IDM7XG4gIH1cbn1cblxubWFpbiAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNsZWFyZml4OmJlZm9yZSxcbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuW2hpZGRlbl0sIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbltpbnZpc2libGVdLCAuaW52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAndmFycyc7XG5cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJGZvbnQtYmxhY2s7IHNyYzogdXJsKCN7JGZvbnRzLXNyY30vU0YtUHJvLURpc3BsYXktQmxhY2sub3RmKTsgfVxuQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAkZm9udC1ib2xkSXRhbGljOyBzcmM6IHVybCgjeyRmb250cy1zcmN9L1NGLVByby1EaXNwbGF5LUJsYWNrSXRhbGljLm90Zik7IH1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJGZvbnQtYm9sZDsgc3JjOiB1cmwoI3skZm9udHMtc3JjfS9TRi1Qcm8tRGlzcGxheS1Cb2xkLm90Zik7IH1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJGZvbnQtYm9sZEl0YWxpYzsgc3JjOiB1cmwoI3skZm9udHMtc3JjfS9TRi1Qcm8tRGlzcGxheS1Cb2xkSXRhbGljLm90Zik7IH1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJGZvbnQtaGVhdnk7IHNyYzogdXJsKCN7JGZvbnRzLXNyY30vU0YtUHJvLURpc3BsYXktSGVhdnkub3RmKTsgfVxuQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAkZm9udC1oZWF2eUl0YWxpYzsgc3JjOiB1cmwoI3skZm9udHMtc3JjfS9TRi1Qcm8tRGlzcGxheS1CbGFja0l0YWxpYy5vdGYpOyB9XG5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICRmb250LWxpZ2h0OyBzcmM6IHVybCgjeyRmb250cy1zcmN9L1NGLVByby1EaXNwbGF5LUxpZ2h0Lm90Zik7IH1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJGZvbnQtbGlnaHRJdGFsaWM7IHNyYzogdXJsKCN7JGZvbnRzLXNyY30vU0YtUHJvLURpc3BsYXktTGlnaHRJdGFsaWMub3RmKTsgfVxuQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAkZm9udC1tZWRpdW07IHNyYzogdXJsKCN7JGZvbnRzLXNyY30vU0YtUHJvLURpc3BsYXktTWVkaXVtLm90Zik7IH1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJGZvbnQtbWVkaXVtSXRhbGljOyBzcmM6IHVybCgjeyRmb250cy1zcmN9L1NGLVByby1EaXNwbGF5LU1lZGl1bUl0YWxpYy5vdGYpOyB9XG5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICRmb250LXJlZ3VsYXI7IHNyYzogdXJsKCN7JGZvbnRzLXNyY30vU0YtUHJvLURpc3BsYXktUmVndWxhci5vdGYpOyB9XG5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICRmb250LXJlZ3VsYXJJdGFsaWM7IHNyYzogdXJsKCN7JGZvbnRzLXNyY30vU0YtUHJvLURpc3BsYXktUmVndWxhckl0YWxpYy5vdGYpOyB9XG5AZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6ICRmb250LXNlbWlib2xkOyBzcmM6IHVybCgjeyRmb250cy1zcmN9L1NGLVByby1EaXNwbGF5LVNlbWlib2xkLm90Zik7IH1cbkBmb250LWZhY2UgeyBmb250LWZhbWlseTogJGZvbnQtc2VtaWJvbGRJdGFsaWM7IHNyYzogdXJsKCN7JGZvbnRzLXNyY30vU0YtUHJvLURpc3BsYXktU2VtaWJvbGRJdGFsaWMub3RmKTsgfVxuQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAkZm9udC10aGluOyBzcmM6IHVybCgjeyRmb250cy1zcmN9L1NGLVByby1EaXNwbGF5LVRoaW4ub3RmKTsgfVxuQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAkZm9udC10aGluSXRhbGljOyBzcmM6IHVybCgjeyRmb250cy1zcmN9L1NGLVByby1EaXNwbGF5LVRoaW5JdGFsaWMub3RmKTsgfVxuQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAkZm9udC11bHRyYWxpZ2h0OyBzcmM6IHVybCgjeyRmb250cy1zcmN9L1NGLVByby1EaXNwbGF5LVVsdHJhbGlnaHQub3RmKTsgfVxuQGZvbnQtZmFjZSB7IGZvbnQtZmFtaWx5OiAkZm9udC11bHRyYWxpZ2h0SXRhbGljOyBzcmM6IHVybCgjeyRmb250cy1zcmN9L1NGLVByby1EaXNwbGF5LVVsdHJhbGlnaHRJdGFsaWMub3RmKTsgfVxuIiwiJGhkOiAxMjgwcHg7XG4kaGQtcmVhZHktMTM2NjogMTM2NnB4O1xuJGhkLXJlYWR5LTE0MDA6IDE0MDBweDtcbiRoZC1yZWFkeS0xNjgwOiAxNjgwcHg7XG4kZnVsbC1oZDogMTkyMHB4O1xuJHVoZDogMzg0MHB4O1xuXG4kcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbjogMTI4MDtcbiRkZXNpZ24tZGltZW5zaW9uOiAxNzI4O1xuXG4kYXNwZWN0LXJhdGlvOiAkcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbiAvICRkZXNpZ24tZGltZW5zaW9uO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHQtYmxhY2s6ICMyMzIzMjM7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbGlnaHQtZ3JleTogIzhmOGY4ZjtcbiRncmF5OiAjNjE2MTYxO1xuJGRhcmstZ3JleTogIzM1MzUzNTtcbiRsaWdodC1waW5rOiAjRkFFMkUyO1xuJG9yYW5nZTogI2U4NzAwMDtcbiRhcHAtYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiRhcHAtcHJpbWFyeS1jb2xvcjogJHdoaXRlO1xuJGFwcC1zZWNvbmRhcnktY29sb3I6ICNmOGZmMTM7XG5cbiRzcmM6IFwiflwiO1xuXG4kaW1hZ2Utc3JjOiBcIiN7JHNyY31hc3NldHMvaW1hZ2VzXCI7XG5cbiRmb250cy1zcmM6ICcjeyRzcmN9YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5JztcblxuJHByaW1hcnktZm9udDogJ1NGIFBSTyBEaXNwbGF5JztcblxuJGZvbnQtYmxhY2s6ICdTRiBQUk8gRGlzcGxheSBCbGFjayc7XG4kZm9udC1ibGFja0l0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrSXRhbGljJztcbiRmb250LWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBCb2xkJztcbiRmb250LWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCb2xkSXRhbGljJztcbiRmb250LWhlYXZ5OiAnU0YgUFJPIERpc3BsYXkgSGVhdnknO1xuJGZvbnQtaGVhdnlJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBIZWF2eUl0YWxpYyc7XG4kZm9udC1saWdodDogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0JztcbiRmb250LWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTGlnaHRJdGFsaWMnO1xuJGZvbnQtbWVkaXVtOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtJztcbiRmb250LW1lZGl1bUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bUl0YWxpYyc7XG4kZm9udC1yZWd1bGFyOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhcic7XG4kZm9udC1yZWd1bGFySXRhbGljOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhckl0YWxpYyc7XG4kZm9udC1zZW1pYm9sZDogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkJztcbiRmb250LXNlbWlib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGRJdGFsaWMnO1xuJGZvbnQtdGhpbjogJ1NGIFBSTyBEaXNwbGF5IFRoaW4nO1xuJGZvbnQtdGhpbkl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFRoaW5JdGFsaWMnO1xuJGZvbnQtdWx0cmFsaWdodDogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHQnO1xuJGZvbnQtdWx0cmFsaWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHRJdGFsaWMnO1xuIiwiQGltcG9ydCAndmFycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYm9keSB7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRoZC1yZWFkeS0xMzY2KSB7XG4gICAgem9vbTogY2FsY1pvb20oJGhkLXJlYWR5LTEzNjYpO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRoZC1yZWFkeS0xNDAwKSB7XG4gICAgem9vbTogY2FsY1pvb20oJGhkLXJlYWR5LTE0MDApO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRoZC1yZWFkeS0xNjgwKSB7XG4gICAgem9vbTogY2FsY1pvb20oJGhkLXJlYWR5LTE2ODApO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRmdWxsLWhkKSB7XG4gICAgem9vbTogY2FsY1pvb20oJGZ1bGwtaGQpO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR1aGQpIHtcbiAgICB6b29tOiBjYWxjWm9vbSgkdWhkKTtcbiAgfVxuXG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG5cbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwO1xuICBwZXJzcGVjdGl2ZTogMTAwMDtcblxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcHAtYmFja2dyb3VuZC1jb2xvcjtcbiAgY29sb3I6ICRhcHAtcHJpbWFyeS1jb2xvcjtcblxuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yZWd1bGFyLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xufVxuXG5tYWluICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2xlYXJmaXg6YmVmb3JlLFxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5baGlkZGVuXSwgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuW2ludmlzaWJsZV0sIC5pbnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/semyon/fitness-app/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map