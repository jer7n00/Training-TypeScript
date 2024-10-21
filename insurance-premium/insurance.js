"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InsuranceType;
(function (InsuranceType) {
    InsuranceType["Health"] = "Health";
    InsuranceType["Life"] = "Life";
    InsuranceType["Auto"] = "Auto";
})(InsuranceType || (InsuranceType = {}));
var InsurancePolicy = /** @class */ (function () {
    function InsurancePolicy(policyHolderName, age, insuranceType, coverageAmount, healthConditions) {
        if (healthConditions === void 0) { healthConditions = []; }
        this.policyHolderName = policyHolderName;
        this.age = age;
        this.insuranceType = insuranceType;
        this.coverageAmount = coverageAmount;
        this.healthConditions = healthConditions;
    }
    InsurancePolicy.prototype.calculatePremium = function () {
        var basePremium = 0;
        switch (this.insuranceType) {
            case InsuranceType.Health:
                basePremium = 200;
                break;
            case InsuranceType.Life:
                basePremium = 150;
                break;
            case InsuranceType.Auto:
                basePremium = 100;
                break;
            default:
                throw new Error("Invalid Insurance Type");
        }
        if (this.age < 25) {
            basePremium += 50;
            
        }
        else if (this.age > 60) {
            basePremium += 100;
        }
        if (this.healthConditions.length > 0) {
            basePremium += this.healthConditions.length * 30;
        }
        if (this.coverageAmount > 100000) {
            basePremium += (this.coverageAmount - 100000) / 1000;
        }
        return basePremium;
    };
    return InsurancePolicy;
}());
var policy1 = new InsurancePolicy("Alice", 30, InsuranceType.Health, 150000, ["Diabetes"]);
var policy2 = new InsurancePolicy("Bob", 22, InsuranceType.Life, 50000);
var policy3 = new InsurancePolicy("Charlie", 65, InsuranceType.Auto, 200000, ["Hypertension", "Asthma"]);
console.log("Premium for ".concat(policy1.policyHolderName, ": $").concat(policy1.calculatePremium()));
console.log("Premium for ".concat(policy2.policyHolderName, ": $").concat(policy2.calculatePremium()));
console.log("Premium for ".concat(policy3.policyHolderName, ": $").concat(policy3.calculatePremium()));
