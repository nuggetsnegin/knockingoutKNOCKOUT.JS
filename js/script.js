// const ClickCounterViewModel = function() {
//   this.numberOfClicks = ko.observable(0);

//   this.registerClick = () => {
//     this.numberOfClicks(this.numberOfClicks() + 1);
//   };

//   this.resetClicks = () => {
//     this.numberOfClicks(0);
//   };

//   this.suprise = ko.pureComputed(function() {
//     return this.numberOfClicks() >= Math.floor(Math.random() * 10) + 3;
//   }, this);
// };

// ko.applyBindings(new ClickCounterViewModel());

const myViewModel = {
  name: ko.observable("Negin"),
  age: ko.observable(12)
};

ko.applyBindings(myViewModel, document.getElementById("binding-test"));

myViewModel.name("Bob");
ko.applyBindings(myViewModel);
// const ViewModel = function(first, last) {
//   this.firstName = ko.observable(first);
//   this.lastName = ko.observable(last);

//   this.fullName = ko.pureComputed(function() {
//     // Knockout tracks dependencies automatically. It knows that fullName depends on firstName and lastName, because these get called when evaluating fullName.
//     return this.firstName() + " " + this.lastName();
//   }, this);
// };

// ko.applyBindings(
//   new ViewModel("Planet", "Earth"),
//   document.getElementById("nameInput")
// );
