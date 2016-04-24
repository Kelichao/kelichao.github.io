//jquery轮播
          $(document).ready(
            function(){

                $left_span=$("#left_span");
                $right_span=$("#right_span");
                $banner=$("#banner")
                 var index=0;
                 var timex;
                 var animated=true;
              
              function animate(){  
                        if(animated==true){
                          animated=false;                   
                       $("#banner li img").hide();
                          
                           // alert( $("#banner li:eq(i) ").length);
                        if(index>=3)
                        {
                            index=-1;
                        }
                          
                          $("#banner li img").eq(index+1).fadeIn(500,function(){
                            animated=true;
                          });

                          index++;
                           // $("#banner li").attr("class","");
                            $.each($("#button span"),function(){
                        $(this).removeClass("on");
                     });
                     $("#button span").eq(index).addClass("on");
                     } 
                    }
                //右按钮点击事件
                
                 $right_span.click(
                    function(){
                      animate()
                    }

                    );
                //按钮点击事件
                $left_span.click(
                    function(){   
                     if(animated==true){
                          animated=false;                    
                        $("#banner li img").hide();
                          
                           // alert( $("#banner li:eq(i) ").length);
                        if(index<=0){
                            index=4;
                        }
                         
                          $("#banner li img").eq(index-1).fadeIn(500,function(){
                            animated=true;
                          });

                          index--;

                                   $.each($("#button span"),function(){
                        $(this).removeClass("on");
                     });
                     $("#button span").eq(index).addClass("on");
                     
                           // $("#banner li").attr("class","");
                    }
            }
                    );
               //小按钮点击切换
               $("#button span").click(function(){
                      
                      //小按钮亮暗切换
                     $.each($("#button span"),function(){
                        $(this).removeClass("on");
                     });
                     $(this).addClass("on");
                     index=$(this).attr("index");
                     // window.alert(index);

                     //画面切换
                     $("#banner li img").hide();
                          
                           // alert( $("#banner li:eq(i) ").length);
                        if(index<=0){
                            index=4;
                        }
                         
                          $("#banner li img").eq(index-1).fadeIn(500);

                          index--;
                           // $("#banner li").attr("class","");
               });
               //window.alert($("#button span").length);
               //自动切换
               timex= setInterval(animate,3000);
               $("#ad").mouseover(function(){
                clearInterval(timex);
               });
               $("#ad").mouseout(function(){
                timex= setInterval(animate,3000);
               });
            }
            );//  主函数结束
