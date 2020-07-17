(function(global, $){
  var Greetr = function(firstname, surname, language){
    return new Greetr.init(firstname, surname, language);
  }
  Greetr.prototype = {};
  Greetr.init = function(firstname, surname, language){
    var self = this;
    self.firstname = firstname || "";
    self.surname = surname || "";
    self.language = language || "en";
  }
  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);