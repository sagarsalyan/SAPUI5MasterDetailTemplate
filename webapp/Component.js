sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"app/SAPUI5MasterDetailTemplate/model/models",
	"sap/ui/model/json/JSONModel"
], function (UIComponent, Device, models, JSONModel) {
	"use strict";

	return UIComponent.extend("app.SAPUI5MasterDetailTemplate.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			
			var sPath = jQuery.sap.getModulePath("app.SAPUI5MasterDetailTemplate", "/model/data.json"); 
			var oModel = new JSONModel(sPath);
			this.setModel(oModel);
			
			this.getRouter().attachTitleChanged(function(oEvent){
				// set the browser page title based on selected order/product
				document.title = oEvent.getParameter("title");
			});
		}
	});
});