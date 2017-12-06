import { GooglePlacesPage } from './app.po';

describe('google-places App', () => {
  let page: GooglePlacesPage;

  beforeEach(() => {
    page = new GooglePlacesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
