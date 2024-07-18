import gleam/io

pub fn main() {
  let fahrenheit = {
    let degrees = 64
    degrees
  }

  let celsius = { fahrenheit - 32 } * 5 / 9
  io.debug(celsius)
}