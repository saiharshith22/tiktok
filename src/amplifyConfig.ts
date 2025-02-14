const awsconfig = {
  aws_project_region: "eu-north-1", // ✅ Your AWS region
  aws_cognito_identity_pool_id:
    "eu-north-1:27ece60b-49b7-4e48-8595-2af5cde38f46",
  aws_cognito_region: "eu-north-1",
  aws_user_pools_id: "eu-north-1_1Y4Hx9gds", // ✅ Cognito User Pool ID
  aws_user_pools_web_client_id: "2qbe4msu2fj75d5m03jvjll6m6", // ✅ Cognito App Client ID
  oauth: {
    domain: "eu-north-11y4hx9gds.auth.eu-north-1.amazoncognito.com",
    scope: ["openid", "profile", "email"],
    redirectSignIn: "http://localhost:3000/",
    redirectSignOut: "http://localhost:3000/",
    responseType: "code", // ✅ Use "code" for PKCE
    googleClientId:
      "433108609704-db81ls0o6m7ittfd5gj0cvald67uktku.apps.googleusercontent.com", // ✅ Google Client ID
  },
};

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

// const awsconfig = {
//   aws_project_region: "us-east-1",
//   aws_cognito_identity_pool_id:
//     "us-east-1:6b8d24d4-a0c0-4f5d-9be3-d46102e8f26a",
//   aws_cognito_region: "us-east-1",
//   aws_user_pools_id: "us-east-1_tQrc0Zqju",
//   aws_user_pools_web_client_id: "62nj24g9bpg0nere7g35bf5blr",
//   oauth: {
//     domain: "us-east-1tqrc0zqju.auth.us-east-1.amazoncognito.com",
//     scope: ["openid", "profile", "email"],
//     redirectSignIn: "http://localhost:3000/",
//     redirectSignOut: "http://localhost:3000/",
//     responseType: "code", // Use "code" for PKCE
//     googleClientId:
//       "308921932289-20n7laj11t16tjomhk655m6fki9um323.apps.googleusercontent.com",
//   },
// };

export default awsconfig;
