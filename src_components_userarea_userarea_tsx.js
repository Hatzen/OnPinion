"use strict";
(self["webpackChunkonpinion"] = self["webpackChunkonpinion"] || []).push([["src_components_userarea_userarea_tsx"],{

/***/ "./src/components/userarea/participationInputView.tsx":
/*!************************************************************!*\
  !*** ./src/components/userarea/participationInputView.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ParticipationInputView": () => (/* binding */ ParticipationInputView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! model/surveyChoices */ "./src/model/surveyChoices.ts");
/* harmony import */ var model_graphType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! model/graphType */ "./src/model/graphType.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/base/TextareaAutosize/TextareaAutosize.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/RadioGroup/RadioGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Radio/Radio.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var model_surveyAnswer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! model/surveyAnswer */ "./src/model/surveyAnswer.ts");
/* harmony import */ var stores_storeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stores/storeHelper */ "./src/stores/storeHelper.ts");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react-lite */ "./node_modules/mobx-react-lite/es/index.js");








const ParticipationInputView = (props) => {
    const [surveyEntry, setSurveyEntry] = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.surveyEntry);
    // Keep prop synced. https://stackoverflow.com/a/54568167/8524651
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => { setSurveyEntry(props.surveyEntry); }, [props.surveyEntry]);
    const answer = new model_surveyAnswer__WEBPACK_IMPORTED_MODULE_3__.SurveyAnswer();
    const handleChange = (event) => {
        const choiceId = event.target.value;
        answer.id = 'dummyId';
        answer.value = null;
        answer.choice = choiceId;
        answer.user = props.uiStore.userId;
        props.setAnswer(answer);
    };
    // https://stackoverflow.com/a/44078785/8524651
    const generateUUID = () => {
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    };
    let textArea = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
    let radioGroup = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
    if (surveyEntry.graphType === model_graphType__WEBPACK_IMPORTED_MODULE_2__.GraphType.TEXT) {
        textArea = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { style: { width: 500, height: 200 }, onChange: handleChange, minRows: 5, placeholder: "Hier den Text eingeben.." }));
    }
    else {
        radioGroup = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], null, surveyEntry.choices?.map(choice => {
            const key = 'input-field-' + surveyEntry.choices.indexOf(choice) + surveyEntry.question + generateUUID() + Math.random();
            if (surveyEntry.surveyChoices === model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT) {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { key: key, onChange: handleChange, value: choice.id, control: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], null), label: choice.text });
            }
            else if (surveyEntry.surveyChoices === model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.MULTISELECT) {
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { key: key, onChange: handleChange, value: choice.id, control: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null), label: choice.text });
            }
        })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { minHeight: '500px', display: 'block' } },
        textArea,
        radioGroup));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_11__.inject)(...stores_storeHelper__WEBPACK_IMPORTED_MODULE_4__.injectClause)((0,mobx_react_lite__WEBPACK_IMPORTED_MODULE_5__.observer)(ParticipationInputView)));


/***/ }),

/***/ "./src/components/userarea/resultView.tsx":
/*!************************************************!*\
  !*** ./src/components/userarea/resultView.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultView": () => (/* binding */ ResultView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var model_graphType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! model/graphType */ "./src/model/graphType.ts");
/* harmony import */ var _viewHolder_barViewHolder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewHolder/barViewHolder */ "./src/components/userarea/viewHolder/barViewHolder.tsx");
/* harmony import */ var _viewHolder_radarViewHolder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewHolder/radarViewHolder */ "./src/components/userarea/viewHolder/radarViewHolder.tsx");
/* harmony import */ var _viewHolder_textViewHolder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewHolder/textViewHolder */ "./src/components/userarea/viewHolder/textViewHolder.tsx");





const ResultView = (props) => {
    const [surveyEntry, setSurveyEntry] = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.surveyEntry);
    // Keep prop synced. https://stackoverflow.com/a/54568167/8524651
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => { setSurveyEntry(props.surveyEntry); }, [props.surveyEntry]);
    let CurrentComponent;
    switch (surveyEntry.graphType) {
        case model_graphType__WEBPACK_IMPORTED_MODULE_1__.GraphType.BAR:
            CurrentComponent = new _viewHolder_barViewHolder__WEBPACK_IMPORTED_MODULE_2__.BarHolder(surveyEntry).bar;
            break;
        case model_graphType__WEBPACK_IMPORTED_MODULE_1__.GraphType.RADAR:
            CurrentComponent = new _viewHolder_radarViewHolder__WEBPACK_IMPORTED_MODULE_3__.RadarHolder(surveyEntry).radar;
            break;
        case model_graphType__WEBPACK_IMPORTED_MODULE_1__.GraphType.TEXT:
            CurrentComponent = new _viewHolder_textViewHolder__WEBPACK_IMPORTED_MODULE_4__.TextViewHolder(surveyEntry).cards;
            break;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '900px', minHeight: '600px', position: 'absolute', top: '10%', left: 'calc(50% - 450px)', right: '50%' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { height: '600px' } }, CurrentComponent)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultView);


