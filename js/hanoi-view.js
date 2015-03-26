(function () {
  if (typeof Hanoi === "undefined") {
     window.Hanoi = {};
  }

  // var Hanoi = window.Hanoi;

  var View = Hanoi.View = function(game, $el) {
    this.game = game;
    this.box = $el;
    this.setupTowers();
    this.towers = $(".tower");
    this.render(this.towers);
    this.towers.on("click", this.clickTower);

  };

  View.prototype.setupTowers = function() {
    for(var i = 0; i < 3; i++) {
      var $tower = $("<li class='tower'></li>");
      $tower.data("id", i);
      this.box.append($tower);
    }
  };

  View.prototype.render = function($towers) {
    for (var i = 0; i < 3; i++ ) {
      this.buildTower($towers.eq(i));
    }
  };

  View.prototype.buildTower = function($el) {
    var $tower = $el;
    var towerid = $tower.data("id");
    var towerLength = this.game.towers[towerid].length;
    for (var i = 0; i < towerLength; i++) {
      var $disk = $("<div class='disk'></div>");
      $disk.addClass("disk_"+ (2-i) );
      $tower.append($disk);
    }
  };

  View.prototype.clickTower = function() {
    var target = event.target;
    var $target = $(target);

    if (typeof pick === "undefined") {
      var pick = $target.data("id");
    } else {
      var drop = $target.data("id");
      console.log(pick);
      this.game.move(pick, drop);
      pick = undefined;
      drop = undefined;
    }
  }

})();
