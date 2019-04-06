import { pepita } from "./index"

describe("pepita basica", () => {
    it("deberia volar y consumir energia", () => {
        pepita.volar(2)
        expect(pepita.energia).toEqual(24)

    })
})