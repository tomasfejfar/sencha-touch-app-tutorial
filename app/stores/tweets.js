app.stores.tweets = new Ext.data.Store({
    model : "Tweet",
    pageSize : 25,
    data : [{
        id: 1,
        who : '@vader',    
        what: 'I find your lack of faith disturbing!'
    }, {
        id : 2, 
        who: '@vvega', 
        what: 'We should have funkin\' shotguns!'
    }, {
        id: 3, 
        who : '@thegodfather', 
        what: 'I gave him and offer he couldn\' refuse'
    }]
    // would be for real data - @see http://docs.sencha.com/touch/1-1/#!/api/Ext.data.Store
    /*
    proxy : {
        type : 'scripttag',
        url : 'http://mojemedicina.s-lab.cz.php53.xm10.tojeono.cz/mobile/tweets/'
    }
    */
});