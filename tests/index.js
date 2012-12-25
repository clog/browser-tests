(function(global)
{
	test("Existence of hasOwnProperty", function()
	{
		var actual

		actual = global.hasOwnProperty === {}.hasOwnProperty
		// ie7 ie8 failed
		equal(actual, true, "Global object has hasOwnProperty.")
	})

	test("Global variable deletion", function()
	{
		var actual

		global.variable = 0
		try
		{
			delete global.variable
			actual = true
		}
		catch (e)
		{
			actual = false
		}
		// ie7 ie8 failed
		equal(actual, true, "No error throw on deletion.")

		global.variable = 0
		try
		{
			delete global.variable
		}
		catch (e)
		{
		}
		// ie7 ie8 failed
		actual = {}.hasOwnProperty.call(global, "variable")
		equal(actual, false, "Global variable is deleted.")
	})
})(this);
