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
                            action : 'index',
                            historyUrl : 'index/index',
                            animation : {
                                type : 'slide'
                            }
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
            listeners : {
                deactivate : function (component) {
                    component.destroy();
                    console.log('All your base are belong to us!');
                }
            }
        });
        this.list = new Ext.List({
            itemTpl : '<strong>{who}</strong>: {what}',
            store : app.stores.tweets
        });
        this.items = [this.list];
        app.views.List.superclass.initComponent.apply(this, arguments);
    }
});