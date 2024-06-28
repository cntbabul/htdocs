function outerFunc(){
   let outerVar = ' I am at scope level 1'
   function innerfunc(){
    console.log(outerVar);
   }innerfunc()
}
outerFunc()