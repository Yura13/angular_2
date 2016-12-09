import { UserPage } from './app.po';

describe('user App', function() {
  let page: UserPage;

  beforeEach(() => {
    page = new UserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
