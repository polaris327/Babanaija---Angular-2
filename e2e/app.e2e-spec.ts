import { BabanaijaPage } from './app.po';

describe('babanaija App', function() {
  let page: BabanaijaPage;

  beforeEach(() => {
    page = new BabanaijaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
