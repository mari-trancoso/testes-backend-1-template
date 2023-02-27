import {pratica3} from "../src/pratica3"

describe("pratica3", () => {
    test("deve receber dois números e retornar um objeto com a soma e a multiplicação, nas propriedades soma e mult.", () => {
        const result = pratica3(3, 9)
        expect(result.soma).toBe(12)
        expect(result.mult).toBe(27)
    })
})