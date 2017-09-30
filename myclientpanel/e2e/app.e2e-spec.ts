import { MyclientpanelPage } from './app.po';

describe('myclientpanel App', () => {
  let page: MyclientpanelPage;

  beforeEach(() => {
    page = new MyclientpanelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
