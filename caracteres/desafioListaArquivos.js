const text = "Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3"

const regex = /\.mp3/g
console.log(text.match(regex))

console.log(text.match(/\w+\.mp3/g))