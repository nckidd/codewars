function combat(health, damage) {
    return health-damage > 0 ? health-damage : 0
}
let h = 10
let d = 11
console.log(`This player's health is ${h} and just got hit with ${d} damage. ${combat(h,d) > 0 ? 'They will live' : 'They won\'t make it.'}`)