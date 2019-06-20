const enhancer = require('./enhancer.js')
// test away!
const stick = {
    name: 'stick',
    durability: 1,
    enhancement: 0,
}

describe('repair function', () => {
    it('returns a new item when passed existing item', () => {
        expect(enhancer.repair(stick)).not.toBe(stick)
    })
    it('returns item with the durability of 100', () => {
        const item = stick
        expect(enhancer.repair(item).durability).toBe(100)
    })
})

describe('success function', () => {
    it('returns a new item when passed existing item', () => {
        expect(enhancer.succeed(stick)).not.toBe(stick)
    })
    it('increases enhancement by 1', () => {
        const item = {...stick, enhancement: 1}
        expect(enhancer.succeed(item).enhancement).toBe(2)
    })
    it('doesnt enhance if already 20', () => {
        const item = {...stick, enhancement: 20}
        expect(enhancer.succeed(item).enhancement).toBe(20)
    })
})

describe('fail function', () => {
    it('returns a new item when passed existing item', () => {
        expect(enhancer.fail(stick)).not.toBe(stick)
    })
    it('if enhancement is less than 15, durability decreased by 5', () => {
        const item = {...stick, durability: 10}
        expect(enhancer.fail(item).durability).toBe(5)
    })
    it('if enhancement is 15 or more, durabilty is decreased by 10', () => {
        const item = {...stick, durability: 20}
        expect(enhancer.fail(item).durability).toBe(10)
    })
    it('if enhancement is greater than 16, enhancement level decreases by 1', () => {
        const item = {...stick, enhancement: 20}
        expect(enhancer.fail(item).enhancement).toBe(19)
    })
})

describe('get function', () => {
    it('if enhancement is 0, nothing changes', () => {
        const item = {...stick, enhancement: 0}
        expect(enhancer.get(item)).toBe(item)
    })
    it('if enhancement is greater than 0, name includes enhancement "[+7] name"', () => {
        const item = {...stick, name: 'stick', enhancement: 1}
        expect(enhancer.get(item).name).toBe('[+1] stick')
    })
})