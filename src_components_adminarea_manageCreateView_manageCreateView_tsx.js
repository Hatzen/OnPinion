"use strict";
(self["webpackChunkonpinion"] = self["webpackChunkonpinion"] || []).push([["src_components_adminarea_manageCreateView_manageCreateView_tsx"],{

/***/ "./src/components/adminarea/manageCreateView/createChoice.tsx":
/*!********************************************************************!*\
  !*** ./src/components/adminarea/manageCreateView/createChoice.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSurveyChoice": () => (/* binding */ CreateSurveyChoice),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Input/Input.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const CreateSurveyChoice = (props) => {
    const surveyChoice = props.surveyChoice;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], { style: { paddingLeft: '50px' }, divider: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { onClick: () => {
                    props.deleteEntryAction(surveyChoice);
                }, style: { float: 'right' }, variant: 'text' }, "X"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { style: { marginBottom: '20px' }, fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { id: "choice-text" }, "\u00DCberschrift:"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { id: "choice-text", onChange: (event) => {
                        surveyChoice.text = event.target.value;
                    } })))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateSurveyChoice);


/***/ }),

/***/ "./src/components/adminarea/manageCreateView/createSurveyEntry.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/adminarea/manageCreateView/createSurveyEntry.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateSurveyEntry": () => (/* binding */ CreateSurveyEntry),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Input/Input.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var model_graphType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! model/graphType */ "./src/model/graphType.ts");
/* harmony import */ var model_surveyChoices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! model/surveyChoices */ "./src/model/surveyChoices.ts");
/* harmony import */ var model_surveyEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! model/surveyEntry */ "./src/model/surveyEntry.ts");
/* harmony import */ var _createChoice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createChoice */ "./src/components/adminarea/manageCreateView/createChoice.tsx");






const CreateSurveyEntry = (props) => {
    const [surveyEntry] = react__WEBPACK_IMPORTED_MODULE_0__.useState(props.surveyEntry);
    const [choices, setChoices] = react__WEBPACK_IMPORTED_MODULE_0__.useState(surveyEntry.choices);
    let choicesCount = 1;
    const createSurveyChoice = () => {
        const choice = new model_surveyEntry__WEBPACK_IMPORTED_MODULE_3__.SurveyChoice();
        choice.id = 'surveyChoice-' + ++choicesCount;
        return choice;
    };
    const addSurveyChoice = () => {
        const tmpChoices = choices.concat(createSurveyChoice());
        setChoices(tmpChoices);
        surveyEntry.choices = tmpChoices;
    };
    const removeSurveyChoiceComponent = (surveyChoice) => {
        // TODO: This does not set the attribute of surveyEntry, does it?
        const tmpChoices = choices.filter(entry => entry !== surveyChoice);
        setChoices(tmpChoices);
        surveyEntry.choices = tmpChoices;
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { style: { display: 'block', padding: '20px' }, divider: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { onClick: () => {
                    props.deleteEntryAction(surveyEntry);
                }, style: { float: 'right' }, variant: 'text' }, "X"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { style: { marginBottom: '20px' }, fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "question" }, "\u00DCberschrift:"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { id: "question-input", onChange: (event) => surveyEntry.question = event.target.value })),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { style: { marginBottom: '20px' }, fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "graph-type" }, "Umfragetyp"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { labelId: "graph-type", id: "graph-type-select", label: "Umfragetyp", onChange: (event) => surveyEntry.graphType = event.target.value },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { value: model_graphType__WEBPACK_IMPORTED_MODULE_1__.GraphType.BAR }, "Balken"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { value: model_graphType__WEBPACK_IMPORTED_MODULE_1__.GraphType.RADAR }, "Trapez"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { value: model_graphType__WEBPACK_IMPORTED_MODULE_1__.GraphType.TEXT }, "Text"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { disabled: true, value: 'Plot' }, "Graph"),
                    " [User can enter 2D Values like year and value]",
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { disabled: true }, "Kalender"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { disabled: true }, "Multimedia"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { style: { marginBottom: '20px' }, fullWidth: true },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "choice-type" }, "Auswahlm\u00F6glichkeiten"),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { labelId: 'choice-type', label: "Auswahltyp", onChange: (event) => surveyEntry.surveyChoices = event.target.value },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { value: model_surveyChoices__WEBPACK_IMPORTED_MODULE_2__.SurveyChoices.MULTISELECT }, "Mehrfach"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { value: model_surveyChoices__WEBPACK_IMPORTED_MODULE_2__.SurveyChoices.SINGLESELECT }, "Eine Option"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { value: model_surveyChoices__WEBPACK_IMPORTED_MODULE_2__.SurveyChoices.PRIORITY }, "Priorisieren"))),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], null,
                choices.map(entry => {
                    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_createChoice__WEBPACK_IMPORTED_MODULE_4__["default"], { surveyChoice: entry, deleteEntryAction: removeSurveyChoiceComponent, key: 'choice-' + entry.id }));
                }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { divider: true, onClick: addSurveyChoice },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { primary: "+ Antwort hinzuf\u00FCgen" }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateSurveyEntry);


