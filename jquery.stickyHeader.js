(function($) {
    $.fn.stickyHeader = function(options) {

        // Default settings
        var settings = $.extend({
            onFixedHeight:function(){

            },
            hideAfter : 10,
            showAt    : 0,
            animation : 'slide',
            speed     : 200,
            debounceTimeout: 50 // 添加防抖超時設置
        }, options);

        function debounce(func, wait) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    func.apply(context, args);
                }, wait);
            };
        }

        return this.each(function() {
            var $header = $(this);
          
            var headerHeight = $header.outerHeight();
            settings.onFixedHeight(headerHeight);
             
            var lastScrollTop = 0;

            $(window).scroll(debounce(function() { // 使用debounce函數
                var st = $(this).scrollTop();
                var hideAfterDistance = ($(document).height() * settings.hideAfter) / 100;
                var showAtDistance = ($(document).height() * settings.showAt) / 100;
                
                if(st == 0){
                    $header.removeClass('scrolling');
                    $header.removeClass('fixed-top');
                    $header.removeClass('scrolling-up');
                    $header.removeClass('scrolling-down');

                }else{

                    
                    if (st > lastScrollTop) { 

                        // Scroll down
                       
                        if (st > hideAfterDistance) {
                          
                            console.log('st > hideAfterDistance');
                            //滾動高動滿足
                            $header.addClass('scrolling');
                            $header.addClass('scrolling-down');

                            $header.removeClass('fixed-top');
                            $header.removeClass('scrolling-up');
                           
                        }else{
                      
                            $header.addClass('fixed-top');
                        }
                        
                    } else { 
                        // Scroll up
                       
                        $header.addClass('fixed-top');
                       
                        $header.addClass('scrolling');
                        $header.addClass('scrolling-up');
                        $header.removeClass('scrolling-down');
                   
                    }
                }

                lastScrollTop = st;
            }, settings.debounceTimeout));

        });
    }
})(jQuery);
