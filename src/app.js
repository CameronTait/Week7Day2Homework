import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
        currencies: [],
        selectedCurrency: null,
        amount: 0
    }, 
    mounted(){
        this.getCurrencies()
      },
     methods: {
        getCurrencies: function(){
         fetch("https://api.exchangeratesapi.io/latest")
         .then(res => res.json())
         .then(currencies => this.currencies = currencies)
        },
  }
})
})