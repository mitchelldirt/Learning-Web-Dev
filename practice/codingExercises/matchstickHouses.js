// 6 sticks to build a matchstick house
// Every time you increment one house you decrement one matchstick

function matchHouses(step) {
    return (step === 0 ? 0 : ((step * 6) - (step - 1)));
}