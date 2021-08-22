const registerServiceWorker = require("./registerServiceWorker")
// @ponicode
describe("registerServiceWorker.default", () => {
    test("0", () => {
        let callFunction = () => {
            registerServiceWorker.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
