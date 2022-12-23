# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

[comment]: <> (DropDownMenu:)

[comment]: <> (import { useState } from "react";)

[comment]: <> (import language_ua_img from "../../images/ukarineflag.png";)

[comment]: <> (import language_en_img from "../../images/usaflag.png";)

[comment]: <> (import language_ger_img from "../../images/germanyflag.png";)

[comment]: <> (import DropDownItem from "./DropDownItem/DropDownItem";)

[comment]: <> (import "./DropDownMenu.css";)

[comment]: <> (const DropDownMenu = &#40;&#41; => {)

[comment]: <> (const [open, setOpen] = useState&#40;false&#41;;)

[comment]: <> (return &#40;)

[comment]: <> (<div className="dropdown__menu">)

[comment]: <> (<DropDownItem setOpen={setOpen} icon={language_ua_img} />)

[comment]: <> ({open && <DropDownItem setOpen={setOpen} icon={language_en_img} />})

[comment]: <> (</div>)

[comment]: <> (&#41;;)

[comment]: <> (};)

[comment]: <> (export default DropDownMenu;)



[comment]: <> (DropDownItem:)

[comment]: <> (import "./DropDownItem.css";)

[comment]: <> (const DropDownItem = &#40;{ icon, setOpen }&#41; => {)

[comment]: <> (return &#40;)

[comment]: <> (<div className="dropdown__item">)

[comment]: <> (<button onClick={&#40;&#41; => setOpen&#40;true&#41;} className="language__btn">)

[comment]: <> (<img className="language__img" src={icon} alt="UA" />)

[comment]: <> (</button>)

[comment]: <> (</div>)

[comment]: <> (&#41;;)

[comment]: <> (};)

[comment]: <> (export default DropDownItem;)




[comment]: <> (CSS DROPDOWNITEM)

[comment]: <> (.language__btn {)

[comment]: <> (width: 48px;)

[comment]: <> (height: 48px;)

[comment]: <> (border: none;)

[comment]: <> (border-radius: 50%;)

[comment]: <> (background: var&#40;--silver&#41;;)

[comment]: <> (transition: filter 300ms;)

[comment]: <> (})

[comment]: <> (.language__btn:hover {)

[comment]: <> (filter: brightness&#40;0.9&#41;;)

[comment]: <> (})

[comment]: <> (.language__img {)

[comment]: <> (width: 18px;)

[comment]: <> (height: 18px;)

[comment]: <> (})