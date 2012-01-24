app.views.HelloWorld = Ext.extend(Ext.Panel, {
    initComponent : function() {
        Ext.apply(this, {
            dockedItems : [ {
                xtype : 'toolbar',
                dock : 'top',
                title : 'Hello World',
                items : [ {
                    xtype : 'button',
                    text : 'Yay!'
                } ]
            }, {
                xtype : 'toolbar',
                dock : 'bottom',
                items : [ {
                    xtype : 'button',
                    text : 'Nah...'
                } ]
            } ],
            items : [ {
                html : 'Hello World!'
            } ]
        });
        app.views.HelloWorld.superclass.initComponent.apply(this, arguments);
    }
});