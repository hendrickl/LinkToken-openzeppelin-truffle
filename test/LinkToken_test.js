/* eslint-disable no-unused-expressions */
const { contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

const LinkToken = contract.fromArtifact('LinkToken');

describe('LinkToken', async function () {
  const NAME = 'LinkToken';
  const SYMBOL = 'LNK';

  beforeEach(async function () {
    this.link = await LinkToken.new();
  });

  it('has name', async function () {
    expect(await this.link.name()).to.equal(NAME);
  });

  it('has symbol', async function () {
    expect(await this.link.symbol()).to.equal(SYMBOL);
  });
});
