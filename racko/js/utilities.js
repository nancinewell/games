﻿function createElement(tag, text, className, name) {
	const genElement = document.createElement(tag);
	if (text) { genElement.textContent = text; }
	if (className) { genElement.classList.add(className); }
	if (name) { genElement.setAttribute("name", name); }
	return genElement;
}


//fetch the data from the numbers API and set to the global variable "numbers"
//retrieve with numbers[i]
let numbers = { "1": "1 is the number of moons orbiting Earth.", "2": "2 is the number of polynucleotide strands in a DNA double helix.", "3": "3 is number of performers in a trio.", "4": "4 is the number of strings on a violin, a viola, a cello, double bass, a cuatro and a ukulele, and the number of string pairs on a mandolin.", "5": "5 is the number of basic tastes (sweet, salty, sour, bitter, and umami).", "6": "6 is the jersey number worn by the starting stand-off half/five-eighth in most rugby league competitions.", "7": "7 is the number of periods, or horizontal rows of elements, in the periodic table.", "8": "8 is the number of bits in a byte.", "9": "9 is the number of circles of Hell in Dante's Divine Comedy.", "10": "10 is the number of kingdoms in Five Dynasties and Ten Kingdoms Period.", "11": "11 is the possible age of the youngest elected pope, Benedict IX.", "12": "12 is the pairs of ribs normally in the human body.", "13": "13 is the number of loaves in a \"baker's dozen\".", "14": "14 is the number of times that a typical dairy cow lies down and stands up a day on average.", "15": "15 is the number of minutes carbon monoxide can kill a person in.", "16": "16 is the number of personality types in the Myers-Briggs classification system.", "17": "17 is the number of flames emanating from the grenade cap-badge of the Grenadier Guards.", "18": "18 is the number of levels in hell in the Chinese mythos.", "19": "19 is the final year a person is a teenager.", "20": "20 is the number of ounces in Venti size coffees at Starbucks coffee shops.", "21": "21 is the number of demands which were sent to the Chinese government by the Japanese government of Okuma Shigenobu in 1915.", "22": "22 is the number of stars in the Paramount Films logo.", "23": "23 is the number of enigma that plays a prominent role in the plot of The Illuminatus! Trilogy by Robert Shea and Robert Anton Wilson.", "24": "24 is the maximum number of Knight Companions in the Order of the Garter.", "25": "25 is the minimum age of candidates for election to the United States House of Representatives.", "26": "26 is the number of letters in the English and Interlingua alphabets.", "27": "27 is the total number of letters in the Spanish alphabet (5 vowels and 22 consonants).", "28": "28 is the number worn by the Clemson Tigers' record breaking running back C.J.", "29": "29 is the number of cups of milk needed to make one pound of butter.", "30": "30 is the minimum age for United States senators.", "31": "31 is the number of days in the months January, March, May, July, August, October and December.", "32": "32 is the number of rays in the Japanese Rising Sun on the cover of Incubus' 2006 album Light Grenades.", "33": "33 is the number of workers trapped, and also the number of survivors of the 2010 Copiapó mining accident.", "34": "34 is the lucky number of Victor Pelevin's protagonist Stepan Mikhailov in the novel Numbers.", "35": "35 is the minimum age of candidates for election to the United States Presidency.", "36": "36 is the number of vehicles that run in each race of NASCAR's Camping World Truck Series.", "37": "37 is the number of slots in European Roulette (numbered 0 through 36, the 00 is not used in European roulette as it is in American roulette).", "38": "38 is the number of slots on an American Roulette wheel (0, 00, and 1 through 36; European roulette does not use the 00 slot and has only 37 slots).", "39": "39 is the number of signers to the United States Constitution, out of 55 members of the Philadelphia Convention delegates.", "40": "40 is the number of positions on a number of radio countdown programs, most notably American Top 40 and American Country Countdown.", "41": "41 is the reported number of survivors aboard the USS Neptune, in the 1978 disaster film Gray Lady Down, upon its initial depth position of 1,450 feet.", "42": "42 is the number of US gallons in a barrel of oil.", "43": "43 is the maximum number of cars participating in a NASCAR race in the Cup Series or Nationwide Series.", "44": "44 is the number of candles in a box of Hanukkah candles.", "45": "45 is the sapphire wedding anniversary in years of marriage.", "46": "46 is the number of human chromosomes.", "47": "47 is the total numbers of balloons that a player can collect in Rareware's Nintendo 64 game Diddy Kong Racing.", "48": "48 is the number of Ptolemaic constellations.", "49": "49 is the number of days and night Siddhartha Gautama spent meditating as a holy man.", "50": "50 is the speed limit, in kilometers per hour, of Australian roads with unspecified limits.", "51": "51 is the atomic number of antimony.", "52": "52 is the number of white keys (notes in the C major scale).", "53": "53 is the port number of UDP and TCP for the Domain Name System protocol.", "54": "54 is the number of countries in Africa.", "55": "55 is the number of Delegates who attended the United States Constitutional Convention in 1787.", "56": "56 is the number of consecutive games in baseball in which New York Yankees' Joe DiMaggio had a base hit in 1941, still a record.", "57": "57 is the number of people at 20th Century Fox Studios died amid rioting and suicide.", "58": "58 is the minimum wind speed (mph) needed to issue a Severe Thunderstorm Warning.", "59": "59 is the number of days, approximately in two lunar months.", "60": "60 is a common speed limit (mph) for freeways in many US states." }



function isPrime(number) {
	let countDivisors = 0;
	let isPrimeNum = false;
	for (let i = 2; i <= number; i++) {
		if (number % i == 0) {
			countDivisors++;
			if (countDivisors > 1) {
				return isPrimeNum;
			}
		}
	}
	isPrimeNum = true;
	return isPrimeNum;
}



export { createElement, numbers, isPrime }

