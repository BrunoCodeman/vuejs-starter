var app = new Vue({
    el: "#app",
    data: {
            brand: "SomeFactory",
            product: "Socks",
            selectedVariant: 0,
            inventory: 100,
            details: ["80% cotton", "20% polyester", "Made by the best people of the world, the proletarians."],
            variants: [{id: 1, color: "green", quantity: 10},{id: 2, color: "blue", quantity: 0}],
            cart: 0
          },
    methods: {
      addToCart: function() {this.cart+=1},
      updateProduct: function (index) { this.selectedVariant = index; }

    },
    computed: {
      title(){ return this.brand + " " + this.product },
      image() { return this.variants[this.selectedVariant].color + "_socks.jpg"; },
      InStock() { return this.variants[this.selectedVariant].quantity;}  
    },

});