/***/ }),

/***/ "./src/components/userarea/userarea.tsx":
/*!**********************************************!*\
  !*** ./src/components/userarea/userarea.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserArea": () => (/* binding */ UserArea),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! model/surveyChoices */ "./src/model/surveyChoices.ts");
/* harmony import */ var model_surveyEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! model/surveyEntry */ "./src/model/surveyEntry.ts");
/* harmony import */ var stores_storeHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stores/storeHelper */ "./src/stores/storeHelper.ts");
/* harmony import */ var _participationInputView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participationInputView */ "./src/components/userarea/participationInputView.tsx");
/* harmony import */ var _resultView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resultView */ "./src/components/userarea/resultView.tsx");









const UserArea = (props) => {
    const { surveyId } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        props.uiStore.watchSurvey(surveyId);
    }, []); // empty array so it is called only once.
    const survey = props.uiStore.currentSurvey;
    let currentAnswer = [];
    const [surveyEntryIndex, setSurveyEntryIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const [surveyEntry, setSurveyEntry] = react__WEBPACK_IMPORTED_MODULE_0__.useState(new model_surveyEntry__WEBPACK_IMPORTED_MODULE_2__.SurveyEntry());
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex]);
    });
    const [showResult, setShowResult] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const clickNextEntry = (event) => {
        currentAnswer.forEach(answer => props.uiStore.addAnswer(surveyEntry, answer));
        setSurveyEntryIndex(surveyEntryIndex + 1);
        const surveyFinished = surveyEntryIndex >= survey.surveyEntries.length - 1;
        if (surveyFinished) {
            return;
        }
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex]);
        currentAnswer = [];
    };
    const clickShowResult = (event) => {
        setShowResult(!showResult);
    };
    const setAnswer = (surveyAnswer) => {
        if (surveyEntry.surveyChoices === model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT) {
            currentAnswer = [surveyAnswer];
        }
        else if (surveyEntry.surveyChoices === model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.MULTISELECT) {
            currentAnswer.push(surveyAnswer);
        }
    };
    if (surveyEntry == null) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { style: { textAlign: 'center', verticalAlign: 'center', position: 'relative', top: '40%' }, gutterBottom: true, variant: "h3", component: "div" }, "Daten werden geladen.."));
    }
    const surveyFinished = surveyEntryIndex >= survey.surveyEntries.length - 1;
    if (surveyFinished) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { style: { textAlign: 'center', verticalAlign: 'center', position: 'relative', top: '40%' }, gutterBottom: true, variant: "h3", component: "div" }, "Vielen Dank f\u00FCr die Teilnahme."));
    }
    let content = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_participationInputView__WEBPACK_IMPORTED_MODULE_4__["default"], { setAnswer: setAnswer, surveyEntry: surveyEntry });
    if (showResult) {
        content = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_resultView__WEBPACK_IMPORTED_MODULE_5__["default"], { surveyEntry: surveyEntry });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '800px', margin: 'auto' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { gutterBottom: true, variant: "h3", component: "div" }, survey.name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { gutterBottom: true, variant: "h5", component: "div" },
            surveyEntryIndex + 1,
            ". ",
            surveyEntry.question),
        content,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { position: 'fixed', bottom: 0, left: 20, right: 20, height: 125 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { onClick: clickShowResult, variant: "contained" }, "Ergebnisse anzeigen"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { style: { float: 'right' }, onClick: clickNextEntry, variant: "contained" }, "Weiter"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_9__.inject)(...stores_storeHelper__WEBPACK_IMPORTED_MODULE_3__.injectClause)((0,mobx_react__WEBPACK_IMPORTED_MODULE_9__.observer)(UserArea)));


/***/ }),

/***/ "./src/components/userarea/viewHolder/barViewHolder.tsx":
/*!**************************************************************!*\
  !*** ./src/components/userarea/viewHolder/barViewHolder.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarHolder": () => (/* binding */ BarHolder)
/* harmony export */ });
/* harmony import */ var _nivo_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nivo/bar */ "./node_modules/@nivo/bar/dist/nivo-bar.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


