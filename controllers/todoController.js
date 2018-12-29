var mongoose = require('mongoose');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://shivam:shivam24@ds145434.mlab.com:45434/todo');

var todoSchema = new mongoose.Schema({
  item:String

});
var Todo=mongoose.model('Todo',todoSchema);
// var itemOne=Todo({item:'buy flowers'}).save(function (err) {
//   if(err)
//   {
//     throw err;
//   }
//   console.log('item saved');
//
// });

// var data=[{item:'getmilk'},{item:'milk'},{item:'sexy'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports=function(app){
  app.get('/todo',function(req,res){
    Todo.find({},function(err,data){
      if(err) throw err;
      res.render('todo',{todos:data});


    });

  });
  app.post('/todo',urlencodedParser,function(req,res){
    var newTodo=Todo(req.body).save(function(err,data){
      if(err) throw err;
      res.json(data);


    });
    });
  app.delete('/todo/:item',function(req,res){
    Todo.find({item:req.params.item.replace(/'-'/g," ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
    });



  });

};
