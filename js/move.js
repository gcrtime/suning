var mySwiper = new Swiper('.profit .swiper-container',{
		//切换效果
      effect: 'fade',//'flip','coverflow','cube','fade',  默认横向滑动
      loop:true,  //是否循环
      autoplay: 30,
	
     // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      type:'bullets',
      bulletElement:'span',
    },
      
  });
  
  
       var mySwiper = new Swiper('.activity .swiper-container',{
       	slidesOffsetBefore : 19,
       	slidesPerView:2.2,
       	spaceBetween:9,
       });