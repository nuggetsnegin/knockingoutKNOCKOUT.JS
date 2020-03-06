const ClickCounterViewModel = function() {
  this.numberOfClicks = ko.observable(0);

  this.registerClick = () => {
    this.numberOfClicks(this.numberOfClicks() + 1);
  };

  this.resetClicks = () => {
    this.numberOfClicks(0);
  };

  this.suprise = ko.pureComputed(function() {
    console.log(this.numberOfClicks());
    return this.numberOfClicks() >= Math.floor(Math.random() * 10) + 3;
  }, this);
};

ko.applyBindings(new ClickCounterViewModel());
