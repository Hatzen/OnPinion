"use strict";
(self["webpackChunkonpinion"] = self["webpackChunkonpinion"] || []).push([["src_components_adminarea_adminarea_tsx"],{

/***/ "./src/components/adminarea/addCard.tsx":
/*!**********************************************!*\
  !*** ./src/components/adminarea/addCard.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCard": () => (/* binding */ AddCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardActionArea/CardActionArea.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");






const AddCard = (props) => {
    const clickEvent = () => {
        props.navigate('/manage/create');
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__["default"], { sx: { maxWidth: 345 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: clickEvent },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: "h5" },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: 'add' })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: "h5", component: "div" }, "Umfrage erstellen")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddCard);


/***/ }),

/***/ "./src/components/adminarea/adminarea.tsx":
/*!************************************************!*\
  !*** ./src/components/adminarea/adminarea.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _addCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addCard */ "./src/components/adminarea/addCard.tsx");
/* harmony import */ var _surveyCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./surveyCard */ "./src/components/adminarea/surveyCard.tsx");
/* harmony import */ var stores_storeHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stores/storeHelper */ "./src/stores/storeHelper.ts");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _services_firebase_signInScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/firebase/signInScreen */ "./src/services/firebase/signInScreen.tsx");







const AdminArea = (props) => {
    const loggedIn = false;
    if (!loggedIn) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_services_firebase_signInScreen__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
    const [surveys, setSurveys] = react__WEBPACK_IMPORTED_MODULE_0__.useState(new Array());
    props.uiStore.firebaseService.getSurveys().then(setSurveys);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { container: true, spacing: { xs: 2, md: 2 }, columns: { xs: 4, sm: 8, md: 12 } },
            surveys.map((element, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { item: true, xs: 2, sm: 2, md: 2, key: index },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_surveyCard__WEBPACK_IMPORTED_MODULE_2__["default"], { entry: element, navigate: props.navigate })))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { item: true, xs: 2, sm: 2, md: 2 },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_addCard__WEBPACK_IMPORTED_MODULE_1__["default"], { navigate: props.navigate })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.inject)(...stores_storeHelper__WEBPACK_IMPORTED_MODULE_3__.injectClause)((0,mobx_react__WEBPACK_IMPORTED_MODULE_6__.observer)(AdminArea)));


/***/ }),

/***/ "./src/components/adminarea/surveyCard.tsx":
/*!*************************************************!*\
  !*** ./src/components/adminarea/surveyCard.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyCard": () => (/* binding */ SurveyCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardActionArea/CardActionArea.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");






class SurveyCardProps {
    entry;
}
const SurveyCard = (props) => {
    const stateText = props.entry.isClosed ? 'Closed' : 'Open';
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Card__WEBPACK_IMPORTED_MODULE_2__["default"], { sx: { maxWidth: 345 } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { onClick: () => { props.navigate('manage/result/' + props.entry.id); } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_4__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: "h5" },
                    props.entry.participations,
                    " ",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: 'user-check' })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: "h5" }, stateText),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: "h5", component: "div" }, props.entry.name)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SurveyCard);


/***/ }),

/***/ "./src/services/firebase/signInScreen.tsx":
/*!************************************************!*\
  !*** ./src/services/firebase/signInScreen.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignInScreen": () => (/* binding */ SignInScreen),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ "./node_modules/firebase/compat/app/dist/index.esm.js");
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/auth */ "./node_modules/firebase/compat/auth/dist/index.esm.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var stores_storeHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stores/storeHelper */ "./src/stores/storeHelper.ts");





const SignInScreen = (props) => {
    // Configure FirebaseUI.
    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: '/signedIn',
        signInOptions: [
            firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.EmailAuthProvider.PROVIDER_ID
        ],
    };
    // <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.inject)(...stores_storeHelper__WEBPACK_IMPORTED_MODULE_3__.injectClause)((0,mobx_react__WEBPACK_IMPORTED_MODULE_4__.observer)(SignInScreen)));


/***/ }),

/***/ "./src/stores/storeHelper.ts":
/*!***********************************!*\
  !*** ./src/stores/storeHelper.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injectClause": () => (/* binding */ injectClause)
/* harmony export */ });
// Must be the same as listed StoreProps props. Cannot be initalized as it is not
const injectClause = ['uiStore'];


/***/ })

}]);
//# sourceMappingURL=src_components_adminarea_adminarea_tsx.js.map