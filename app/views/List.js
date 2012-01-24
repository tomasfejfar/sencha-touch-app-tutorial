app.views.List = Ext.extend(Ext.Panel, {
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
                            action : 'index'
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
            } ]
        });
        this.list = new Ext.List({
            itemTpl : '<strong>{who}</strong>: {what}',
            store : app.stores.tweets
        });
        this.items = [this.list];
        app.views.List.superclass.initComponent.apply(this, arguments);
    }
});