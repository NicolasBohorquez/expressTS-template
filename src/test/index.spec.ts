const SampleService=require('../services/SampleService').SampleService;
import { expect } from "chai";
import "mocha";

const SampleServiceInst = new SampleService();
describe("This", () => {
  describe("should", () => {
    it("always pass test", () => {
      expect(true).to.equal(true);
    });
  });
});

describe("Fib tests", () => {
  it("Test from 0 to n", () => {
    const valid:number[]=[1,1,2,3,5];
    let res = SampleServiceInst.fib(0,5);
    expect(res).to.eql(valid);
  });

  it("Test from m to n", () => {
    const valid:number[]=[2,3,5];
    let res = SampleServiceInst.fib(2,5);
    expect(res).to.eql(valid);
  });
});
