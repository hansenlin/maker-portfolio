import Maker from '@makerdao/dai';

export const CDP_OPENED = 'CDP_OPENED';
export const openCdpAsync = formValues => async dispatch => {
  const maker = await Maker.create('browser', {});
  await maker.authenticate();
  const cdp = await maker.openCdp();

  await cdp.lockEth(formValues.amount);
  console.log(cdp);
  dispatch({
    type: CDP_OPENED,
    payload: {
      id: cdp.id,
      value: formValues.amount
    }
  });
};

export const CDP_SHUT = 'CDP_SHUT';
export const shutCdpAsync = cdp => async dispatch => {
  await cdp.shut();
  dispatch({
    type: CDP_SHUT,
    payload: cdp.id
  });
};

export const DAI_DRAWN = 'DAI_DRAWN';
export const drawDaiAsync = formValues => async dispatch => {
  const maker = await Maker.create('browser', {});
  await maker.authenticate();
  const cdp = await maker.getCdp(parseInt(formValues.cup));
  await cdp.drawDai(formValues.amoun);
  dispatch({
    type: DAI_DRAWN,
    payload: {
      id: cdp.id,
      value: formValues.amoun
    }
  });
};

export const DAI_WIPED = 'DAI_WIPED';
export const wipeDebtAsync = formValues => async dispatch => {
  const maker = await Maker.create('browser', {});
  await maker.authenticate();
  const cdp = await maker.getCdp(parseInt(formValues.id));
  await cdp.wipeDai(formValues.amount);
  dispatch({
    type: DAI_WIPED,
    payload: {
      id: cdp.id,
      value: formValues.amount
    }
  });
};

export const rebalanceAsync = (formValues, from, to) => async dispatch => {
  await dispatch(drawDaiAsync(formValues.amount, from));
  await dispatch(wipeDebtAsync(formValues.amount, to));
};
