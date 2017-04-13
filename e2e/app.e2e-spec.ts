import { ScotchAppPage } from './app.po';

describe('scotch-app App', function() {
  let page: ScotchAppPage;

  beforeEach(() => {
    page = new ScotchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
