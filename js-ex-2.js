let loadChairs;
let loadBenches;
let loadTables;
let isloaderror = false;

function main() {
    let chairs = {
        name: 'chair',
        price: 100,
        Quantity: 150
    };

    let benches = {
        name: 'chair',
        price: 100,
        Quantity: 120
    };

    let tables = {
        name: 'chair',
        price: 100,
        Quantity: 130
    };

    load(chairs, benches, tables);

}

function load(chairs, benches, tables) {


    //console.log(chairs);
    //console.log(loadChairs);

    if (typeof chairs != 'object') {
        console.log('please enter  object');
        isloaderror = true;
        return;
    }

    if (typeof benches != 'object') {
        console.log('please enter  object');
        isloaderror = true;
        return;
    }

    if (typeof tables != 'object') {
        console.log('please enter  object');
        isloaderror = true;
        return;
    }

    loadChairs = chairs;
    loadBenches = benches;
    loadTables = tables;

}

function purchased(chairs, benches, tables, discount) {
    //console.log(chairs);
    //console.log(loadTables);
    //console.log(loadBenches.Quantity);

    if (!isloaderror) {

        if (typeof discount != 'number') {
            console.log('please enter number');
            return;
        }

        if (typeof chairs != 'number') {
            console.log('please enter number');
            return;
        }

        if (typeof benches != 'number') {
            console.log('please enter number');
            return;
        }

        if (typeof tables != 'number') {
            console.log('please enter number');
            return;
        }

        if (chairs >= loadChairs.Quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Chairs are not available');
            console.log('error message');
            console.log(`here Stock:${loadChairs.Quantity}`);
            console.log(`Required Qty:${chairs}`);
            return;

        } else {
            console.log('Chairs are available');

        }

        if (benches >= loadBenches.Quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Benches are not available');
            console.log('error message');
            console.log(`here Stock:${loadBenches .Quantity}`);
            console.log(`Required Qty:${benches}`);
            return;

        } else {
            console.log('Benches are available');

        }

        if (tables >= loadTables.Quantity) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Tables are not available');
            console.log('error message');
            console.log(`here Stock:${loadTables .Quantity}`);
            console.log(`Required Qty:${Tables}`);
            return;

        } else {
            console.log('Tables are available');
        }

        if (discount > 0 && discount <= 100) {
            console.log('valid discount')
        } else {
            console.log('discount is not valid');
        }

        loadChairs.Quantity = loadChairs.Quantity - chairs;
        loadBenches.Quantity = loadBenches.Quantity - benches;
        loadTables.Quantity = loadTables.Quantity - tables;
        display(chairs, benches, tables, discount);
    } else {
        console.log('stock not loaded properly');

    }


}

function display(itemChairs, itemBenches, itemTables, discount) {

    let chairsPrice = itemChairs * loadChairs.price;
    let benchesPrice = itemBenches * loadBenches.price;
    let tablesPrice = itemTables * loadTables.price;
    let totalPrice = chairsPrice + benchesPrice + tablesPrice;
    let totalDiscount = totalPrice * discount / 100;
    console.log('Purchased');
    console.log('.....................');
    console.log(`Chairs:${itemChairs}`);
    console.log(`Benches:${itemBenches}`);
    console.log(`Tables:${itemTables}`);
    console.log('Remaining  items');
    console.log('.....................');
    console.log(`Available Chairs:${ loadChairs.Quantity}`);
    console.log(`Available Benches:${ loadBenches.Quantity}`);
    console.log(`Available Tables:${ loadTables.Quantity}`)

    console.log('Total Price');
    console.log('.....................');
    console.log(`Chairs Price: ${chairsPrice}`);
    console.log(`Benches Price: ${benchesPrice}`);
    console.log(`Tables Price: ${tablesPrice}`);
    console.log(`Total Price: ${totalPrice}`);
    console.log(`Total Discount: ${totalDiscount}`);
    console.log(`Payable Amount: ${totalPrice-totalDiscount}`);
}

main();
purchased(50, 50, 50, 10);
purchased(50, 50, 50, 10);
purchased(50, 50, 50, 10);