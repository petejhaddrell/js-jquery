var gridSize = 16;

$(document).ready (function()
{
	buildgrid(gridSize);
});

function cleargrid()
{
	var userSize = prompt ("Pleae enter grid size")
	$('.block').removeClass('highlight');
	removegrid();
	buildgrid(userSize);
}	

function removegrid()
{
	$("#container").empty();
}

function buildgrid (size)
{
	for (var x = 0; x < size; x++)
	{
		for (var y = 0; y < size; y++)
		{
			var block = $('<div class="block"</div>');
			block.appendTo('#container');
		}
	}

	//14 relates to the size of each box
	var contSize = 14 * size;

	$('#container').css ({'width' : contSize, 'height' : contSize});

	$('.block').on ("mouseenter", function()
	{
		$(this).addClass('highlight');
	});

	gridSize = size;
}