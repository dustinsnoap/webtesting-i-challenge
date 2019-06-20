module.exports = {
  succeed,
  fail,
  repair,
  get,
}

function succeed(item) {
  item.enhancement = item.enhancement === 20
  ? 20
  : item.enhancement + 1
  return {...item}
}

function fail(item) {
  item.durability = item.durability >= 15
  ? item.durability - 10
  : item.durability - 5

  item.enhancement = item.enhancement > 16
  ? item.enhancement - 1
  : item.enhancement
  return { ...item }
}

function repair(item) {
  return { ...item, durability: 100}
}

function get(item) {
  return { ...item }
}
