app.views.List = Ext.extend(Ext.Panel, {
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
                html : 'List!'
            } ]
        });
        app.views.List.superclass.initComponent.apply(this, arguments);
    }
});