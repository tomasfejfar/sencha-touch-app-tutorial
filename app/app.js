Ext.regApplication({
    name : 'app', 
    defaultTarget : 'viewport', 
    defaultUrl : 'index/index',
    useHistory : true, 
    launch : function () {
        this.launched = true;
        this.deviceLaunch();
    }, 
    deviceLaunch : function () {
        this.viewport = new app.views.Viewport({
            application : this
        });
        Ext.Router.draw(function(map) {
            map.connect(":controller/:action/:id");
            map.connect(":controller/:action");
        });
    }
});