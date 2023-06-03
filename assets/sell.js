class Sell {
    constructor() {
        this.sellData = JSON.parse(localStorage.getItem('sellData')) || [];
    }
  
    create(quantity, price, status) {
        const sellItem = {
            quantity: quantity,
            price: price,
            status: status
        };
    
        this.sellData.push(sellItem);
        localStorage.setItem('sellData', JSON.stringify(this.sellData));
    }
  
    read() {
        return this.sellData;
    }
  
    update(index, quantity, price, status) {
        if (index >= 0 && index < this.sellData.length) {
            this.sellData[index].quantity = quantity;
            this.sellData[index].price = price;
            this.sellData[index].status = status;
            localStorage.setItem('sellData', JSON.stringify(this.sellData));
        }
    }
  
    delete(index) {
        if (index >= 0 && index < this.sellData.length) {
            this.sellData.splice(index, 1);
            localStorage.setItem('sellData', JSON.stringify(this.sellData));
        }
    }
}
  