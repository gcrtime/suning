function GetInfor() {
	//	$(document).ready(function(){
	//		$(".suningscore").text(function(){
	//			$.ajax({
	//				type:"GET",
	//				url:"http://sportlive.suning.com/slsp-web/live/v1/sectionList.do",
	//				dataType:"jsonp",
	//				data:{
	//					payType:0,
	//					app:'h5',
	//					end:3,
	//					start:0
	//				},
	//				success:function(data){
	//					if(data.success){
	//						$(".suningscore").html(retMsg);
	//					}else{
	//						$(".suningscore").html("出现错误：");
	//						}
	//				},
	//				error:function(jqXHR){     
	//			          alert("发生错误：" + jqXHR.status);  
	//			},     
	//				
	//			});
	//		});
	//		
	//		
	//		
	//	});

//	$.ajax({
//		type: "GET",
//		url: "http://sportlive.suning.com/slsp-web/live/v1/sectionList.do",
//		dataType: "json",
//		data: {
//			payType: 0,
//			app: 'h5',
//			end: 3,
//			start: 0
//		},
//		success: function(data) {
//			alert(data);
//		}
//	});

	$.ajax({
    url:"http://sportlive.suning.com/slsp-web/live/v1/sectionList.do",
    type:'GET', //GET
    async:true,    //或false,是否异步
    data:{
        payType: 0,
		app: 'h5',
		end: 3,
		start: 0
    },
    timeout:5000,    //超时时间
    dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
    beforeSend:function(xhr){
       
    },
  success: function(data,textStatus,jqXHR){
    		var a = data.data.list;
    		document.getElementById('gamefirst')
			var html = '';
			var count=0;
			var flag=false;
    		for(var j in a){
    			if(flag){
    				return;
    			}
    			var b =a[j];
    			for(var k in b){
					var c = b[k];
					console.log(c,4444444444444444444);
					/*for(var i=0;i<c.length;i++){
						if(i=2){
							break;
						}
					}*/
					html += setDiv(c);
					count++;
    			if(count==2){
    				flag=true;
    				break;
    			}
    	  }
    			document.getElementById('gamefirst').innerHTML=html
    			
    			
    			/*count++;
    			if(count==1){
    				break;
    			}*/
	}
					
    		
	$(".game_first").html(html)	
 
	
	function setDiv(c){
    	  	
    	  	
    	  	
				 var div='<div class="game_first">'+'<div class="game_turn">'+'<div class="game_turn_member">会员</div>'+'<div id="startTime" class="game_turn_time">'
				 +c.startTime.substr(11,[5])
				 +'</div>'+'<div id="gameTurn" class="game_turn_text">'
				 +c.title.substr(0,[6])+
				 '</div>'+'</div>'+'<div class="game_team">'+'<div class="game_team1">'
    	  	+'<img id="guestTeamLogo" class="picture_size" src = "' + c.guestTeamLogo + '" ></img>'+'<div id="guestTeam" class="suning">'
    	  	+c.guestTeamTitle+
    	  	'</div>'+'</div>'+'<div class="game_team2">'
    	  	+'<img id="homeTeamLogo" class="picture_size" src = "' + c.homeTeamLogo + '"></img>'+'<div id="homeTeam"  class="shenhua">'
    	  	+c.homeTeamTitle+'</div>'+'</div>'
    	  	+'</div>'+'<div class="game_score">'+'<div id="guestTeamScore" class="suningscore">-</div>'+'<div id="homeTeamScore" class="shenhuascore">-</div>'
    	  	+'</div>'+'<div class="game_video">'+'<div class="game_video_img"></div>'+'<div class="video">视频直播</div>'
    	  	+'</div>'+'</div>'
			
			var guestscore=c.guestTeamScore;
																			    											
			return div;
					
    	  }
	
	}
  /* error:function(xhr,textStatus){
        
    },
    complete:function(){
        console.log('结束')
    }*/
   
   
})

}



$(document).ready(function(){
	$("#packup").click(function(){
		$(this).text($("#packup").is(":hidden")?"收起我的会员&nbsp;&and;":"我的全部会员")
		$("#show").slideToggle("fast");
		$("show").toggle(function(){
			$(this).attr("style","display: none;")
		})
		$("#header").toggleClass("change_header")
	});
});



			
		
