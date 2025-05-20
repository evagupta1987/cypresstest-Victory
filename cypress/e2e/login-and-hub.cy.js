
describe('VictoryPlus Login and Hub Page Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Logs in and looks for broken links and missing assets', () => {
  cy.contains('a', 'Login').click();

    cy.get('input[name="email"]').type('eva.gupta1987@gmail.com',{ delay: 10 });
    cy.get('input[name="password"]').type('password',{ delay: 10 });
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/hub');
    cy.get('body').then(($body) => {
      if ($body.find('#onesignal-slidedown-cancel-button').length > 0) {
        cy.get('#onesignal-slidedown-cancel-button').should('be.visible').click();
      }
    });
    cy.get('[data-cy="sidebar"]').should('exist');
     cy.get('[data-cy="sidebar"] a').each(link => {
      const href = link.prop('href');
      if (href && href.startsWith('http')) {
        cy.request({
          url: href,
          failOnStatusCode: false
        }).then(response => {
          expect(response.status).to.be.lessThan(400);
        });
      }
    });
    });
  });

