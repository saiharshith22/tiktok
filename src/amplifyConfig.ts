// const awsconfig = {
//   aws_project_region: "eu-north-1", // ✅ Your AWS region
//   aws_cognito_identity_pool_id:
//     "eu-north-1:27ece60b-49b7-4e48-8595-2af5cde38f46",
//   aws_cognito_region: "eu-north-1",
//   aws_user_pools_id: "eu-north-1_1Y4Hx9gds", // ✅ Cognito User Pool ID
//   aws_user_pools_web_client_id: "2qbe4msu2fj75d5m03jvjll6m6", // ✅ Cognito App Client ID
//   oauth: {
//     domain: "eu-north-11y4hx9gds.auth.eu-north-1.amazoncognito.com",
//     scope: ["openid", "profile", "email"],
//     redirectSignIn: "http://localhost:3000/",
//     redirectSignOut: "http://localhost:3000/",
//     responseType: "code", // ✅ Use "code" for PKCE
//     googleClientId:
//       "433108609704-db81ls0o6m7ittfd5gj0cvald67uktku.apps.googleusercontent.com", // ✅ Google Client ID
//   },
// };

// export default awsconfig;

// const awsconfig = {
//   aws_project_region: "us-east-1",
//   aws_cognito_identity_pool_id:
//     "us-east-1:27ece60b-49b7-4e48-8595-2af5cde38f46",
//   aws_cognito_region: "us-east-1",
//   aws_user_pools_id: "us-east-1_krYU9Hmjq",
//   aws_user_pools_web_client_id: "7j3sgsnpi1ql4884f4nrrht418",
//   oauth: {
//     domain: "us-east-1kryu9hmjq.auth.us-east-1.amazoncognito.com",
//     scope: ["openid", "profile", "email"],
//     redirectSignIn: "http://localhost:3000/",
//     redirectSignOut: "http://localhost:3000/",
//     responseType: "code", // Use "code" for PKCE
//     googleClientId:
//       "433108609704-db81ls0o6m7ittfd5gj0cvald67uktku.apps.googleusercontent.com",
//   },
// };

const awsconfig = {
  aws_project_region: import.meta.env.VITE_AWS_PROJECT_REGION,
  aws_cognito_identity_pool_id: import.meta.env
    .VITE_AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: import.meta.env.VITE_AWS_COGNITO_REGION,
  aws_user_pools_id: import.meta.env.VITE_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id: import.meta.env
    .VITE_AWS_USER_POOLS_WEB_CLIENT_ID,
  oauth: {
    domain: import.meta.env.VITE_OAUTH_DOMAIN,
    scope: import.meta.env.VITE_OAUTH_SCOPE.split(","),
    redirectSignIn: import.meta.env.VITE_OAUTH_REDIRECT_SIGNIN,
    redirectSignOut: import.meta.env.VITE_OAUTH_REDIRECT_SIGNOUT,
    responseType: import.meta.env.VITE_OAUTH_RESPONSE_TYPE,
    googleClientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  },
};

export default awsconfig;
