var kittens = ["Milo", "Otis", "Garfield"] 
function destructivelyAppendKitten(kitten,kittens) {
  return [kitten,...kittens]
}