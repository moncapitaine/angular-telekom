import { getGreeting } from '../support/app.po';

describe('telekom-todos-web', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    // cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Home der Telekom Todo App');
  });

  it('should display the todo item list', () => {
    cy.get('ul').children().should('have.length', 2);
  });
});
