export const getGitHubUrl = (from: string) => {
  const rootURl = 'https://github.com/login/oauth/authorize';

  const options = {
    client_id: import.meta.env.VITE_GITHUB_CLIENT_ID as string,
    redirect_uri: import.meta.env.VITE_GITHUB_CLIENT_REDIRECT as string,
    scope: 'user:email',
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootURl}?${qs.toString()}`;
};

export const getGoogleUrl = (from: string) => {
  const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`;

  const options = {
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID as string,
    redirect_uri: import.meta.env.VITE_GOOGLE_CLIENT_REDIRECT as string,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
    state: from,
  };

  const qs = new URLSearchParams(options);

  return `${rootUrl}?${qs.toString()}`;
};
