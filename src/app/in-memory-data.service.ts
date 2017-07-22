import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      //sample data used locally for access 
//data can be retrieved via http, or local directory via this dummy http im-memory db service.
      const LUNCHMENUS= [
  { id: 1, recommendation: 'Ready meal/pizza/sausage roll/fish fingers/pasty and chips',avgmealcost:8 },
  { id: 2, recommendation: 'Baked beans/cheese/scrambled or fried eggs on toast',avgmealcost:9 },
  { id: 3, recommendation: 'Sandwiches with meat/tinned fish/cheese with bag of crisps',avgmealcost:12 },
  { id: 4, recommendation: 'Jacket potato with olive oil/ butter and baked beans/cheese or curry/chillicon carne',avgmealcost:11},
  { id: 5, recommendation: 'Whole milk yogurt/chocolate bar/cake',avgmealcost:7 },
  { id: 6, recommendation: 'Fried, grilled or roast meat/fish/eggs/chicken',avgmealcost:12},
  { id: 7, recommendation: 'Vegetarian meat substitute or lentils with chips/potatoes/rice/pasta',avgmealcost:10 },
  { id: 8, recommendation: 'Fresh/frozen/tinned vegetables with olive oil, butter/margarine or a sauce or salad with mayonnaise/olive oil-based dressing',avgmealcost:11 },
  { id: 9, recommendation: 'Sponge pudding with custard or fresh or tinned fruit with double cream or ice cream',avgmealcost:8 },
  { id: 10, recommendation: 'Milk pudding with jam or syrup/thick and creamy yogurt/individual trifle or dessert/cheesecake/gateaux' ,avgmealcost:5}
];

return {LUNCHMENUS};
  }
}
