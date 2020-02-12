let loadChairs;
let loadBenches;
let loadTables;
let isloaderror = false;


//*********************productload function Start************************/
function productLoad(chair, bench, table) {
    /*   loadChairs = chair;
      loadBenches = bench;
      loadTables = table; */
    if (isNaN(chair)) {
        console.log('error to load');
        isloaderror = true;
        return;
    }

    if (isNaN(bench)) {
        console.log('error to load');
        isloaderror = true;
        return;
    }

    if (isNaN(table)) {
        console.log('error to load');
        isloaderror = true;
        return;
    }

    /*  loadChairs = chair;
     loadBenches = bench;
     loadTables = table; */

}
//***********************End productload function***************************/

//***********************Start productpurchase function *********************/

function productpurchase(chair, bench, table) {

    if (!isloaderror) {
        if (isNaN(chair)) {
            console.log('error to purchase');
            return;
        }
        if (isNaN(bench)) {
            console.log('error to purchase');
            return;
        }
        if (isNaN(table)) {
            console.log('error to purchase');
            return;
        }

        if (chair > loadChairs) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Chairs are not available');
            console.log('error message');
            console.log(`here Stock:${loadChairs}`);
            console.log(`Required Qty:${chair}`);
            return;
        } else {
            console.log('Chairs are available');
            console.log(`here Stock:${loadChairs}`);
            console.log(`Required Qty:${chair}`);
            console.log('');
        }

        if (bench > loadBenches) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Benches are not available');
            console.log('error message');
            console.log(`here Stock:${loadBenches}`);
            console.log(`Required Qty:${bench}`);
            return;
        } else {
            console.log('Benches are available');
            console.log(`here Stock:${loadBenches}`);
            console.log(`Required Qty:${bench}`);
            console.log('');
        }
        if (table > loadTables) {
            console.log('purchase Qty  is higer then stock');
            console.log('please enter below of stock count');
            console.log('Tables  are not available');
            console.log('error message');
            console.log(`here Stock:${loadTables}`);
            console.log(`Required Qty:${table}`);
            return;
        } else {
            console.log('Tables are available');
            console.log(`here Stock:${loadTables}`);
            console.log(`Required Qty:${table}`);
            console.log('');

        }

        loadChairs = loadChairs - chair;
        loadTables = loadTables - table;
        loadBenches = loadBenches - bench;

        display(chair, bench, table);
    } else {
        console.log('stock not loaded properly');

    }

}


//***********************Start Display  function *********************/
function display(itemChairs, itemBenches, itemTables) {

    console.log('purchased');
    console.log('.....................');
    console.log(`Chairs:${itemChairs}`);
    console.log(`Benches:${itemBenches}`);
    console.log(`Tables:${itemTables}`);

    console.log('.....................');
    console.log('Remaining');
    console.log(`Available Chairs:${loadChairs}`);
    console.log(`Available Benches :${loadBenches}`);
    console.log(`Available Tables:${loadTables}`);
    console.log(' ....................');
}

//*********************End productpurchase function*************************/
//*********************Start Display  function*****************************/
productLoad(150, 120, 130);
productpurchase(50, 50, 50);
productpurchase(50, 50, 50);
productpurchase(50, 50, 50);