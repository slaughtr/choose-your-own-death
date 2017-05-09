import { ChooseYourOwnDeathPage } from './app.po';

describe('choose-your-own-death App', () => {
  let page: ChooseYourOwnDeathPage;

  beforeEach(() => {
    page = new ChooseYourOwnDeathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
