describe('twitter homepage', () => {
  it('should load', () => {
    browser.url('https://www.twitter.com');
    // browser.waitForExist('h2.StreamsHero-header');

    var headingValue = browser.getText('h2.StreamsHero-header');
    headingValue.should.be.equal('See what’s happening right now.');
  });
});