/***/ }),

/***/ "./src/components/adminarea/manageCreateView/manageCreateView.tsx":
/*!************************************************************************!*\
  !*** ./src/components/adminarea/manageCreateView/manageCreateView.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageCreateView": () => (/* binding */ ManageCreateView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Input/Input.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormGroup/FormGroup.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Checkbox/Checkbox.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Snackbar/Snackbar.js");
/* harmony import */ var _createSurveyEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createSurveyEntry */ "./src/components/adminarea/manageCreateView/createSurveyEntry.tsx");
/* harmony import */ var model_surveyEntry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! model/surveyEntry */ "./src/model/surveyEntry.ts");
/* harmony import */ var model_survey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! model/survey */ "./src/model/survey.ts");
/* harmony import */ var stores_storeHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stores/storeHelper */ "./src/stores/storeHelper.ts");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _testData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../testData */ "./src/components/adminarea/testData.ts");








const ManageCreateView = (props) => {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
    const [text, setText] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');
    const [survey, setSurvey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(new model_survey__WEBPACK_IMPORTED_MODULE_3__.Survey());
    const [surveyEntries, setSurveyEntries] = react__WEBPACK_IMPORTED_MODULE_0__.useState(new Array(new model_surveyEntry__WEBPACK_IMPORTED_MODULE_2__.SurveyEntry()));
    survey.canSeeResult = true;
    survey.canSkip = true;
    survey.isClosed = false;
    survey.createdAt = new Date().getTime();
    if (false) {}
    const addSurveyEntryComponent = (surveyEntry) => {
        setSurveyEntries(surveyEntries.concat(surveyEntry));
    };
    const removeSurveyEntryComponent = (surveyEntry) => {
        setSurveyEntries(surveyEntries.filter(entry => entry !== surveyEntry));
    };
    const handleClick = () => {
        const valid = surveyEntries.find(entry => entry.isValid !== true) == null;
        if (!valid && survey.name != null && survey.name.length !== 0 && surveyEntries.length > 0) {
            setText('Bitte fehlende Werte ergänzen.');
            setOpen(true);
            return;
        }
        survey.surveyEntries = surveyEntries;
        props.uiStore.firebaseService.addSurvey(survey);
        setText('Umfrage erfolgeich erstellt.');
        setOpen(true);
    };
    const action = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { color: 'secondary', size: 'small', onClick: () => setOpen(false) }, "Close")));
    // [<Skeleton sx={{ height: 190 }} animation='wave' variant='rectangular' />]
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { style: { marginBottom: '20px' }, fullWidth: true },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { id: "survey-title" }, "\u00DCberschrift:"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { id: "survey-title", onChange: (event) => survey.name = event.target.value })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { disabled: true, control: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { defaultChecked: true }), label: "\u00DCberspringen erlauben" }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { disabled: true, control: react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { defaultChecked: true }), label: "Ergebnisse Sichtbar" })),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], null,
            surveyEntries.map(entry => {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_createSurveyEntry__WEBPACK_IMPORTED_MODULE_1__["default"], { surveyEntry: entry, deleteEntryAction: removeSurveyEntryComponent, key: 'entry-' + surveyEntries.indexOf(entry) }));
            }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], { divider: true, onClick: (event) => addSurveyEntryComponent(new model_surveyEntry__WEBPACK_IMPORTED_MODULE_2__.SurveyEntry()) },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], { primary: "+ Frage hinzuf\u00FCgen" }))),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: 'contained', onClick: handleClick }, "Speichern"),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { open: open, autoHideDuration: 2000, onClose: () => setOpen(false), message: text, action: action })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_17__.inject)(...stores_storeHelper__WEBPACK_IMPORTED_MODULE_4__.injectClause)((0,mobx_react__WEBPACK_IMPORTED_MODULE_17__.observer)(ManageCreateView)));


/***/ }),

/***/ "./src/components/adminarea/testData.ts":
/*!**********************************************!*\
  !*** ./src/components/adminarea/testData.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "testData": () => (/* binding */ testData)
/* harmony export */ });
/* harmony import */ var model_graphType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! model/graphType */ "./src/model/graphType.ts");
/* harmony import */ var model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! model/surveyChoices */ "./src/model/surveyChoices.ts");


