Ext.regController('index', {
    index : function(options) {
        this.application.viewport.setActiveItem(new app.views.Index());
    }, 
    list : function(options) {
        this.application.viewport.setActiveItem(new app.views.List());
    }
});
 