(function ($) {

	// ~~~~~~~~~~~~~~~~~~~~~~~~ Assign Slots ~~~~~~~~~~~~~~~~~~~~~~~~~//

	var slots = [
					["mon10", "mon11", "mon12", "mon1"],
					["tue10", "tue11", "tue12", "tue1"],
					["wed10", "wed11", "wed12", "wed1"],
					["thu10", "thu11", "thu12", "thu1"],
					["fri10", "fri11", "fri12", "fri1"]];

	// list of days, then time slots per day, then people per time slot

	var json = [[["Taylor Wang", "Megan Wang", "Arina Yu", "Annie Cui"], ["Nicholas Paul", "Eric Sung", "Bianca Al-Shamari"], ["Bob Feng", "Stephanie Chen", "Shaylene Liao"], ["Tae Kim", "Kristina Lee", "Rick Surya", "Hyeonjo Jeong"]], [["Eliot Hsu", "Anthony Chen", "Nick Palmer"], ["Corey Gibbel", "Kira Guo", "Claire Lee", "Lorenzo dela Cruz"], ["Hermes Ip", "Anny Song", "Janet Xu"], ["Sarah Shin", "Caroline Chen", "Jacqueline Zhang", "Julian Tedja"]], [["Chloe Lin", "Mint Katevetin", "William Kim"], ["Nancy Chen", "Alex Park", "Lily Zheng", "Jackie Hu"], ["Samantha Fang", "Ozair Khan", "Timothy Huang", "Ravi Siripuram"], ["Emeri Zhang", "Anastasia Vela", "Adam Liu"]], [["Yusuf Yamani", "Meejin Choi", "Shruti Maheshwari"], ["Austin Kim", "Leona Chen", "Linda Li"], ["Alex Park AP", "Troy Lee"], ["Rena Song", "Alan Dai", "Kai Chen"]], [["Emily Jin", "Jessica Dang"], ["Carrington Park", "Kan Liu"], ["Arnold Chan", "Samantha Sujo", "Jeffrey Li", "Rafay Warsi"], ["Sabrina Ni", "Elizabeth Pegg", "Michael Hsiu", "Max Wang"]]];


	$.each(json, function(i) { // loops through each day
		$.each(this, function(j) { // loops through each time slot in each day
			var slot = slots[i][j];
			var slotclass = "ul" + slot;
			var slotobject = $("td." + slot);
			var temp = $("<ul/>").addClass(slotclass).appendTo(slotobject);
			var ul = $("ul." + slotclass);
			$.each(this, function() { // loops through each person in each time slot
				var li = $("<li/>").appendTo(ul);
	    		var a = $("<a/>").text(this).appendTo(li);
			});
		});
	});

	var hrefs = [$('.input_button').attr('href'), 'https://goo.gl/forms/elEmOKavGFXGk2QF3'];
	$(window).on('resize', function() {
		$('.input_button').attr('href', function() {
			return hrefs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	var hrefxs = [$('.swap_button').attr('href'), 'https://goo.gl/forms/nmjSGBXmHgyE65Rm1'];
	$(window).on('resize', function() {
		$('.swap_button').attr('href', function() {
			return hrefxs[$(window).width() > 737 ? 0 : 1];
		});
	}).trigger('resize');


	// ~~~~~~~~~~~~~~~~~~~~~~~~~ Hover Animation ~~~~~~~~~~~~~~~~~~~~~~~~//
	"use strict";
	$('.column100').on('mouseover',function(){
		// this grabs the table to find the appropriate style to use
		var width = $(window).width();
		if (width > 760) {
			var table1 = $(this).parent().parent().parent();
			var table2 = $(this).parent().parent();
			var verTable = $(table1).data('vertable')+"";
			var column = $(this).data('column') + ""; 

			$(table2).find("."+column).addClass('hov-column-'+ verTable);
			$(table1).find(".row100.head ."+column).addClass('hov-column-head-'+ verTable);
		}
	});

	$('.column100').on('mouseout',function(){
		var width = $(window).width();
		if (width > 760) {
			var table1 = $(this).parent().parent().parent();
			var table2 = $(this).parent().parent();
			var verTable = $(table1).data('vertable')+"";
			var column = $(this).data('column') + ""; 

			$(table2).find("."+column).removeClass('hov-column-'+ verTable);
			$(table1).find(".row100.head ."+column).removeClass('hov-column-head-'+ verTable);
		}
	});
    

})(jQuery);
