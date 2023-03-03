import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter Tests", () => {
  let increaseBtn, decreaseBtn, count;

  beforeEach(() => { 
    console.log("her testten önce bir kere çalışacağım")
    render(<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease"); //sonra o butonu(increaseBtn i) tıklatıracağız
    count = screen.getByText("0"); //içinde 0 yazan elementi bul
  });
  beforeAll(()=>{
    console.log("Her testten önce bir kere(ilk başta)çalışacağım");
  })
  afterAll(()=>{
    console.log("En son bir kere çalışacağım");
  })
  afterEach(()=>{
    console.log("Her testten sonra bir kere çalışacağım")
  })

  test("increase btn", () => {
    userEvent.click(increaseBtn); //sonra o butonu(increaseBtn i) tıklatıracağız
    expect(count).toHaveTextContent("1"); //counte'un değeriniğn arttığına emin olmak istiyorum diyoruz
    //içerisindeki texte sahip olabilmeli(to have text content)
  }); //(it or test) should be a valid address

  test("decrease btn", () => {
    userEvent.click(decreaseBtn); //sonra o butonu(increaseBtn i) tıklatıracağız
    expect(count).toHaveTextContent("-1"); //counte'un değeriniğn arttığına emin olmak istiyorum diyoruz
    //içerisindeki texte sahip olabilmeli(to have text content)
  }); //(it or test) should be a valid address
});
