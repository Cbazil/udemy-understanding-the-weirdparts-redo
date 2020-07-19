(function(global, $){
  var Greetr = function(firstname, surname, language){
    return new Greetr.init(firstname, surname, language);
  }
  // informal greetings
  var greetings = {
    en: "Hello",
    es: "Hola"
  };
  // formal greetings
  var formalGreetings = {
    en: "Greetings",
    es: "Saludos"
  };
 
 // supported languages 
  var supportedLangs = ["en", "es"];
  
 // logged messages
  var logMessages = {
    en: "Logged in",
    es: "Inició sesión"
  };
  
  Greetr.prototype = {
    fullName: function() {
      return this.firstname + " " + this.surname;
    },
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1){
        throw "Invalid language";
      }
    },
    greeting: function(){
      return greetings[this.language] + " " + this.firstname;
    },
    formalGreeting: function(){
      return formalGreetings[this.language] + ", " + this.fullName();
    },
    greet: function(formal){
      var msg;
      // undefined or null it results in false
      if(formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      if (console){
        console.log(msg);
      }
      // "this" refers to the calling object at hand
      // make the method chainable
      return this;
    },
    log: function(){
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      return this;
    },
    setLang: function(lang){
      this.language = lang;
      
      this.validate();
      
      return this;
    },
    HTMLGreeting: function(selector, formal){
      if (!$){
        throw "jQuery not loaded!"
      } 
      if (!selector){
        throw "Missing jQuery selector"
      }
      let msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      $(selector).html(msg);
      return this;
    }
  };
  
  Greetr.init = function(firstname, surname, language){
    var self = this;
    self.firstname = firstname || "";
    self.surname = surname || "";
    self.language = language || "en";
    
    self.validate();
  }
  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);