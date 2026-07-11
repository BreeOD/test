const utils = require("./utils");

describe("1. Exact Equality", () => {

    // toBe
    test("PASS - sum(2,2) should be 4", () => {
        expect(utils.sum(2,2)).toBe(4);
    });

    test("FAIL - sum(2,2) should be 5", () => {
        expect(utils.sum(2,2)).toBe(5);
    });

    // toEqual
    beforeAll(() => {
        jest.useFakeTimers();
        jest.setSystemTime(new Date("2026-01-01"));
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test("PASS - createUser()", () => {
        expect(utils.createUser("Alice",30)).toEqual({
            name: "Alice",
            age: 30,
            createdAt: new Date("2026-01-01")
        });
    });

    test("FAIL - createUser()", () => {
        expect(utils.createUser("Alice",30)).toEqual({
            name: "Bob",
            age: 30,
            createdAt: new Date("2026-01-01")
        });
    });

    // toStrictEqual
    test("PASS - strict equality", () => {
        expect({a:1}).toStrictEqual({a:1});
    });

    test("FAIL - strict equality", () => {
        expect({a:1,b:undefined}).toStrictEqual({a:1});
    });

});

describe("2. Negation (.not)", () => {

    test("PASS", () => {
        expect(utils.sum(1,1)).not.toBe(3);
    });

    test("FAIL", () => {
        expect(utils.sum(1,1)).not.toBe(2);
    });

    test("PASS - not.toContain", () => {
        expect([1,2,3]).not.toContain(5);
    });

    test("FAIL - not.toContain", () => {
        expect([1,2,3]).not.toContain(2);
    });

});

describe("3. Truthiness", () => {

    test("PASS - defined", () => {
        expect(utils.sum).toBeDefined();
    });

    test("FAIL - defined", () => {
        expect(undefined).toBeDefined();
    });

    test("PASS - truthy", () => {
        expect(utils.findInArray([1,2,3],2)).toBeTruthy();
    });

    test("FAIL - truthy", () => {
        expect(utils.findInArray([1,2,3],4)).toBeTruthy();
    });

    test("PASS - falsy", () => {
        expect(utils.findInArray([1,2,3],4)).toBeFalsy();
    });

    test("FAIL - falsy", () => {
        expect(utils.findInArray([1,2,3],2)).toBeFalsy();
    });

});

describe("4. Number Matchers", () => {

    test("PASS - Greater Than", () => {
        expect(utils.sum(2,3)).toBeGreaterThan(4);
    });

    test("FAIL - Greater Than", () => {
        expect(utils.sum(2,3)).toBeGreaterThan(10);
    });

    test("PASS - Greater Than or Equal", () => {
        expect(utils.sum(2,3)).toBeGreaterThanOrEqual(5);
    });

    test("FAIL - Greater Than or Equal", () => {
        expect(utils.sum(2,3)).toBeGreaterThanOrEqual(6);
    });

    test("PASS - Less Than", () => {
        expect(utils.sum(2,2)).toBeLessThan(5);
    });

    test("FAIL - Less Than", () => {
        expect(utils.sum(2,2)).toBeLessThan(4);
    });

    test("PASS - Less Than or Equal", () => {
        expect(utils.sum(2,2)).toBeLessThanOrEqual(4);
    });

    test("FAIL - Less Than or Equal", () => {
        expect(utils.sum(2,2)).toBeLessThanOrEqual(3);
    });

    test("PASS - Close To", () => {
        expect(utils.approximateDivision(0.3,0.1)).toBeCloseTo(3);
    });

    test("FAIL - Close To", () => {
        expect(utils.approximateDivision(0.3,0.1)).toBeCloseTo(4);
    });

});

describe("5. String Matchers", () => {

    test("PASS - toMatch", () => {
        expect(JSON.stringify(utils.createUser("Alice",20))).toMatch(/Alice/);
    });

    test("FAIL - toMatch", () => {
        expect(JSON.stringify(utils.createUser("Alice",20))).toMatch(/Bob/);
    });

    test("PASS - not.toMatch", () => {
        expect(JSON.stringify(utils.createUser("Alice",20))).not.toMatch(/Bob/);
    });

    test("FAIL - not.toMatch", () => {
        expect(JSON.stringify(utils.createUser("Alice",20))).not.toMatch(/Alice/);
    });

});

describe("6. Arrays / Iterables", () => {

    const users = [
        {name:"Alice", age:20},
        {name:"Bob", age:15},
        {name:"John", age:25}
    ];

    test("PASS - filterAdults()", () => {
        expect(utils.filterAdults(users)).toContainEqual({name:"Alice", age:20});
    });

    test("FAIL - filterAdults()", () => {
        expect(utils.filterAdults(users)).toContainEqual({name:"Bob", age:15});
    });

    test("PASS - Set", () => {
        expect(new Set([1,2,3])).toContain(2);
    });

    test("FAIL - not.toContain", () => {
        expect([1,2,3]).not.toContain(2);
    });

});

describe("7. Exceptions", () => {

    test("PASS - parseJSON throws", () => {
        expect(() => utils.parseJSON("")).toThrow();
    });

    test("FAIL - parseJSON throws", () => {
        expect(() => utils.parseJSON('{"name":"Alice"}')).toThrow();
    });

});