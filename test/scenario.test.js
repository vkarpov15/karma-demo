describe('sample.html', function() {
  it('displays 42', function() {
    browser().navigateTo('/sample.html');
    expect(element('#content').text()).toBe('42');
  });
});