Ext.regController('index', {
    index : function(options) {
        this.panel = new app.views.Index();
        this.panel.button.on('tap', function () {
            alert('...can\'t touch this!');
        });
        this.application.viewport.setActiveItem(this.panel);
    }, 
    list : function(options) {
        this.panel = new app.views.List();
        this.panel.list.on('itemtap', function (list, id, el, event) {
            alert('Not nearly 9000...the id is nearly ' + id);
        });
        this.application.viewport.setActiveItem(this.panel);
    }
});
 