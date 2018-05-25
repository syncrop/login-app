// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig:{
  	apiKey: "AIzaSyBJmPeeBRpvi0rd6Z5Lt6zxV_-Q_BXHvd4",
    authDomain: "login-app-syncrop.firebaseapp.com",
    databaseURL: "https://login-app-syncrop.firebaseio.com",
    projectId: "login-app-syncrop",
    storageBucket: "",
    messagingSenderId: "370212081133"
  }
};
