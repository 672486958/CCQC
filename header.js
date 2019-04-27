$(".a").mouseover(function(){
 var $a=$(this).next()
    if( $a.is(":hidden")){
        $a.show()
    }else{
      $a.hide()
    } 
 
})