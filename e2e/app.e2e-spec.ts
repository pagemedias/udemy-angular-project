import { UdemyAngularProjectPage } from './app.po';

describe('udemy-angular-project App', () => {
  let page: UdemyAngularProjectPage;

  beforeEach(() => {
    page = new UdemyAngularProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
