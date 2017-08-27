import Backbone from 'backbone';
import _ from 'underscore';


export default Backbone.Model.extend({
    defaults: {
        items: [],
        total: 0,

    },
    addItem(item) {
      console.log(item);
      //get items array
      console.log(item);
        let items = this.get('items');
          let newItems=items.concat(item);

          this.set({'items':newItems});


    },

    removeItem(item) {
        let newItems = _.without(this.get('items'), item);
        this.set({
            'items': newItems,
        });


    },
    updateQuantity(item){
      console.log(item);

    },
    getTotal() {
        let items=this.get('items');
        let prices = _.pluck(items,'price');
        let cartTotal = prices.reduce(function(a, b) {
            return a + b;
        }, 0);
        this.set({'total':cartTotal});
    }



});
