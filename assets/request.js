function createSell() {
    const sell = new Sell();
    const quantityInput = document.getElementById('quantityInput');
    const priceInput = document.getElementById('priceInput');
    const statusInput = document.getElementById('statusInput');
    
    const quantity = quantityInput.value.trim();
    const price = priceInput.value.trim();

    if (quantity !== '' && price !== '') {
        sell.create(parseInt(quantity), parseFloat(price), statusInput.value);
    }
    
    window.location.href = "display.html";
}

const queryParams = new URLSearchParams(window.location.search);
    const index = queryParams.get('index');

    if (index !== null) {
      const sell = new Sell();
      const sellList = sell.read();
      const sellItem = sellList[index];

      if (sellItem) {
        const quantityInput = document.getElementById('quantityInput');
        const priceInput = document.getElementById('priceInput');
        const statusInput = document.getElementById('statusInput');

        quantityInput.value = sellItem.quantity;
        priceInput.value = sellItem.price;
        statusInput.value = sellItem.status;
      } else {
        console.log('Index de vente invalide.');
      }
    } else {
      console.log('Index de vente manquant.');
    }

    function updateSell() {
      const sell = new Sell();
      const sellList = sell.read();
      const quantityInput = document.getElementById('quantityInput');
      const priceInput = document.getElementById('priceInput');
      const statusInput = document.getElementById('statusInput');

      const quantity = parseInt(quantityInput.value);
      const price = parseFloat(priceInput.value);
      const status = statusInput.value;

      sell.update(index, quantity, price, status);
      console.log('Vente mise à jour avec succès !');

      window.location.href = "display.html";
}

function displaySellList() {
    const sell = new Sell();
    const sellList = sell.read();
    const sellTableBody = document.getElementById('sellTableBody');
    sellTableBody.innerHTML = '';

    sellList.forEach((sellItem, index) => {
      const sellRow = document.createElement('tr');
      sellRow.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${sellItem.quantity}</td>
        <td>${sellItem.price}€</td>
        <td>${sellItem.status}</td>
        <td>
          <button class="btn btn-primary" onclick="goToUpdatePage(${index})"><i class="fas fa-edit"></i></button>
          <button class="btn btn-danger" onclick="deleteSell(${index})"><i class="fas fa-trash"></i></button>
        </td>
      `;
      sellTableBody.appendChild(sellRow);
    });
}

displaySellList();

function goToUpdatePage(index) {
    window.location.href = `update.html?index=${index}`;
}

function deleteSell(index) {
    const sell = new Sell();
    sell.delete(index);
    console.log('Vente supprimée avec succès !');
    displaySellList();
}