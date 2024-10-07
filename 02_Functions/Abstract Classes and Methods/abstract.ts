
// Abstract Payment class
abstract class Payment {
    constructor(protected amount: number, protected account: number) {
    }

    
    isPaymentValid(): boolean {
        return this.amount > 0;
    }

    
    abstract processPayment(): string;
}


class JazzCashPayment extends Payment {
    constructor(amount: number, account: number) {
        super(amount, account);
    }

    
    processPayment(): string {
        if (!this.isPaymentValid()) {
            return "Invalid JazzCash Payment";
        }
        
        return `JazzCash payment of PKR ${this.amount} from account ${this.account} processed successfully.`;
    }
}


class PayPalPayment extends Payment {
    constructor(amount: number, account: number) {
        super(amount, account);
    }

    
    processPayment(): string {
        if (!this.isPaymentValid()) {
            return "Invalid PayPal Payment";
        }
       
        return `PayPal payment of USD ${this.amount} from account ${this.account} processed successfully.`;
    }
}


const jazzCashPayment = new JazzCashPayment(1000, 123456789);
console.log(jazzCashPayment.processPayment()); 

const payPalPayment = new PayPalPayment(50, 987654321);
console.log(payPalPayment.processPayment()); 













// class Numbers{
//     static getRandomNumber() {
//         return Math.random();
//     }
// }
// Numbers.getRandomNumber();
