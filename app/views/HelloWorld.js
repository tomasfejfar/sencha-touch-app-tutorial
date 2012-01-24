app.views.HelloWorld = Ext.extend(Ext.Panel, {
    initComponent : function() {
        Ext.apply(this, {
            items : [ {
                html : 'Hello World!'
            } ]
        });
        app.views.HelloWorld.superclass.initComponent.apply(this, arguments);
    }
});