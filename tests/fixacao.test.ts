import {fixacao} from "../src/fixacao"


describe("fixacao", () => {
    test("deve retornar true quando o array for igual as letras da string passada", () => {
        const result = fixacao("bananinha")
        expect(result).toEqual(["b", "a", "n", "a", "n", "i","n","h","a"])
    })
   
})