$(document).ready (function()
{
	for (var i = 0; i < 16; i++)
	{
		for (var x = 0; x < 16; x++)
		{
			var block = $('<div class="block"</div>');
			block.appendTo('#container');
		}
	}

	$(".block").on ("mouseenter", function()
	{
		$(this).addClass('highlight');
	});
});