const testData = {
    id: 'testId',
    name: 'Allgemeine Zufriedenheits Umfrage',
    createdAt: -1,
    participations: 0,
    canSkip: false,
    canSeeResult: false,
    deadline: -1,
    isClosed: false,
    surveyEntries: [
        {
            id: 'surveyEntry1',
            question: 'Politisch interessiert',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.BAR,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Ja'
                },
                {
                    id: 'choice-2',
                    text: 'Nein'
                }
            ]
        },
        {
            id: 'surveyEntry2',
            question: 'Wie oft schaust du am Tag aufs Handy?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.BAR,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: '1-2 Mal'
                },
                {
                    id: 'choice-2',
                    text: '3-10 Mal'
                },
                {
                    id: 'choice-3',
                    text: '11 und mehr'
                }
            ]
        },
        {
            id: 'surveyEntry3',
            question: 'Welche Musikrichtung hörst du?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.RADAR,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.MULTISELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Rock/ Metal'
                },
                {
                    id: 'choice-2',
                    text: 'Hip Hop / Rap'
                },
                {
                    id: 'choice-3',
                    text: 'Klassisch / Oper'
                },
                {
                    id: 'choice-4',
                    text: 'Elektronisch'
                },
                {
                    id: 'choice-5',
                    text: 'Radio'
                }
            ]
        },
        {
            id: 'surveyEntry4',
            question: 'Witzigste Erfahrung in der FourEnergy?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.TEXT,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: []
        },
        {
            id: 'surveyEntry5',
            question: 'Was ist dir bei Menschen am wichtigsten?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.RADAR,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Ehrlichkeit'
                },
                {
                    id: 'choice-2',
                    text: 'Witz'
                },
                {
                    id: 'choice-3',
                    text: 'Verlässlichkeit'
                },
                {
                    id: 'choice-4',
                    text: 'Respekt'
                }
            ]
        },
        {
            id: 'surveyEntry6',
            question: 'Wie regelmäßig nimmst du am News@4E teil?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.BAR,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Immer'
                },
                {
                    id: 'choice-2',
                    text: 'Noch nie'
                },
                {
                    id: 'choice-3',
                    text: 'Wenn es zeitlich passt'
                },
                {
                    id: 'choice-4',
                    text: 'Mal so mal so'
                }
            ]
        },
        {
            id: 'surveyEntry7',
            question: 'Was hindert dich am meisten an der Teilnahme?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.TEXT,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: []
        },
        {
            id: 'surveyEntry8',
            question: 'Von wann bis wann ist die beste Zeit?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.BAR,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: '8-12 Uhr'
                },
                {
                    id: 'choice-2',
                    text: '12-13 Uhr'
                },
                {
                    id: 'choice-3',
                    text: '13 - 16 Uhr'
                },
                {
                    id: 'choice-4',
                    text: 'ab 16 Uhr'
                }
            ]
        },
        {
            id: 'surveyEntry9',
            question: 'Was ist deine aktuelle Rolle bei FourEnergy?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.BAR,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.MULTISELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Tester'
                },
                {
                    id: 'choice-2',
                    text: 'Entwickler'
                },
                {
                    id: 'choice-3',
                    text: 'Product Owner / Scrum Master'
                },
                {
                    id: 'choice-4',
                    text: 'Business Analyst'
                }
            ]
        },
        {
            id: 'surveyEntry10',
            question: 'Wie ging es dir letztes Jahr?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.BAR,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Gut'
                },
                {
                    id: 'choice-2',
                    text: 'Ganz ok'
                },
                {
                    id: 'choice-3',
                    text: 'Mal so mal so'
                },
                {
                    id: 'choice-4',
                    text: 'Eher nicht so gut'
                }
            ]
        },
        {
            id: 'surveyEntry11',
            question: 'Wie geht es dir dieses Jahr?',
            graphType: model_graphType__WEBPACK_IMPORTED_MODULE_0__.GraphType.BAR,
            surveyChoices: model_surveyChoices__WEBPACK_IMPORTED_MODULE_1__.SurveyChoices.SINGLESELECT,
            isValid: true,
            choices: [
                {
                    id: 'choice-1',
                    text: 'Gut'
                },
                {
                    id: 'choice-2',
                    text: 'Ganz ok'
                },
                {
                    id: 'choice-3',
                    text: 'Mal so mal so'
                },
                {
                    id: 'choice-4',
                    text: 'Eher nicht so gut'
                }
            ]
        }
    ]
};


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
//# sourceMappingURL=src_components_adminarea_manageCreateView_manageCreateView_tsx.js.map