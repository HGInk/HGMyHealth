(function (global) {
    
    var RiskViewModel,
        app = global.app = global.app || {};
    
 	RiskViewModel = kendo.data.ObservableObject.extend({
        refreshRisk: function(){
        } 
    }); 
    
    app.demoService = {
        viewModel: new RiskViewModel()
    };
   
})(window);