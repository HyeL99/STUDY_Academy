$(document).ready(
	
/*


//-------------------------stage_1--------------------------------
	function(){
	//ready
		var n=0; //variable declaration
		var percentage="%";
		//var repeat=$("ul").animate({left:-100*n+percentage},1000);

		setInterval(
			function(){
				if (n<3) {
					n++;
					$("ul").animate({"left":-100*n+percentage},3000);
					console.log(n);
					}
					else{
						n=0;
					}
			},5000
		);
	//****stage1 sucessful!!!!****
	//setInterval over
	//ready over
*/

//-------------------------stage_2--------------------------------
	function(){
	//ready
		var n=1; //variable declaration
		var percentage="%";
		var m=1;
		var s=1;

		$("ul").animate({"left":-100*n+percentage},3000);
		//var repeat=$("ul").animate({left:-100*n+percentage},1000);
		var timer = setInterval(
			function(){
				if(n<3){
					n+=m;
					console.log(n);
					$("ul").animate({"left":-100*n+percentage},3000/s);
					}
					else{
						n=0;
					}
			},5000
		);

var err=0;
var err2=0;
$("button").click(
			function(){err=$(this).attr("data-n");
				 err2=parseInt(err); //문자열을 정수로 변환
				 n=err2;
				 m=0;
				 s=3;
				 console.log(m+n);

			}
		);

$("button").mouseleave(
	function(){
		m=1;
		s=1;
	}
	);





//.click section

	//****stage1 sucessful!!!!****
	//setInterval over
	//ready over


	}

);
