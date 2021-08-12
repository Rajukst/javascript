/*....................
problem solving 01
.........................*/

function seerToMon(seer) {
    if (typeof seer != 'number') {
        return 'please enter a valid value'; //error handle status: okk.
    }
    let mon = seer / 40;
    return mon;
}
let monResult = seerToMon(690);
console.log(monResult);

/*....................
problem solving 02
.........................*/
function totalSales(shirtCount, pantCount, shoeCount) {
    if (typeof shirtCount != 'number' || typeof pantCount != 'number' || typeof shoeCount != 'number') {
        return 'shirt, pant or shoe delevary input are wrong. please check your input!!';
    }  //error handle status: okk.

    const perShirt = 100;
    const perPant = 200;
    const perShoe = 500;

    // calculation of shirt, pant and shoe
    let shirtAmount = perShirt * shirtCount;
    let pantAmount = perPant * pantCount;
    let shoeAmount = perShoe * shoeCount;

    // counting subtotal of all elements:
    let subtotal = shirtAmount + pantAmount + shoeAmount;
    return subtotal;
}
let totalResult = totalSales(5, 3, 2);
console.log(totalResult);



/*....................
problem solving 03
.........................*/
function deliveryCost(delevary) {
    if (typeof delevary != 'number') {
        return 'please enter your valid delevary cost';
    }
    let tShirtHundredCount = 100;
    let tShirtTwoHundredCount = 80;
    let TwoHundredAbove = 50;
    if (delevary <= 100) {
        const firstCount = delevary * tShirtHundredCount;
        return firstCount;
    }
    else if (delevary <= 200) {
        const forTwoHundred = 100 * tShirtHundredCount;
        const restDelevary = delevary - 100;
        const restAmount = restDelevary * tShirtTwoHundredCount;
        const neogetableAmount = forTwoHundred + restAmount;
        return neogetableAmount;
    }
    else {
        const finalHundred = 100 * tShirtHundredCount;
        const finalSecondHundred = 100 * tShirtTwoHundredCount;
        const aboveTotal = delevary - 200;
        const aboveCount = aboveTotal * TwoHundredAbove;
        const totalPayment = finalHundred + finalSecondHundred + aboveCount;
        return totalPayment;
    }
}

let delevaryAmount = deliveryCost(350);
console.log(delevaryAmount);


/*....................
problem solving 04
.........................*/
const friends = ['Rakib', 'raja', 'babu', 'rupa', 'jony'];
let myFriend = [];
function perfectFriend(friends) {
    if (typeof myFriend == 'number') {
        return 'please enter a valid input'; //error handle status: okk.
    }
    for (const friend of friends) {
        if (friend.length == 5) {
            myFriend.push(friend);
        }
    } return myFriend;
}
let getIndex = perfectFriend(friends);
console.log(getIndex);