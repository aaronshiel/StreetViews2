import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import DisplayListOfNames from '../bundles/HelloWorld/components/DisplayListOfNames';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  DisplayListOfNames
});
