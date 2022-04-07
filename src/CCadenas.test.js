import sumarCadena from './CCadenas.js'

describe("Suma de la cadena", () => {
  it("vacio", () => {
    expect(sumarCadena("")).toEqual(0);
  });
  it("1", () => {
      expect(sumarCadena("1")).toEqual(1);
  });
  it("1,2", () => {
    expect(sumarCadena("1,2")).toEqual(3);
  });
  it("1,2,3", () => {
    expect(sumarCadena("1,2,3")).toEqual(6);
  });
  it("1-2", () => {
    expect(sumarCadena("1-2")).toEqual(3);
  });
  it("1,2-3", () => {
    expect(sumarCadena("1,2-3")).toEqual(6);
  });
  it("[/]1/2/3", () => {
    expect(sumarCadena("[/]1/2/3")).toEqual(6);
  });
  it("[/][<]1/2<3", () => {
    expect(sumarCadena("[/][<]1/2<3")).toEqual(6);
  });
  it("[/][<<<]1/2<<<3-4", () => {
    expect(sumarCadena("[/][<<<]1/2<<<3-4")).toEqual(10);
  });
  it("[/][<<<]1/2<<<3-4<<<1001", () => {
    expect(sumarCadena("[/][<<<]1/2<<<3-4<<<1001")).toEqual(10);
  });
  it("[/][<<<]1/2<<<3-4<<<10", () => {
    expect(sumarCadena("[/][<<<]1/2<<<3-4<<<10")).toEqual(20);
  });
});