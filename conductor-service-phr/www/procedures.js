webpackJsonp([19],{"./src/components/pages/Procedures/Procedures.js":function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s,r,n,o,u,d,i,c,m,p=t("./node_modules/babel-runtime/helpers/defineProperty.js"),f=l(p),E=t("./node_modules/babel-runtime/helpers/extends.js"),v=l(E),N=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),P=l(N),S=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),O=l(S),b=t("./node_modules/babel-runtime/helpers/inherits.js"),h=l(b),C=t("./node_modules/recompose/compose.js"),R=l(C),D=t("./node_modules/recompose/lifecycle.js"),g=l(D),T=t("./node_modules/lodash/fp/size.js"),_=l(T),M=t("./node_modules/lodash/fp/isEmpty.js"),F=l(M),x=t("./node_modules/lodash/fp/toLower.js"),A=l(x),I=t("./node_modules/react/react.js"),j=l(I),U=t("./node_modules/prop-types/index.js"),y=l(U),L=t("./node_modules/react-bootstrap/es/index.js"),V=t("./node_modules/classnames/index.js"),Y=l(V),w=t("./node_modules/redux/es/index.js"),k=t("./node_modules/react-redux/es/index.js"),B=t("./src/components/plugin-page-component/PluginListHeader.js"),G=l(B),H=t("./src/components/plugin-page-component/PluginMainPanel.js"),q=l(H),z=t("./src/components/pages/Procedures/table-columns.config.js"),K=t("./src/components/pages/Procedures/forms.config.js"),J=t("./src/components/pages/Procedures/ducks/fetch-patient-procedures.duck.js"),W=t("./src/components/pages/Procedures/ducks/fetch-patient-procedures-create.duck.js"),Q=t("./src/components/pages/Procedures/ducks/fetch-patient-procedures-detail.duck.js"),X=t("./src/components/pages/Procedures/ducks/fetch-patient-procedures-detail-edit.duck.js"),Z=t("./src/utils/HOCs/fetch-patients.utils.js"),$=t("./src/components/pages/Procedures/selectors.js"),ee=t("./src/config/client-urls.constants.js"),ae=t("./src/utils/plugin-helpers.utils.js"),te=t("./src/components/pages/Procedures/ProceduresDetail/ProceduresDetail.js"),le=l(te),se=t("./src/components/plugin-page-component/PluginCreate.js"),re=l(se),ne=t("./src/components/pages/Procedures/ProceduresCreate/ProceduresCreateForm.js"),oe=l(ne),ue=t("./src/utils/time-helpers.utils.js"),de="proceduresMain",ie="proceduresCreate",ce="procedurePanel",me=function(e){return{actions:(0,w.bindActionCreators)({fetchPatientProceduresRequest:J.fetchPatientProceduresRequest,fetchPatientProceduresCreateRequest:W.fetchPatientProceduresCreateRequest,fetchPatientProceduresDetailRequest:Q.fetchPatientProceduresDetailRequest,fetchPatientProceduresDetailEditRequest:X.fetchPatientProceduresDetailEditRequest},e)}},pe=(s=(0,k.connect)($.patientProceduresSelector,me),r=(0,k.connect)($.patientProceduresDetailSelector,me),n=(0,k.connect)($.proceduresDetailFormStateSelector),o=(0,k.connect)($.proceduresCreateFormStateSelector),u=(0,k.connect)($.metaPanelFormStateSelector),d=(0,R.default)((0,g.default)(Z.fetchPatientProceduresOnMount),(0,g.default)(Z.fetchPatientProceduresDetailOnMount)),s(i=r(i=n(i=o(i=u(i=d((m=c=function(e){function a(){var t,l,s;(0,P.default)(this,a);for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=l=(0,O.default)(this,e.call.apply(e,[this].concat(n))),l.state={nameShouldInclude:"",selectedColumns:z.defaultColumnsSelected,openedPanel:ce,columnNameSortBy:K.valuesNames.NAME,sortingOrder:"asc",expandedPanel:"all",isBtnCreateVisible:!0,isBtnExpandVisible:!1,isAllPanelsVisible:!1,isDetailPanelVisible:!1,isSecondPanel:!1,isCreatePanelVisible:!1,editedPanel:{},offset:0,isSubmit:!1,isLoading:!0},l.handleExpand=function(e,a){a===de?"all"===l.state.expandedPanel?l.setState({expandedPanel:e}):l.setState({expandedPanel:"all"}):"all"===l.state.expandedPanel?l.setState({expandedPanel:e,openedPanel:e}):l.setState({expandedPanel:"all"})},l.handleFilterChange=function(e){var a=e.target.value;return l.setState({nameShouldInclude:(0,A.default)(a)})},l.handleHeaderCellClick=function(e,a){var t=a.name,s=a.sortingOrder;return l.setState({columnNameSortBy:t,sortingOrder:s})},l.handleDetailProceduresClick=function(e){var a=l.props,t=a.actions,s=a.userId;l.setState({isSecondPanel:!0,isDetailPanelVisible:!0,isBtnExpandVisible:!0,isBtnCreateVisible:!0,isCreatePanelVisible:!1,openedPanel:ce,editedPanel:{},expandedPanel:"all",isLoading:!0}),t.fetchPatientProceduresDetailRequest({userId:s,sourceId:e}),l.context.router.history.push(ee.clientUrls.PATIENTS+"/"+s+"/"+ee.clientUrls.PROCEDURES+"/"+e)},l.handleSetOffset=function(e){return l.setState({offset:e})},l.handleCreate=function(){var e=l.props.userId;l.setState({isBtnCreateVisible:!1,isCreatePanelVisible:!0,openedPanel:ie,isSecondPanel:!0,isDetailPanelVisible:!1,isSubmit:!1,isLoading:!0}),l.context.router.history.push(ee.clientUrls.PATIENTS+"/"+e+"/"+ee.clientUrls.PROCEDURES+"/create")},l.handleEdit=function(e){l.setState(function(a){return{editedPanel:(0,v.default)({},a.editedPanel,(0,f.default)({},e,!0)),isSubmit:!1}})},l.handleProcedureDetailCancel=function(e){l.setState(function(a){return{editedPanel:(0,v.default)({},a.editedPanel,(0,f.default)({},e,!1)),isSubmit:!1,isLoading:!0}})},l.handleSaveSettingsDetailForm=function(e,a){var t=l.props,s=t.actions,r=t.proceduresDetailFormState;(0,ae.checkIsValidateForm)(r)?(s.fetchPatientProceduresDetailEditRequest(l.formValuesToString(e,"edit")),l.setState(function(e){return{editedPanel:(0,v.default)({},e.editedPanel,(0,f.default)({},a,!1)),isSubmit:!1,isLoading:!0}})):l.setState({isSubmit:!0})},l.handleCreateCancel=function(){var e=l.props.userId;l.setState({isBtnCreateVisible:!0,isCreatePanelVisible:!1,openedPanel:ce,isSecondPanel:!1,isBtnExpandVisible:!1,expandedPanel:"all",isSubmit:!1,isLoading:!0}),l.context.router.history.push(ee.clientUrls.PATIENTS+"/"+e+"/"+ee.clientUrls.PROCEDURES)},l.handleSaveSettingsCreateForm=function(e){var a=l.props,t=a.actions,s=a.userId,r=a.proceduresCreateFormState;(0,ae.checkIsValidateForm)(r)?(t.fetchPatientProceduresCreateRequest(l.formValuesToString(e,"create")),l.context.router.history.push(ee.clientUrls.PATIENTS+"/"+s+"/"+ee.clientUrls.PROCEDURES),l.hideCreateForm(),l.setState({isSubmit:!1,isLoading:!0})):l.setState({isSubmit:!0})},l.formValuesToString=function(e,a){var t=l.props,s=t.userId,r=t.procedureDetail,n={},o=new Date,u=o-new Date(o.getFullYear(),o.getMonth(),o.getDate());return n.userId=s,n[K.valuesNames.NAME]=e[K.valuesNames.NAME],n[K.valuesNames.DATE_OF_PROCEDURE]=e[K.valuesNames.DATE_OF_PROCEDURE],n[K.valuesNames.PERFORMER]=e[K.valuesNames.PERFORMER],n[K.valuesNames.NOTES]=e[K.valuesNames.NOTES],n[K.valuesNames.TERMINOLOGY]=e[K.valuesNames.TERMINOLOGY],n[K.valuesNames.CODE]=e[K.valuesNames.CODE],n[K.valuesNames.AUTHOR]=e[K.valuesNames.AUTHOR],n[K.valuesNames.PROCEDURE_NAME]=e[K.valuesNames.NAME],n[K.valuesNames.TIME]=u,n[K.valuesNames.DATE]=o,n[K.valuesNames.SOURCE]="ethercis","edit"===a&&(n[K.valuesNames.SOURCE_ID]=r[K.valuesNames.SOURCE_ID],n[K.valuesNames.STATUS]=r[K.valuesNames.STATUS],n[K.valuesNames.ORIGINAL_COMPOSITION]=r[K.valuesNames.ORIGINAL_COMPOSITION],n[K.valuesNames.ORIGINAL_SOURCE]=r[K.valuesNames.ORIGINAL_SOURCE]),"create"===a&&(n[K.valuesNames.STATUS]="",n[K.valuesNames.ORIGINAL_COMPOSITION]="",n[K.valuesNames.ORIGINAL_SOURCE]=""),ae.operationsOnCollection.propsToString(n,K.valuesNames.DATE_OF_PROCEDURE,K.valuesNames.TIME,K.valuesNames.DATE),n},l.hideCreateForm=function(){l.setState({isBtnCreateVisible:!0,isCreatePanelVisible:!1,openedPanel:ce,isSecondPanel:!1})},l.handleShow=function(e){l.setState({openedPanel:e})},l.formToShowCollection=function(e){var a=l.state,t=a.columnNameSortBy,s=a.sortingOrder,r=a.nameShouldInclude;return e=ae.operationsOnCollection.modificate(e,[{keyFrom:K.valuesNames.DATE_OF_PROCEDURE,keyTo:K.valuesNames.DATE_OF_PROCEDURE+"Convert",fn:ue.getDDMMMYYYY},{keyFrom:K.valuesNames.TIME,keyTo:K.valuesNames.TIME+"Convert",fn:ue.getHHmm}]),ae.operationsOnCollection.filterAndSort({collection:e,filterBy:r,sortingByKey:t,sortingByOrder:s,filterKeys:[K.valuesNames.NAME,K.valuesNames.DATE_OF_PROCEDURE+"Convert",K.valuesNames.TIME+"Convert",K.valuesNames.SOURCE]})},s=t,(0,O.default)(l,s)}return(0,h.default)(a,e),a.prototype.componentWillReceiveProps=function(){var e=this,a=this.context.router.route.match.params.sourceId,t=this.context.router.route.match.params.userId;this.context.router.history.location.pathname===ee.clientUrls.PATIENTS+"/"+t+"/"+ee.clientUrls.PROCEDURES+"/"+a&&void 0!==a&&this.setState({isSecondPanel:!0,isDetailPanelVisible:!0,isBtnExpandVisible:!0,isBtnCreateVisible:!0,isCreatePanelVisible:!1}),this.context.router.history.location.pathname===ee.clientUrls.PATIENTS+"/"+t+"/"+ee.clientUrls.PROCEDURES+"/create"&&this.setState({isSecondPanel:!0,isBtnExpandVisible:!0,isBtnCreateVisible:!1,isCreatePanelVisible:!0,openedPanel:ie,isDetailPanelVisible:!1}),this.context.router.history.location.pathname===ee.clientUrls.PATIENTS+"/"+t+"/"+ee.clientUrls.PROCEDURES&&this.setState({isSecondPanel:!1,isBtnExpandVisible:!1,isBtnCreateVisible:!0,isCreatePanelVisible:!1,openedPanel:ce,isDetailPanelVisible:!1,expandedPanel:"all"}),setTimeout(function(){e.setState({isLoading:!1})},500)},a.prototype.render=function(){var e=this.state,a=e.selectedColumns,t=e.columnNameSortBy,l=e.sortingOrder,s=e.isSecondPanel,r=e.isDetailPanelVisible,n=e.isBtnExpandVisible,o=e.expandedPanel,u=e.openedPanel,d=e.isBtnCreateVisible,i=e.isCreatePanelVisible,c=e.editedPanel,m=e.offset,p=e.isSubmit,f=e.isLoading,E=this.props,v=E.allProcedures,N=E.proceduresDetailFormState,P=E.proceduresCreateFormState,S=E.metaPanelFormState,O=E.procedureDetail,b=(E.proceduresPerPageAmount,"proceduresDetail"===o||o===ce||"metaPanel"===o),h=o===de,C=o===ie,R=z.columnsConfig.filter(function(e){return a[e.key]}),D=this.formToShowCollection(v),g=void 0;return r&&!(0,F.default)(O)&&(g=O.sourceId),j.default.createElement("section",{className:"page-wrapper"},j.default.createElement("div",{className:(0,Y.default)("section",{"full-panel full-panel-main":h,"full-panel full-panel-details":b||C})},j.default.createElement(L.Row,null,h||"all"===o?j.default.createElement(L.Col,{xs:12,className:(0,Y.default)({"col-panel-main":s})},j.default.createElement("div",{className:"panel panel-primary"},j.default.createElement(G.default,{onFilterChange:this.handleFilterChange,panelTitle:"Procedures",isBtnExpandVisible:n,isBtnTableVisible:!1,name:de,onExpand:this.handleExpand,currentPanel:de}),j.default.createElement(q.default,{headers:R,resourceData:v,emptyDataMessage:"No procedures",onHeaderCellClick:this.handleHeaderCellClick,onCellClick:this.handleDetailProceduresClick,columnNameSortBy:t,sortingOrder:l,table:"procedures",filteredData:D,totalEntriesAmount:(0,_.default)(D),offset:m,setOffset:this.handleSetOffset,isBtnCreateVisible:d,onCreate:this.handleCreate,id:g,isLoading:f}))):null,"all"!==o&&!b||!r||i?null:j.default.createElement(L.Col,{xs:12,className:(0,Y.default)({"col-panel-details":s})},j.default.createElement(le.default,{onExpand:this.handleExpand,name:"proceduresDetail",openedPanel:u,onShow:this.handleShow,expandedPanel:o,currentPanel:"proceduresDetail",detail:O,onEdit:this.handleEdit,editedPanel:c,onCancel:this.handleProcedureDetailCancel,onSaveSettings:this.handleSaveSettingsDetailForm,proceduresDetailFormValues:N.values,metaPanelFormValues:S.values,isSubmit:p})),"all"!==o&&!C||!i||r?null:j.default.createElement(L.Col,{xs:12,className:(0,Y.default)({"col-panel-details":s})},j.default.createElement(re.default,{title:"Create Procedure",onExpand:this.handleExpand,name:ie,openedPanel:u,onShow:this.handleShow,expandedPanel:o,currentPanel:ie,onSaveSettings:this.handleSaveSettingsCreateForm,formValues:P.values,onCancel:this.handleCreateCancel,isCreatePanelVisible:i,componentForm:j.default.createElement(oe.default,{isSubmit:p})})))))},a}(I.PureComponent),c.propTypes={allProcedures:y.default.arrayOf(y.default.object)},c.contextTypes={router:y.default.shape({history:y.default.object})},i=m))||i)||i)||i)||i)||i)||i);a.default=pe},"./src/components/pages/Procedures/ProceduresCreate/ProceduresCreateForm.js":function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s,r,n=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),o=l(n),u=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=l(u),i=t("./node_modules/babel-runtime/helpers/inherits.js"),c=l(i),m=t("./node_modules/react/react.js"),p=l(m),f=t("./node_modules/redux-form/es/index.js"),E=t("./src/components/form-fields/ValidatedInputFormGroup.js"),v=l(E),N=t("./src/components/form-fields/ValidatedTextareaFormGroup.js"),P=l(N),S=t("./src/components/form-fields/DateInput.js"),O=l(S),b=t("./src/components/pages/Procedures/forms.validation.js"),h=t("./src/components/pages/Procedures/forms.config.js"),C=t("./src/components/pages/Procedures/ProceduresCreate/default-values.config.js"),R=t("./src/utils/time-helpers.utils.js"),D=(s=(0,f.reduxForm)({form:"proceduresCreateFormSelector",validate:b.validateForm}))(r=function(e){function a(){return(0,o.default)(this,a),(0,d.default)(this,e.apply(this,arguments))}return(0,c.default)(a,e),a.prototype.componentDidMount=function(){this.props.initialize(C.defaultFormValues)},a.prototype.render=function(){var e=this.props.isSubmit,a=new Date,t=(0,R.getDDMMMYYYY)(a.getTime());return p.default.createElement("div",{className:"panel-body-inner"},p.default.createElement("form",{name:"proceduresCreateForm",className:"form"},p.default.createElement("div",{className:"form-group-wrapper"},p.default.createElement("div",{className:"row-expand"},p.default.createElement("div",{className:"col-expand-left"},p.default.createElement(f.Field,{label:h.valuesLabels.NAME,name:h.valuesNames.NAME,id:h.valuesNames.NAME,type:"text",component:v.default,props:{isSubmit:e}})),p.default.createElement("div",{className:"col-expand-right"},p.default.createElement(f.Field,{label:h.valuesLabels.DATE_OF_PROCEDURE,name:h.valuesNames.DATE_OF_PROCEDURE,id:h.valuesNames.DATE_OF_PROCEDURE,component:O.default,props:{format:"DD-MMM-YYYY",isSubmit:e}}))),p.default.createElement("div",{className:"row-expand"},p.default.createElement("div",{className:"col-expand-left"},p.default.createElement(f.Field,{label:h.valuesLabels.PERFORMER,name:h.valuesNames.PERFORMER,id:h.valuesNames.PERFORMER,type:"text",component:v.default,props:{isSubmit:e}})),p.default.createElement("div",{className:"col-expand-right"},p.default.createElement(f.Field,{label:h.valuesLabels.NOTES,name:h.valuesNames.NOTES,id:h.valuesNames.NOTES,component:P.default,props:{isSubmit:e}}))),p.default.createElement("div",{className:"row-expand"},p.default.createElement("div",{className:"col-expand-left"},p.default.createElement(f.Field,{label:h.valuesLabels.TERMINOLOGY,name:h.valuesNames.TERMINOLOGY,id:h.valuesNames.TERMINOLOGY,type:"text",component:v.default,props:{isSubmit:e}})),p.default.createElement("div",{className:"col-expand-right"},p.default.createElement(f.Field,{label:h.valuesLabels.CODE,name:h.valuesNames.CODE,id:h.valuesNames.CODE,type:"text",component:v.default,props:{isSubmit:e}}))),p.default.createElement("div",{className:"row-expand"},p.default.createElement("div",{className:"col-expand-left"},p.default.createElement(f.Field,{label:h.valuesLabels.AUTHOR,name:h.valuesNames.AUTHOR,id:h.valuesNames.AUTHOR,component:v.default,props:{disabled:!0,isSubmit:e}})),p.default.createElement("div",{className:"col-expand-right"},p.default.createElement(f.Field,{label:h.valuesLabels.DATE,name:h.valuesNames.DATE,id:h.valuesNames.DATE,component:O.default,props:{disabled:!0,value:t,format:"DD-MMM-YYYY",isSubmit:e}}))))))},a}(m.PureComponent))||r;a.default=D},"./src/components/pages/Procedures/ProceduresCreate/default-values.config.js":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.defaultFormValues=void 0;var l,s=t("./node_modules/babel-runtime/helpers/defineProperty.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(s),n=t("./src/components/pages/Procedures/forms.config.js");a.defaultFormValues=(l={},(0,r.default)(l,n.valuesNames.AUTHOR,"bob.smith@gmail.com"),(0,r.default)(l,n.valuesNames.SOURCE_ID,""),l)},"./src/components/pages/Procedures/ProceduresDetail/ProceduresDetail.js":function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),r=l(s),n=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),o=l(n),u=t("./node_modules/babel-runtime/helpers/inherits.js"),d=l(u),i=t("./node_modules/react/react.js"),c=l(i),m=t("./src/components/plugin-page-component/PluginDetailPanel.js"),p=l(m),f=t("./src/components/pages/Procedures/ProceduresDetail/ProceduresDetailForm.js"),E=l(f),v=t("./src/utils/time-helpers.utils.js"),N=t("./src/components/pages/Procedures/forms.config.js"),P=function(e){function a(){return(0,r.default)(this,a),(0,o.default)(this,e.apply(this,arguments))}return(0,d.default)(a,e),a.prototype.render=function(){var e=this.props,a=e.onExpand,t=e.onShow,l=e.openedPanel,s=e.expandedPanel,r=e.currentPanel,n=e.onEdit,o=e.editedPanel,u=e.onCancel,d=e.onSaveSettings,i=e.proceduresDetailFormValues,m=e.metaPanelFormValues,f=e.isSubmit,P=this.props.detail;P=P||{};var S=(0,v.getDDMMMYYYY)(P[N.valuesNames.DATE_OF_PROCEDURE]),O=(0,v.getDDMMMYYYY)(P[N.valuesNames.DATE]);return c.default.createElement("div",{className:"section-detail"},c.default.createElement("div",{className:"panel-group accordion"},"procedurePanel"!==s&&"all"!==s||o.procedurePanel?null:c.default.createElement(p.default,{onExpand:a,name:"procedurePanel",title:"Procedure",onShow:t,isOpen:"procedurePanel"===l,currentPanel:r,onEdit:n,editedPanel:o,onCancel:u,onSaveSettings:d,formValues:i,isBtnShowPanel:!0},c.default.createElement("div",{className:"panel-body-inner"},c.default.createElement("div",{className:"form"},c.default.createElement("div",{className:"form-group-wrapper"},c.default.createElement("div",{className:"row-expand"},c.default.createElement("div",{className:"col-expand-left"},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{className:"control-label"},N.valuesLabels.NAME),c.default.createElement("div",{className:"form-control-static"},P[N.valuesNames.NAME]))),c.default.createElement("div",{className:"col-expand-right"},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{className:"control-label"},N.valuesLabels.DATE_OF_PROCEDURE),c.default.createElement("div",{className:"form-control-static"},S)))),c.default.createElement("div",{className:"row-expand"},c.default.createElement("div",{className:"col-expand-left"},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{className:"control-label"},N.valuesLabels.PERFORMER),c.default.createElement("div",{className:"form-control-static"},P[N.valuesNames.PERFORMER]))),c.default.createElement("div",{className:"col-expand-right"},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{className:"control-label"},N.valuesLabels.NOTES),c.default.createElement("div",{className:"form-control-static"},P[N.valuesNames.NOTES])))),c.default.createElement("div",{className:"row-expand"},c.default.createElement("div",{className:"col-expand-left"},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{className:"control-label"},N.valuesLabels.AUTHOR),c.default.createElement("div",{className:"form-control-static"},P[N.valuesNames.AUTHOR]))),c.default.createElement("div",{className:"col-expand-right"},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{className:"control-label"},N.valuesLabels.DATE),c.default.createElement("div",{className:"form-control-static"},O)))),c.default.createElement("div",{className:"row-expand"},c.default.createElement("div",{className:"col-expand-left"},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{className:"control-label"},N.valuesLabels.SOURCE),c.default.createElement("div",{className:"form-control-static"},P[N.valuesNames.SOURCE])))))))),"procedurePanel"!==s&&"all"!==s||!o.procedurePanel?null:c.default.createElement(p.default,{onExpand:a,name:"procedurePanel",title:"Edit Procedure",onShow:t,isOpen:"procedurePanel"===l,currentPanel:r,onEdit:n,editedPanel:o,onCancel:u,onSaveSettings:d,formValues:i,isBtnShowPanel:!0},c.default.createElement(E.default,{detail:P,isSubmit:f})),"metaPanel"===s||"all"===s?c.default.createElement(p.default,{onExpand:a,name:"metaPanel",title:"Metadata",isOpen:"metaPanel"===l,onShow:t,currentPanel:r,onEdit:n,editedPanel:o,onCancel:u,onSaveSettings:d,formValues:m,isBtnShowPanel:!0,isShowControlPanel:!1},c.default.createElement("div",{className:"panel-body-inner"},c.default.createElement("div",{className:"form"},c.default.createElement("div",{className:"form-group-wrapper"},c.default.createElement("div",{className:"row-expand"},c.default.createElement("div",{className:"col-expand-left"},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{className:"control-label"},N.valuesLabels.TERMINOLOGY),c.default.createElement("div",{className:"form-control-static"},P[N.valuesNames.TERMINOLOGY]))),c.default.createElement("div",{className:"col-expand-right"},c.default.createElement("div",{className:"form-group"},c.default.createElement("label",{className:"control-label"},N.valuesLabels.CODE),c.default.createElement("div",{className:"form-control-static"},P[N.valuesNames.CODE])))))))):null))},a}(i.PureComponent);a.default=P},"./src/components/pages/Procedures/ProceduresDetail/ProceduresDetailForm.js":function(e,a,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s,r,n=t("./node_modules/babel-runtime/helpers/defineProperty.js"),o=l(n),u=t("./node_modules/babel-runtime/helpers/classCallCheck.js"),d=l(u),i=t("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=l(i),m=t("./node_modules/babel-runtime/helpers/inherits.js"),p=l(m),f=t("./node_modules/react/react.js"),E=l(f),v=t("./node_modules/redux-form/es/index.js"),N=t("./src/components/form-fields/ValidatedInputFormGroup.js"),P=l(N),S=t("./src/components/form-fields/ValidatedTextareaFormGroup.js"),O=l(S),b=t("./src/components/form-fields/DateInput.js"),h=l(b),C=t("./src/components/pages/Procedures/forms.validation.js"),R=t("./src/components/pages/Procedures/forms.config.js"),D=(s=(0,v.reduxForm)({form:"proceduresDetailFormSelector",validate:C.validateForm}))(r=function(e){function a(){return(0,d.default)(this,a),(0,c.default)(this,e.apply(this,arguments))}return(0,p.default)(a,e),a.prototype.componentDidMount=function(){var e=this.props,a=e.detail;(0,e.initialize)(this.defaultValuesForm(a))},a.prototype.defaultValuesForm=function(e){var a;return a={},(0,o.default)(a,R.valuesNames.NAME,e[R.valuesNames.NAME]),(0,o.default)(a,R.valuesNames.DATE_OF_PROCEDURE,e[R.valuesNames.DATE_OF_PROCEDURE]),(0,o.default)(a,R.valuesNames.PERFORMER,e[R.valuesNames.PERFORMER]),(0,o.default)(a,R.valuesNames.NOTES,e[R.valuesNames.NOTES]),(0,o.default)(a,R.valuesNames.TERMINOLOGY,e[R.valuesNames.TERMINOLOGY]),(0,o.default)(a,R.valuesNames.CODE,e[R.valuesNames.CODE]),(0,o.default)(a,R.valuesNames.AUTHOR,e[R.valuesNames.AUTHOR]),a},a.prototype.render=function(){var e=this.props,a=e.detail,t=e.isSubmit;return E.default.createElement("div",{className:"panel-body-inner"},E.default.createElement("form",{name:"proceduresDetailForm",className:"form"},E.default.createElement("div",{className:"form-group-wrapper"},E.default.createElement("div",{className:"row-expand"},E.default.createElement("div",{className:"col-expand-left"},E.default.createElement(v.Field,{label:R.valuesLabels.NAME,name:R.valuesNames.NAME,id:R.valuesNames.NAME,type:"text",component:P.default,props:{isSubmit:t}})),E.default.createElement("div",{className:"col-expand-right"},E.default.createElement(v.Field,{label:R.valuesLabels.DATE_OF_PROCEDURE,name:R.valuesNames.DATE_OF_PROCEDURE,id:R.valuesNames.DATE_OF_PROCEDURE,component:h.default,props:{format:"DD-MMM-YYYY",isSubmit:t}}))),E.default.createElement("div",{className:"row-expand"},E.default.createElement("div",{className:"col-expand-left"},E.default.createElement(v.Field,{label:R.valuesLabels.PERFORMER,name:R.valuesNames.PERFORMER,id:R.valuesNames.PERFORMER,type:"text",component:P.default,props:{isSubmit:t}})),E.default.createElement("div",{className:"col-expand-right"},E.default.createElement(v.Field,{label:R.valuesLabels.NOTES,name:R.valuesNames.NOTES,id:R.valuesNames.NOTES,component:O.default,props:{isSubmit:t}}))),E.default.createElement("div",{className:"row-expand"},E.default.createElement("div",{className:"col-expand-left"},E.default.createElement(v.Field,{label:R.valuesLabels.TERMINOLOGY,name:R.valuesNames.TERMINOLOGY,id:R.valuesNames.TERMINOLOGY,type:"text",component:P.default,props:{isSubmit:t}})),E.default.createElement("div",{className:"col-expand-right"},E.default.createElement(v.Field,{label:R.valuesLabels.CODE,name:R.valuesNames.CODE,id:R.valuesNames.CODE,type:"text",component:P.default,props:{isSubmit:t}}))),E.default.createElement("div",{className:"row-expand"},E.default.createElement("div",{className:"col-expand-left"},E.default.createElement(v.Field,{label:R.valuesLabels.AUTHOR,name:R.valuesNames.AUTHOR,id:R.valuesNames.AUTHOR,component:P.default,props:{disabled:!0,isSubmit:t}})),E.default.createElement("div",{className:"col-expand-right"},E.default.createElement(v.Field,{label:R.valuesLabels.DATE,name:R.valuesNames.DATE,id:R.valuesNames.DATE,component:h.default,props:{disabled:!0,value:a[R.valuesNames.DATE],format:"DD-MMM-YYYY",isSubmit:t}}))))))},a}(f.PureComponent))||r;a.default=D},"./src/components/pages/Procedures/forms.config.js":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.valuesNames={NAME:"name",DATE_OF_PROCEDURE:"date",PERFORMER:"performer",NOTES:"notes",TIME:"time",TERMINOLOGY:"procedureTerminology",CODE:"procedureCode",AUTHOR:"author",DATE:"dateSubmitted",SOURCE:"source",SOURCE_ID:"sourceId",STATUS:"currentStatus",ORIGINAL_COMPOSITION:"originalComposition",ORIGINAL_SOURCE:"originalSource",PROCEDURE_NAME:"procedureName"},a.valuesLabels={NAME:"Procedure Name",DATE_OF_PROCEDURE:"Date of Procedure",PERFORMER:"Procedure Performed By",NOTES:"Procedure Notes",TIME:"Time",TERMINOLOGY:"Terminology",CODE:"Code",AUTHOR:"Author",DATE:"Date",SOURCE:"Source",SOURCE_ID:"Source ID",STATUS:"Current Status",ORIGINAL_COMPOSITION:"Original Composition",ORIGINAL_SOURCE:"Original Source",PROCEDURE_NAME:"Procedure Name"}},"./src/components/pages/Procedures/forms.validation.js":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.validateForm=void 0;var l=t("./src/components/pages/Procedures/forms.config.js"),s=function(e){var a={};return a[l.valuesNames.NAME]=e[l.valuesNames.NAME]?null:"You must enter a value.",a[l.valuesNames.DATE_OF_PROCEDURE]=e[l.valuesNames.DATE_OF_PROCEDURE]?null:"You must enter a value.",a[l.valuesNames.PERFORMER]=e[l.valuesNames.PERFORMER]?null:"You must enter a value.",a[l.valuesNames.NOTES]=e[l.valuesNames.NOTES]?null:"You must enter a value.",a[l.valuesNames.TERMINOLOGY]=e[l.valuesNames.TERMINOLOGY]?null:"You must enter a value.",a[l.valuesNames.CODE]=e[l.valuesNames.CODE]?null:"You must enter a value.",a};a.validateForm=s},"./src/components/pages/Procedures/selectors.js":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.patientProceduresDetailSelector=a.metaPanelFormStateSelector=a.proceduresCreateFormStateSelector=a.proceduresDetailFormStateSelector=a.patientProceduresSelector=void 0;var l=t("./node_modules/lodash/fp/getOr.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(l),r=t("./node_modules/reselect/lib/index.js"),n=t("./src/utils/plugin-helpers.utils.js"),o=t("./src/components/pages/Procedures/forms.config.js"),u=(0,s.default)({},"form.proceduresCreateFormSelector"),d=(0,s.default)({},"form.proceduresDetailFormSelector"),i=(0,s.default)({},"form.metaPanelFormSelector"),c=(0,r.createSelector)(function(e){return e.patientsProcedures},function(e,a){return(0,s.default)(null,"match.params.userId",a)},function(e,a){return{allProcedures:n.operationsOnCollection.modificate(e[a],[{key:o.valuesNames.DATE_OF_PROCEDURE,fn:function(e){return new Date(e).getTime()}},{key:o.valuesNames.TIME,fn:function(e){return new Date(e).getTime()}}]),userId:a}}),m=(0,r.createSelector)(d,function(e){return{proceduresDetailFormState:e}}),p=(0,r.createSelector)(u,function(e){return{proceduresCreateFormState:e}}),f=(0,r.createSelector)(i,function(e){return{metaPanelFormState:e}}),E=(0,r.createSelector)(function(e){return e.proceduresDetail},function(e,a){return(0,s.default)(null,"match.params.userId",a)},function(e,a){return{procedureDetail:e[a],userId:a}});a.patientProceduresSelector=c,a.proceduresDetailFormStateSelector=m,a.proceduresCreateFormStateSelector=p,a.metaPanelFormStateSelector=f,a.patientProceduresDetailSelector=E},"./src/components/pages/Procedures/table-columns.config.js":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.defaultColumnsSelected=a.columnsConfig=void 0;var l=t("./src/utils/time-helpers.utils.js");a.columnsConfig=[{key:"name",title:"Procedure Name",width:"41%"},{key:"date",title:"Procedure Date",transformer:l.getDDMMMYYYY,width:"25%"},{key:"time",title:"Time",transformer:l.getHHmm,width:"15%"},{key:"source",title:"Source",width:"19%"},{key:"sourceId",title:"SourceID",display:"none"}],a.defaultColumnsSelected={name:!0,date:!0,time:!0,source:!0,sourceId:!0}}});