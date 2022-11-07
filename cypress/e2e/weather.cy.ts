/// <reference types="cypress"/>
describe('weather', () => {
  it('show the correct weather for Tarija', () => {
    cy.fixture("weather.json").then((fixture) => {
      cy.intercept("**/forecast**", fixture)
      cy.visit('/')
  
      cy.get("select").should("have.value", "tarija")
      cy.get("h1").should("have.text", fixture.city.name)
      cy.get("ul > li:first-of-type").should("have.text", "7/11/2022 - Min: 24 °C, Max: 26°C")
    })
  })
})