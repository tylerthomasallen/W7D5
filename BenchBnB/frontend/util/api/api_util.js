export const fetchSignUp = (user) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/user',
    data: {
      user
    }
  });
};

export const fetchLogoutUser = () => {
  return $.ajax ({
    method: 'DELETE',
    url: 'api/session'
  });
};

export const fetchLoginUser = (user) => {
  return $.ajax ({
    method: 'POST',
    url: 'api/session',
    data: {
      user
    }
  });
};

export const fetchBenches = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/benches'
  });
};

export const fetchCreatedBench = (bench) => {
  return $.ajax ({
    method: 'POST',
    url: 'api/benches',
    data: {
      bench
    }
  });
};
