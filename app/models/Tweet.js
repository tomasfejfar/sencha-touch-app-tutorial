app.models.Tweet = Ext.regModel("Tweet", {
    fields : [{
        name : "id", 
        type : "int"
    }, {
        name : "who",
        type : "string"
    }, {
        name : "what",
        type : "string"
    }]
});
