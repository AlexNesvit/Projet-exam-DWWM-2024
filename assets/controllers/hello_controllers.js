// assets/controllers/hello_controller.js

import { Controller } from 'stimulus';
import HelloController from './controllers/hello_controller';

export default class extends Controller {
    connect() {
        console.log('Hello, Stimulus!');
    }


    const application = Application.start();
    application.register('hello', HelloController);
}