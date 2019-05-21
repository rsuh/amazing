// const module.exports = function amazing(summonerName) {
// 	// Create a request variable and assign a new XMLHttpRequest object to it.
// 	var request = new XMLHttpRequest()

// 	// Open a new connection, using the GET request on the URL endpoint
// 	request.open('GET', 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName, true)
// 	request.setRequestHeader("api_key", )

// 	request.onload = function () {
// 		// Begin accessing JSON data here
// 		var data = JSON.parse(this.response)

// 		if (request.status >= 200 && request.status < 400) {
// 		  data.forEach(movie => {
// 		    console.log(movie.title)
// 		  })
// 		} else {
// 		  console.log('error')
// 		}
// 	}

// 	// Send request
// 	request.send()
// };

const module.exports = function amazing(string) {
	return string.toUpperCase()
}
