$(document).ready(function() {
	var video = document.getElementById("video");
	video.volume = 0.5;
	var volume = 0.5;
	var timer;
	//按键控制
	$(document).keydown(function(event) {
		switch (event.keyCode) {
			case 32:
				if (video.paused) {
					video.play();
					
					//拼接分、秒
					var totalTimeMinutes=String(parseInt(video.duration/60));
					if(totalTimeMinutes.length==1){
						totalTimeMinutes="0"+totalTimeMinutes;
					}
					var totalTimeSeconds=String(parseInt(video.duration%60));
					if(totalTimeSeconds.length==1){
						totalTimeSeconds="0"+totalTimeSeconds;
					}
					var totalTime=totalTimeMinutes+":"+totalTimeSeconds;
					$("#totalTime").text(totalTime);
					
					//进度条
					timer=setInterval(function(){
						var newLeft=video.currentTime/video.duration*(parseInt($("#video").css("width"))-5)+"px";
						$("#place").css("left",newLeft);
						
						//拼接分、秒
						var currentTimeMinutes=String(parseInt(video.currentTime/60));
						if(currentTimeMinutes.length==1){
							currentTimeMinutes="0"+currentTimeMinutes;
						}
						var currentTimeSeconds=String(parseInt(video.currentTime%60));
						if(currentTimeSeconds.length==1){
							currentTimeSeconds="0"+currentTimeSeconds;
						}
						var currentTime=currentTimeMinutes+":"+currentTimeSeconds;
						$("#currentTime").text(currentTime);
						
					},30);
					
					$("#play").attr("src", "svg/play.svg");
				} else {
					video.pause();
					clearInterval(timer);
					$("#play").attr("src", "svg/pause.svg");
				}
				break;
			case 38:
				if (video.volume < 1) {
					if (video.volume == 0) {
						$("#volume").attr("src", "svg/volume.svg");
					}
					video.volume = (video.volume * 10 + 1) / 10;
					volume=video.volume;
					document.getElementById("volumn-range").value=volume;
				}
				break;
			case 40:
				if (video.volume > 0) {
					video.volume = (video.volume * 10 - 1) / 10;
					if (video.volume == 0) {
						$("#volume").attr("src", "svg/mute.svg");
					}
					volume=video.volume;
					document.getElementById("volumn-range").value=volume;
				}
				break;
		}
	});
	$("#video").click(function() {
		if (video.paused) {
			video.play();
			
			//拼接分、秒
			var totalTimeMinutes=String(parseInt(video.duration/60));
			if(totalTimeMinutes.length==1){
				totalTimeMinutes="0"+totalTimeMinutes;
			}
			var totalTimeSeconds=String(parseInt(video.duration%60));
			if(totalTimeSeconds.length==1){
				totalTimeSeconds="0"+totalTimeSeconds;
			}
			var totalTime=totalTimeMinutes+":"+totalTimeSeconds;
			$("#totalTime").text(totalTime);
			
			//进度条
			timer=setInterval(function(){
				var newLeft=ideo.currentTime/video.duration*(parseInt($("#video").css("width"))-5)+"px";
				$("#place").css("left",newLeft);
				
				//拼接分、秒
				var currentTimeMinutes=String(parseInt(video.currentTime/60));
				if(currentTimeMinutes.length==1){
					currentTimeMinutes="0"+currentTimeMinutes;
				}
				var currentTimeSeconds=String(parseInt(video.currentTime%60));
				if(currentTimeSeconds.length==1){
					currentTimeSeconds="0"+currentTimeSeconds;
				}
				var currentTime=currentTimeMinutes+":"+currentTimeSeconds;
				$("#currentTime").text(currentTime);
				
			},30);
			
			$("#play").attr("src", "svg/play.svg");
		} else {
			video.pause();
			clearInterval(timer);
			$("#play").attr("src", "svg/pause.svg");
		}
	});
	$("#play").click(function() {
		if (video.paused) {
			video.play();
			
			//拼接分、秒
			var totalTimeMinutes=String(parseInt(video.duration/60));
			if(totalTimeMinutes.length==1){
				totalTimeMinutes="0"+totalTimeMinutes;
			}
			var totalTimeSeconds=String(parseInt(video.duration%60));
			if(totalTimeSeconds.length==1){
				totalTimeSeconds="0"+totalTimeSeconds;
			}
			var totalTime=totalTimeMinutes+":"+totalTimeSeconds;
			$("#totalTime").text(totalTime);
			
			//进度条
			timer=setInterval(function(){
				var newLeft=video.currentTime/video.duration*(parseInt($("#video").css("width"))-5)+"px";
				$("#place").css("left",newLeft);
				
				//拼接分、秒
				var currentTimeMinutes=String(parseInt(video.currentTime/60));
				if(currentTimeMinutes.length==1){
					currentTimeMinutes="0"+currentTimeMinutes;
				}
				var currentTimeSeconds=String(parseInt(video.currentTime%60));
				if(currentTimeSeconds.length==1){
					currentTimeSeconds="0"+currentTimeSeconds;
				}
				var currentTime=currentTimeMinutes+":"+currentTimeSeconds;
				$("#currentTime").text(currentTime);
				
			},30);
			
			$("#play").attr("src", "svg/play.svg");
		} else {
			video.pause();
			clearInterval(timer);
			$("#play").attr("src", "svg/pause.svg");
		}
	});
	//音量
	$("#volume").click(function() {
		if (video.volume == 0) {
			video.volume = volume;
			$("#volume").attr("src", "svg/volume.svg");
		} else {
			volume = video.volume;
			video.volume = 0;
			$("#volume").attr("src", "svg/mute.svg");
		}
		document.getElementById("volumn-range").value=video.volume;
	});
	
	$("#volume-div").mouseover(function() {
		$("#volumn-range").show();
	});
	$("#volume-div").mouseout(function() {
		$("#volumn-range").hide();
	});
	//音量条
	$("#volumn-range").change(function() {
		volume = document.getElementById("volumn-range").value;
		video.volume=volume;
		if (video.volume == 0) {
			$("#volume").attr("src", "svg/mute.svg");
		} else {
			$("#volume").attr("src", "svg/volume.svg");
		}
	});
});
