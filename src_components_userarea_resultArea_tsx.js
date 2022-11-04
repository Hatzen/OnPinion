"use strict";
(self["webpackChunkonpinion"] = self["webpackChunkonpinion"] || []).push([["src_components_userarea_resultArea_tsx"],{

/***/ "./node_modules/@mui/material/Typography/Typography.js":
/*!*************************************************************!*\
  !*** ./node_modules/@mui/material/Typography/Typography.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypographyRoot": () => (/* binding */ TypographyRoot),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/composeClasses/composeClasses.js");
/* harmony import */ var _styles_styled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/styled */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useThemeProps */ "./node_modules/@mui/material/styles/useThemeProps.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@mui/material/utils/capitalize.js");
/* harmony import */ var _typographyClasses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typographyClasses */ "./node_modules/@mui/material/Typography/typographyClasses.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


const _excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];











const useUtilityClasses = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_6__["default"])(slots, _typographyClasses__WEBPACK_IMPORTED_MODULE_7__.getTypographyUtilityClass, classes);
};

const TypographyRoot = (0,_styles_styled__WEBPACK_IMPORTED_MODULE_8__["default"])('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__["default"])(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
}; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function Typography(inProps, ref) {
  const themeProps = (0,_styles_useThemeProps__WEBPACK_IMPORTED_MODULE_9__["default"])({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = (0,_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"])((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, themeProps, {
    color
  }));

  const {
    align = 'inherit',
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = 'body1',
    variantMapping = defaultVariantMapping
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, _excluded);

  const ownerState = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });

  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TypographyRoot, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, className)
  }, other));
});
 true ? Typography.propTypes
/* remove-proptypes */
= {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['center', 'inherit', 'justify', 'left', 'right']),

  /**
   * The content of the component.
   */
  children: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().node),

  /**
   * Override or extend the styles applied to the component.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().elementType),

  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool),

  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().bool)])), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)]),

  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_11___default().oneOf(['body1', 'body2', 'button', 'caption', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'inherit', 'overline', 'subtitle1', 'subtitle2']), (prop_types__WEBPACK_IMPORTED_MODULE_11___default().string)]),

  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: (prop_types__WEBPACK_IMPORTED_MODULE_11___default().object)
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ }),

/***/ "./node_modules/@mui/material/Typography/typographyClasses.js":
/*!********************************************************************!*\
  !*** ./node_modules/@mui/material/Typography/typographyClasses.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTypographyUtilityClass": () => (/* binding */ getTypographyUtilityClass),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClass/generateUtilityClass.js");
/* harmony import */ var _mui_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/base */ "./node_modules/@mui/base/generateUtilityClasses/generateUtilityClasses.js");

function getTypographyUtilityClass(slot) {
  return (0,_mui_base__WEBPACK_IMPORTED_MODULE_0__["default"])('MuiTypography', slot);
}
const typographyClasses = (0,_mui_base__WEBPACK_IMPORTED_MODULE_1__["default"])('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typographyClasses);

/***/ }),

/***/ "./src/components/userarea/resultArea.tsx":
/*!************************************************!*\
  !*** ./src/components/userarea/resultArea.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultArea": () => (/* binding */ ResultArea),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var model_surveyEntry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! model/surveyEntry */ "./src/model/surveyEntry.ts");
/* harmony import */ var stores_storeHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stores/storeHelper */ "./src/stores/storeHelper.ts");
/* harmony import */ var _resultView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resultView */ "./src/components/userarea/resultView.tsx");







const ResultArea = (props) => {
    const { surveyId } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)();
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        props.uiStore.watchSurvey(surveyId);
    }, []); // empty array so it is called only once.
    const survey = props.uiStore.currentSurvey;
    const [surveyEntryIndex, setSurveyEntryIndex] = react__WEBPACK_IMPORTED_MODULE_0__.useState(0);
    const [surveyEntry, setSurveyEntry] = react__WEBPACK_IMPORTED_MODULE_0__.useState(new model_surveyEntry__WEBPACK_IMPORTED_MODULE_1__.SurveyEntry());
    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex]);
    });
    const clickPreviousEntry = (event) => {
        setSurveyEntryIndex(surveyEntryIndex - 1);
        const surveyStart = surveyEntryIndex <= 0;
        if (surveyStart) {
            return;
        }
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex]);
    };
    const clickNextEntry = (event) => {
        setSurveyEntryIndex(surveyEntryIndex + 1);
        const surveyFinished = surveyEntryIndex >= survey.surveyEntries.length - 1;
        if (surveyFinished) {
            return;
        }
        setSurveyEntry(survey.surveyEntries[surveyEntryIndex]);
    };
    if (surveyEntry == null) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { style: { textAlign: 'center', verticalAlign: 'center', position: 'relative', top: '40%' }, gutterBottom: true, variant: "h3", component: "div" }, "Daten werden geladen.."));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '800px', margin: 'auto' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: "h3", component: "div" }, survey.name),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: "h5", component: "div" },
            surveyEntryIndex + 1,
            ". ",
            surveyEntry.question),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_resultView__WEBPACK_IMPORTED_MODULE_3__["default"], { surveyEntry: surveyEntry }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { position: 'fixed', bottom: 0, left: 20, right: 20, height: 125 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { onClick: clickPreviousEntry, variant: "contained" }, "Zur\u00FCck"),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { style: { float: 'right' }, onClick: clickNextEntry, variant: "contained" }, "Weiter"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,mobx_react__WEBPACK_IMPORTED_MODULE_7__.inject)(...stores_storeHelper__WEBPACK_IMPORTED_MODULE_2__.injectClause)((0,mobx_react__WEBPACK_IMPORTED_MODULE_7__.observer)(ResultArea)));


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
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { width: '900px', minHeight: '600px' } },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { height: '600px' } }, CurrentComponent)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResultView);


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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");



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
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, this.comments.map((element, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { key: Math.random(), style: { marginBottom: 10 } },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { style: { float: 'right', display: 'block', position: 'relative', top: 0 } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "large", edge: "start", color: "inherit", "aria-label": "menu", sx: { mr: 2 } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: 'caret-up' })),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: "body1", component: "div" }, "12"),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { size: "large", edge: "start", color: "inherit", "aria-label": "menu", sx: { mr: 2 } },
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, { icon: 'caret-down' }))),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { gutterBottom: true, variant: "body1", component: "div" }, element)))))));
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


/***/ })

}]);
//# sourceMappingURL=src_components_userarea_resultArea_tsx.js.map