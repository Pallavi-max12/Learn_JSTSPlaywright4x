class ICICI{
    #balance;
    constructor(name,balance){
        this.name = name;
        this.#balance = balance;
    }
    getBalance(){
        return this.#balance;
    }
    setBalance(balance, isCashier){
        if(isCashier){
            this.#balance = balance;
        }else{
            console.log("You are not authorized to change the balance");
        }
    }
}

let iciciAcc = new ICICI("Pallavi",10000);
console.log(iciciAcc.name);
console.log(iciciAcc.getBalance());
iciciAcc.setBalance(20000,false);
console.log(iciciAcc.getBalance());
iciciAcc.setBalance(20000,true);
console.log(iciciAcc.getBalance());