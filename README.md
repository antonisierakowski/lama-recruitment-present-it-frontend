## present-it
This repo hosts frontend app for `presentations` web app. [For the backend part, visit this link.](https://github.com/antonisierakowski/presentations-backend)  

##### Prerequisites to run:
* `node` or `nvm`
* `yarn`
* running backend (see link above)

## Available Scripts

Run `cp .env.dist .env` to copy default environment variables.  
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />

## Usage

Run the backend server and start the app. You can upload your presentation - it can be either `.pdf` or `.pptx` file. Once you upload the file you will be redirected to your presentation page, where you can share the link with other people. Only the presentation initiator will be able to change the slides or end the presentation, and all other viewers will see these changes live.
