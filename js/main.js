(function ($) {

	// ~~~~~~~~~~~~~~~~~~~~~~~~ Assign Slots ~~~~~~~~~~~~~~~~~~~~~~~~~//

	var slots = [
					["mon10", "mon11", "mon12", "mon1"],
					["tue10", "tue11", "tue12", "tue1"],
					["wed10", "wed11", "wed12", "wed1"],
					["thu10", "thu11", "thu12", "thu1"],
					["fri10", "fri11", "fri12", "fri1"]];

	// list of days, then time slots per day, then people per time slot

	var json = [[["Sean Lee", "Stephanie Chen", "Eliot Hsu", "Megan Wang"], 
	["Taylor Wang", "Jacqueline Zhang", "Samantha Sujo", "Michael Hsiu"], 
	["Hermes Ip", "Leona Chen", "Julian Tedja", "Ravi Siripuram"], 
	["Emeri Zhang", "Adam Liu", "Lily Zheng", "Shaylene Liao"]], 
	[["Meejin Choi", "Bianca Al-Shamari", "Alex Park", "Annie Cui"], 
	["Linda Li", "Lorenzo dela Cruz", "Hyeonjo Jeong", "Anny Song"], 
	["Corey Gibbel", "Rafay Warsi", "Caroline Chen"], 
	["Sarah Shin", "Arina Yu", "Ozair Khan", "Jessica Dang"]], 
	[["Chloe Lin", "Jeffrey Li", "Nayada (Mint) Katevetin"], 
	["Nancy Chen", "William Kim", "Kan Liu"], 
	["Samantha Fang", "Kristina Lee"], 
	["Kira Guo", "Anastasia Vela", "Troy Lee", "Max Wang"]], 
	[["Bob Feng", "Anthony Chen"], 
	["Alexander Park", "Arnold Chan", "Claire Lee", "Austin Kim"], 
	["Carrington Park", "Elizabeth Pegg", "Yichu Chen", "Shruti Maheshwari"], 
	["Sabrina Ni", "Eric Sung", "Rick Surya", "Rena Song"]], 
	[["Tae Kim", "Kai Lun Chen"], ["Nicholas Paul", "Mi (Jackie) Hu"], 
	["Yusuf Yamani", "Janet Xu", "Nick Palmer"], 
	["Emily Jin", "Timothy Huang", "Alan Dai"]]];


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