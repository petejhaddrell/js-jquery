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

	//need to put in size altering code for the container currently 16 * 14 = gridsize * (gridsize - 2)
	var contSize = 14 * size;
	alert (contSize);
	$('#container').css ({'width' : contSize, 'height' : contSize});

	$('.block').on ("mouseenter", function()
	{
		$(this).addClass('highlight');
	});

	gridSize = size;
}