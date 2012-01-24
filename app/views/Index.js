app.views.Index = Ext.extend(Ext.Panel, {
    initComponent : function() {
        Ext.apply(this, {
            dockedItems : [ {
                xtype : 'toolbar',
                dock : 'top',
                title : 'Hello World',
                items : [ {
                    xtype : 'button',
                    text : 'Yay!', 
                    handler : function() {
                        Ext.dispatch({
                            controller : 'index', 
                            action : 'list'
                        });
                    }
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
        app.views.Index.superclass.initComponent.apply(this, arguments);
    }
});