//import { base } from "mocha/lib/reporters";
enum InsuranceType{
    Health = "Health",
    Life = "Life",
    Auto = "Auto",
}

class InsurancePolicy{
    policyHolderName: string;
    age: number;
    insuranceType: InsuranceType;
    coverageAmount: number;
    healthConditions: string[];

    constructor(policyHolderName: string,age: number,insuranceType: InsuranceType,coverageAmount: number,healthConditions: string[]=[]){
        this.policyHolderName=policyHolderName;
        this.age=age;
        this.insuranceType=insuranceType;
        this.coverageAmount=coverageAmount;
        this.healthConditions=healthConditions;
    }

    calculatePremium(): number{
        let basePremium=0;

        switch(this.insuranceType){
            case InsuranceType.Health:
                basePremium=200;
                break;

            case InsuranceType.Life:
                basePremium=150;
                break;

            case InsuranceType.Auto:
                basePremium=100;
                break;

            default: 
                throw new Error("Invalid Insurance Type");
        }


        if (this.age < 25) {
            basePremium += 50; 
        } else if (this.age > 60) {
            basePremium += 100; 
        }

       
        if (this.healthConditions.length > 0) {
            basePremium += this.healthConditions.length * 30; 
        }

       
        if (this.coverageAmount > 100000) {
            basePremium += (this.coverageAmount - 100000) / 1000; 
        }

        return basePremium;
    }
}


const policy1 = new InsurancePolicy("Alice", 30, InsuranceType.Health, 150000, ["Diabetes"]);
const policy2 = new InsurancePolicy("Bob", 22, InsuranceType.Life, 50000);
const policy3 = new InsurancePolicy("Charlie", 65, InsuranceType.Auto, 200000, ["Hypertension", "Asthma"]);

console.log(`Premium for ${policy1.policyHolderName}: $${policy1.calculatePremium()}`);
console.log(`Premium for ${policy2.policyHolderName}: $${policy2.calculatePremium()}`);
console.log(`Premium for ${policy3.policyHolderName}: $${policy3.calculatePremium()}`);