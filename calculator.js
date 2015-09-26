$(document).ready(function(){
	$(".number").click(function(){
		switch($(".now_is").val()){
			case '1':
				var old = $(".calc_window").val();
				var new_ar = old + $(this).val();
				$(".calc_window").val(new_ar);
				break;
			case '2':
				var old = $(".calc_window").val();
				var new_ar = old + $(this).val();
				$(".calc_window").val(new_ar);
				var sec_v = $(".second_elm").val();
				$(".second_elm").val(sec_v+$(this).val());
				break;
		}
	});
	$(".act_butt").click(function(){
		if(parseFloat($(".calc_window").val())!=0){
			var f_elem = parseFloat($(".calc_window").val()); 
			$(".first_elm").val(f_elem);
			$(".action_elm").val($(this).val());
			$(".now_is").val(2);
			var new_ar = f_elem + $(this).val();
			$(".calc_window").val(new_ar);
		}
	});
	$(".res_but").click(function(){
		var frst = parseFloat($(".first_elm").val());
		var second = parseFloat($(".second_elm").val());
		var action = $(".action_elm").val();
		var result = 0;
		switch(action){
			case '+':
				result = frst+second;
				break;
			case '-':
				result = frst-second;
				break;
			case '*':
				result = frst*second;
				break;
			case '/':
				if(second!=0){
					result = frst/second;
				}
				else{
					result = NULL;
				}
				break;
			case '%':
				result = frst*second/100;
				break;
		}
		$(".calc_window").val(result);
		$(".first_elm").val(result);
		$(".action_elm").val('');
		$(".second_elm").val('');
		$(".now_is").val(1);
	});
	$(".c_but").click(function(){
		$(".calc_window").val('');
		$(".first_elm").val('');
		$(".action_elm").val('');
		$(".second_elm").val('');
		$(".now_is").val(1);
	})
})
