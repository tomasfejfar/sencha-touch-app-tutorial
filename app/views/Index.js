app.views.Index = Ext.extend(Ext.Panel, {
    initComponent : function() {
        Ext.apply(this, {
            layout : 'fit',
            dockedItems : [ {
                xtype : 'toolbar',
                dock : 'top',
                title : 'McHammer',
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
            listeners : {
                deactivate : function (component) {
                    component.destroy();
                    console.log('@anonops: #opPayback stopped');
                }
            }
        });
        this.button = new Ext.Button({
            text : 'You...',
            itemId : 'hammerButton'
        });
        this.panel = new Ext.Panel({
            layout : 'vbox',
            itemId : 'hammerPanel', 
            items : [this.button]
        });
        this.items = [ this.panel ];
        app.views.Index.superclass.initComponent.apply(this, arguments);
    }
});