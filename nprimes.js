#!/usr/bin/env node
var fs = require('fs');
function isPrime(n)
{
	var max = Math.sqrt(n);
	for ( var i = 2; i <= max;i++)
	{
		if( (n % i) == 0 )
		return false;
	}
	return true;
}
function listPrimes( number )
{
	var primes =[];
	for (var i = 2; number > 0;i++)
	{	
		if(isPrime(i))
		{
			primes.push(i);
			--number;
		}
	}
	return primes;
}
fs.writeFileSync("outfile.txt", listPrimes(100) );  
