var app = new Vue({
    el: "#app",
    data: {
            product: "Socks",
            image: "green_socks.jpg",
            inventory: 100,
            details: ["80% cotton", "20% polyester", "Made by the best people of the world, the proletarians."],
            variants: [{id: 1, color: "green"},{id: 2, color: "blue"}],
            cart: 0
          },
    methods: {
      addToCart: function() {this.cart+=1},
      updateProduct: function (colour) { this.image = colour + "_socks.jpg"; }

    },
});