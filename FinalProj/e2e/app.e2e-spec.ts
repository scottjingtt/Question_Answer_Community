import { FinalProjPage } from './app.po';

describe('final-proj App', function() {
  let page: FinalProjPage;

  beforeEach(() => {
    page = new FinalProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
