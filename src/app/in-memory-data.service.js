"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        //sample data used locally for access 
        //data can be retrieved via http, or local directory via this dummy http im-memory db service.
        var LUNCHMENUS = [
            { id: 1, recommendation: 'Ready meal/pizza/sausage roll/fish fingers/pasty and chips' },
            { id: 2, recommendation: 'Baked beans/cheese/scrambled or fried eggs on toast' },
            { id: 3, recommendation: 'Sandwiches with meat/tinned fish/cheese with bag of crisps' },
            { id: 4, recommendation: 'Jacket potato with olive oil/ butter and baked beans/cheese or curry/chillicon carne' },
            { id: 5, recommendation: 'Whole milk yogurt/chocolate bar/cake' },
            { id: 6, recommendation: 'Fried, grilled or roast meat/fish/eggs/chicken' },
            { id: 7, recommendation: 'Vegetarian meat substitute or lentils with chips/potatoes/rice/pasta' },
            { id: 8, recommendation: 'Fresh/frozen/tinned vegetables with olive oil, butter/margarine or a sauce or salad with mayonnaise/olive oil-based dressing' },
            { id: 9, recommendation: 'Sponge pudding with custard or fresh or tinned fruit with double cream or ice cream' },
            { id: 10, recommendation: 'Milk pudding with jam or syrup/thick and creamy yogurt/individual trifle or dessert/cheesecake/gateaux' }
        ];
        return { LUNCHMENUS: LUNCHMENUS };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map