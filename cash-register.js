/* Design a cash register drawer function checkCashRegister()
that accepts purchase price as the first argument (price),
payment as the second argument (cash), and cash-in-drawer (cid) as the third argument. */

function checkCashRegister(price, cash, cid) {
  const money = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 },
  ];
  const output = { status: null, change: [] };
  let change = cash - price;

  // create register with cid and total
  const register = cid.reduce(
    (acc, current) => {
      acc.total += current[1];
      acc[current[0]] = current[1];
      return acc;
    },
    { total: 0 }
  );

  // when have exact change
  if (register.total === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // when change isn't enought
  if (register.total < change) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  const changeArr = money.reduce((acc, current) => {
    let value = 0;
    // while money in the drawer
    while (register[current.name] > 0 && change >= current.val) {
      change -= current.val;
      register[current.name] -= current.val;
      value += current.val;

      // precision errors fix
      change = Math.round(change * 100) / 100;
    }
    if (value > 0) acc.push([current.name, value]);
    return acc;
  }, []);

  if (changeArr.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    return output;
  }

  // give the change
  output.status = "OPEN";
  output.change = changeArr;
  return output;
}

const result = checkCashRegister(3.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
console.log(result);
