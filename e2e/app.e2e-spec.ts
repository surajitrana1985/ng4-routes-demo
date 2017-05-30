import { Ng4RoutesDemoPage } from './app.po';

describe('ng4-routes-demo App', () => {
  let page: Ng4RoutesDemoPage;

  beforeEach(() => {
    page = new Ng4RoutesDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
