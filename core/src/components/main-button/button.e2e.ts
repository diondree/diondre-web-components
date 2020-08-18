import { newE2EPage } from '@stencil/core/testing';

describe('smtt-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<smtt-button></smtt-button>');

    const element = await page.find('smtt-button');
    expect(element).toHaveClass('hydrated');
  });
});