class BarHolder {
    keyValueMap = {};
    constructor(surveyEntry) {
        this.keyValueMap = {};
        if (surveyEntry.surveyAnswers == null) {
            return;
        }
        // TODO: surveyEntry.surveyAnswers? we could work around optional with Partitial constructor within FirebaseService to init Arrays..
        Object.values(surveyEntry.surveyAnswers).forEach(answer => {
            const key = surveyEntry.choices.find(choice => choice.id === answer.choice).text;
            this.keyValueMap[key] = (this.keyValueMap[key] || 0) + 1;
        });
    }
    get barData() {
        return [
            this.keyValueMap
        ];
    }
    get bar() {
        // https://nivo.rocks/bar/
        return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_nivo_bar__WEBPACK_IMPORTED_MODULE_0__.ResponsiveBar, { data: this.barData, keys: Object.keys(this.keyValueMap), indexBy: "Wahl", margin: { top: 50, right: 130, bottom: 50, left: 60 }, padding: 0.3, valueScale: { type: 'linear' }, indexScale: { type: 'band', round: true }, colors: { scheme: 'nivo' }, borderColor: {
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }, axisTop: null, axisRight: null, axisBottom: {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'answer',
                legendPosition: 'middle',
                legendOffset: 32
            }, axisLeft: {
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Anzahl',
                legendPosition: 'middle',
                legendOffset: -40
            }, labelSkipWidth: 12, labelSkipHeight: 12, labelTextColor: {
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }, role: "application" });
    }
}


/***/ }),

/***/ "./src/components/userarea/viewHolder/radarViewHolder.tsx":
/*!****************************************************************!*\
  !*** ./src/components/userarea/viewHolder/radarViewHolder.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadarHolder": () => (/* binding */ RadarHolder)
/* harmony export */ });
/* harmony import */ var _nivo_radar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nivo/radar */ "./node_modules/@nivo/radar/dist/nivo-radar.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


class RadarHolder {
    indexBy = 'choice';
    keyValueMap = {};
    constructor(surveyEntry) {
        this.keyValueMap = {};
        if (surveyEntry.surveyAnswers == null) {
            return;
        }
        // TODO: surveyEntry.surveyAnswers? (?=Optional..) we could work around optional with Partitial constructor within FirebaseService to init Arrays..
        Object.values(surveyEntry.surveyAnswers).forEach(answer => {
            const key = surveyEntry.choices.find(choice => choice.id === answer.choice).text;
            this.keyValueMap[key] = (this.keyValueMap[key] || 0) + 1;
        });
    }
    get data() {
        return Object.entries(this.keyValueMap).map(([choiceText, choiceCount]) => {
            return {
                'choice': choiceText,
                'Votes': choiceCount
            };
        });
    }
    get radar() {
        return (react__WEBPACK_IMPORTED_MODULE_1__.createElement(_nivo_radar__WEBPACK_IMPORTED_MODULE_0__.ResponsiveRadar, { data: this.data, keys: ['Votes'], indexBy: this.indexBy, valueFormat: '>-.2f', margin: { top: 70, right: 80, bottom: 40, left: 80 }, borderColor: { from: 'color' }, gridLabelOffset: 36, dotSize: 10, dotColor: { theme: 'background' }, dotBorderWidth: 2, colors: { scheme: 'nivo' }, blendMode: 'multiply', motionConfig: 'wobbly', legends: [
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#999',
                    symbolSize: 12,
                    symbolShape: 'circle',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000'
                            }
                        }
                    ]
                }
            ] }));
    }
}


/***/ }),

/***/ "./src/components/userarea/viewHolder/textViewHolder.tsx":
/*!***************************************************************!*\
  !*** ./src/components/userarea/viewHolder/textViewHolder.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextViewHolder": () => (/* binding */ TextViewHolder)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardActionArea/CardActionArea.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


class TextViewHolder {
    comments = [];
    constructor(surveyEntry) {
        if (surveyEntry.surveyAnswers == null) {
            return;
        }
        this.comments = Object.values(surveyEntry.surveyAnswers)
            .map(answer => answer.choice);
    }
    get cards() {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.comments.map((element, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { key: Math.random() },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { gutterBottom: true, variant: "body1", component: "div" }, element))))))));
    }
}


/***/ }),

/***/ "./src/model/graphType.ts":
/*!********************************!*\
  !*** ./src/model/graphType.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraphType": () => (/* binding */ GraphType)
/* harmony export */ });
var GraphType;
(function (GraphType) {
    GraphType["RADAR"] = "RADAR";
    GraphType["BAR"] = "BAR";
    GraphType["TEXT"] = "TEXT";
})(GraphType || (GraphType = {}));


/***/ }),

/***/ "./src/model/surveyAnswer.ts":
/*!***********************************!*\
  !*** ./src/model/surveyAnswer.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyAnswer": () => (/* binding */ SurveyAnswer)
/* harmony export */ });
class SurveyAnswer {
    id;
    choice;
    user;
    value;
}


/***/ }),

/***/ "./src/model/surveyChoices.ts":
/*!************************************!*\
  !*** ./src/model/surveyChoices.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SurveyChoices": () => (/* binding */ SurveyChoices)
/* harmony export */ });
var SurveyChoices;
(function (SurveyChoices) {
    SurveyChoices["SINGLESELECT"] = "SINGLESELECT";
    SurveyChoices["MULTISELECT"] = "MULTISELECT";
    SurveyChoices["PRIORITY"] = "PRIORITY";
})(SurveyChoices || (SurveyChoices = {}));


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
//# sourceMappingURL=src_components_userarea_userarea_tsx.js.map