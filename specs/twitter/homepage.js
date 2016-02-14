describe('twitter homepage', () => {
  it('should load', () => {
    browser.url('https://www.twitter.com');
    var headingValue = browser.getText('h2.StreamsHero-header');
    headingValue.value.should.be.equal('See what’s happening right now.');
  });
});
