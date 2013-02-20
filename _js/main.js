function dispatcher(){
   this.events = {};
   return this;
}

dispatcher.prototype.add = function(evt, func) {
   if(!this[evt]){
      this[evt] = [];
   }
   this[evt].push(func);
};

dispatcher.prototype.trigger = function(evt, obj) {
   var i = 0;

   if(!this[evt]){
      return this;
   }
   for(; i < this[evt].length; i++){
      this[evt][i](obj);
   }
   return
};

dispatcher.prototype.remove = function(evt, func) {
   var index = this[evt].indexOf(func);
   if(index !== -1){
      this[evt].splice(index, 1);
   }
   return this;
};


var Person = function(name){
   this.name = name;
   this.dispatcher = new dispatcher();
}

Person.prototype.talk = function(what) {
   alert(what);
   this.dispatcher.trigger('talk', this);
};







// demo
pat = new Person('Pat');
teacher = new Person('Mrs. Smith');

pat.dispatcher.add('talk', function(obj){
   teacher.talk('Hush ' + obj.name + '!');
});

pat.talk('hello world');
