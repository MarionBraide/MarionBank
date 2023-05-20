// Bank class representing the banking system
var Bank = /** @class */ (function () {
  function Bank() {
      this.accounts = [];
  }
  // Add account to the bank
  Bank.prototype.addAccount = function (account) {
      this.accounts.push(account);
  };

  Bank.prototype.viewAccount = function () {
    const ownerName = document.getElementById("owner-name");
    const accountNumber = document.getElementById("account-number");
    const accountBalance = document.getElementById("current-bal");
  }

  // Find account by account number
  Bank.prototype.findAccount = function (accountNumber) {
      return this.accounts.find(function (account) { return account.getAccountNumber() === accountNumber; });
  };
  // Deposit money into an account
  Bank.prototype.deposit = function (accountNumber, amount) {
      var account = this.findAccount(accountNumber);
      if (account) {
          account.deposit(amount);
          console.log("Successfully deposited $".concat(amount, " into Account ").concat(accountNumber));
      }
      else {
          console.log("Account ".concat(accountNumber, " not found"));
      }
  };
  // Withdraw money from an account
  Bank.prototype.withdraw = function (accountNumber, amount) {
      var account = this.findAccount(accountNumber);
      if (account) {
          if (account.getBalance() >= amount) {
              account.withdraw(amount);
              console.log("Successfully withdrew $".concat(amount, " from Account ").concat(accountNumber));
          }
          else {
              console.log("Insufficient balance in Account ".concat(accountNumber));
          }
      }
      else {
          console.log("Account ".concat(accountNumber, " not found"));
      }
  };
  // Transfer money between accounts
  Bank.prototype.transfer = function (senderAccountNumber, receiverAccountNumber, amount) {
      var senderAccount = this.findAccount(senderAccountNumber);
      var receiverAccount = this.findAccount(receiverAccountNumber);
      if (senderAccount && receiverAccount) {
          if (senderAccount.getBalance() >= amount) {
              senderAccount.withdraw(amount);
              receiverAccount.deposit(amount);
              console.log("You have successfully transferred $".concat(amount, " from Account ").concat(senderAccountNumber, " to Account ").concat(receiverAccountNumber));
          }
          else {
              console.log("Insufficient balance in Account ".concat(senderAccountNumber));
          }
      }
      else {
          console.log("Invalid Account. Please ensure you entered the details correctly");
      }
  };
  return Bank;
}());
// Account class representing a user account
var Account = /** @class */ (function () {
  function Account(accountNumber, ownerName) {
      this.accountNumber = accountNumber;
      this.balance = 0;
      this.ownerName = ownerName;
  }
  Account.prototype.getAccountNumber = function () {
      return this.accountNumber;
  };
  Account.prototype.getBalance = function () {
      return this.balance;
  };
  Account.prototype.getOwnerName = function () {
      return this.ownerName;
  };
  Account.prototype.deposit = function (amount) {
      this.balance += amount;
  };
  Account.prototype.withdraw = function (amount) {
      this.balance -= amount;
  };
  return Account;
}());
// Create an instance of the Bank
var bank = new Bank();
// Example usage:
var account1 = new Account("0231209894", "Agbani Braide");
bank.addAccount(account1);
var account2 = new Account("0802221854", "Pyeonghwa Drex");
bank.addAccount(account2);
// Deposit button click handler
var depositBtn = document.getElementById('depositBtn');
const message = document.getElementById("returnMessage")
depositBtn.addEventListener('click', function () {
  var accountNumber = document.getElementById('depositAccountNumber').value;
  var amount = parseFloat(document.getElementById('depositAmount').value);
  bank.deposit(accountNumber, amount);
  console.log("done");
  alert(`Successfully deposited ${amount} into ${accountNumber}`)
});
// Withdraw button click handler
var withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {
  var accountNumber = document.getElementById('withdrawAccountNumber').value;
  var amount = parseFloat(document.getElementById('withdrawAmount').value);
  bank.withdraw(accountNumber, amount);
  alert(`Successfully withdrew ${amount} from ${accountNumber}`)
});
// Transfer button click handler
var transferBtn = document.getElementById('transferBtn');
transferBtn.addEventListener('click', function () {
  //console.log('its gets here')
  var senderAccountNumber = document.getElementById('senderAccountNumber').value;
  var receiverAccountNumber = document.getElementById('receiverAccountNumber').value;
  var amount = parseFloat(document.getElementById('transferAmount').value);
  bank.transfer(senderAccountNumber, receiverAccountNumber, amount);
  alert(`Successfully transferred ${amount} from ${senderAccountNumber} to ${receiverAccountNumber}`)
});
