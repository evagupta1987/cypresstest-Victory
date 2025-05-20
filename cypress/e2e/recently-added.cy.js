describe('Play video from Recently Added section', () => {
  it('opens first Recently Added item and verifies video playback', () => {
    // Navigate to the login page and perform login
    cy.visit('/login');
    cy.get('input[name="email"]').type('eva.gupta1987@gmail.com',{ delay: 20 });
          cy.wait(500);

    cy.get('input[name="password"]').type('password',{ delay: 10 });
          cy.wait(500);

    cy.get('button[type="submit"]').click();

    // Ensure redirection to the hub page
    cy.url().should('include', '/hub');

    // Handle potential OneSignal popup
    cy.get('body').then(($body) => {
      if ($body.find('#onesignal-slidedown-cancel-button').length > 0) {
        cy.get('#onesignal-slidedown-cancel-button').click();
      }
    });

              cy.wait(1000);

     // Scroll to the bottom of the page to bring 'RECENTLY ADDED' into view
      cy.scrollTo('bottom', { duration: 500, easing: 'linear' });

      // Wait briefly to ensure scrolling has completed
      cy.wait(1000);


    // Scroll to and click the first item in the Recently Added section
cy.contains('h2', 'RECENTLY ADDED', { matchCase: false }).should('be.visible').scrollIntoView();
// Locate the carousel container following the heading
cy.contains('RECENTLY ADDED')
  .parent()
  .next()
  .find('.carousel__container')
  .should('be.visible')
  .within(() => {
    // Click the first item in the carousel
    cy.get('.tile').first().click();
      });

    // Confirm the video element is present and visible
    cy.get('video')
      .should('exist')
      .and('be.visible')
      .then(($video) => {
        const video = $video[0];

        // Ensure the video is initially paused
        expect(video.paused).to.be.true;

        // Play the video
        video.play();

        // Use Cypress retry-ability to wait until the video is playing
        cy.wrap(video).should('have.prop', 'paused', false);
      });
  });
});
