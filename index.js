let invoiceTotal = +(prompt("ingrese el monto total de la factura"));
let invoiceSubtotal =+(prompt("subtotal de la factura"));

let taxes

/**
 * this function return the % of taxes applied in the batch
 * @param {number} total this is the number in the "total" section of the invoice, this value includes taxes
 * @param {number} subtotal this number is the total of the purchase before taxes
 */
const taxCalculation = (total, subtotal) => {
  if (total && subtotal){
    taxes = ((total*100)/subtotal)-100;    
  }else{
    while(!total){
      console.error("debe ingresar al menos el total de la factura")
      invoiceTotal = +(prompt("ingrese el monto total de la factura"));
    }
    taxes = 1    
  }
}

let batchCost = +(prompt("costo del lote"));
let batchUnits = +(prompt("cantidad de unidades del lote"));
let unitaryCost

/**
 * this function calculates the unitary cost adding the taxes calculated before
 * @param {number} cost This is what the batch of a single product costs you
 * @param {number} units This is how much units are in the batch
 */
const costCalculation = (cost, units) => {
  while(!cost){
    console.error("ingrese un costo del lote");
    cost = +(prompt("costo del lote"));    
  }
  while (!units) {
    console.error("ingrese la cantidad de unidades del lote")
    units = +(prompt("cantidad de unidades del lote"));
  }
  unitaryCost = cost/units;
}

let marginOfGain = +(prompt("porcentaje deseado de ganancia"));
let finalPrice
let unitPlusTaxes
/**
 * 
 * @param {number} taxes this value comes from taxCalculation function
 * @param {number} unitaryCost this value comes from costCalculation function
 * @param {number} margin this is the desired margin of gain selected by the user
 */
const productPrice = (taxes, unitaryCost, margin) => {
  taxesAmount = (unitaryCost*taxes)/100;
  unitPlusTaxes = unitaryCost + taxesAmount;
  finalPrice = ((unitPlusTaxes*margin)/100)+unitPlusTaxes;
}

taxCalculation(invoiceTotal, invoiceSubtotal);

costCalculation(batchCost, batchUnits);

productPrice(taxes, unitaryCost, marginOfGain);
console.log("El costo de tu producto es: " + unitaryCost);
console.log("Si le sumamos impuestos por el " + taxes +"% es: " + unitPlusTaxes);
console.log("Y con un margen de ganancia del " + marginOfGain + "% sería:" + finalPrice);